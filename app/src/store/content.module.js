import { contentService } from '../services'

const state = {
  items: {},
  request: {},
  current: {}
}

const actions = {
  get_All ({ commit }) {
    commit('get_AllRequest')

    contentService.get_All()
      .then(
        content => {
          commit('get_AllSuccess', content)
          console.log(content, '######')
        },
        error => commit('get_AllFailure', error)
      )
  },
  getById ({commit}) {
    contentService.getById()
      .then(
        current => {
          commit('getByIdSuccess', current)
          console.log(current)
        },
        error => commit('get_AllFailure', error)
      )
  },
  create ({commit}, payload) {
    commit('createRequest')
    contentService.create(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  createField ({commit}, payload) {
    commit('createRequest')
    contentService.createField(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  update ({commit}, payload) {
    contentService.update(payload)
      .then(
        commit('createSuccess', 'success'),
        error => commit('createFailure', error)
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    contentService.delete(id)
      .then(
        content => commit('deleteSuccess', id),
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
  get_AllSuccess (state, content) {
    state.items = { content }
  },
  getByIdSuccess (state, data) {
    state.current = {data}
  },
  get_AllFailure (state, error) {
    state.request = { error }
  },
  deleteRequest (state, id) {
    // add 'deleting:true' property to content being deleted
    state.content.items = state.content.items.map(content =>
      content.id === id
        ? { ...content, deleting: true }
        : content
    )
  },
  deleteSuccess (state, id) {
    // remove deleted content from state
    state.content.items = state.content.items.filter(content => content.id !== id)
  },
  deleteFailure (state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to content
    state.content.items = state.items.map(content => {
      if (content.id === id) {
        // make copy of content without 'deleting:true' property
        const { deleting, ...contentCopy } = content
        // return copy of content with 'deleteError:[error]' property
        return { ...contentCopy, deleteError: error }
      }

      return content
    })
  }
}

export const content = {
  namespaced: true,
  state,
  actions,
  mutations
}
