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
</style>