import Vue from 'vue'

const compoent = {
  template: `
  <div></div>
  `,
  data () {
    return {}
  }
}

new Vue({
  el: '#root',
  components: {
    Comp: compoent
  },
  template: `
  <comp></comp>
  `,
  mounted () {

  }
})
