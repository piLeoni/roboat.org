<template>
  <div id="main-area-container" ref="mainArea">
    <section-area>
      <div>
        <tree-sections :label="contents.label" :nodes="contents.nodes" />
      </div>
    </section-area>

    <div class="fillSpace" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TreeSections from '@/components/TreeSections.vue'
import SectionArea from '@/components/SectionArea.vue'

export default {
  layout({ store }) {
    if (store.isMobile) return 'mobile'
    else return 'default'
  },
  components: {
    TreeSections,
    SectionArea
  },
  computed: {
    ...mapState(['contents', 'isMobile'])
  },

  mounted() {
    const container = this.$refs.mainArea
    container.addEventListener(
      'scroll',
      (e) => {
        const parentTop = container.getBoundingClientRect().top
        const elements = Array.prototype.slice.call(
          document.querySelectorAll('.doc-section')
        )
        for (const el in elements) {
          const distance =
            elements[el].getBoundingClientRect().bottom - parentTop - 30

          if (distance >= 0) {
            this.$store.commit(
              'setCurrentSection',
              elements[el].getAttribute('id')
            )
            break
          }
        }
      },
      true
    )
  }
}
</script>

<style>
#main-area-container {
  /* margin: 0 auto; */
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fillSpace {
  height: 1000px;
}
</style>
