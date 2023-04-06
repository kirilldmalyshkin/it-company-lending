<template>
  <section id="company" class="company">
    <h2>Решаем сложные бизнес-задачи</h2>
    <p>
      Собственные инвестиционные проекты в различных отраслях позволили нам получить практический опыт и понимание реальных потребностей бизнеса
    </p>
    <div class="button-container">
      <a v-for="button in buttons" :key="button.text" v-bind="button" class="button-round" :href="button.href"/>
    </div>
  </section>
</template>

<script setup>
const buttons = [
  { text: 'Банки и финтех', href: '#' },
  { text: 'E-commerce', href: '#' },
  { text: 'Образование', href: '#' },
  { text: 'IT и телеком', href: '#' },
  { text: 'Промышленность', href: '#' },
];
</script>

<style scoped lang="scss">
.button-round {
  border: 1px solid #FFFFFF;
  border-radius: 45px;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  padding: 1rem 2rem;
  height: 54px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  scroll-snap-align: center;
  //-ms-scroll-snap-align: center;
  margin-right: 10px;

  @media screen and (max-width: 769px) {
    height: fit-content;
    width: 158px;
    padding: 5px 11px;
    white-space: nowrap;
    font-size: 16px;
    line-height: 21px;
  }
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: none;
  -ms-scroll-snap-type: none;
  scroll-padding: 0 10px;

  @media screen and (max-width: 769px) {
    margin-bottom: 64px;
    margin-top: 40px;
    overflow-x: scroll;
    justify-content: flex-start;
    padding: 0 35px;
    grid-gap: 12px;
    flex-wrap: nowrap;
    max-width: 100vw;
  }
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
    border-radius: 0;
    border-right: 0;
    border-left: 0;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 42px 10px 0;
    max-width: 100vw;
  }
}

h2 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 80px;

  @media screen and (max-width: 769px) {
    margin-bottom: 10px;
  }
}

img {
  margin-bottom: 32px;

  @media screen and (max-width: 769px) {
    margin-bottom: 10px;
  }
}
</style>
