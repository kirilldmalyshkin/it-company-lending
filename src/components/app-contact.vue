<script setup>
import AppAccordeon from "src/components/app-accordeon.vue";

const cases = [
  { text: 'Web-разработка', image: '/images/index/cases/Icon1.svg'},
  { text: 'Mobile-разработка', image: '/images/index/cases/Icon2.svg'},
  { text: 'Высоконагруженные системы', image: '/images/index/cases/Icon3.svg'},
  { text: 'Брендинг', image: '/images/index/cases/Icon4.svg'},
  { text: 'Исследования', image: '/images/index/cases/Icon2.svg'},
  { text: 'Digital-стратегия', image: '/images/index/cases/Icon2.svg'},
  { text: 'Product management', image: '/images/index/cases/Icon5.svg'},
  { text: 'IT-Аудит', image: '/images/index/cases/Icon6.svg'},
  { text: 'IT-Консалтинг', image: '/images/index/cases/Icon7.svg'}
]
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
    <div class="contact__accordions">
      <app-accordeon label="Имя" >
        <input type="text" class="contact__input" autofocus>
      </app-accordeon>
      <app-accordeon label="Телефон или почта" >
        <input type="text" class="contact__input" autofocus>
      </app-accordeon>
      <app-accordeon label="Задача">
        <p v-for="caseCard in cases" :key="caseCard.text" v-bind="caseCard">{{caseCard.text}}</p>
      </app-accordeon>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "/src/assets/style/vars";

input:focus {
  outline: none;
  caret-color: blue;
}

.contact__body p:first-of-type {
  margin-bottom: 1rem;
}

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

    //p:first-child {
    //  margin-bottom: 16px;
    //}
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

  &__accordions {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }

  p {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
  }
}

</style>
