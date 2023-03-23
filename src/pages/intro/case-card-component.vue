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
    cursor: pointer;
    padding: 32px 42px 36px 40px;
    border-radius: 18px;
    @media screen and (max-width: 1100px) {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      padding-right: 24px;
      padding-left: 24px;
      padding-bottom: 28px;
    }
    img {
      max-width: 82px;
      @media screen and (max-width: 1100px) {
        max-width: 41px;
      }
    }
    &__text {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1100px) {
        margin-top: 0;
        flex-grow: 1;
      }
      span {
        color: #000000;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        @media screen and (max-width: 1100px) {
          font-size: 16px;
          line-height: 21px;
          width: 100%;
        }
      }
      img {
        width: 29px;
        @media screen and (max-width: 1100px) {
          margin-left: auto;
          margin-right: 0;
        }
      }

    }
  }
</style>
