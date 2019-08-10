<template>
  <div>
    <div
      v-if="label"
      class="tree-menu"
      :class="{ 'tree-menu-active': label === currentSection }"
    >
      <div>
        <a :href="`${link}`">
          <div :style="indent" @click="setSelection(label)">
            {{ label }}
          </div>
        </a>
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
    ...mapState(['isMobile', 'currentSection']),
    indent() {
      return { transform: `translate(${this.depth * 10}px)` }
    }
  },
  methods: {
    setSelection(data) {
      if (this.isMobile) {
        this.$store.commit('toggleSidebar')
      }
      // console.log('class', data)
      // this.$store.commit('setCurrentSection', data)
    }
  }
}
</script>
