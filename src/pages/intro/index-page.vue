<script setup>
import IntroSection from "./sections/intro-section.vue";
import CompanySection from "./sections/company-section.vue";
import CasesSection from "./sections/cases-section/cases-section.vue";
import AppContact from "@/components/app-contact.vue";
import PartnersSection from "./sections/partners-section.vue";
import StackTechnologies from "./sections/stack-technologies.vue";
import AppNewsPreview from "@/components/news/app-news-preview.vue";
</script>

<template>
  <main class="main-page">
    <intro-section />
    <company-section />
    <cases-section />
    <stack-technologies />
    <app-contact />
    <partners-section />
    <app-news-preview class="mt-212" />
  </main>
</template>

<style scoped lang="scss">
.main-page {
  background: $color-dark;
}

</style>
