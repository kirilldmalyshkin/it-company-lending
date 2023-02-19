<template>
  <header class="header container">
    <div class="header__logo">
      <img src="/images/incode-logo.svg" alt="header-logo">
    </div>
    <nav class="header__nav nav">
      <div class="header__burger" @click="burger = !burger">
        <span />
      </div>
      <ul class="nav__list" :class="{'open': burger}">
        <li class="nav__list-item" v-for="link in links" :key="link.id">
          <a href="" class="nav__link btn">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

  import {ref} from "vue";

  const links = [
    { label: 'компания', id: 'company' },
    { label: 'услуги', id: 'services' },
    { label: 'кейсы', id: 'cases' },
    { label: 'связаться', id: 'contacts' }
  ]

  const burger = ref(false)

</script>

<style scoped lang="scss">
  .header {
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    @media screen and (max-width: 1100px) {
      padding-top: 24px;
      padding-bottom: 24px;
    }

    &__logo {
      @media screen and (max-width: 769px){
        width: 106.78px;
        height: 40px;
        display: flex;
        align-items: center;
      }
    }

    &__burger {
      display: none;
      @media screen and (max-width: 1100px) {
        width: 48px;
        height: 48px;
        margin-right: 0;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: block;
          position: relative;
          height: 2px;
          width: 22px;
          background: #FFFFFF;
          &::before, &::after {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: #FFFFFF;
            content: '';
          }
          &::before {
            top: -7px;
          }
          &::after {
            bottom: -7px;
          }
        }
      }
    }
  }

  .nav {
    flex-grow: 1;
    &__list {
      display: flex;
      justify-content: flex-end;
      grid-gap: 36px;

      @media screen and (max-width: 1100px) {
        position: absolute;
        top: 88px;
        left: 0;
        width: 100vw;
        flex-direction: column;
        align-items: center;
        background: #18181B;
        border-radius: 0px 0px 18px 18px;
        padding-top: 7px;
        height: 0;
        overflow: hidden;
        &.open {
          height: auto;
          padding-bottom: 78px;
          transition: height .5s linear;
        }
      }
    }
    &__link {
      width: 120px;

      @media screen and (max-width: 1100px) {
        &::before, &::after {
          display: none;
        }
      }
    }
  }

</style>
