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
  <div class="case-card" :style="{ '--background-color': color}">
    <img :src="image" alt="">
    <div class="case-card__text">
      <span>{{ text }}</span>
      <span class="material-symbols-outlined">
        arrow_forward
      </span>
    </div>
  </div>
</template>


<style scoped lang="scss">
  .case-card {
    cursor: pointer;
    padding: 30px 32px 36px 40px;
    border: 1px solid var(--background-color);
    border-radius: 18px;
    overflow: hidden;
    color: #000000;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--background-color);
      z-index: -1;
    }
    &:hover {
      color: #ffffff;
      &::before {
        opacity: .15;
      }
      img {
        filter: invert(100%);
      }
    }
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
      height: auto;
      @media screen and (max-width: 1100px) {
        max-width: 41px;
      }
    }
    &__text {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: inherit;
      @media screen and (max-width: 1100px) {
        margin-top: 0;
        flex-grow: 1;
      }
      span {
        color: inherit;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        @media screen and (max-width: 1100px) {
          font-size: 16px;
          line-height: 21px;
          width: 100%;
        }
      }
      .material-symbols-outlined {
        width: 29px;
        @media screen and (max-width: 1100px) {
          margin-left: auto;
          margin-right: 0;
        }
      }

    }
  }
</style>
