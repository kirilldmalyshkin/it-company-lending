<template>
  <section class="news-preview container" v-if="isNewsActive">
    <h2 class="text-center">
      Инсайты
    </h2>
    <div class="news-preview__cards">
      <app-news-card v-for="newsItem in news" v-bind="newsItem" />
    </div>
    <div class="mt-61">
      <button class="btn mx-auto min-width-180">
        Смотреть больше
      </button>
    </div>
  </section>
</template>

<script setup>
import AppNewsCard from "@/components/news/app-news-card.vue";
import { inject } from "vue";

const { news: isNewsActive } = inject('project-features')

const newsMock = {
  title: 'Как ChatGPT изменит наше сознание',
  date: 'Инсайт / Май / 2023',
  preview: 'Короткое описание основной мысли новостного блока в данном фрейме, Короткое описание основной мысли новостного блока в данном фрейме  ',
  image: 'https://avatars.mds.yandex.net/i?id=6efb7934e2920b44b92403d0dc75e84d19295e04-5029416-images-thumbs&n=13',
  link: '',
  color: '#D9FF8E'
}

const news = [newsMock, newsMock, newsMock]
</script>

<style scoped lang="scss">
.news-preview {
  background: $color-dark-2;
  border-radius: 18px;
  padding: 40px 71px 49px;

  h2 {
    margin-bottom: 59px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

}
</style>