import axios from 'axios';
import { BASE_URL } from '../helpers';
const baseUrl = BASE_URL;

export async function login(data) {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/custom/accountholder/login`,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    throw err.response.data.statusMessage;
  }
}
