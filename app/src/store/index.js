import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { alert } from './alert.module'
import { account } from './account.module'
import { users } from './users.module'
import { content } from './content.module'
import { field } from './field.module'
import { item } from './item.module'
Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    alert,
    account,
    users,
    content,
    field,
    item
  }
})
