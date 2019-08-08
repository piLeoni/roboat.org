export const state = () => ({
  sidebarOpen: true,
  contents: null,
  isMobile: false,
  currentSection: ''
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen
  },
  loadContents(state, payload) {
    state.contents = payload
  },
  setMobile(state, payload) {
    state.isMobile = payload
  },
  setCurrentSection(state, payload) {
    console.log('received', payload)
    state.currentSection = payload
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
