<script>
import Inputmask from 'inputmask';

export default {
  mounted() {
    Inputmask("+7 (999) 999-99-99").mask(".phone-mask");
  }
}
</script>

<template>
  <div class="contact">
    <div class="contact__body desktop">
      <h2>
        Обсудить задачу <br /> или проект
      </h2>
      <a href="#" class="red-btn contact__btn">
        Отправить запрос
        <span class="material-symbols-outlined">
          arrow_forward
        </span>
      </a>
      <p>
        Нажимая кнопку отправить, вы соглашаетесь
        <a href="#" class="contact__href">с Политикой обработки данных</a>
      </p>
<!--      <p>-->
<!--        <a href="#" class="contact__href">Конфиденциальность</a> и <a href="#" class="contact__href">Условия использования</a>-->
<!--      </p>-->
    </div>
    <h2 class="mobile contact__header">
      Обсудить идею <br /> или проект
    </h2>
    <div class="contact__inputs">
      <input type="text" class="contact__input" autofocus placeholder="Ваше имя">
      <input type="text" class="contact__input phone-mask" placeholder="+7 (___) ___ - __ __">
      <input type="text" class="contact__input" placeholder="Задача">
    </div>
    <div class="contact__body mobile">
      <p>
        Нажимая кнопку отправить, вы соглашаетесь
        <a href="#" class="contact__href">с Политикой обработки данных</a>
      </p>
      <p>
        <a href="#" class="contact__href">Конфиденциальность</a> и <a href="#" class="contact__href">Условия использования</a>
      </p>
      <a href="#" class="btn contact__btn">
        Отправить запрос
        <span class="material-symbols-outlined">
          arrow_forward
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile {
  display: none;

  @media screen and (max-width: 769px) {
    display: block;
  }
}
.desktop {
  @media screen and (max-width: 769px) {
    display: none;
  }
}

.contact {
  max-width: 1436px;
  display: grid;
  width: 100%;
  margin: 136px auto 0;
  background: #27272A;
  border-radius: 18px;
  padding: 38px 53px 39px;
  grid-template-columns: 1fr 500px;
  grid-gap: 120px;

  @media screen and (max-width: 769px) {
    border-radius: 0;
    padding: 50px 10px 55px;
    margin-top: 0;
    &__header {
      justify-self: center;
      text-align: center;
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }
  }

  @media screen and (max-width: 1320px) {
    grid-template-columns: 50% 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    //grid-gap: 32px;
    padding: 80px 10px;
    grid-gap: 50px;
  }

  &__body {
    text-align: left;
    h2 {
      text-align: inherit;
      margin-bottom: 34px;
    }
    @media screen and (max-width: 769px) {
      text-align: center;
      color: #BDBDBD;
      font-weight: 200;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__btn {
    //color: $color-light-blue;
    margin-top: 24px;
    margin-bottom: 28px;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    //width: 175px;

    &::before, &::after {
      border-color: $color-light-blue;
    }

    @media screen and (max-width: 769px) {
      margin: 40px auto 0;
    }
  }

  &__href {
    text-decoration-line: underline;
  }

  &__inputs {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: start;
    margin-top: calc(53px - 38px);
  }

  &__input {
    border: 1px solid #A08EFF;
    border-radius: 18px;
    height: 54px;
    padding: 10px 42px 10px 33px;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    background-color: #18181B;

    @media screen and (max-width: 769px) {
      padding: 16px 32px;
    }
  }

  p {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
  }
}
</style>
