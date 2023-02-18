<script setup>
  import AppHeader from "@/components/app-header.vue";
  import IndexPage from "@/pages/index-page.vue";
  import AppFooter from "src/components/app-footer.vue";
</script>

<template>
  <app-header />
  <index-page />
  <app-footer />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
