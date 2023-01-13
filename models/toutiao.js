const fs = require('fs-extra')
const _ = require('lodash')
const axios = require('axios')

const TRENDING_URL = 'https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc'

let RETRY_TIME = 5

async function saveRawJson(data) {
  const fullPath = './api/toutiao.json'
  const words = data.map((o) => ({
    title: o.Title,
    url: o.Url,
    hot: o.HotValue,
    icon: o.LabelUri.url,
    cover: o.Image.url,
  }))
  let wordsAlreadyDownload = []
  try {
    fs.writeFile(fullPath, JSON.stringify([]))
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
      const { data } = await axios.get(TRENDING_URL, { timeout: 10 * 1000 })
      const items = data.data
      if (data) {
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
