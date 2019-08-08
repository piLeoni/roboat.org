<template>
  <div>
    <the-main-area />
  </div>
</template>

<script>
import TheMainArea from '@/components/TheMainArea.vue'
export default {
  middleware: 'dataLoad',
  components: { TheMainArea }
}
</script>
