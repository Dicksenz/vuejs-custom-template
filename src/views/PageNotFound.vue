<template>
  <div>
    <v-app id="inspire">
      <v-card
        height="100%"
        class="d-flex flex-column justify-center align-center"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
      >
        <div id="title" class="6rem font-weight-bold">404</div>
        <div id="subtitle" class="grey--text">Page not found</div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default { name: 'PageNotFound' };
</script>

<style lang="sass">
#title
  font-size: 14rem
#subtitle
  font-size: 2rem

#error-view h1.text-h1
  font-size: 14rem !important
</style>
