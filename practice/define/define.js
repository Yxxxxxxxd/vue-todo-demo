import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
  <div>
   <input type="text" v-model.number="text">
   <span @click="handldCahnge">{{propOne}}</span>
   <span v-show="active">see me if active</span>
</div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handldCahnge () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handldCahnge () {
      this.prop1 += 1
    }
  },
  el: '#root',

  template: `
  <div>
  <comp-one :active="true" prop-one="prop1" @change="handldCahnge"></comp-one>
  <comp-one :active="false"></comp-one>
</div>
  `
})
