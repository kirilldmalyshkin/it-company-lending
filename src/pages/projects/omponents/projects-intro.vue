<template>
  <section class="container projects-intro">
    <div class="projects-intro__content">
      <h1>
        Проекты
      </h1>
      <p>
        Мы обеспечиваем цифровую трансформацию бизнеса которая способствует его развитию.
      </p>
      <p>
        Вникая в бизнес-задачи клиентов, мы разрабатываем digital-инструменты, которые позволяют снизить расходы, увеличить операционную прибыль, повысить эффективность работы подразделений.
      </p>
      <p>
        Имеем большой опыт в создании продуктового дизайна, а также сильную техническую экспертизу в разработке web, мобильных, frontend- и backend-решений любой сложности, с последующей интеграцией в высоконагруженные сервисы.
      </p>
      <button class="btn">
        скачать презентацию компании
      </button>
    </div>
    <div class="projects-intro__image">
      <img src="/images/projects/projects.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "projects-intro"
}
</script>

<style scoped lang="scss">
  .projects-intro {
    display: grid;
    justify-content: center;
    grid-template-columns: 674px 1fr;
    align-items: center;
    grid-gap: 54px;
    padding: 54px 0;
    margin-bottom: 100px;

    &__content {
      h1 {
        text-align: left;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 17px;
      }
      .btn {
        width: fit-content;
        margin-top: 44px;
        &::after, &::before {
          border-color: $color-light-yellow;
        }
      }
    }
  }
</style>