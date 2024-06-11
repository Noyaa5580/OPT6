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

@media (min-width: 320px) and (max-width: 767px)
  .header
    width: 300px
    justify-content: space-between

  .links
    flex-direction: column
    justify-content: center
    padding-top: 2px
    height: 100%
    gap: 0px
    margin-right: 12px
    p
      font-size: 11px
    img
      width: 70px

  .buttons
    gap: 8px
    button
      font-size: 11px

  .reg
    width: 70px
    height: 25px
    font-size: 10px !important

@media (min-width: 768px) and (max-width: 1023px)
  .header
    width: 740px
    justify-content: space-between
    align-items: flex-end

  .links
    padding-bottom: 1px

@media (min-width: 1024px) and (max-width: 1439px)
  .header
    width: 980px
</style>