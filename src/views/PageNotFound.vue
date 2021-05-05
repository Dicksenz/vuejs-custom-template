<template>
  <div>
    <v-app id="inspire">
      <v-card
        height="100%"
        class="d-flex flex-column justify-center align-center"
        flat
        tile
      >
        <lottie-animation path="404.json" :width="400" :height="400" />
        <div id="subtitle" class="grey--text">Page not found</div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style lang="sass">
#title
  font-size: 14rem
#subtitle
  font-size: 2rem

#error-view h1.text-h1
  font-size: 14rem !important
</style>
