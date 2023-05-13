const router = require('koa-router')()

const newRouter = router({
  prefix: '/api/v1',
})
const Koa = require('koa')
const data = require('../api/baidu.json')

const app = new Koa()

const getBaidu = require('../models/baidu')

app.use(async () => {
  await getBaidu()
})

newRouter.get('/baidu', (ctx) => {
  if (data) {
    ctx.body = JSON.stringify({ data })
  } else {
    ctx.body = JSON.stringify({ data: [] })
  }
})

module.exports = router
