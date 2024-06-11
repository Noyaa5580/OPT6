<template>
  <nav>
    <div class="header">
      <div class="links">
        <NuxtLink to="/">
          <img src="public/assets/logo.svg" alt="" />
        </NuxtLink>
        <NuxtLink to="/rates"><p>Тарифы</p></NuxtLink>
        <NuxtLink to="/contacts"><p>Контакты</p></NuxtLink>
      </div>
      <div class="buttons">
        <button class="number">+7 495 118-44-22</button>
        <button class="auth">Вход</button>
        <button class="reg">Регистрация</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
nav
  width: 100%
  height: 60px
  background: linear-gradient(90deg, #000 30%, #1c2734 73%)
  display: flex
  align-items: center
  justify-content: center
  color: #fff

.header
  display: flex
  width: 1161px
  justify-content: space-between
  align-items: center
a
  color: #fff
  text-decoration: none

.links
  display: flex
  gap: 30px

  p
    font-weight: 400
    font-size: 18px
    cursor: pointer

.buttons
  display: flex
  gap: 30px
  button
    transition: all .3s ease-in-out
    background: none
    color: #fff
    border: none
    font-size: 18px
    cursor: pointer
    font-weight: 400

.number
  font-weight: 700 !important

.reg
  width: 117px
  height: 37px
  background: #0584FE !important
  border-radius: 7px
  font-size: 15px !important

button:hover

  scale: 1.1
  padding-bottom: 1px

button:active
  scale: 0.9
</style>