export const state = () => ({
  counter: 0,
  sidebarOpen: false,
  contents: null
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen
  },
  loadContents(state, payload) {
    state.contents = payload
  }
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('toggleSidebar')
  },
  loadContents({ commit }, payload) {
    commit('loadContents', payload)
  }
}
