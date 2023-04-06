<template>
  <section class="partners">
    <div class="partners__info container">
      <img src="/images/temp/our-clients.svg" alt="our clients">
      <div>
        <h2>Наши клиенты</h2>
        <p>Среди наших клиентов крупнейшие российские и международные компании</p>
      </div>
    </div>
    <div class="partners__scrollbar">
      <div class="partners__images">
        <img v-for="(image, index) in imagesCycle" :key="`${image}-${index}`" :src="`/images/partners/${image}.svg`" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  'тануки',
  'оптбанк',
  'ржд',
  'лексус',
  'сбер',
  'шиндер',
  'пик',
  'тодес',
  'гринвей',
  'ауди',
  'рено',
  'ввф',
  'тхуле'
];

const repeatedImages = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < images.length; j++) {
    repeatedImages.push(images[j]);
  }
}

const imagesCycle = repeatedImages.concat(repeatedImages.slice(0, repeatedImages.length - images.length));

</script>

<style scoped lang="scss">
.partners {
  margin-top: 273px;

  @media screen and (max-width: 769px) {
    margin-top: 160px;
  }

  &__info {
    display: grid;
    grid-template-columns: 585px 1fr;
    align-items: center;
    grid-gap: 200px;
    margin-bottom: 100px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-template-rows: 150px;
      text-align: center;
    }

    @media screen and (max-width: 769px) {
      grid-gap: 30px;
    }

    h2 {
      margin-bottom: 10px;
    }
  }

  &__scrollbar {
    position: relative;
    height: 286px;
    overflow: hidden;

    .partners__images {
      display: flex;
      gap: 24px;
      position: absolute;
      animation: marquee 200s linear infinite;

      @media screen and (max-width: 769px) {
        gap: 10px;
      }

      img {
        pointer-events: none;
        user-select: none;
        width: 187px;

        @media screen and (max-width: 769px) {
          width: 80px;
        }
      }
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-200%);
  }
}
</style>
