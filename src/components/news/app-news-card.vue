<template>
  <div class="news-preview-card">
    <img :src="image" alt="">
    <div class="news-preview-card__content">
      <div class="news-preview-card__date">
        {{ date }}
      </div>
      <h5>{{ title }}</h5>
      <p class="p-small">
        {{ replaceLSEP(preview) }}
      </p>
      <a :href="link">
        читать
      </a>
    </div>
  </div>
</template>

<script setup>
  import {replaceLSEP} from "@/helpers/filters.js";

  defineProps({
    title: '',
    date: '',
    preview: '',
    image: 'null',
    link: '',
    color: ''
  })
</script>

<style scoped lang="scss">
.news-preview-card {
  max-width: 465px;
  height: 427px;
  border-radius: 18px;
  overflow: hidden;
  background: $color-dark;
  color: $color-white;
  position: relative;

  &:hover {
    background: v-bind(color);
    color: $color-dark;
  }

  img {
    border-radius: 18px;
    max-height: 197px;
    object-fit: cover;
  }

  &__content {
    padding: 17px 11px 29px 29px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &__date {
    font-size: 14px;
    margin-bottom: 20px;
  }

  h5 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  p {
    flex-grow: 2;
  }

  a {
    position: absolute;
    bottom: 29px;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    flex: 1 1 20px;
    text-decoration: underline;
  }
}
</style>