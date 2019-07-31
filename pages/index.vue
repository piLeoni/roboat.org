<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        HOME PAGE
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import axios from 'axios'
import Logo from '~/components/Logo.vue'
import inputContents from '@/static/contents.js'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState(['contents'])
  },
  watch: {
    contents() {
      // console.log(this.contents)
    }
  },
  asyncData({ store }) {
    store.dispatch('loadContents', inputContents)
  },
  mounted() {
    this.loadContents(inputContents)
  },
  methods: {
    loadContents(payload) {
      this.$store.dispatch('loadContents', payload)
    },
    loadContentsPromise(payload) {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('loadContents', payload)
        resolve()
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
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
</style>
