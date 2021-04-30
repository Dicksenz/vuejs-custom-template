<template>
  <div class="students">
    <LoaderOverlay :is-visible="isLoading"></LoaderOverlay>

    <v-layout class="mb-3 mt-3 mr-3" row justify-end>
      <v-btn color="primary">
        <v-icon left>mdi-plus</v-icon>
        ADD Student</v-btn
      >
    </v-layout>

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
                    >{{ data.first_name }}
                    {{ data.last_name }}</v-list-item-title
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
  </div>
</template>

<script>
import { getAllStudents } from '../services/studentService';
import LoaderOverlay from '@/components/LoadingOverlay';

export default {
  components: {
    LoaderOverlay,
  },

  data() {
    return {
      isLoading: false,
      hasError: false,
      dataList: [],
    };
  },

  async created() {
    this.isLoading = true;

    await getAllStudents()
      .then((value) => {
        this.isLoading = false;

        this.dataList = value.data.data;
        console.log(this.dataList);
      })
      .catch((err) => {
        this.isLoading = false;

        console.log(err);
      });
  },
};
</script>
