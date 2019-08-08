import Vue from 'vue'

const MyPlugin = {}

MyPlugin.install = function(Vue, options) {
  // 1. add global method or property
  Vue.myGlobalMethod = function() {
    // some logic ...
    return console.log('myplug')
  }

  // 2. add a global asset
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // some logic ...
    }
    //   ...
  })

  // 3. inject some component options
  Vue.mixin({
    created: function() {
      // some logic ...
      //   console.log('creeeeeeeeeeeeeeeeeeeeeeeeeateeeeeeeeeeeeeeeeeed')
    },
    methods: {
      myTest() {
        console.log('this is a test')
      }
    }
    //   ...
  })

  // 4. add an instance method
  Vue.prototype.$myGlobalMethod = function(methodOptions) {
    // some logic ...
    console.log('>', methodOptions)
  }
}

Vue.use(MyPlugin)
