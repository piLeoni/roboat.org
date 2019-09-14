import Vue from 'vue'

const MyPlugin = {}

MyPlugin.install = function(Vue, options) {
  Vue.prototype.$mobileCheck = function(store) {
    console.log(
      'inner width',
      document.getElementById('app-container').offsetWidth
    )
    if (window.innerWidth <= 600) {
      store.commit('setMobile', true)
      console.log('is mobile')
    } else {
      store.commit('setMobile', false)
      console.log('is not mobile')
    }
  }
}

Vue.use(MyPlugin)
