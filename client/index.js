import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/style/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  /* if (to.fullPath === '/login') {
    // next('/login')// 判断是否登录
    next()
  } */
})

router.beforeResolve((to, from, next) => {
  console.log('before resoleve invoked')
  next()
})

router.afterEach((to, from, next) => {
  console.log('after each  invoked')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
