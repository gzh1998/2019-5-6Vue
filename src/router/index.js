import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Detail from '../views/detail'
import List from '../views/list'


Vue.use(Router)

export default new Router({
  routes:[{
    path:'/',
    name:'index',
    component:Index,
    children:[{
    path:'/index/list',
    name:'list',
    component:List
    }]
  },{
    path:'/detail',
    name:'detail',
    component:Detail,
  }, {
    path: "*",
    redirect: "/index"
}]
})