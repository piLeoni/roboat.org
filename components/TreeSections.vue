<template>
  <div>
    <div v-if="label" :id="link" class="doc-section">
      <h1>{{ label }}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        eius minus quibusdam cupiditate incidunt, consequatur eligendi fugit
        nobis assumenda molestias quis doloribus itaque praesentium. Voluptates
        magnam nihil sit labore modi.
      </p>
    </div>

    <tree-sections
      v-for="node in nodes"
      :key="node.linkto"
      :nodes="node.nodes"
      :label="node.label"
      :link="node.link"
    />
  </div>
</template>
<script>
// import SectionModule from '@/components/SectionModule.vue'
export default {
  name: 'TreeSections',
  props: ['label', 'nodes', 'depth', 'link']
  //   modules: ['SectionModule']
}
</script>
