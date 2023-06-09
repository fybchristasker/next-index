const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')

const router = new Router()

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

app.use(router.routes()).use(router.allowedMethods())

app.use(require('./routers/baidu').routes())
app.use(require('./routers/toutiao').routes())
app.use(require('./routers/bilibili').routes())
app.use(require('./routers/zhihu').routes())
app.use(require('./routers/weibo').routes())

app.listen(80, () => {
  console.info('app is running on http://localhost:80', Date())
})
