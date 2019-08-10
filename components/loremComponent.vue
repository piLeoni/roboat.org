<template>
  <div :id="title" :name="title">
    <h1>{{ title }}</h1>
    <h2>{{ title }}</h2>
    <h3>{{ title }}</h3>
    <b>{{ title }}</b>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea
      recusandae aliquid tempora itaque sapiente officia error incidunt atque
      voluptatibus! Provident id officiis maxime quae quia tempore rem nesciunt
      non.
    </p>
    <div
      class="
    fakeImage"
    />
  </div>
</template>

<script>
export default {
  props: ['title'],
  mounted() {
    // document.getElementById('mainArea').addEventListener(
    //   'scroll',
    //   (el) => {
    //     console.log(`${this.title} thinks that we are moving`)
    //   },
    //   true
    // )
  }
}
</script>
<style scoped>
.fakeImage {
  width: 300px;
  height: 300px;
  background: var(--main-fg-color);
}
</style>
