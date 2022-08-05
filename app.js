const fs = require('fs-extra')
const util = require('util')
const cheerio = require('cheerio')
const nodeSchedule = require('node-schedule')
const _ = require('lodash')
const axios = require('axios')

const Koa = require('koa')

const app = new Koa()

const TRENDING_URL = 'https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot'
const TRENDING_DETAIL_URL = 'https://m.s.weibo.com/topic/detail?q=%s'

let RETRY_TIME = 5

async function saveRawJson(data) {
  const fullPath = `./api/data.json`
  const words = data.map((o) => ({
    title: o.desc,
    category: o.category,
    description: o.description,
    url: o.scheme,
    hot: o.desc_extr,
    ads: !!o.promotion,
  }))
  let wordsAlreadyDownload = []
  try {
    await fs.stat(fullPath)
    const content = await fs.readFile(fullPath)
    wordsAlreadyDownload = JSON.parse(content)
  } catch (err) {
    // file not exsit
  }
  const allHots = _.uniqBy(_.concat(words, wordsAlreadyDownload), 'title')
  await fs.writeFile(fullPath, JSON.stringify(allHots))
}

async function fetchTrendingDetail(title) {
  try {
    const { data } = await axios.get(util.format(TRENDING_DETAIL_URL, title), {
      timeout: 10 * 1000,
    })
    const $ = cheerio.load(data)
    return {
      category: $('#pl_topicband dl>dd').first().text(),
      desc: $('#pl_topicband dl:eq(1)').find('dd:not(.host-row)').last().text(),
    }
  } catch {
    return {}
  }
}

async function bootstrap() {
  while (RETRY_TIME > 0) {
    try {
      const { data } = await axios.get(TRENDING_URL, { timeout: 10 * 1000 })
      if (data.ok === 1) {
        const items = data.data.cards[0]?.card_group
        if (items) {
          for (const item of items) {
            const { category, desc } = await fetchTrendingDetail(encodeURIComponent(item.desc))
            item.category = category || item.category
            item.description = desc || item.description
          }
          await saveRawJson(items)
        }
      }
      RETRY_TIME = 0
    } catch (err) {
      console.info(err.message)
      RETRY_TIME -= 1
    }
  }
  process.exit(0)
}

nodeSchedule.scheduleJob('* 10 * * * *', async function () {
  try {
    await bootstrap()
    // await fs.writeFileSync(`${__dirname}/hotSearch.json`, JSON.stringify(hotList), 'utf-8')
  } catch (error) {
    console.error(error)
  }
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000')
})
