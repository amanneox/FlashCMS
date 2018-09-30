import { componentService } from '../services'

const state = {
  component: {},
  request: {}
}

const actions = {
  getAll ({ commit }) {
    commit('getAllRequest')

    componentService.getAll()
      .then(
        components => commit('getAllSuccess', components),
        error => commit('getAllFailure', error)
      )
  },
  create ({commit}, payload) {
    commit('createRequest')
    componentService.create(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    componentService.delete(id)
      .then(
        component => commit('deleteSuccess', id),
        error => commit('deleteSuccess', { id, error: error.toString() })
      )
  }
}

const mutations = {
  createRequest (state) {
    state.request = { loading: true }
  },
  createSuccess (state, msg) {
    state.request = { request: msg }
  },
  createFailure (state, error) {
    state.request = { error }
  },
  getAllRequest (state) {
    state.component = { loading: true }
  },
  getAllSuccess (state, components) {
    state.component = { items: components }
  },
  getAllFailure (state, error) {
    state.component = { error }
  },
  deleteRequest (state, id) {
    // add 'deleting:true' property to component being deleted
    state.component.items = state.component.items.map(component =>
      component.id === id
        ? { ...component, deleting: true }
        : component
    )
  },
  deleteSuccess (state, id) {
    // remove deleted component from state
    state.component.items = state.component.items.filter(component => component.id !== id)
  },
  deleteFailure (state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to component
    state.component.items = state.items.map(component => {
      if (component.id === id) {
        // make copy of component without 'deleting:true' property
        const { deleting, ...componentCopy } = component
        // return copy of component with 'deleteError:[error]' property
        return { ...componentCopy, deleteError: error }
      }

      return component
    })
  }
}

export const components = {
  namespaced: true,
  state,
  actions,
  mutations
}
