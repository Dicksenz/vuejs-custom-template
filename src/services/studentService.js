import axios from 'axios';
import token from '../services/baseService';
import { BASE_URL } from '../helpers';
const baseUrl = BASE_URL;

export async function getAllStudents() {
  console.log('token', token);
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/custom/student/all`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    throw err.response.data.statusMessage;
  }
}
export async function createStudent(data) {
  var token = this.$store.token;
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/custom/student/create`,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    throw err.response.data.statusMessage;
  }
}
