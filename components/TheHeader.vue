<template>
  <div id="headerPanel">
    <button @click="toggleBar">
      docs
    </button>
    <a href="#dance">Scroll</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['contents', 'sidebarOpen'])
  },
  methods: {
    toggleBar() {
      console.log('toggle')
      this.$store.commit('toggleSidebar')
      // const timeline = new TimelineLite()
      // if (this.sidebarOpen) {
      //   timeline.to(this.$refs.sideBar, 0.5, { x: 0 })
      // } else {
      //   timeline.to(this.$refs.sideBar, 0.5, {
      //     x: `-${this.$refs.sideBar.offsetWidth}px`
      //   })
      // }
    }
  }
}
</script>
<style>
#headerPanel {
  /* background: var(--main-bg-color); */
  border-bottom: 2px solid var(--main-fg-color);
}
</style>
