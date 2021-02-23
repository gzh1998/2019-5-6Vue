import axios from 'axios'
import Vue from 'vue'

// 超时时间
axios.defaults.timeout = 20000;
// http请求拦截器
axios.interceptors.request.use(config => {
  const { method, data, params } = config;
  // let requestBody = method === "get" ? params : data;
  // if (requestBody && !requestBody['isNotshowLoad']) {
  //   Vue.loading();
  // }
  Vue.loading();
  return config
}, error => {
  // Vue.clearLoading();
  // Vue.toast({
  //   message: '加载超时'
  // })
  return Promise.reject(error)
})

//响应拦截器
export default axios.interceptors.request.use(data => {
  //成功响应
  setTimeout(() => {
    Vue.clearLoading();
  }, 1000);
  return data
}, error => {
  //响应失败
  consolse.log(error)
  Vue.clearLoading()
  this.$router.push(
    `/detail`
  );
  return Promise.reject(error)
})