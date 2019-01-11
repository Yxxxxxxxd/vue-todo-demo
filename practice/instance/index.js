import Vue from 'vue'

const app = new Vue({
  // el: '#root', // template 渲染出来要挂载到el
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  },
  mounted () {

  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')
// let i = 0
setInterval(() => {
  // i++
  // app.text += 1
  // app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$delete
  // app.$forceUpdate() // 不建议重新渲染 会强制全部渲染
  // app.$options.data.text += 1    //直接修改 $options 没作用
  // app.$data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el) // 对应的HTML节点
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)// 快速的定位到某一个节点 某一个组件
// console.log(app.$isServer)// 是否服务端渲染

// 方法：
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
//
// setTimeout(() => {
//   unWatch()
// }, 2000)
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// app.$emit('test', 1, 2) // 必须一一对应 test

// app.$once('test', (a, b) => { // 只执行一次
//   console.log(`test emited ${a} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)
// app.$forceUpdate()
