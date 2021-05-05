import axios from 'axios';
import token from '../services/baseService';
const baseUrl = 'http://vticket.telecom.mu:8055';

export async function getAllStudents() {
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
