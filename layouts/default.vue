<template>
  <div>
    <div class="app-container">
      <the-header id="page-header" />
      <div id="page-body" ref="pageBody">
        <div class="sidebar-placeholder" :class="{ collapsed: !sidebarOpen }">
          <transition name="sidebarSlide" mode="in-out">
            <the-sidebar v-if="sidebarOpen" class="sidebar" />
          </transition>
        </div>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  components: { TheSidebar, TheHeader },
  computed: {
    ...mapState(['sidebarOpen'])
  },
  mounted() {}
}
</script>

<style scoped>
.sidebarSlide-enter-active,
.sidebarSlide-leave-active {
  transition: all 0.5s;
}
.sidebarSlide-enter, .sidebarSlide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-200px);
}
.flip-list-move {
  transition: transform 1s;
}

.app-container {
  display: grid;
  grid-template-rows: 5% 95%;
  position: relative;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: var(--main-bg-color);
  transition: all 1s;
}

#page-header {
  height: 3vh;
  grid-row-start: 1;
  height: 100%;
  border-bottom: 2px solid var(--main-fg-color);
  /* background: green; */
}
#page-body {
  display: flex;
  position: relative;
  grid-row-start: 2;
  width: 100%;
  height: 100%;
}
.sidebar {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  grid-row-start: 2;
  transition: all 1s;
}
.sidebar-placeholder {
  position: relative;
  /* box-sizing: border-box; */
  overflow: visible;
  top: 0;
  left: 0;
  margin: 0;
  width: 20%;
  height: 100%;
  /* background: blue; */
  transition: all 1s;
  /* border-right: 2px solid var(--main-fg-color); */
}
.collapsed {
  width: 0px !important;
}
#mainArea {
  align-items: initial;
  overflow: scroll;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  margin: 0;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .page-body {
    display: block;
  }
  .sidebar-placeholder {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mainArea {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: visible;
  }
}
</style>
