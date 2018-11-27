import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import store from './store'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
import Split from './components/Split/Split.vue'
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload,{
  loading,
})


Vue.component('TopHeader',TopHeader)
Vue.component('Split',Split)
Vue.component(Button.name,Button)


import './mock/mockServer'
import './filters'

Vue.store=store

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
