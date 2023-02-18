<script setup>
  defineProps({
    color: {
      type: String,
      default: 'red'
    },
    image: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '1233453'
    }
  })
</script>

<template>
  <div class="case-card" :style="{ 'background': color}">
    <img :src="image" alt="">
    <div class="case-card__text">
      <span>{{ text }}</span>
      <img src="/images/Arrow.svg" alt="arrow" >
    </div>
  </div>
</template>


<style scoped lang="scss">
  .case-card {
    padding: 32px 42px 36px 40px;
    border-radius: 18px;
    img {
      max-width: 82px;
    }
    &__text {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #000000;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
      }
      img {
        width: 29px;
      }

    }
  }
</style>
