import { itemService } from '../services'

const state = {
  item: {},
  request: {},
  current: {}
}

const actions = {
  getItems ({ commit }, payload) {
    commit('get_AllRequest')

    itemService.getItems(payload)
      .then(
        item => {
          commit('get_AllSuccess', item)
        },
        error => commit('get_AllFailure', error)
      )
  },
  getById ({commit}) {
    itemService.getById()
      .then(
        current => {
          commit('getByIdSuccess', current)
        },
        error => commit('get_AllFailure', error)
      )
  },
  createItem ({commit}, payload) {
    commit('createRequest')
    itemService.createItem(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  update ({commit}, payload) {
    itemService.update(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    itemService.delete(id)
      .then(
        item => commit('deleteSuccess', id),
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
  get_AllSuccess (state, item) {
    state.items = { item }
  },
  getByIdSuccess (state, data) {
    state.current = {data}
  },
  get_AllFailure (state, error) {
    state.request = { error }
  },
  deleteRequest (state, id) {
    // add 'deleting:true' property to item being deleted
    state.item.items = state.item.items.map(item =>
      item.id === id
        ? { ...item, deleting: true }
        : item
    )
  },
  deleteSuccess (state, id) {
    // remove deleted item from state
    state.items.item = state.items.item.filter(item => item.id !== id)
  },
  deleteFailure (state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to item
    state.items.item = state.items.map(item => {
      if (item.id === id) {
        // make copy of item without 'deleting:true' property
        const { deleting, ...itemCopy } = item
        // return copy of item with 'deleteError:[error]' property
        return { ...itemCopy, deleteError: error }
      }

      return item
    })
  }
}

export const item = {
  namespaced: true,
  state,
  actions,
  mutations
}
