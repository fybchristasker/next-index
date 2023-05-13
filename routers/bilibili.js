const router = require('koa-router')()
const Koa = require('koa')
const data = require('../api/bilibili.json')

const app = new Koa()

const getData = require('../models/bilibili')

app.use(async () => {
  await getData()
})

router.get('/bilibili', (ctx) => {
  ctx.body = JSON.stringify({ data })
})

module.exports = router
