<template>
  <div class="services-preference-item">
    <span class="services-preference-item__quantity" v-text="quantity" />
    <span class="services-preference-item__description" v-html="description" />
  </div>
</template>

<script setup>
defineProps({
  quantity: null,
  description: null
})

</script>

<style scoped lang="scss">
.services-preference-item {
  @include flex-center;

  grid-gap: 26px;

  &__quantity {
    font-weight: 200;
    font-size: 3.25rem;
  }

  &__description {
    font-weight: 200;
    font-size: 1.25rem;
    line-height: 130%;
    letter-spacing: -0.03em;
  }
}

</style>