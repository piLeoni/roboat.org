<template>
  <div>
    <div class="background-area">
      <div class="content-area">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-area {
  /* background: yellowgreen; */
  width: 100%;
  display: block;
}
.content-area {
  /* background: blue; */
  width: 70ch;
  margin: auto auto;
  padding: 2em;
}
@media only screen and (max-width: 600px) {
  .content-area {
    width: 100%;
  }
}
</style>
