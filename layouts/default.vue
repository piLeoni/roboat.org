<template>
  <div>
    <div id="app-container">
      <the-header id="page-header" />
      <div id="page-body" ref="pageBody">
        <div class="sidebar-placeholder" :class="{ collapsed: !sidebarOpen }">
          <transition name="sidebarSlide" mode="in-out">
            <the-sidebar v-if="sidebarOpen" class="sidebar" />
          </transition>
        </div>
        <nuxt id="main-area" />
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
    ...mapState(['isMobile', 'sidebarOpen'])
  },
  middleware: ['dataLoad'],

  watch: {
    isMobile() {
      console.log('is mobile:', this.isMobile)
    }
  },
  mounted() {
    this.$mobileCheck(this.$store)
    window.onresize = () => {
      setTimeout(() => {
        console.log('resize')
        this.$mobileCheck(this.$store)
      }, 1000)
    }
  }
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

#app-container {
  display: grid;
  grid-template-rows: 2rem auto;
  position: relative;
  /* flex-direction: row; */
  height: 100vh;
  width: 100vw;
  background: var(--main-bg-color);
  transition: all 1s;
}

#page-header {
  box-sizing: border-box;
  grid-row-start: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: block;
  position: relative;
  border-bottom: 2px solid var(--main-fg-color);
}
#page-body {
  display: flex;
  flex-direction: row;
  position: relative;
  grid-row-start: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sidebar-placeholder {
  position: relative;
  overflow: visible;
  top: 0;
  left: 0;
  margin: 0;
  width: 300px;
  height: 100%;
  transition: all 1s;
  flex: none;
  z-index: 2;
}
.sidebar {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  grid-row-start: 2;
  transition: all 1s;
}

.collapsed {
  width: 0px !important;
}
#main-area {
  flex-basis: shrink;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
}
@media only screen and (max-width: 600px) {
  #page-body {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .sidebar-placeholder {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #main-area {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: visible;
  }
}
</style>
