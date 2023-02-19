<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
    <div class="footer__logo">
      <img src="/images/incode-logo.svg" alt="">
    </div>
    <div class="footer__phone">
      +78003028848
    </div>
    <div class="footer__social">
      <a href=""><img src="/images/Viber.svg" alt=""></a>
      <a href=""><img src="/images/Telegram.svg" alt=""></a>
    </div>
    <div class="footer__address">
      Санкт-Петербург, Россия<br>
      Малая Морская улица, 18<br>
      Санкт-Петербург, 190000
    </div>
    <div class="footer__menu">
      <nav>
        <ul>
          <li>
            <a href="">О компании</a>
          </li>
          <li>
            <a href="">Услуги</a>
          </li>
          <li>
            <a href="">Кейсы</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer__copyrights">
      <span>© 2023</span>
      <a href="">Политика конфиденциальности</a>
      <a href="">Политика файлов Cookie</a>
    </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #000000;
  .container {
    margin-top: 112px;
    padding-top: 80px;
    padding-bottom: 80px;
    display: grid;
    grid-column-gap: 200px;
    grid-template-areas: 'logo phone social' '. address menu ' 'copy copy copy';
    grid-template-columns: 261.6px 289px 132px;
    @media screen and (max-width: 1200px){
      grid-template-columns: 1fr;
      grid-template-areas: 'logo' 'phone' 'address' 'menu' 'social' 'copy';
    }
  }
  &__logo {
    width: 261.6px;
    grid-area: logo;
  }
  &__phone {
    grid-area: phone;
    font-weight: 400;
    font-size: 42px;
    line-height: 55px;
  }
  &__social {
    grid-area: social;
    display: flex;
    grid-gap: 20px;
    img {
      width: 35px;
    }
  }
  &__address {
    grid-area: address;
    padding-top: 32px;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
  }
  &__menu {
    grid-area: menu;
    align-self: end;
    li {
      font-weight: 300;
      font-size: 22px;
      line-height: 29px;
    }
  }
  &__copyrights {
    padding-top: 80px;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    a, span {
      &::after {
        content: '|';
        margin: 0 8px;
      }
    }
    a:last-child::after {
      display: none;
    }

    grid-area: copy;

    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      a, span {
        &::after {
          content: '';
        }
      }
    }
  }
}
</style>
