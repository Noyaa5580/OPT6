<template>
  <div class="page">
    <div class="bread">
      <NuxtLink to="/"><p>Главная страница</p></NuxtLink>
      <div class="dot"></div>
      <p>Документы</p>
      <div class="dot"></div>
      <p id="page_name">Document № {{ this.id }}</p>
    </div>
    <div class="page_content">
      <h3 class="name">Document № {{ this.id }}</h3>
      <section>
        <h3>Заголовок 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          excepturi pariatur cupiditate nam. Perferendis ipsam, sint optio velit
          illo esse sunt tenetur voluptatibus vitae neque aspernatur ex commodi
          quod aliquid deleniti autem fugit nihil debitis architecto possimus?
          Laboriosam atque omnis eum molestiae, mollitia sed ipsa ad eligendi
          fugit, deleniti voluptatum repudiandae consequuntur incidunt nulla
          voluptatem ipsam dolores necessitatibus voluptas minima illo aliquam
          voluptate voluptates veniam. Provident reprehenderit adipisci maxime
          repellendus, voluptates atque ab reiciendis porro laboriosam eaque,
          enim labore suscipit. Alias, exercitationem id, error eum beatae amet
          maxime explicabo deserunt magni veritatis nisi odio architecto soluta,
          distinctio quibusdam ratione nihil?
        </p>
      </section>
      <section>
        <h3>Заголовок 2</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          porro autem hic perspiciatis doloribus optio non illo voluptatibus
          nihil ducimus id nulla quo dolores quia qui earum, adipisci reiciendis
          omnis?
        </p>
      </section>
      <section>
        <h3>Заголовок 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          excepturi pariatur cupiditate nam. Perferendis ipsam, sint optio velit
          illo esse sunt tenetur voluptatibus vitae neque aspernatur ex commodi
          quod aliquid deleniti autem fugit nihil debitis architecto possimus?
          Laboriosam atque omnis eum molestiae, mollitia sed ipsa ad eligendi
          fugit, deleniti voluptatum repudiandae consequuntur incidunt nulla
          voluptatem ipsam dolores necessitatibus voluptas minima illo aliquam
          voluptate voluptates veniam. Provident reprehenderit adipisci maxime
          repellendus, voluptates atque ab reiciendis porro laboriosam eaque,
          enim labore suscipit. Alias, exercitationem id, error eum beatae amet
          maxime explicabo deserunt magni veritatis nisi odio architecto soluta,
          distinctio quibusdam ratione nihil?
        </p>
      </section>
    </div>
  </div>
</template>

<script >
export default {
  data: function () {
    return {
      id: useRoute().params.id,
    };
  },
};
</script>

<style lang="sass" scoped>
.page
  padding-left: 374px
  padding-right: 384px

.bread
  margin-top: 20px
  display: flex
  align-items: center
  font-weight: 400
  font-size: 13px
  line-height: 120%
  p
    cursor: pointer
    a
      color: #000
      text-decoration: none
#page_name
  color: #8f8f8f

.dot
  width: 5px
  height: 5px
  border-radius: 50%
  background-color: #000
  margin: 0px 10px

.name
  margin-bottom: 40px

.page_content
  margin-top: 20px
  h3
    font-weight: 700
    font-size: 41px
    line-height: 120%
  section
    margin-top: 30px
    h3
      margin-bottom: 25px

@media (min-width: 320px) and (max-width: 767px)
  .page
    padding-left: 10px
    padding-right: 10px

  .bread
    font-size: 10px
    a
      color: #000
      text-decoration: none
  .page_content
    section
      margin-top: 12px
      h3
        margin-bottom: 8px
      p
        font-size: 12px
    h3
      font-weight: 700
      font-size: 24px
      line-height: 120%

  .name
    margin-bottom: 12px
@media (min-width: 768px) and (max-width: 1023px)
  .page
    padding-left: 70px
    padding-right: 90px

  .bread
    a
      color: #000
      text-decoration: none

  .page_content
    section
      margin-top: 24px
      h3
        margin-bottom: 12px

  .name
    margin-bottom: 24px
@media (min-width: 1024px) and (max-width: 1439px)
  .page
    padding-left: 120px
    padding-right: 140px
  .bread
    a
      color: #000
      text-decoration: none
</style>