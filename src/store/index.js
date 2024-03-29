import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
