const fs = require('fs-extra')
const _ = require('lodash')
const axios = require('axios')

const TRENDING_URL = 'https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot'

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

async function bootstrap() {
  while (RETRY_TIME > 0) {
    try {
      // eslint-disable-next-line
      const { data } = await axios.get(TRENDING_URL)
      if (data.ok === 1) {
        const items = data.data.cards[0]?.card_group
        if (items) {
          // eslint-disable-next-line
          await saveRawJson(items)
        }
      }
      RETRY_TIME = 0
    } catch (err) {
      RETRY_TIME -= 1
    }
  }
}

module.exports = bootstrap()
