<template>
  <div class="service-card">
    <h4 v-html="title" />
    <img :src="imagePreview.path" :style="imagePreview.styleCard" alt="">
    <p class="p-small" v-html="description" />
  </div>
</template>

<script setup>
defineProps({
  title: null,
  imagePreview: null,
  image: null,
  description: null,
  color: null
})
</script>

<style scoped lang="scss">
.service-card {
  overflow: hidden;
  position: relative;
  background: v-bind(color);
  width: 465px;
  height: 312px;
  border-radius: 18px;
  padding: 32px 0 0 30px;

  color: black;

  img {
    position: absolute;
    object-fit: fill;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 106px;
    padding: 19px 20px 9px;
    border-top: 1px dashed black;
    background: v-bind(color);
  }
}

</style>