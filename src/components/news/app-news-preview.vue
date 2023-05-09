<template>
  <section class="news-preview container" v-if="news">
    <h2 class="text-center">
      Инсайты
    </h2>
    <div class="news-preview__cards">
      <app-news-card v-bind="newsMock" />
      <app-news-card />
      <app-news-card />
    </div>
  </section>
</template>

<script setup>
import AppNewsCard from "@/components/news/app-news-card.vue";
import { inject } from "vue";

const { news } = inject('project-features')

const newsMock = {
  title: 'Как ChatGPT изменит наше сознание',
  date: 'Инсайт / Май / 2023',
  preview: 'Короткое описание основной мысли новостного блока в данном фрейме, Короткое описание основной мысли новостного блока в данном фрейме  ',
  image: 'https://avatars.mds.yandex.net/i?id=6efb7934e2920b44b92403d0dc75e84d19295e04-5029416-images-thumbs&n=13',
  link: '',
  color: '#D9FF8E'
}
</script>

<style scoped lang="scss">
.news-preview {
  background: $color-dark-2;
  border-radius: 18px;
  padding: 40px 71px 49px;

  h2 {
    margin-bottom: 59px;
  }

}
</style>