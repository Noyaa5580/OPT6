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
    <div class="pagination">
      <div
        class="pagination_element_active"
        ref="pg1"
        @click="this.pg1()"
      ></div>
      <div class="pagination_element" ref="pg2" @click="this.pg2()"></div>
      <div class="pagination_element" ref="pg3" @click="this.pg3()"></div>
      <div class="pagination_element" ref="pg4" @click="this.pg4()"></div>
      <div class="pagination_element" ref="pg5" @click="this.pg5()"></div>
    </div>
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
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
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
      pg_pos: 1,
    };
  },
  methods: {
    slider_left() {
      if (
        document.body.clientWidth >= 320 &&
        document.body.clientWidth <= 767
      ) {
        this.slider_pos += 97.3;
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos >= 0) {
          this.slider_pos = -1362.2;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
      } else if (
        document.body.clientWidth >= 768 &&
        document.body.clientWidth <= 1023
      ) {
        this.slider_pos += 97.3;
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos >= 0) {
          this.slider_pos = -681.2;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
      } else if (
        document.body.clientWidth >= 1024 &&
        document.body.clientWidth <= 1439
      ) {
        this.slider_pos += 99;
        this.pg_pos -= 1;
        if (this.pg_pos < 1) {
          this.pg_pos = 5;
        }
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos >= 0) {
          this.slider_pos = -397;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
        switch (this.pg_pos) {
          case 1:
            this.pg1();
            break;
          case 2:
            this.pg2();
            break;
          case 3:
            this.pg3();
            break;
          case 4:
            this.pg4();
            break;
          case 5:
            this.pg5();
            break;
          default:
            break;
        }
      } else {
        this.slider_pos += 101.9;
        this.$refs.slider.style.left = this.slider_pos + "%";
        this.pg_pos -= 1;
        if (this.pg_pos < 1) {
          this.pg_pos = 5;
        }
        if (this.slider_pos > 0) {
          this.slider_pos = -407;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
        switch (this.pg_pos) {
          case 1:
            this.pg1();
            break;
          case 2:
            this.pg2();
            break;
          case 3:
            this.pg3();
            break;
          case 4:
            this.pg4();
            break;
          case 5:
            this.pg5();
            break;
          default:
            break;
        }
      }
    },
    slider_right() {
      if (
        document.body.clientWidth >= 320 &&
        document.body.clientWidth <= 767
      ) {
        this.slider_pos -= 97.3;
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos <= -1363) {
          this.slider_pos = 0;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
      } else if (
        document.body.clientWidth >= 768 &&
        document.body.clientWidth <= 1023
      ) {
        this.slider_pos -= 97.3;
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos <= -683) {
          this.slider_pos = 0;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
      } else if (
        document.body.clientWidth >= 1024 &&
        document.body.clientWidth <= 1439
      ) {
        this.slider_pos -= 99;
        this.pg_pos += 1;
        if (this.pg_pos > 5) {
          this.pg_pos = 1;
        }
        this.$refs.slider.style.left = this.slider_pos + "%";
        if (this.slider_pos <= -397) {
          this.slider_pos = 0;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
        switch (this.pg_pos) {
          case 1:
            this.pg1();
            break;
          case 2:
            this.pg2();
            break;
          case 3:
            this.pg3();
            break;
          case 4:
            this.pg4();
            break;
          case 5:
            this.pg5();
            break;
          default:
            break;
        }
      } else {
        this.slider_pos -= 101.9;
        this.$refs.slider.style.left = this.slider_pos + "%";
        this.pg_pos += 1;
        if (this.pg_pos > 5) {
          this.pg_pos = 1;
        }
        if (this.slider_pos <= -408) {
          this.slider_pos = 0;
          this.$refs.slider.style.left = this.slider_pos + "%";
        }
        switch (this.pg_pos) {
          case 1:
            this.pg1();
            break;
          case 2:
            this.pg2();
            break;
          case 3:
            this.pg3();
            break;
          case 4:
            this.pg4();
            break;
          case 5:
            this.pg5();
            break;
          default:
            break;
        }
      }
    },
    pg1() {
      if (
        document.body.clientWidth >= 1440 &&
        document.body.clientWidth <= 1920
      ) {
        this.$refs.slider.style.left = "0%";
      }

      this.$refs.pg2.classList.add("pagination_element");
      this.$refs.pg3.classList.add("pagination_element");
      this.$refs.pg4.classList.add("pagination_element");
      this.$refs.pg5.classList.add("pagination_element");
      this.$refs.pg2.classList.remove("pagination_element_active");
      this.$refs.pg3.classList.remove("pagination_element_active");
      this.$refs.pg4.classList.remove("pagination_element_active");
      this.$refs.pg5.classList.remove("pagination_element_active");
      this.$refs.pg1.classList.remove("pagination_element");
      this.$refs.pg1.classList.add("pagination_element_active");
    },
    pg2() {
      if (
        document.body.clientWidth >= 1440 &&
        document.body.clientWidth <= 1920
      ) {
        this.$refs.slider.style.left = "-101.9%";
      }
      this.$refs.pg1.classList.add("pagination_element");
      this.$refs.pg3.classList.add("pagination_element");
      this.$refs.pg4.classList.add("pagination_element");
      this.$refs.pg5.classList.add("pagination_element");
      this.$refs.pg1.classList.remove("pagination_element_active");
      this.$refs.pg3.classList.remove("pagination_element_active");
      this.$refs.pg4.classList.remove("pagination_element_active");
      this.$refs.pg5.classList.remove("pagination_element_active");
      this.$refs.pg2.classList.remove("pagination_element");
      this.$refs.pg2.classList.add("pagination_element_active");
    },
    pg3() {
      if (
        document.body.clientWidth >= 1440 &&
        document.body.clientWidth <= 1920
      ) {
        this.$refs.slider.style.left = "-203.8%";
      }
      this.$refs.pg1.classList.add("pagination_element");
      this.$refs.pg2.classList.add("pagination_element");
      this.$refs.pg4.classList.add("pagination_element");
      this.$refs.pg5.classList.add("pagination_element");
      this.$refs.pg1.classList.remove("pagination_element_active");
      this.$refs.pg2.classList.remove("pagination_element_active");
      this.$refs.pg4.classList.remove("pagination_element_active");
      this.$refs.pg5.classList.remove("pagination_element_active");
      this.$refs.pg3.classList.remove("pagination_element");
      this.$refs.pg3.classList.add("pagination_element_active");
    },
    pg4() {
      if (
        document.body.clientWidth >= 1440 &&
        document.body.clientWidth <= 1920
      ) {
        this.$refs.slider.style.left = "-305.7%";
      }
      this.$refs.pg1.classList.add("pagination_element");
      this.$refs.pg3.classList.add("pagination_element");
      this.$refs.pg2.classList.add("pagination_element");
      this.$refs.pg5.classList.add("pagination_element");
      this.$refs.pg1.classList.remove("pagination_element_active");
      this.$refs.pg2.classList.remove("pagination_element_active");
      this.$refs.pg3.classList.remove("pagination_element_active");
      this.$refs.pg5.classList.remove("pagination_element_active");
      this.$refs.pg4.classList.remove("pagination_element");
      this.$refs.pg4.classList.add("pagination_element_active");
    },
    pg5() {
      if (
        document.body.clientWidth >= 1440 &&
        document.body.clientWidth <= 1920
      ) {
        this.$refs.slider.style.left = "-407.6%";
      }
      this.$refs.pg1.classList.add("pagination_element");
      this.$refs.pg3.classList.add("pagination_element");
      this.$refs.pg4.classList.add("pagination_element");
      this.$refs.pg2.classList.add("pagination_element");
      this.$refs.pg1.classList.remove("pagination_element_active");
      this.$refs.pg3.classList.remove("pagination_element_active");
      this.$refs.pg4.classList.remove("pagination_element_active");
      this.$refs.pg2.classList.remove("pagination_element_active");
      this.$refs.pg5.classList.remove("pagination_element");
      this.$refs.pg5.classList.add("pagination_element_active");
    },
  },
};
</script>

<style lang="sass" scoped>
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
  width: 1100px
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

.pagination
  margin-top: 4px
  margin-bottom: 200px
  width: 1105px
  height: 7px
  display: flex
  align-items: center
  justify-content: center
  gap: 5px
  div
    transition: .1s all ease-in-out
    cursor: pointer
.pagination_element
  border-radius: 50%
  width: 7px
  height: 7px
  background-color: #D9D9D9
.pagination_element_active
  border-radius: 50%
  width: 10px
  height: 10px
  background-color: #007AFF

@media (min-width: 320px) and (max-width: 767px)
  .pagination
    display: none

  .controls
    width: 300px
    justify-content: space-between

  .slider
    width: 300px
  .slider_line
    padding-left: 12px
    gap: 16px

@media (min-width: 768px) and (max-width: 1023px)
  .controls
    width: 720px
    justify-content: space-between

  .slider
    width: 720px
  .slider_line
    padding-left: 30px
    gap: 50px

  .pagination
    display: none

@media (min-width: 1024px) and (max-width: 1439px)
  .controls
    width: 920px
    justify-content: space-between

  .slider
    width: 920px
    height: 400px
  .slider_line
    height: 400px
    padding-left: 12px
    gap: 8px
  .pagination
    *
      pointer-events: none
</style>