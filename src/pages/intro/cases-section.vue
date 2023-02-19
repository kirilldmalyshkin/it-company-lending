<script setup>
import CaseCardComponent from "src/pages/intro/case-card-component.vue";

const cases = [
  { text: 'Web-разработка', image: '/images/index/cases/Icon1.svg', color: '#C4DBFB'},
  { text: 'Mobile - разработка', image: '/images/index/cases/Icon2.svg', color: '#DFF7A7'},
  { text: 'Высоконагруженные системы', image: '/images/index/cases/Icon3.svg', color: '#F2C04B'},
  { text: 'Брендинг', image: '/images/index/cases/Icon4.svg', color: '#C1B7F8'},
  { text: 'Макросервисы', image: '/images/index/cases/Icon2.svg', color: '#F0A9A7'},
  { text: 'IT Operation', image: '/images/index/cases/Icon2.svg', color: '#C4DBFB'},
  { text: 'Product management', image: '/images/index/cases/Icon5.svg', color: '#F2C04B'},
  { text: 'IT Аудит', image: '/images/index/cases/Icon6.svg', color: '#C1B7F8'},
  { text: 'IT Консалтинг', image: '/images/index/cases/Icon7.svg', color: '#DFF7A7'}
]
</script>

<template>
  <section id="cases" class="cases">
    <div class="cases__text container text-center">
      <h2>
        Поможем решить любую задачу
      </h2>
      <p>
        Собственные инвестиционные проекты в различных отраслях позволили нам получить практический опыт и понять реальные потребности бизнеса.
      </p>
    </div>
    <div class="cases__cards container">
      <case-card-component v-for="caseCard in cases" :key="caseCard.text" v-bind="caseCard" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cases {
    margin-top: 70px;
    margin-bottom: 112px;
    @media screen and (max-width: 769px){
      margin-top: 30px;
      margin-bottom: 0;
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
