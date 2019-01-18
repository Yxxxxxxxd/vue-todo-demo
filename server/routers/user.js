const Router = require('koa-router')
const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'Yxd' && user.password === '111111') {
    ctx.session.user = {
      userName: 'Yxd'
    }
    ctx.body = {
      success: true,
      data: {
        userName: 'Yxd'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
