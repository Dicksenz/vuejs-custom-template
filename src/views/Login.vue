<template>
  <v-app id="inspire">
    <LoaderOverlay :is-visible="isLoading"></LoaderOverlay>

    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card class="elevation-12" max-width="500">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    prepend-icon="mdi-email"
                    label="Email"
                    type="email"
                    v-model="emailModel"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Password"
                    type="password"
                    v-model="passwordModel"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-alert v-if="hasError" type="error">{{
                    errorMessage
                  }}</v-alert>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="submitForm">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { login } from '../services/loginService';
import LoaderOverlay from '@/components/LoadingOverlay';

import {
  requiredValidation,
  emailValidation,
} from '@/validators/formValidations';

export default {
  name: 'Login',
  components: {
    LoaderOverlay,
  },
  data() {
    return {
      hasError: false,
      errorMessage: '',
      isLoading: false,
      valid: false,
      emailModel: '',
      emailRules: emailValidation,
      passwordModel: '',
      passwordRules: requiredValidation('Password is required'),
    };
  },

  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    async submitForm() {
      this.isLoading = true;
      this.hasError = false;

      var isValid = this.$refs.form.validate();
      if (isValid) {
        var data = {
          email: this.emailModel,
          password: this.passwordModel,
        };
        await login(data)
          .then((value) => {
            this.isLoading = false;
            console.log(value.data);
            if (value.data.statusCode == 200) {
              localStorage.setItem('token', value.data.data.token);
              this.$router.push('/');
            } else {
              this.isLoading = false;
              this.hasError = true;
              this.errorMessage = value.data.statusMessage;
            }
          })
          .catch((err) => {
            this.isLoading = false;
            this.hasError = true;
            this.errorMessage = err;
            console.log(err);
          });
      }
    },
  },
};
</script>
