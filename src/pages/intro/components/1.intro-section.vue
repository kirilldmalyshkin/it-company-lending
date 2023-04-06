<template>
  <div class="intro-hero">
    <div class="intro-hero__bg"></div>
    <section class="intro">
      <div class="intro__container">
        <h1 class="intro__slogan">Цифровые сервисы<br>для бизнеса</h1>
        <p class="intro__paragraph">Мы разрабатываем цифровые продукты, которые позволяют компаниям работать эффективнее, делают работу миллионов людей продуктивнее, а жизнь — технологичнее</p>
      </div>
      <div class="intro-hero__btn">
        <a href="" class="btn">Узнать больше</a>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.intro-hero {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1120px;
  border-top: 1px solid #28282A;
  padding-top: 3%;
  @media screen and (max-width: 769px) {
    height: auto;
  }

  &__bg {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url('../../../../public/images/temp/background-pattern-animation.png');
    background-repeat: no-repeat;
    //background-image: url('/images/temp/background-pattern-animation.png');
    //background-size: cover;
    background-position: center;
    @media screen and (max-width: 769px) {
      background-size: 200% auto;
      top: -60px;
      //left: 25px;
    }

  }

  &__btn {
    align-self: flex-end;
    margin-top: auto;
    position: relative;
    bottom: -328px;
  }
}

.intro {
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  color: var(--text-secondary);
  text-align: center;

  &__container {
    padding-right: 80px;

    @media screen and (max-width: 769px) {
      padding-right: 0;
    }
  }

  &__slogan {
    margin-top: 32%;
    margin-bottom: 2rem;
  }

  &__paragraph {
    padding-top: 16px;
  }
}

.btn {
  display: inline-block;
  white-space: nowrap;
  width: fit-content;
  margin-right: 64px;
  margin-top: 38px;
  transition: all .3s ease-in-out;

  @media screen and (max-width: 769px) {
    margin: 40px auto 114px;
    width: 175px;
  }
}
</style>
