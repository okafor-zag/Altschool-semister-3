import { createStore } from 'vuex'


export default createStore({
  state: {
    count: 0,
    anotherCount: 0
  },
  mutations: {
    setCount(state, value) {
      state.count = value
    },
    setAnotherCount(state, value) {
      state.anotherCount = value
    }
  },
  actions: {
    setCountAction({ commit }, value) {
      commit('setCount', value)
    },
    setAnotherCountAction({ commit }, value) {
      commit('setAnotherCount', value)
    }
  }
})