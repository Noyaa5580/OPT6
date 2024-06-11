<template>
  <div class="card">
    <div class="info">
      <p class="name">{{ name }}</p>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
    <NuxtLink :to="'/docs/' + id"> <button>Перейти</button></NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    desc: String,
  },
};
</script>

<style lang="sass" scoped>
.card
  border: 1px solid #eeeff1
  border-radius: 10px
  width: 340px
  height: 450px
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12)
  background: #fff
  padding: 25px
  display: flex
  flex-direction: column
  justify-content: space-between

.name
  font-weight: 700
  font-size: 26px
  line-height: 120%
  color: #1253a2

.desc
  margin-top: 15px
  font-weight: 400
  font-size: 18px
  line-height: 120%
  color: #000

button
  border-radius: 7px
  background: #0584fe
  color: #fff
  border: none
  width: 290px
  height: 45px
  font-weight: 400
  font-size: 18px
  color: #fff
  transition: .3s all ease-in-out

button:hover
  scale: 1.1
button:active
  scale: 1

@media (min-width: 320px) and (max-width: 767px)
  .card
    width: 300px
    padding: 12px
    height: 350px
  button
    width: 250px

@media (min-width: 768px) and (max-width: 1023px)
  .card
    min-width: 300px
    padding: 12px
    height: 350px
  button
    width: 250px

@media (min-width: 1024px) and (max-width: 1439px)
  .card
    max-width: 295px
    padding: 12px
    height: 350px
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05)
  button
    width: 250px
</style>