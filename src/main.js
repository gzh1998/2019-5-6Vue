// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Checklist } from "mint-ui";
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/style/animate.css'
import '#/comm/min.css'
import loading from './components/loading/loading'
import './assets/style/js/pxtorem' //引入 px 转 rem
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(loading)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: ['scroll'],
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3169332376,286772686&fm=26&gp=0.jpg',
  loading: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458475739,295617657&fm=26&gp=0.jpg',
});
Vue.component(Checklist.name, Checklist);

import axiosConfig from './axios/config'
Vue.prototype.$axiosConfig = axiosConfig
/* eslint-disable no-new */
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})