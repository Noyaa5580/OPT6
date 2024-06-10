<template>
  <div>
    <p class="close"><img src="/public/assets/icons/cross.svg" alt="" @click="this.unmountComponent()"></p>
    <iframe
      width="960"
      height="532"
      src="https://www.youtube.com/embed/ywg7cW0Txs4?si=8Alr50QDIP6bN_9P"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
    data: function () {
    return {
      modal_state: false,
    };
  },
  methods: {
    unmountComponent() {
      this.$emit("update:state", this.modal_state);
    },
  },
};
</script>

<style lang = "sass" scoped>
div
  width: 100%
  min-height: 100vh
  overflow: hidden
  position: absolute
  top: 0px
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.79)

p
  display: flex
  width: 960px
  justify-content: flex-end
  margin-bottom: 8px

img 
  cursor: pointer
</style>