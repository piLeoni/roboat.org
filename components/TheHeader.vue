<template>
  <div>
    <div id="header-panel">
      <div class="header-button" @click="toggleBar">
        index
      </div>
      <!-- <div cl ass="header-text"> -->
      <p class="header-text">
        danceFlood is a part of the &nbsp;
        <a href="http://roboat.org" target="blank">roboat project</a>
        <b>&nbsp;|&nbsp;</b>
        MIT&nbsp;<a href="http://senseable.mit.edu" target="blank">
          senseable city lab
        </a>
        &nbsp;2019
      </p>
      <!-- </div> -->
    </div>
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
    }
  }
}
</script>
<style scoped>
#header-panel {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.header-button {
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  background: var(--main-fg-color);
  color: white;
  font-family: var(--main-title-font), sans-serif;
  transition: all 0.2s;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85em;
  width: 10vh;
}
.header-button:hover {
  /* background: var(--main-fg-color-light); */
  width: 12vh;
}
.header-text {
  /* background: lightcoral; */
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding-right: 2em;
  font-size: 0.85em;
  font-weight: 400;
  text-transform: uppercase;

  /* align-self: flex-end; */
}
/* .header-text p {
  font-weight: 400;
  font-size: 0.85em;
} */
/* .header-text {
  background-color: var(--main-fg-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
} */
</style>
