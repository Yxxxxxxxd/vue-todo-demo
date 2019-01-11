import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `
  <div>
  <p>Name: {{name}}</p>
  <p>Name: {{getName()}}</p>
  <p>Number: {{number}}</p>
  <p>fullName: {{fullName}}</p>
  <p><input type="text" v-model="number"></p>
  <p>FirstName: <input type="text" v-model="firstName"></p>
  <p>LastName: <input type="text" v-model="lastName"></p>
  <p>Name: <input type="text" v-model="name"></p>
  <p>Obj.a: <input type="text" v-model="obj.a"></p>
</div>`,
  data: {
    firstName: 'yxd',
    lastName: 'wh',
    fullName: '',
    number: 0,
    obj: {
      a: '123'
    }
  },
  computed: { // 应用性能带来很大影响  缓存
    // name () {
    //   console.log('new name')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  mounted () {
    // this.obj.a = '345'
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    obj: {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getName () {
      console.log('get name')
      return `${this.firstName} ${this.lastName}`
    }
  }
})

app.$mount('#root')
