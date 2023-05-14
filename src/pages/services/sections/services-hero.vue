<template>
  <section class="services-hero">
    <div class="container">
      <h1 class="text-center">
        Услуги
      </h1>
      <p class="text-center">
        Имеем большой опыт в создании продуктового дизайна,<br>
        а также сильную техническую экспертизу в разработке web,<br>
        мобильных, frontend- и backend-решений любой сложности,<br>
        с последующей интеграцией в высоконагруженные сервисы.
      </p>
    </div>

  </section>
</template>

<style scoped lang="scss">
.services-hero {
  background:
      url("/images/services/services-left.svg") left center no-repeat,
      url("/images/services/services-right.svg") right center no-repeat,
      $color-dark-1;
  @include flex-center;
  min-height: 775px;


  h1 {
    margin-bottom: 20px;
  }

  p {
    max-width: 712px;
    margin: 0 auto;
  }
}
</style>