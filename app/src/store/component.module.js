const state = {
  features: {

  },
  name: null
}

const actions = {
  create ({commit}, name) {
    commit('create', name)
  },
  update ({commit}, features) {
    commit('update', features)
  }

}

const mutations = {
  create (state, name) {
    state.name = name
  },
  update (state, features) {
    state.features = features
  }
}
export const alert = {
  namespaced: true,
  state,
  actions,
  mutations
}
