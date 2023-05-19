<template>
  <header class="header__wrapper">
    <div class="header container">

    <div class="header__logo">
      <router-link to="/">
        <img src="/images/geeklab-log.svg" alt="header-logo">
      </router-link>
    </div>
    <nav class="header__nav nav">
      <div class="header__burger" @click="burger = !burger">
        <span />
      </div>
      <ul class="nav__list" :class="{'open': burger}">
        <li class="nav__list-item" v-for="link in navItems" :key="link.id">
          <router-link :to="link.path" class="nav__link btn">{{ link.title }}</router-link>
        </li>
        <li v-if="locale" class="nav__locale">
          EN
        </li>
        <li class="nav__list-item">
          <button class="nav__contact red-btn">
            Заказать проект
            <span class="material-symbols-outlined">
              arrow_forward
            </span>
          </button>
        </li>
      </ul>

    </nav>
    </div>
  </header>
</template>

<script setup>

  import { ref, inject } from "vue";
  import { navItems } from '@/routes'

  const { locale } = inject('project-features')

  const burger = ref(false)


</script>

<style scoped lang="scss">
  .header {
    @include flex-center;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 19px;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    &__logo {
      height: 43px;
      width: 186px;
      padding-left: 25px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 769px){
        width: 106.78px;
        height: 40px;

      }
    }

    @media screen and (max-width: 1100px) {
      padding-top: 24px;
      padding-bottom: 24px;
    }

    &__wrapper {
      @include absolute-defaults;
      background: $color-black-opacity-40;
      backdrop-filter: blur(15px);
      position: fixed;
      right: 0;
      z-index: 50;

      @media screen and (max-width: 769px) {
        background: $color-dark;
      }
    }

    &__burger {
      @include flex-center;
      width: 48px;
      height: 48px;
      margin-right: 0;
      margin-left: auto;

      span {
        display: block;
        position: relative;
        height: 2px;
        width: 22px;
        background: $color-white;

        &::before, &::after {
          @extend %psevdo-element-defaults;
          height: 2px;
          width: 100%;
          background: $color-white;
        }
        &::before {
          top: -7px;
        }
        &::after {
          bottom: -7px;
        }
      }
      display: none;
      @media screen and (max-width: 1100px) {
        display: flex;
      }
    }
  }

  .nav {
    flex-grow: 1;
    &__list {
      display: flex;
      justify-content: flex-end;
      grid-gap: 40px;
      align-items: center;

      @media screen and (max-width: 1100px) {
        position: absolute;
        top: 88px;
        left: 0;
        grid-gap: 20px;
        width: 100vw;
        flex-direction: column;
        align-items: center;
        background: $color-dark;
        border-radius: 0 0 18px 18px;
        padding-top: 0;
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
      min-width: 114px;
      &.router-link-exact-active {
        opacity: 0.6;
        &::before, &::after {
          opacity: 0.6;
        }
      }
      @media screen and (max-width: 1100px) {
        &::before, &::after {
          display: none;
        }
      }
    }

    &__contact {
      grid-gap: 7px;
    }
  }
</style>
