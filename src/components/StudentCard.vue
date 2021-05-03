<template>
  <v-container class="grey lighten-5" fluid>
    <v-row no-gutters>
      <v-col
        class="mb-4 mr-4"
        v-for="(data, i) in dataList"
        :key="i"
        cols="12"
        sm="3"
      >
        <v-card class="pa-2" elevation="5">
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  :alt="`${data.first_name} avatar`"
                  src="@/assets/boy_avatar.png"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  >{{ data.first_name }} {{ data.last_name }}</v-list-item-title
                >
                <v-list-item-subtitle class="grey--text">
                  Grade {{ data.grade_id }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    dataList: undefined,
  },
};
</script>
