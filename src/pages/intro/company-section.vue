<template>
  <section id="company" class="company">
    <h2>
      Мы работаем на стыке бизнеса, творчества и технологий.
    </h2>
    <p>
      Собственные инвестиционные проекты в различных отраслях позволили нам получить практический опыт и понять реальные потребности бизнеса.
    </p>
    <img src="/images/temp/background-pattern-animation-2.png" alt="">
    <a href="" class="btn">
      узнать больше
    </a>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .company {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 1200px;
    margin: 42px auto 0;
    padding: 80px;
    @media screen and (max-width: 769px) {
      margin-top: 0;
      padding: 80px 20px 0;
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
    a {
      margin-bottom: 45px;
      width: fit-content;
    }
  }

</style>
