<template>
  <main class="service" v-if="service">
    <section class="service__hero container" :style="{'--gradient': service.gradient}">
      <h2>
        {{ replaceTags(service.title) }}
      </h2>
      <img :src="service.imagePreview.path" :style="service.imagePreview.stylePage" alt="">
      <p>
        {{ replaceTags(service.description) }}
      </p>
    </section>

    <section class="service__info info container">
      <h2>
        Наша экспертиза
      </h2>
      <div v-html="replaceLSEP(service.text)" />
    </section>

    <section class="service__clients clients container">
      <h2>Клиенты,<br>заказавшие услугу:</h2>
      <div class="clients__images" >
        <img
            v-for="image in service.clients"
            :src="generateImagePath(image)"
            alt=""
        >
      </div>
    </section>

    <section class="service__other other">
      <h2 class="text-center">
        Другие услуги
      </h2>

      <div class="other__cards">
        <router-link v-for="card in otherServices" :to="{ name: 'service', params: { service: card.url } }">
          <service-card  v-bind="card" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
// TODO раскидать по компонентам
import {onBeforeMount, ref, watch} from "vue";
import { useRoute } from "vue-router";
import { services } from "@/pages/services/services.js";
import {replaceLSEP, replaceTags } from "@/helpers/filters.js";
import ServiceCard from "@/pages/services/components/service-card.vue";

const route = useRoute()
const params = route.params
const service = ref({})
const otherServices = ref([])

onBeforeMount(() => {
  service.value = services[params.service]
  otherServices.value = fillOtherServices()
})

watch(
    () => route.params.service,
    async (newParam) => {
      service.value = services[newParam]
      otherServices.value = fillOtherServices()
      // fetch data
    },
);

const fillOtherServices = () => Object
    .values(services)
    .filter( el => el.url !== service.value.url)
    .slice(0, 3)

const generateImagePath = (imageName) => ('/images/partners/' + imageName + '.svg')

</script>

<style scoped lang="scss">
.service {
  padding-top: 189px;

  &__hero {
    background: var(--gradient);
    border-radius: 18px;
    height: 320px;
    padding-top: 66px;
    color: black;
    padding-left: 52px;

    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      object-fit: fill;
    }

    h2 {
      margin-bottom: 40px;
    }

    p {
      max-width: 696px;
      font-weight: 400;
    }
  }

  &__info {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 457px 768px;
    grid-gap: 198px;
    margin-bottom: 82px;
  }
}

.clients {
  display: grid;
  grid-template-columns: 530px 768px;
  grid-gap: 125px;
  padding-bottom: 164px;

  &__images {
    display: grid;
    grid-template-columns: repeat(3, 187.71px);
    grid-auto-rows: 25px;
    grid-row-gap: 50px;
    align-items: center;

    img {
      object-fit: cover;
      max-width: 135.19px;
      max-height: 44px;
    }
  }
}

.other {
  padding-top: 60px;
  border-radius: 18px;

  &__cards {
    display: grid;
    margin-top: 79px;
    grid-template-columns: repeat(3, 480px);
    justify-content: center;
    grid-gap: 20px;
  }
}
</style>