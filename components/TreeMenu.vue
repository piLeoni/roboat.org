<template>
  <div class="tree-menu">
    <nuxt-link :to="`/${label}`">
      <div :style="indent">
        {{ label }}
      </div>
    </nuxt-link>
    <tree-menu
      v-for="node in nodes"
      :key="node.label"
      :nodes="node.nodes"
      :label="node.label"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
export default {
  name: 'TreeMenu',
  props: ['label', 'nodes', 'depth'],
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 10}px)` }
    }
  }
}
</script>
