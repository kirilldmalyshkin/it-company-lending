<template>
  <article class="project-item container">
    <header class="project-item__tabs">
      <button @click="activeTab = 'about'" :class="{'active': activeTab === 'about'}">
        <span> О проекте</span>
        <svg width="348" height="120" viewBox="0 0 348 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M345.597 93.4236C352.097 105.417 343.413 120 329.772 120L18 120C8.05887 120 7.04529e-07 111.941 1.57361e-06 102L8.91712e-06 18C9.7862e-06 8.05886 8.05888 -2.50093e-07 18 6.18989e-07L284.249 2.38952e-05C290.854 2.44726e-05 296.928 3.61698 300.075 9.42363L345.597 93.4236Z"
              :fill="activeTab === 'about' ? '#E77975' : '#474749'"
          />
        </svg>
      </button>
      <button @click="activeTab = 'stack'" :class="{'active': activeTab === 'stack'}">
        <span>Стек технологий</span>
        <svg width="348" height="120" viewBox="0 0 348 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M345.597 93.4236C352.097 105.417 343.413 120 329.772 120L18 120C8.05887 120 7.04529e-07 111.941 1.57361e-06 102L8.91712e-06 18C9.7862e-06 8.05886 8.05888 -2.50093e-07 18 6.18989e-07L284.249 2.38952e-05C290.854 2.44726e-05 296.928 3.61698 300.075 9.42363L345.597 93.4236Z"
              :fill="activeTab !== 'about' ? '#E77975' : '#474749'"
          />
        </svg>
      </button>
    </header>
    <main class="project-item__content">
        <h2 class="content__title">
          {{ title }}
        </h2>
        <img :src="image" alt="" class="content__image">
        <div class="content__info">
          <h4>
            {{ activeTab === 'about' ? 'Задачи' : 'Технологии' }}<span>:</span>
          </h4>
          <p v-for="paragraph in info" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <template v-if="activeTab === 'about'">
          <div class="content__results">
            <h4>
              Результаты<span>:</span>
            </h4>
            <ul>
              <li v-for="result in results" >
                {{ result }}
              </li>
            </ul>
          </div>
        </template>
    </main>
  </article>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  title: String,
  image: String,
  tasks: Array,
  stack: Array,
  results: Array
})

const activeTab = ref('about')

const info = computed(() => {
  return activeTab.value === 'about' ? props.tasks : props.stack
})

</script>

<style scoped lang="scss">
.project-item {
  &__content {
    background: #27272A;
    border-radius: 18px;
    padding: 74px 40px 20px 41px;
    display: grid;
    transform: translateX(-1px);

    justify-content: space-between;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: fit-content auto;
    grid-template-areas:
        'title image'
        'info image'
        'results results';
  }

  &__tabs {
    transform: translateY(80px);
    button {
      color: #FFFFFF;
      border-radius: 18px;
      position: relative;
      z-index: 5;
      span {
        position: absolute;
        left: 59px;
        top: 16px;
      }
      &.active {
        color: #000000;
        z-index: 10;
      }
      &:last-child {
        transform: translateX(-70px);
      }
    }
  }
}
.content {
  &__title {
    grid-area: title;
  }

  &__image {
    grid-area: image;
    border-radius: 12px;
  }

  &__info {
    grid-area: info;
    padding-top: 28px;
    h4 {
      margin-bottom: 22px;
      color: #A08EFF;
      span {
        color: white;
      }
    }
    p {
      font-size: 20px;
    }
  }

  &__results {
    grid-area: results;
    padding-top: 32px;
    position: relative;
    h4 {
      color: #C4DBFB;
      span {
        color: white;
      }
      position: absolute;
      top: -20px;
    }
    ul {
      display: grid;
      grid-template-columns: 600px 1fr;
      li {
        margin-bottom: 17px;
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.03em;
        &::before {
          content: '+';
          margin-right: 15px;
        }
      }
    }
  }
}
</style>