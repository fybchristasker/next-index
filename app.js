const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')

const router = new Router()

const weibo = require('./api/weibo.json')
const zhihu = require('./api/zhihu.json')
const baidu = require('./api/baidu.json')
const bilibili = require('./api/bilibili.json')
const toutiao = require('./api/toutiao.json')

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
router.get('/baidu', async (ctx) => {
  ctx.body = baidu
})
router.get('/bilibili', async (ctx) => {
  ctx.body = bilibili
})
router.get('/zhihu', async (ctx) => {
  ctx.body = zhihu
})
router.get('/toutiao', async (ctx) => {
  ctx.body = toutiao
})

app.use(router.routes()).use(router.allowedMethods())

const getWeibo = require('./models/weibo')
const getBilibili = require('./models/bilibili')
const getZhihu = require('./models/zhihu')
const getBaidu = require('./models/baidu')
const getToutiao = require('./models/toutiao')

setInterval(() => {
  app.use(async () => {
    await getToutiao()
    await getWeibo()
    await getBilibili()
    await getZhihu()
    await getBaidu()
  }, 60000)
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000', Date())
})
