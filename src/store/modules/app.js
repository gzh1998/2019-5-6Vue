import axios from 'axios'
import { getIndex } from '../../axios/api'
const state = {
  DataList: ''
}

const mutations = {
  listData(state, payload) {
    state.DataList = payload
  }
}
const actions = {
  getList({ commit }) {
    getIndex().then(res => {
      console.log(res)
      // commit(res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}