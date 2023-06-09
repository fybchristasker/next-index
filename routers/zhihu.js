const Router = require('koa-router')
const Koa = require('koa')

const newRouter = Router({
  prefix: '/api/v1',
})

const data = require('../api/zhihu.json')

const getData = require('../models/zhihu')

const app = new Koa()

app.use(async () => {
  await getData()
})

newRouter.get('/zhihu', (ctx) => {
  if (data) {
    ctx.body = JSON.stringify({ data })
  } else {
    ctx.body = JSON.stringify({ data: [] })
  }
})

module.exports = newRouter
