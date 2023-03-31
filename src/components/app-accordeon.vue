<script setup>
import {ref} from "vue";

const isOpen = ref(false)

defineProps({
  label: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="accordion">
    <div class="accordion__visible"  @click="isOpen = !isOpen" :class="{'accordion__visible_active': isOpen}">
      <span>
        {{ label }}
      </span>
      <button>
        <img v-if="!isOpen" src="/images/open.svg" alt="">
        <img v-else src="/images/close.svg" alt="">
      </button>
    </div>
    <div v-show="isOpen" class="accordion__hidden hidden">
      <div class="hidden__wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.accordion {
  position: relative;
  height: fit-content;
  min-height: 60px;
  &__visible {
    user-select: none;
    cursor: pointer;
    position: absolute;
    background: #18181B;
    padding: 16px 32px;
    border: 1px solid #A08EFF;
    border-radius: 45px;
    font-weight: 300;
    font-size: 22px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    width: 100%;
    &_active {
      user-select: none;
      background: #D0D0FA;
      color: #18181B;
    }

    button {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      img {
        width: 28px;
      }
    }

  }
  &__hidden {
    //transform: translateY(-64px);
    z-index: 5;
    padding-top: 60px;
    background: #18181B;
    width: 100%;
    border-radius: 45px;
  }
}

.hidden {
  &__wrapper {
    padding: 20px 31px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #C1B7F8;
  }
}
</style>
