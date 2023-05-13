const router = require('koa-router')()
const Koa = require('koa')
const data = require('../api/weibo.json')

const app = new Koa()

const getData = require('../models/weibo')

app.use(async () => {
  await getData()
})

router.get('/weibo', (ctx) => {
  ctx.body = JSON.stringify({ data })
})

module.exports = router
