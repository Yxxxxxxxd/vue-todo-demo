<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!--<p>{{fullName}} {{counter}}</p>-->
    <!--<router-link to="/app">app</router-link>-->
    <!--<router-link to="/login">login</router-link>-->
    <!--<todo></todo>-->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!--<button @click="notify">click me</button>-->
    <!--<notification content="test notify" />-->
    <Footer></Footer>
  </div>
</template>
<script>
  import {
    mapState
//    mapGetters,
//    mapActions,
//    mapMutations
  } from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Loading from './components/loading/loading.vue'
//import Todo from './views/todo/todo.vue'
export default {
  metaInfo: {
    title: 'Yxd Todo App'
  },
  components: {
    Header,
    Footer,
    Loading,
//    Todo,
  },
  mounted(){

//    console.log(this.$store)
////    let i=1
//    this.updateCountAsync( {
//      num: 5,
//      time: 2000
//    })
//    this['a/updateText']('123')
//    setInterval(()=>{
//      this.updateCount('updateCount', i++)
//    },1000)
  },
  methods: {
//    ...mapActions(['updateCountAsync']),
//    ...mapMutations(['updateCount']),
    notify(){
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['loading'])
//    ...mapState(['count']),
//    ...mapState({
////      counter: 'count'
//      counter: (state) => state.count,
//    }),
//    count (){
//      return this.$store.state.count
//    },
//    ...mapGetters({
//      'fullName': 'fullName',
//      'textPlus': 'textPlus'
//    }),
//    fullName(){
//      return this.$store.getters.fullName
//    }
  }
}
</script>
<style lang="stylus" scoped>
  #app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }
  #cover{
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  }
  #loading{
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255,255,255,.3)
    z-index 99
    display flex
    align-items center
    justify-content center
  }
</style>


