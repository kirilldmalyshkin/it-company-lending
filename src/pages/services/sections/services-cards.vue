<template>
  <section class="services-cards container">
    <h1 class="text-center">
      Полный цикл разработки проекта
    </h1>
    <ul>
      <li v-for="item in preferences">
        <services-preference-item v-bind="item" />
      </li>
    </ul>
    <ul class="services-cards__menu">
      <li v-for="service in services">
        <router-link
            :to="{ name: 'service', params: { service: service.url } }"
        >
          <service-card v-bind="service" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { services } from "@/pages/services/services.js";
import ServicesPreferenceItem from "@/pages/services/components/services-preference-item.vue";
import ServiceCard from "@/pages/services/components/service-card.vue";

const preferences = [
  { quantity: '250+', description: 'выполненных<br>проектов' },
  { quantity: '35+', description: 'профессионалов<br>своего дела' },
  { quantity: '12+', description: 'лет<br>опыта' }

]
</script>

<style scoped lang="scss">
.services-cards {
  padding-top: 80px;

  ul {
    max-width: 1040px;
    margin: 27px auto 94px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  &__menu {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 465px);
  }
}
</style>