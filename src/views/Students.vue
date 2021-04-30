<template>
  <div class="students">
    <LoaderOverlay :is-visible="isLoading"></LoaderOverlay>

    <div v-for="(data, i) in dataList" :key="i">
      {{ data }}
    </div>
  </div>
</template>

<script>
import { getAllStudents } from '../services/studentService';
import LoaderOverlay from '@/components/LoadingOverlay';

export default {
  components: {
    LoaderOverlay,
  },

  data() {
    return {
      isLoading: false,
      hasError: false,
      dataList: [],
    };
  },

  async created() {
    this.isLoading = true;

    await getAllStudents()
      .then((value) => {
        this.isLoading = false;

        this.dataList = value.data.data;
        console.log(this.dataList);
      })
      .catch((err) => {
        this.isLoading = false;

        console.log(err);
      });
  },
};
</script>
