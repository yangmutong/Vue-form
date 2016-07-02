import Vue from 'vue'
import App from './App'

import VueValidation from 'vue-validator'
import VueResource from 'vue-resource'

//注册插件
Vue.use(VueResource)
Vue.use(VueValidation)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  created () {
    console.log(this.$data);
  },
  components: { App }
})
