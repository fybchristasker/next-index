const fs = require('fs-extra')
const _ = require('lodash')
const axios = require('axios')

const TRENDING_URL = 'https://api.bilibili.com/x/web-interface/search/square?limit=50'

let RETRY_TIME = 5

async function saveRawJson(data) {
  const fullPath = './api/bilibili.json'
  const words = data.map((o) => ({
    title: o.show_name,
    url: `https://search.bilibili.com/all?keyword=${o.show_name}`,
    icon: o.icon,
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
      const items = data.data.trending?.list
      if (data.code === 0) {
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
