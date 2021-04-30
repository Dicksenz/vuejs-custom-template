import axios from 'axios';
import { format } from 'date-fns';
const baseUrl = 'https://hacker-news.firebaseio.com/v0';

export async function getTopStories() {
  let stories = [];
  const response = await axios.get(`${baseUrl}/topstories.json`, {});
  stories = response.data;
  return stories;
}

export async function getNewsFeed() {
  const date = Date.now();
  const newDate = format(date, 'yyyy-MM-dd');

  let resp = [];

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=${newDate}&sortBy=publishedAt&apiKey=2e73ceb9c073414780b1903131799335`
  );

  resp = response.data;

  return resp;
}
