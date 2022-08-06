const Koa = require('koa')

const app = new Koa()

const getWeibo = require('./models/weibo')
const getBilibili = require('./models/bilibili')

app.use(async () => {
  await getWeibo()
  await getBilibili()
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000', new Date())
})
