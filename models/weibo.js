const fs = require('fs-extra')
const util = require('util')
const cheerio = require('cheerio')
const _ = require('lodash')
const schedule = require('node-schedule')
const axios = require('axios')

const TRENDING_URL = 'https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot'
const TRENDING_DETAIL_URL = 'https://m.s.weibo.com/topic/detail?q=%s'

let RETRY_TIME = 5

async function saveRawJson(data) {
  const fullPath = `./api/weibo.json`

  const words = data.map((o) => ({
    title: o.desc,
    url: o.scheme,
    hot: o.desc_extr,
    icon: o.icon,
  }))
  let wordsAlreadyDownload = []
  try {
    await fs.writeFile(fullPath, JSON.stringify([]))
    await fs.stat(fullPath)
    const content = await fs.readFile(fullPath)
    wordsAlreadyDownload = JSON.parse(content)
  } catch (err) {
    console.info(err)
  }
  const allHots = _.uniqBy(_.concat(words, wordsAlreadyDownload), 'title')
  await fs.writeFile(fullPath, JSON.stringify(allHots))
}

async function fetchTrendingDetail(title) {
  try {
    const { data } = await axios.get(util.format(TRENDING_DETAIL_URL, title))
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
      // eslint-disable-next-line
      const { data } = await axios.get(TRENDING_URL)
      if (data.ok === 1) {
        const items = data.data.cards[0]?.card_group
        if (items) {
          // eslint-disable-next-line
          for (const item of items) {
            // eslint-disable-next-line
            const { category, desc } = await fetchTrendingDetail(encodeURIComponent(item.desc))
            item.category = category || item.category
            item.description = desc || item.description
          }
          // eslint-disable-next-line
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

module.exports = schedule.scheduleJob('* 5 * * * *', function () {
  bootstrap()
})
