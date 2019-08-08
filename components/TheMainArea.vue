<template>
  <div ref="mainArea" class="container">
    <div>
      <logo />
      <h1 class="title">
        HOME PAGE
      </h1>
      <a href="#boat">boat</a>

      <lorem-component
        v-for="element in contents.nodes"
        :key="element.label"
        class="doc-section"
        :title="element.label"
      />
    </div>
    <div class="fillSpace" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo.vue'
// import inputContents from '@/static/contents.js'
import loremComponent from '@/components/loremComponent.vue'

export default {
  layout({ store }) {
    if (store.isMobile) return 'mobile'
    else return 'default'
  },
  components: {
    Logo,
    loremComponent
  },

  middleware: ['dataLoad', 'mobileCheck'],
  computed: {
    ...mapState(['contents', 'isMobile'])
  },
  watch: {
    isMobile() {
      console.log('is mobile:', this.isMobile)
      if (this.isMobile) this.layout = 'mobile'
      else this.layout = 'default'
    }
  },

  // asyncData({ store }) {
  //   store.dispatch('loadContents', inputContents)
  // },
  mounted() {
    this.checkMobile()
    // this.$myGlobalMethod('ciao')
    // myGlobalMethod('ciao')
    this.myTest()
    console.log('>>>', this.contents)

    window.onresize = () => {
      this.checkMobile()
    }
    const container = this.$refs.mainArea
    container.addEventListener(
      'scroll',
      (e) => {
        // console.log('>', container.scrollTop)
        // console.log('>>', document.getElementsByClassName('doc-section'))
        // const parentTop = container.getBoundingClientRect().top
        // Array.prototype.slice
        //   .call(document.querySelectorAll('.doc-section'))
        //   .some((el) => {
        //     const distance = el.getBoundingClientRect().top - parentTop
        //     // console.log(distance)
        //     if (distance > 0) {
        //       console.log(el.getAttribute('id'))
        //       return null
        //     }
        //   })

        const parentTop = container.getBoundingClientRect().top
        const elements = Array.prototype.slice.call(
          document.querySelectorAll('.doc-section')
        )
        for (const el in elements) {
          console.log(el)
          const distance =
            elements[el].getBoundingClientRect().bottom - parentTop

          if (distance >= 0) {
            console.log(
              elements[el].getAttribute('id'),
              elements[el].getBoundingClientRect().bottom
            )
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
  },
  methods: {
    checkMobile() {
      console.log('width', window.innerWidth, this)
      if (window.innerWidth <= 600) {
        this.$store.commit('setMobile', true)
      } else {
        this.$store.commit('setMobile', false)
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100%;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
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
