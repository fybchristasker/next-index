const Koa = require('koa')

const app = new Koa()

const getWeibo = require('./models/weibo')
const getBilibili = require('./models/bilibili')
const getZhihu = require('./models/zhihu')
const getBaidu = require('./models/baidu')

app.use(async () => {
  try {
    await getWeibo()
    await getBilibili()
    await getZhihu()
    await getBaidu()
  } catch (err) {
    console.info(err)
  }
  process.exit(0)
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000', Date())
})
