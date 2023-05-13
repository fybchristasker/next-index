const router = require('koa-router')()
const Koa = require('koa')
const data = require('../api/toutiao.json')

const app = new Koa()

const getData = require('../models/toutiao')

app.use(async () => {
  await getData()
})

router.get('/toutiao', (ctx) => {
  ctx.body = JSON.stringify({ data })
})

module.exports = router
