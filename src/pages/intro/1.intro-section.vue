<script setup>
// import PartnersSection from "./partners-section.vue";
</script>

<template>
  <div class="intro-hero">
      <section class="intro">
        <div class="intro__container">
          <h1 class="intro__slogan">
            Цифровые сервисы <br />
            для бизнеса
          </h1>
          <p class="intro__paragraph">
            Мы разрабатываем цифровые продукты, которые позволяют компаниям работать эффективнее, делают работу миллионов <br />людей продуктивнее, а жизнь — технологичнее
          </p>
        </div>
      </section>
      <div class="intro-bg-container">
        <img class="intro__background" src="/images/temp/background-pattern-animation.png" alt="geeklab background">
      </div>
      <div class="intro-hero__btn">
        <a href="" class="btn">
          узнать больше
        </a>
      </div>
    </div>
</template>


<style scoped lang="scss">

.btn {
  white-space: nowrap;
  width: fit-content;
  margin-right: 52px;
  margin-top: 38px;
}

.intro-hero {
  display: grid;
  grid-template-rows: fit-content(24rem);
  width: 100%;
  border-top: 1px solid #28282A;
  padding-top: 3%;

  &__btn {
    margin: 0 auto;
    grid-column: 1;
    grid-row: 1;
    grid-row-start: 2;
    grid-row-end: auto;
  }
}

.intro-bg-container {
  grid-column: 1;
  grid-row: 1;
  grid-row-start: 1;
  grid-row-end: auto;
  top: 0;
  transition: all 1s ease-in-out;
  width: 100%;
}

.intro {
  align-items: center;
  color: var(--text-secondary);
  display: flex;
  flex-direction: row;
  grid-column: 1;
  grid-row: 1;
  margin: 0 auto;
  max-width: 54rem;
  transition: all .3s ease-in-out;
  width: auto;
  @media screen and (max-width: 769px) {
    img {
      min-height: 429.29px;
      object-fit: cover;
    }
  }

  &__container {
    padding-right: 80px;
    //position: absolute;
    //top: 56%;
    //left: 50%;
    //transform: translate(-50%, -50%);
  }

  &__slogan {
    margin-top: 5rem;
    max-width: 1466px;
    width: 100%;
    @media screen and (max-width: 769px) {
      max-width: 350px;
    }
  }

  &__paragraph {
    padding-top: 16px;
    text-align: center;
  }
}

</style>
