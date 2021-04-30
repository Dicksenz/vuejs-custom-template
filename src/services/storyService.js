import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0';
/*
 *  Fetch list of the top 50 stories
 *  returns stories[].
 */
export async function getTopStories() {
  let stories = [];
  const response = await axios.get(`${baseUrl}/topstories.json`, {});
  stories = response.data;
  return stories;
}
/*
 *  Fetch items based on 'ids' from getTopStories()
 *  returns items[].
 */
export async function storiesWithItems() {
  let items = [];
  getTopStories().then((stories) => {
    stories.forEach((id) => {
      axios.get(`${baseUrl}/item/${id}.json`).then((res) => {
        items.push(res.data);
      });
    });
  });
  return items;
}
/*
 *  Makes request based on the 'id' param
 *  returns response[].
 */
export async function getSingleItem(id) {
  let response;
  response = await axios.get(`${baseUrl}/item/${id}.json`);
  return response.data;
}

/*
 *  Makes request based on the 'id' passed to the
 *  getSingleItem(<id>), loops through kids[];
 *  returns comments[].
 */
export async function getSingleStoryComments(id) {
  let comments = [];
  getSingleItem(id).then((res) => {
    res.kids.forEach((comment) => {
      axios.get(`${baseUrl}/item/${comment}.json`).then((res) => {
        comments.push(res.data);
      });
    });
  });
  return comments;
}
/*
 *  Sorts the result based on the property score;
 *  returns a sorted array.
 */
export function sortByScore(a, b) {
  if (a.score < b.score) {
    // a comes before b in the sorted order
    return -1;
  } else if (a.score > b.score) {
    // a comes before b in the sorted order
    return 1;
  } else {
    // a and b are the same
    return 0;
  }
}
