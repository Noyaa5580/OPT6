<template>
  <div>
    <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="advantages">
      <div v-for="advantage in advantages" :key="advantage" class="advantage">
        <img :src="advantage.img" alt="" />
        <div class="adv_description">
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "~/public/assets/advantages/infinity.svg";
import img2 from "~/public/assets/advantages/map.svg";
import img3 from "~/public/assets/advantages/shield.svg";
import img4 from "~/public/assets/advantages/bell.svg";
import img5 from "~/public/assets/advantages/check.svg";
import img6 from "~/public/assets/advantages/time.svg";

export default {
  data: function () {
    return {
      advantages: [
        {
          title: "Неограниченый автопарк",
          desc: "Можно добавить неограниченное кол-во машин и водителей",
          img: img1,
        },
        {
          title: "Сокращение затрат до 50%",
          desc: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
          img: img2,
        },
        {
          title: "Безопасность",
          desc: "Данные передаются в зашифрованном виде, они доступны только получателю",
          img: img3,
        },
        {
          title: "Уведомление о погашении",
          desc: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
          img: img4,
        },
        {
          title: "Квитанция об оплате",
          desc: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
          img: img5,
        },
        {
          title: "Все история сохраняется по каждой машине",
          desc: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
          img: img6,
        },
      ],
    };
  },
};
</script>

<style lang = "sass" scoped>
h2
  font-weight: 700
  font-size: 34px
  line-height: 120%

.advantages
  width: 1156px
  display: flex
  flex-wrap: wrap
  gap: 35px
  margin-top: 34px
.advantage
  padding: 42px 20px  
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
  width: 362px
  max-height: 174px
  gap: 16px
  border-radius: 10px
  background-color: #FBFCFD
  border: 1px solid #EEEFF1
  transition: all .3s cubic-bezier(.56,-0.3,.06,1.53)
  img
    max-width: 65px

.advantage:hover
  scale: 1.07
  rotate: .5deg

.adv_description
  h3
    font-weight: 700
    font-size: 18px
    line-height: 120%
    color: #1253a2
    margin-bottom: 10px
  p
    font-weight: 400
    font-size: 15px
    line-height: 120%
</style>