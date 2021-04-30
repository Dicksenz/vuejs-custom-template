<template>
  <div class="home">
    <LoaderOverlay :is-visible="isLoading"></LoaderOverlay>
    <div v-for="(item, i) in items" :key="i">
      <NewsFeedCard
        :authorName="item.author"
        :imageUrl="item.urlToImage"
        :title="item.title"
        :content="item.content"
      ></NewsFeedCard>
    </div>
  </div>
</template>

<script>
import { getNewsFeed } from '../services/newsFeedService';

import LoaderOverlay from '@/components/LoadingOverlay';
import NewsFeedCard from '@/components/NewsFeedCard';
export default {
  name: 'Home',
  components: {
    LoaderOverlay,
    NewsFeedCard,
  },

  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    await getNewsFeed().then((value) => {
      this.isLoading = false;
      console.log(value.articles);
      this.items = value.articles;
    });
  },
};
</script>

<style>
@media only screen and (min-width: 960px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
