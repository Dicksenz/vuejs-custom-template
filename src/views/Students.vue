<template>
  <div class="students">
    <LoaderOverlay :is-visible="isLoading"></LoaderOverlay>

    <v-layout class="mb-3 mt-3 mr-3" row justify-end>
      <!-- <v-btn color="primary">
        <v-icon left>mdi-plus</v-icon>
        ADD Student</v-btn
      > -->

      <v-row justify="end" class="mb-3 mt-3 mr-3">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
          transition="dialog-top-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              <v-icon left>mdi-plus</v-icon>
              Add Student
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Add Student</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="First name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Last name"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="[
                        'Skiing',
                        'Ice hockey',
                        'Soccer',
                        'Basketball',
                        'Hockey',
                        'Reading',
                        'Writing',
                        'Coding',
                        'Basejump',
                      ]"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
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
      dialog: false,
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
