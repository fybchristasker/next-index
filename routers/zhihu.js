const router = require('koa-router')()
const Koa = require('koa')
const data = require('../api/zhihu.json')

const getData = require('../models/zhihu')

const app = new Koa()

app.use(async () => {
  await getData()
})
router.get('/zhihu', (ctx) => {
  ctx.body = JSON.stringify({ data })
})

module.exports = router
