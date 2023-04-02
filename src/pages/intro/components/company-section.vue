<template>
  <section id="company" class="company">
    <h2>
      Решаем сложные бизнес-задачи
    </h2>
    <p>
      Собственные инвестиционные проекты в различных отраслях позволили нам получить практический опыт и понимание реальных потребностей бизнеса
    </p>
    <div class="company__button-container">
      <a v-for="button in buttons" :key="button.text" v-bind="button" class="button-round" :href="button.href"/>
    </div>
  </section>
</template>

<script setup>
const buttons = [
  { text: 'Банки и финтех', href: '#'},
  { text: 'E-commerce', href: '#'},
  { text: 'Образование', href: '#'},
  { text: 'IT и телеком', href: '#'},
  { text: 'Промышленность', href: '#'},
]
</script>

<style scoped lang="scss">
  .button-round {
    border: 1px solid #FFFFFF;
    border-radius: 45px;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    padding: 1rem 2rem;
    //height: 54px;
    text-align: center;
    cursor: pointer;
  }
  .company {
    border: 1px solid #C1B7F8;
    background-color: #272431;
    border-radius: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 1476px;
    margin: 242px auto 154px;
    padding: 80px;
    @media screen and (max-width: 769px) {
      margin-top: 0;
      padding: 80px 20px 0;
    }

    &__button-container {
      display: flex;
      justify-content: center;
      grid-gap: 26px;
      max-width: 100vw;
      flex-wrap: wrap;
    }

    h2 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 80px;
      @media screen and (max-width: 769px ) {
        margin-bottom: 10px;
      }
    }

    img {
      margin-bottom: 32px;
      @media screen and (max-width: 769px ) {
        margin-bottom: 10px;
      }
    }
  }

</style>
