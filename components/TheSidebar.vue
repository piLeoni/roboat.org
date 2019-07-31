<template>
  <div class="sideBarScoped">
    <!-- <div v-for="(value, name) in contents" :key="name">
      <nuxt-link :to="`/${name}`">
        {{ name }}
        {{ value }}
      </nuxt-link> -->
    <tree-menu
      v-if="contents"
      :label="contents.label"
      :nodes="contents.nodes"
      :depth="0"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TreeMenu from '@/components/TreeMenu.vue'

export default {
  components: {
    TreeMenu
  },
  computed: {
    ...mapState(['contents'])
  }
}
</script>

<style scoped>
.sideBarScoped {
  /* background: lightgray; */
  /* padding: 2em; */
}
</style>
