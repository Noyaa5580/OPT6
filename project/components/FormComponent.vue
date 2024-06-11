<template>
  <!-- для правильной валидации следует использовать vuelidate -->
  <div>
    <h2>Проверьте штрафы и зарегестрируйтесь в 1 клик</h2>
    <form>
      <div class="car_number">
        <div class="input">
          <label for="name">Номер автомобиля</label>
          <input
            type="text"
            name="number"
            id="number"
            v-model="this.formData.number"
            ref="number"
          />
        </div>
        <div class="input">
          <label for="region">Регион</label>
          <input
            type="text"
            name="region"
            id="region"
            v-model="this.formData.region"
            ref="region"
          />
        </div>
      </div>
      <div class="input" style="margin-top: 16px">
        <label for="ts_reg">Свидетельство о регистрации ТС</label>
        <input
          type="text"
          name="ts_reg"
          id="ts_reg"
          v-model="this.formData.ts_reg"
          ref="ts_reg"
        />
      </div>
    </form>
    <div class="buttons">
      <button id="send" @click="postData">
        Проверить штрафы
        <img src="/public/assets/icons/arrow.svg" alt="" id="arrow" />
      </button>
      <button id="video" @click="this.video_state = true">
        <img src="/public/assets/icons/youtube.svg" alt="" />
        <p style="margin: 0px 4px">О сервисе</p>
        <p style="font-size: 15px; color: #1253a2">(1 мин. 20 сек)</p>
      </button>
    </div>
    <Notivue v-slot="item">
      <Notification :item="item" :theme="pastelTheme">
        <NotificationProgress :item="item" />
      </Notification>
    </Notivue>
    <Transition>
      <div v-if="this.video_state">
        <VideoModal @update:state="close_video" /></div
    ></Transition>
    <p class="agree">
      Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
      персональных данных и принимаете оферту
    </p>
  </div>
</template>

<script>
import { Notivue, Notification, push, pastelTheme } from "notivue";
export default {
  data: function () {
    return {
      formData: {
        number: "",
        region: "",
        ts_reg: "",
      },
      video_state: false,
    };
  },
  methods: {
    postData() {
      console.log(this.formData);
      if (
        this.formData.number != "" &&
        this.formData.region != "" &&
        this.formData.ts_reg != ""
      ) {
        push.success("Your message has been successfully sent.");
      } else {
        this.$refs.number.style.border = "1px solid #ff0000";
        this.$refs.region.style.border = "1px solid #ff0000";
        this.$refs.ts_reg.style.border = "1px solid #ff0000";
        push.error("Error");
        setTimeout(() => {
          this.$refs.number.style.border = "1px solid #BCBCBC";
          this.$refs.region.style.border = "1px solid #BCBCBC";
          this.$refs.ts_reg.style.border = "1px solid #BCBCBC";
        }, 3000);
      }
    },
    close_video(state) {
      this.video_state = state;
    },
  },
};
</script>

<style lang = "sass" scoped>
.Notivue__notification
  min-width: 400px
  display: flex
  flex-direction: row

.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,
.v-leave-to
  opacity: 0

div
  display: flex
  flex-direction: column

/* интерпритатор иначе воспринимает шрифт, в отличии от Figma => -2px  */
h2
  font-weight: 700
  font-size: 39px
  width: 563px
  line-height: 120%

.car_number
  flex-direction: row
  width: 563px
form
  margin-top: 25px
  width: 563px
label
  font-weight: 400
  font-size: 12px
  line-height: 120%
  margin-bottom: 5px

input
  height: 40px
  border-radius: 5px
  border: 1px solid #BCBCBC
  padding-left: 12px
  transition: .3s all ease-in-out

input:focus
  outline: none
  border: 1px solid #0584FE

#number
  width: 320px
  margin-right: 30px

#region
  width: 213px

#ts_reg
  width: 563px

.buttons
  margin-top: 21px
  display: flex
  flex-direction: row
  width: 563px
  gap: 21px
  button
    display: flex
    align-items: center
    justify-content: center
    transition: .3s all ease-in-out
    cursor: pointer

button:hover
  scale: 1.1
button:active
  scale: 0.9

#send
  background: #0584FE
  width: 210px
  height: 45px
  font-size: 18px
  border: none
  border-radius: 7px
  gap: 4px
  color: #fff

#arrow
  width: 14px
  height: 12px

#video
  width: 258px
  height: 45px
  font-size: 18px
  background: #fff
  border-radius: 7px
  border: 1px solid #0584FE

.agree
  margin-top: 10px
  font-weight: 400
  font-size: 13px
  line-height: 120%
  color: #8f8f8f
  width: 563px
</style>

