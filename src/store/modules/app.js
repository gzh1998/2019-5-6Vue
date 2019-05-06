import axios from 'axios'
const state={
  DataList:''
}

const mutations={
  listData(state,payload){
    state.DataList = payload
  }
}
const actions={
getList({commit}){
  axios({
    method: 'get',
    url: 'https://www.easy-mock.com/mock/5be03217480cbf31134e7aac/wechat',
  }).then(res=>{
    console.log(res)
    commit('listData',res)
  })
}
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}