<template>
  <section class="container stack">
    <h2>Технологии и процессы</h2>
    <p>
      Работаем по стандартам ISO 9126 «Software Engineering — Product Quality»<br>
      и IEEE 829−1998. Система менеджмента качества сертифицирована по стандарту ISO 9001:2015.<br>
      Международный стандарт: ISO/IEC 12 207:2008, ГОСТ Р ИСО/МЭК 12 207−2010
    </p>
    <ul>
      <li
          v-for="item in technologies"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
  const technologies = [
      'PHP', 'Python', 'C++', 'NGINX', 'Typescript', 'SPA',
      'Microservices', 'Node.js', 'Redis', 'gRPC', 'PostgreSQL',
      'Nuxt', 'Swift', 'Kotlin', 'MongoDB', 'Docker', 'Protobuf',
      'Ansible', 'Camunda BPM', 'Kubernetes', 'Terraform', 'Vue3'
  ]

</script>

<style scoped lang="scss">
.stack {
  padding-top: 81px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 81px;
  }

  h2 {
    margin-bottom: 26px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 20px;
    justify-content: center;

    max-width: 900px;
    margin: 46px auto 0;

    li {
      @include flex-center;
      @include letter-spacing;
      background: $color-dark-2;
      border-radius: 45px;

      font-weight: 200;
      font-size: 1.25rem;
      line-height: 130%;

      color: $color-white;

      min-width: 115px;
      height: 54px;
      padding: 8px 30px 9px;

      &:hover {
        cursor: pointer;
        background: #404043;
      }
    }
  }
}
</style>