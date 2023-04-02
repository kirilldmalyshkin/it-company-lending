<template>
  <main>
    <projects-intro/>
    <project-item v-for="project in projects" :key="project.title" v-bind="project" />
    <app-contact/>
  </main>
</template>

<script setup>
import ProjectsIntro from "@/pages/projects/omponents/projects-intro.vue";
import ProjectItem from "@/pages/projects/omponents/project-item.vue";
import AppContact from "@/components/app-contact.vue";

const projects = [
  {
    title: 'GreenWay Global',
    image: '/images/projects/greenway-project.jpg',
    tasks: [
      'GreenWay Global - международная компания по производству и продаже экологичных продуктов: функционального питания, косметических средств, биологических активных добавок, продуктов для чистоты дома и средств личной гигиены.'
    ],
    results: [
      'Полный переход на новый дизайн и интрфейс',
      'Интеграции с банками разных стран',
      'Интеграции с банками разных стран',
      'Интеграции с банками разных стран',
      'Реализовали логистику в разных странах',
      'Реализовали множества сервисов для внутренней работы бизнеса',
      'Реализовали множества сервисов для внутренней работы бизнеса',
      'Реализовали множества сервисов для внутренней работы бизнеса'
    ],
    stack: [
      'PHP, Python, 1C, Redis, Vue 3, Clickhouse, PostgreSQL'
    ]
  }
]
</script>

<style scoped>

</style>