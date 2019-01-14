import Vue from 'vue'

const compoent = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
  <div>
  <input type="text" @input="handleInput" :value="value1">
</div>
  `,
  data () {
    return {}
  },
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    Comp: compoent
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
  <div>
    <comp :value="value" v-model="value"></comp>
</div>
  `,
  mounted () {

  }
})
