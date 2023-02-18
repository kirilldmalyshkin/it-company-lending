<template>
  <header class="header container">
    <div class="header__logo">
      <img src="/images/incode-logo.svg" alt="header-logo">
    </div>
    <nav class="header__nav nav">
      <ul class="nav__list">
        <li class="nav__list-item" v-for="link in links" :key="link.id">
          <a href="" class="nav__link btn">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

  const links = [
    { label: 'компания', id: 'company' },
    { label: 'услуги', id: 'services' },
    { label: 'кейсы', id: 'cases' },
    { label: 'связаться', id: 'contacts' }
  ]

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
        //background: red;
        border-radius: 0px 0px 18px 18px;
        padding-bottom: 78px;
        padding-top: 7px;
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
