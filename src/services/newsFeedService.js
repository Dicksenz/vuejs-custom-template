import axios from 'axios';
import { format } from 'date-fns';

export async function getNewsFeed() {
  const date = Date.now();
  const newDate = format(date, 'yyyy-MM-dd');

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=${newDate}&sortBy=publishedAt&apiKey=2e73ceb9c073414780b1903131799335`
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw err.response;
  }
}
