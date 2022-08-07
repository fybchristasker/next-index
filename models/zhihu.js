const fs = require('fs-extra')
const _ = require('lodash')
const axios = require('axios')

const TRENDING_URL = 'https://api.zhihu.com/topstory/hot-list'

let RETRY_TIME = 5

async function saveRawJson(data) {
  const fullPath = './api/zhihu.json'
  const words = data.map((o) => ({
    title: o.target.title,
    url: `https://zhihu.com/question/${o.target.id}`,
    hot: o.detail_text,
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
