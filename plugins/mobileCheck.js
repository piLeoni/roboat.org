import Vue from 'vue'

const MyPlugin = {}

MyPlugin.install = function(Vue, options) {
  Vue.prototype.$mobileCheck = function(store) {
    console.log('inner width')
    if (window.innerWidth <= 600) {
      store.commit('setMobile', true)
    } else {
      store.commit('setMobile', false)
    }
  }
}

Vue.use(MyPlugin)
