import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/style/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

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
  store,
  render: (h) => h(App)
}).$mount('#root')
