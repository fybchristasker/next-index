const Koa = require('koa')
const shell = require('shelljs')
const schedule = require('node-schedule')

const app = new Koa()

const getWeibo = require('./models/weibo')
const getBilibili = require('./models/bilibili')

app.use(async () => {
  await getWeibo()
  await getBilibili()
})

schedule.scheduleJob('* 5 * * * *', function () {
  shell.exec('git add api')
  shell.exec(`git commit -m 'feat: auto update data.json'`)
  shell.exec(`git pull`)
  shell.exec(`git push`)
})

app.listen(9000, () => {
  console.info('app is running on http://localhost:9000', Date())
})
