const Router = require('koa-router')

const AuthRouter = new Router({prefix: 'a'})

AuthRouter.get('/test', (ctx) => {
  ctx.body = 'test success'
})

module.exports = AuthRouter
