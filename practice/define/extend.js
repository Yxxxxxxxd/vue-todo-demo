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
  mounted () {
    console.log('one mounted')
  },
  methods: {
    handldCahnge () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'Parent'
})

const component2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
  }
}

// const CompVue = Vue.extend(compoent)

/* new CompVue({
  el: '#root',
  propsData: {
    propOne: 'xxx'
  },
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    console.log('two mounted')
  }
}) */

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  template: `
  <comp></comp>
  `,
  mounted () {
    console.log(this.$parent.$options.name)
  }
})
