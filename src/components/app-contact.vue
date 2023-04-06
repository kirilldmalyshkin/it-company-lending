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
    <div class="contact__body">
      <h2>
        Обсудить идею <br /> или проект
      </h2>
      <a href="#" class="btn contact__btn">
        отправить
      </a>
      <p>
        Нажимая кнопку отправить, вы соглашаетесь <br />
        <a href="#" class="contact__href">с Политикой обработки данных</a>
      </p>
      <p>
        <a href="#" class="contact__href">Конфиденциальность</a> и <a href="#" class="contact__href">Условия использования</a>
      </p>
    </div>
    <div class="contact__inputs">
      <input type="text" class="contact__input" autofocus placeholder="Ваше имя">
      <input type="text" class="contact__input phone-mask" placeholder="+7 (___) ___-__-__">
      <input type="text" class="contact__input" placeholder="Задача">
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  display: grid;
  max-width: 1574px;
  align-items: center;
  width: 100%;
  margin: 136px auto 0;
  background: #27272A;
  border-radius: 18px;
  padding: 71px 70px 64px 84px;
  grid-template-columns: 600px 1fr;
  grid-gap: 120px;

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
      margin-bottom: 10px;
    }
    @media screen and (max-width: 769px) {
      text-align: center;
    }
  }

  &__btn {
    color: $color-light-blue;
    margin-top: 24px;
    margin-bottom: 28px;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    width: 175px;

    &::before, &::after {
      border-color: $color-light-blue;
    }
  }

  &__href {
    text-decoration-line: underline;
  }

  &__inputs {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 16px;
    margin-top: 24px;
  }

  &__input {
    border: 1px solid #A08EFF;
    border-radius: 45px;
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    background-color: #18181B;
  }

  p {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
  }
}
</style>
