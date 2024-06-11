<template>
  <div>
    <div class="form_container">
      <FormComponent />
      <img src="/public/assets/laptop.svg" alt="" />
    </div>
    <AdvantagesComponent />
    <SliderComponent />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
div
  flex-direction: column
  width: 100%
  display: flex
  align-items: center

.form_container
  display: flex
  flex-direction: row
  gap: 40px
  margin-top: 79px
  width: 1135px
  margin-bottom: 104px

@media (min-width: 320px) and (max-width: 767px)
  div
    overflow: hidden
  .form_container
    flex-direction: column
    margin-top: 32px
    margin-bottom: 40px
    img
      max-width: 300px

@media (min-width: 768px) and (max-width: 1023px)
  div
    overflow: hidden
  .form_container
    flex-direction: column
    margin-top: 32px
    margin-bottom: 40px
    img
      max-width: 500px

@media (min-width: 1024px) and (max-width: 1439px)
  div
    overflow: hidden
  .form_container
    width: 1000px
    margin-top: 32px
    margin-bottom: 40px
    gap: 20px
    img
      max-width: 400px
</style>