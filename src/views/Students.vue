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
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card>
              <v-card-title>
                <span class="headline">Add Student</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="firstName"
                        label="First name*"
                        :rules="firstNameRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="lastName"
                        label="Last name*"
                        :rules="lastNameRules"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-dialog
                        ref="dialog"
                        v-model="dobModal"
                        :return-value.sync="dateOfBirth"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="dateOfBirth"
                            :rules="dobRules"
                            label="Date of Birth*"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            required
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="dateOfBirth" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="dobModal = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(dateOfBirth)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-select
                        :items="[
                          'Grade 1',
                          'Grade 2',
                          'Grade 3',
                          'Grade 4',
                          'Grade 5',
                          'Grade 6',
                        ]"
                        label="Grade*"
                        v-model="grade"
                        :rules="gradeRules"
                        required
                      ></v-select>
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
                <v-btn color="blue darken-1" text @click="submitForm">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </v-row>
    </v-layout>

    <StudentCard :dataList="dataList"></StudentCard>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ apiMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { getAllStudents, createStudent } from '../services/studentService';
import LoaderOverlay from '@/components/LoadingOverlay';
import StudentCard from '@/components/StudentCard';
import { format } from 'date-fns';

import {
  firstnameValidation,
  lastnameValidation,
  dobValidation,
  requiredValidation,
} from '@/validators/formValidations';

export default {
  components: {
    LoaderOverlay,
    StudentCard,
  },

  data() {
    return {
      snackbar: false,
      timeout: 2000,
      apiMessage: '',
      isLoading: false,
      hasError: false,
      dataList: [],
      dialog: false,
      dobMenu: false,
      dobModal: false,
      dateOfBirth: format(new Date(), 'yyyy-MM-dd').toString(),
      dobRules: dobValidation,
      valid: true,
      firstName: '',
      firstNameRules: firstnameValidation,
      lastName: '',
      lastNameRules: lastnameValidation,
      grade: null,
      gradeRules: requiredValidation('Grade is required'),
    };
  },

  methods: {
    async submitForm() {
      var isValid = this.$refs.form.validate();
      if (isValid) {
        console.log(data);
        this.dialog = false;
        let data = {
          first_name: this.firstName,
          last_name: this.lastName,
          date_of_birth: this.dateOfBirth,
          grade_id: 6,
        };

        await createStudent(data)
          .then((value) => {
            console.log(value.data.statusMessage);
            this.apiMessage = value.data.statusMessage;
            this.snackbar = true;
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
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
