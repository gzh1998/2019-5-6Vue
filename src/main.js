// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Checklist } from "mint-ui";
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/style/animate.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.component(Checklist.name, Checklist);
/* eslint-disable no-new */
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})