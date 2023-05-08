<template>
  <div class="intro-hero">
    <div class="intro-hero__bg"></div>
    <section class="intro">
      <div class="intro__container">
        <h1 class="intro__slogan">Цифровые решения<br>для бизнеса</h1>
        <p class="intro__paragraph">
          Продуманный back-end, легкий front-end,<br>
          умный ML и удобный мобайл.
        </p>
      </div>
      <div class="intro-hero__btn">
        <a href="" class="btn">Узнать больше</a>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.intro-hero {
  width: 100vw;
  height: calc(100vw * ( 844 / 1728));
  margin-top: 80px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #28282A;
  background: $color-dark-1;
  @media screen and (max-width: 769px) {
    height: auto;
  }

  &__bg {
    position: absolute;
    width: 100vw;
    height: calc(100vw * ( 844 / 1728));
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('/public/images/temp/background-pattern-animation.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media screen and (max-width: 769px) {
      background-size: 200% auto;
      top: -60px;
    }

  }

  &__btn {
    align-self: flex-end;
    position: relative;
  }
}

.intro {
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  color: var(--text-secondary);
  text-align: center;

  &__container {

    @media screen and (max-width: 769px) {
      padding-right: 0;
    }
  }

  &__slogan {
    margin-top: 20%;
    margin-bottom: 2rem;
    text-align: center;
  }

  &__paragraph {
    padding-top: 16px;
  }
}

.btn {
  width: 200px;
  transition: all .3s ease-in-out;
  margin: 73px auto;

  @media screen and (max-width: 769px) {
    margin: 40px auto 114px;
    width: 175px;
  }
}
</style>
