<template>
  <v-card elevation="5" max-width="1000" class="ma-3" outlined>
    <v-col class="pt-8 pl-8" align-self="end">
      <v-row align="center">
        <v-avatar color="primary" size="56"
          ><v-icon class="white--text">mdi-account</v-icon></v-avatar
        >
        <v-col>
          {{ authorName }}
        </v-col>
      </v-row>
    </v-col>

    <v-card-subtitle>{{ title }}</v-card-subtitle>
    <v-card-text>
      <v-img :lazy-src="imageUrl" :src="imageUrl"></v-img>

      <v-layout>
        {{ content }}
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    authorName: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    content: { type: String, required: true },
  },
};
</script>
