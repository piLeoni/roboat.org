<template>
  <div class="app-container">
    <div class="sideBar">
      <the-sidebar />
    </div>
    <div class="mainArea">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  components: { TheSidebar }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.app-container {
  display: grid;
  grid-template-columns: 20% 80%;
  /* grid-template-rows: 50% 50%; */
  height: 100vh;
  width: 100vw;
  border: 5px solid red;
}

.sideBar {
  grid-column-start: 1;
  margin: 0;
  /* display: block; */
  /* position: absolute; */
  /* width: 20rem; */
  /* height: 100%; */
  border: 4px solid blue;
  overflow: hidden;

  /* background: green; */
}
.mainArea {
  grid-column-start: 2;
  /* grid-column-end: 3; */

  border: 4px solid green;
  /* width: 80%; */
}
</style>
