<template>
  <div>
    <h2>Документы</h2>
    <div class="slider">
      <div class="controls">
        <div class="button" id="left" @click="this.slider_left()">
          <img src="/public/assets/slider/left.svg" alt="" />
        </div>
        <div class="button" id="right" @click="this.slider_right()">
          <img src="/public/assets/slider/right.svg" alt="" />
        </div>
      </div>
      <div class="slider_line" ref="slider">
        <SliderCard
          v-for="card in cards1"
          :key="card"
          :name="card.name"
          :desc="card.desc"
          :id="card.id"
        />
        <SliderCard
          v-for="card in cards2"
          :key="card"
          :name="card.name"
          :desc="card.desc"
          :id="card.id"
        />
        <SliderCard
          v-for="card in cards3"
          :key="card"
          :name="card.name"
          :desc="card.desc"
          :id="card.id"
        />
        <SliderCard
          v-for="card in cards4"
          :key="card"
          :name="card.name"
          :desc="card.desc"
          :id="card.id"
        />
        <SliderCard
          v-for="card in cards5"
          :key="card"
          :name="card.name"
          :desc="card.desc"
          :id="card.id"
        />
      </div>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cards1: [
        {
          id: 1,
          name: "Лицензионный договор",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
        {
          id: 2,
          name: "Соглашение 2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .",
        },
        {
          id: 3,
          name: "Политика обработки персональных данных",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
      ],
      cards2: [
        {
          id: 4,
          name: "Информация об оплате",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        },
        {
          id: 5,
          name: "Соглашение 5",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
        {
          id: 6,
          name: "Соглашение",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
      cards3: [
        {
          id: 7,
          name: "Информация об оплате",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        },
        {
          id: 8,
          name: "Соглашение 8",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
        {
          id: 9,
          name: "Соглашение",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
      cards4: [
        {
          id: 10,
          name: "Информация об оплате",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        },
        {
          id: 11,
          name: "Соглашение 12",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
        {
          id: 12,
          name: "Соглашение",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
      cards5: [
        {
          id: 13,
          name: "Информация об оплате",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        },
        {
          id: 14,
          name: "Соглашение 5",
          desc: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
        },
        {
          id: 15,
          name: "Соглашение",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
      slider_pos: 0,
    };
  },
  methods: {
    slider_left() {
      this.slider_pos += 101.9;
      this.$refs.slider.style.left = this.slider_pos + "%";
      if (this.slider_pos > 0) {
        this.slider_pos = 0;
        this.$refs.slider.style.left = this.slider_pos + "%";
      }
    },
    slider_right() {
      this.slider_pos -= 101.9;
      this.$refs.slider.style.left = this.slider_pos + "%";
      if (this.slider_pos <= -408) {
        this.slider_pos = 0;
        this.$refs.slider.style.left = this.slider_pos + "%";
      }
    },
  },
};
</script>

<style lang = "sass" scoped>
h2
    margin-top: 84px
    font-weight: 700
    font-size: 34px
    line-height: 120%

.slider
    width: 1105px
    height: 470px
    margin-top: 40px
    overflow: hidden
    display: flex
    justify-content: flex-start
    align-items: center

.slider_line
    padding-left: 4px
    display: flex
    align-items: center
    padding-left: 10px
    gap: 35px
    position: relative
    height: 470px
    width: 500%
    left: 0%
    z-index: 1
    transition: all .4s ease-in-out

.controls
    position: absolute
    min-width: 1100px
    height: 80px
    display: flex
    justify-content: space-between
    z-index: 2

.button
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    height: 80px
    background-color: #A6B7D4
    opacity: 0.5
    transition: .1s all ease-in-out
    cursor: pointer

.button:hover
    opacity: 1

#left
    border-radius: 0px 50% 50% 0px

#right
    border-radius: 50% 0px 0px 50%
</style>