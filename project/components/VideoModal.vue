<template>
  <div class="modal">
    <p class="close">
      <img
        src="/public/assets/icons/cross.svg"
        alt=""
        @click="this.unmountComponent()"
      />
    </p>
    <iframe
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

<style lang="sass" scoped>
.modal
  width: 100%
  height: 100vh
  position: fixed
  z-index: 3
  top: 0px
  left: 0px
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.79)

p
  display: flex
  width: 960px
  justify-content: flex-end
  margin-bottom: 8px

iframe
  width: 960px
  height: 532px

img
  cursor: pointer

@media (min-width: 320px) and (max-width: 767px)

  iframe
    width: 300px
    height: 200px
  .modal
    overflow: hidden
  p
    width: 300px

@media (min-width: 768px) and (max-width: 1023px)

  iframe
    width: 700px
    height: 400px
  .modal
    overflow: hidden
  p
    width: 700px


@media (min-width: 1024px) and (max-width: 1439px)
  iframe
    width: 800px !important
    height: 400px !important
  p
    width: 800px
</style>