const userModel = require('../lib/mysql.js')

exports.getBaiduTops = async (ctx) => {
  await userModel
    .getBaiduTops()
    .then((result) => {
      ctx.body = result
    })
    .catch(() => {
      ctx.body = 'error'
    })
}
