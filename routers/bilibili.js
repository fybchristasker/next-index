const Router = require('koa-router')

const newRouter = Router({
  prefix: '/api/v1',
})

const Koa = require('koa')
const data = require('../api/bilibili.json')

const app = new Koa()

const getData = require('../models/bilibili')

app.use(async () => {
  await getData()
})

newRouter.get('/bilibili', (ctx) => {
  if (data) {
    ctx.body = JSON.stringify({ data })
  } else {
    ctx.body = JSON.stringify({ data: [] })
  }
})

module.exports = newRouter
