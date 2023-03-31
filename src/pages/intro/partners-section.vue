<template>
  <section class="partners">
    <div class="partners__info container">
      <img src="/images/temp/our-clients.svg" alt="our clients">
      <div>
        <h2>
          Наши клиенты
        </h2>
        <p>
          Среди наших клиентов крупнейшие <br />российские и международные компании
        </p>
      </div>
    </div>
    <div class="partners__scrollbar">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">
      <img src="/images/temp/partners.svg" alt="">


    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .partners {
    margin-top: 273px;
    @media screen and (max-width: 769px) {
      margin-top: 160px;
    }
    &__info {
      display: grid;
      grid-template-columns: 585px 1fr;
      align-items: center;
      grid-gap: 200px;
      margin-bottom: 144px;
      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 150px;
        text-align: center;
      }
      @media screen and (max-width: 769px) {
        grid-gap: 30px;
      }

      h2 {
        margin-bottom: 10px;
      }
    }

    &__scrollbar {
      display: flex;
      grid-gap: 24px;
      overflow: hidden;
      justify-content: center;
      position: relative;
      height: 286px;
      @media screen and (max-width: 769px) {
        height: 80px;
      }
      img {
        width: 187px;
        @media screen and (max-width: 769px){
          width: 80px;
        }
      }
      &::before, &::after {
        display: block;
        width: 206px;
        height: 286px;
        content: '';
        position: absolute;
        @media screen and (max-width: 769px) {
          height: 120px;
          width: 80px;
        }
      }
      &::before {
        left: 0;
        background: linear-gradient(90deg, #18181B 8.03%, rgba(24, 24, 27, 0) 109.49%);
      }
      &::after {
        right: 0;
        background: linear-gradient(90deg, #18181B 8.03%, rgba(24, 24, 27, 0) 109.49%);
        transform: rotate(-180deg);
      }

    }

  }
</style>
