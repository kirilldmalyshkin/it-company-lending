<script setup>
import AppAccordeon from "src/components/app-accordeon.vue";
</script>

<template>
  <div class="contact">
    <div class="contact__text">
      <h2>
        Мы открыты к сотрудничеству
      </h2>
      <p>
        Короткое описание основной мысли новостного блока в данном фрейме, <br>без указания деталей
      </p>
    </div>
    <div class="contact__accordions">
      <app-accordeon label="Данные" >#тэги</app-accordeon>
      <app-accordeon label="Контакты" >#тэги</app-accordeon>
      <app-accordeon label="Текст" >#тэги</app-accordeon>
    </div>

  </div>
</template>

<style scoped lang="scss">
.contact {
  display: grid;
  max-width: 1574px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: #27272A;
  border-radius: 18px;
  padding: 80px 84px;
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

  &__text {
    text-align: left;
    h2 {
      text-align: inherit;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 769px) {
      text-align: center;
    }
  }

  &__accordions {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }
}

</style>
