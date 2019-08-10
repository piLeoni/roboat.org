<template>
  <div class="theSideBar">
    <!-- <button id="toggleButton" @click="toggleBar">
      toggle
    </button> -->
    <div ref="sideBar" class="sidebarPanel">
      <!-- <div v-for="(value, name) in contents" :key="name">
      <nuxt-link :to="`/${name}`">
        {{ name }}
        {{ value }}
      </nuxt-link> -->
      <tree-menu
        v-if="contents"
        :label="contents.label"
        :link="contents.link"
        :nodes="contents.nodes"
        :depth="0"
        class="tree-menu-element"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { TimelineLite } from 'gsap'
import TreeMenu from '@/components/TreeMenu.vue'

export default {
  components: {
    TreeMenu
  },
  computed: {
    ...mapState(['contents', 'sidebarOpen', 'currentSection'])
  },
  watch: {
    sidebarOpen() {}
  },
  methods: {
    toggleBar() {
      console.log('toggle')
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
.theSideBar {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  /* padding: 2em; */
}
.sidebarPanel {
  background: var(--main-bg-color);
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 2px solid var(--main-fg-color);
}
#toggleButton {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
}
@media only screen and (max-width: 600px) {
  .sidebarPanel {
    border: none;
  }
}
</style>
