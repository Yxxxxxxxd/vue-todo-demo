import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
<div>
  <!--<div v-show="active" v-text="text"></div>-->
  <div v-if="active" v-text="text"></div>
  <div v-else>else content</div>
  <div v-html="html"></div>
  <input type="checkbox" v-model="active">
  <ul>
  <li v-for="item in arr" :key="item">{{item}}</li>
</ul>
<ul>
  <li v-for="(val, key) in obj" :key="key">{{val}} : {{key}}</li>
</ul>
</div>

  `,
  data: {
    text: 0,
    active: true,
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    html: '<span>this is span</span>'
  }
})
