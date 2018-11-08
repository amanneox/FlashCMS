import { fieldService } from '../services'

const state = {
  field: {},
  request: {},
  current: {}
}

const actions = {
  get_All ({ commit }) {
    commit('get_AllRequest')

    fieldService.get_All()
      .then(
        content => {
          commit('get_AllSuccess', content)
        },
        error => commit('get_AllFailure', error)
      )
  },
  getFields ({ commit }, payload) {
    commit('get_AllRequest')

    fieldService.getFields(payload)
      .then(
        field => {
          commit('get_AllSuccess', field)
        },
        error => commit('get_AllFailure', error)
      )
  },
  getById ({commit}) {
    fieldService.getById()
      .then(
        current => {
          commit('getByIdSuccess', current)
        },
        error => commit('get_AllFailure', error)
      )
  },
  createField ({commit}, payload) {
    commit('createRequest')
    fieldService.createField(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  update ({commit}, payload) {
    fieldService.update(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    fieldService.delete(id)
      .then(
        field => commit('deleteSuccess', id),
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
  get_AllRequest (state) {
    state.request = { loading: true }
  },
  get_AllSuccess (state, field) {
    state.field = { ...field }
  },
  getByIdSuccess (state, data) {
    state.current = {data}
  },
  get_AllFailure (state, error) {
    state.request = { error }
  },
  deleteRequest (state, id) {
    // add 'deleting:true' property to field being deleted
    state.field.items = state.field.items.map(field =>
      field.id === id
        ? { ...field, deleting: true }
        : field
    )
  },
  deleteSuccess (state, id) {
    // remove deleted field from state
    state.field.items = state.field.items.filter(field => field.id !== id)
  },
  deleteFailure (state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to field
    state.field.items = state.items.map(field => {
      if (field.id === id) {
        // make copy of field without 'deleting:true' property
        const { deleting, ...fieldCopy } = field
        // return copy of field with 'deleteError:[error]' property
        return { ...fieldCopy, deleteError: error }
      }

      return field
    })
  }
}

export const field = {
  namespaced: true,
  state,
  actions,
  mutations
}
