const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')

const router = new Router()

const weibo = require('./api/weibo.json')

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})

router.get('/weibo', async (ctx) => {
  ctx.body = weibo
})

app.use(router.routes()).use(router.allowedMethods())

const getWeibo = require('./models/weibo')
const getBilibili = require('./models/bilibili')
const getZhihu = require('./models/zhihu')
const getBaidu = require('./models/baidu')
const getToutiao = require('./models/toutiao')

app.use(async () => {
  await getToutiao()
  await getWeibo()
  await getBilibili()
  await getZhihu()
  await getBaidu()
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000', Date())
})
