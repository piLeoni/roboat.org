<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <slot />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionModule',
  props: ['title', 'subtitle', 'text']
}
</script>
