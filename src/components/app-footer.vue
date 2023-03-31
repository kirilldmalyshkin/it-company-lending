<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
    <div class="footer__logo">
      <img src="/images/geeklab-log.svg" alt="geeklab logo">
    </div>
    <div class="footer__social">
      <a href=""><img src="/images/Viber.svg" alt=""></a>
      <a href=""><img src="/images/Telegram.svg" alt=""></a>
    </div>
      <div class="footer__address">
          Москва, Россия<br>
          Проспект Мира, 202, ст.3<br>
      </div>
      <div class="footer__address footer__address-2">
          Санкт-Петербург, Россия<br>
          Малая Морская улица, 18<br>
      </div>
<!--    <div class="footer__address">-->

<!--    </div>-->
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
    grid-template-areas: 'logo address social' '. address2 menu ' 'copy copy copy';
    grid-template-columns: 261.6px 289px 132px;
    @media screen and (max-width: 1200px){
      grid-template-columns: 1fr;
      grid-template-areas: 'logo' 'address' 'menu' 'social' 'copy';
    }
  }
  &__logo {
    width: 261.6px;
    grid-area: logo;
    @media screen and (max-width: 769px) {
      width: 106.78px;
    }
  }
  &__phone {
    grid-area: phone;
    font-weight: 400;
    font-size: 42px;
    line-height: 55px;
    @media screen and (max-width: 769px) {
      padding-top: 50px;
      font-size: 32px;
      line-height: 42px;
    }
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
    //padding-top: 32px;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 769px) {
      padding-top: 15px;
      font-size: 16px;
      line-height: 25px;
    }
  }

  &__address-2 {
    grid-area: address2;
  }

  &__menu {
    grid-area: menu;
    align-self: end;
    @media screen and (max-width: 769px) {
      padding-top: 45px;
      padding-bottom: 25px;
    }
    li {
      font-weight: 300;
      font-size: 22px;
      line-height: 29px;
      @media screen and (max-width: 769px){
        margin-bottom: 7px;
        font-size: 16px;
        line-height: 21px;
      }
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
    @media screen and (max-width: 769px){
      padding-top: 40px;
      grid-gap: 7px;
    }
  }
}
</style>
