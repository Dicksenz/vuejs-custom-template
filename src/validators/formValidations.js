import Vuetify from 'vuetify/lib';
import Vue from 'vue';

Vue.use(Vuetify);

export var firstnameValidation = [(v) => !!v || 'First name is required'];
export var lastnameValidation = [(v) => !!v || 'Last name is required'];
export var dobValidation = [(v) => !!v || 'Date of Birth is required'];
export var gradeValidation = [(v) => !!v || 'Grade is required'];
export var emailValidation = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

// custom validation
export function requiredValidation(value) {
  return [(v) => !!v || `${value}`];
}
