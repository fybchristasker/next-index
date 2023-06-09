const Router = require('koa-router')

const newRouter = Router({
  prefix: '/api/v1',
})

const Koa = require('koa')
const data = require('../api/weibo.json')

const app = new Koa()

const getData = require('../models/weibo')

app.use(async () => {
  await getData()
})

newRouter.get('/weibo', (ctx) => {
  if (data) {
    ctx.body = JSON.stringify({ data })
  } else {
    ctx.body = JSON.stringify({ data: [] })
  }
})

module.exports = newRouter
