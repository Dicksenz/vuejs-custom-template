import axios from 'axios';

const baseUrl = 'http://vticket.telecom.mu:8055';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpY2tzZW5yYXlkZW5AZ21haWwuY29tIiwiaWF0IjoxNjE5Njc1MzI0LCJleHAiOjE2NTEyMTEzMjR9.9IEHVQ6Ch157fbMdUqK0WyiJCnhriZSsjCDIpvQx0qY';

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
