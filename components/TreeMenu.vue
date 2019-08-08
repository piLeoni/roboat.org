<template>
  <div>
    <div
      class="tree-menu"
      :class="{ 'tree-menu-active': label === currentSection }"
    >
      <div>
        <a :href="`${link}`">
          <div :style="indent" @click="setSelection(label)">
            {{ label }}
          </div>
        </a>
        <!-- <nuxt-link :to="`/${link}`" :style="indent">
          <div :style="indent">
            {{ label }}
          </div>
        </nuxt-link> -->
      </div>
    </div>
    <tree-menu
      v-for="node in nodes"
      :key="node.label"
      :nodes="node.nodes"
      :label="node.label"
      :link="node.link"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TreeMenu',
  props: ['label', 'nodes', 'depth', 'link'],
  computed: {
    ...mapState(['currentSection']),
    indent() {
      return { transform: `translate(${this.depth * 10}px)` }
    }
  },
  methods: {
    setSelection(data) {
      // console.log('class', data)
      // this.$store.commit('setCurrentSection', data)
    }
  }
}
</script>

<style>
.tree-menu {
  border-bottom: 0.5px solid var(--main-fg-color);
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  color: var(--main-fg-color);
  font-family: roboto, sans-serif;
  /* margin: 2px; */
  transition: background 0.2s;
}
.tree-menu:hover:not(.tree-menu-active) {
  background: var(--main-fg-color-light);
  /* color: var(--main-bg-color); */
  /* transition: background 0.5s; */
  /* border-bottom: 0.5px solid var(--main-fg-color); */
}
.tree-menu-active {
  background: var(--main-fg-color);
  color: var(--main-bg-color);
}
</style>
