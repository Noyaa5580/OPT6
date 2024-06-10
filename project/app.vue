<template>
  <div>
    <header>
      <TheHeader />
    </header>
    <main>
      <Notivue v-slot="item">
        <Notification :item="item"><NotificationProgress :item="item" /></Notification>
      </Notivue>
      <NuxtPage />
    </main>
    <footer></footer>
  </div>
</template>
<style lang="sass">
*
  margin: 0px
  padding: 0px
  font-family: "PT Sans", sans-serif
</style>
<script>
import "primevue/resources/themes/aura-light-green/theme.css";

export default {};
</script>
