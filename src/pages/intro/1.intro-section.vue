<script setup>
</script>

<template>
  <section class="intro">
    <img class="intro__background" src="/images/temp/background-pattern-animation.png" alt="">
    <h1 class="intro__slogan">
      Мы работаем  на стыке бизнеса, творчества и технологий.
    </h1>
  </section>
</template>


<style scoped lang="scss">
.intro {
  position: relative;

  &__slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1466px;
    width: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #18181B 0%, rgba(24, 24, 27, 0.69) 100%);
  }
}

</style>
