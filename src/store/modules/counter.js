const state = {
    count: 0,
    anotherCount: 0
  }
  
  const mutations = {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setCount(state, value) {
      state.count = value
    },
    setAnotherCount(state, value) {
      state.anotherCount = value
  }
}

  const actions = {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    reset({ commit }) {
      commit('reset')
    },
    setCountAction({ commit }, value) {
      commit('setCount', value)
    },
    setAnotherCountAction({ commit }, value) {
      commit('setAnotherCount', value)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  