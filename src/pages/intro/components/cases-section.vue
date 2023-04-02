<script setup>
import CaseCardComponent from "@/pages/intro/components/case-card-component.vue";

const cases = [
  { text: 'Web-разработка', image: '/images/index/cases/Icon1.svg', color: '#C0EAFF'},
  { text: 'Mobile - разработка', image: '/images/index/cases/Icon2.svg', color: '#F1F8C0'},
  { text: 'Высоконагруженные системы', image: '/images/index/cases/Icon3.svg', color: '#ABC3EF'},
  { text: 'Брендинг', image: '/images/index/cases/Icon4.svg', color: '#A4F3BA'},
  { text: 'Исследования', image: '/images/index/cases/Icon2.svg', color: '#F0A9A7'},
  { text: 'Digital-стратегия', image: '/images/index/cases/Icon2.svg', color: '#9A92C6'},
  { text: 'Product management', image: '/images/index/cases/Icon5.svg', color: '#F0E0FF'},
  { text: 'IT Аудит', image: '/images/index/cases/Icon6.svg', color: '#FFD978'},
  { text: 'IT Консалтинг', image: '/images/index/cases/Icon7.svg', color: '#FDF2E6'}
]
</script>

<template>
  <section id="cases" class="cases">
    <div class="cases__text container text-center">
      <h2>
        Полный цикл разработки проекта
      </h2>
      <p>
        Мы определяем бизнес-задачи, проводим исследования, проектируем интерфейсы и пишем пользовательские сценарии, создаем дизайн, верстаем и разрабатываем функционал, тестируем и публикуем, с последующей поддержкой
      </p>
    </div>
    <div class="cases__cards container">
      <case-card-component v-for="caseCard in cases" :key="caseCard.text" v-bind="caseCard" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cases {
    max-width: 1574px;
    //box-sizing: border-box;
    position: relative;
    //border: 1px solid transparent;
    //background-image: linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 100%);
    //background-origin: border-box;
    //background-clip: content-box, border-box;
    border-radius: 18px;
    overflow: hidden;
    //background: linear-gradient(180deg, #27272A 0%, rgba(39, 39, 42, 0) 50%, #27272A 100%);
    //background-clip: padding-box;
    //box-shadow: 0 0 0 1px inset linear-gradient(180deg, #27272A 0%, rgba(39, 39, 42, 0) 50%, #27272A 100%);
    padding: 80px 49px 112px;
    margin: 0 auto;
    //background-color: #28282A;
    @media screen and (max-width: 769px){
      //margin-top: 30px;
      //margin-bottom: 0;
    }

    &::before {
      content: "";
      background-image: linear-gradient(180deg, #27272A 0%, rgba(39, 39, 42, 0) 100%);
      border-radius: 18px;
      height: 100%;
      left: -1px;
      top: -1px;
      right: -1px;
      position: absolute;
      width: auto;
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #28282A;
      border-radius: 16px;
      z-index: -1;
    }

    &__text {
      max-width: 1200px;
      margin-bottom: 80px;
      @media screen and (max-width: 769px) {
        margin-bottom: 30px;
        h2 {
          margin-bottom: 10px;
        }
      }
    }
    &__cards {
      display: grid;
      grid-column-gap: 30px;
      grid-row-gap: 27px;
      grid-template-columns: repeat(3, 472px);
      justify-content: center;
      @media screen and (max-width: 1490px) {
        grid-template-columns: repeat(2, 472px)
      }
      @media screen and (max-width: 1040px) {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 16px;
      }

    }
  }
</style>
