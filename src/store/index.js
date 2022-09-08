import { createStore } from 'vuex'

export default createStore({
  state: {
    fireuser: null
  },
  getters: {
  },
  mutations: {
    setFireUser (state, fireUser) {
      state.fireuser = fireUser
    }
  },
  actions: {
  },
  modules: {
  }
})
