<template>
  <b-container>
    <main-weather></main-weather>
    <main-apt-graph></main-apt-graph>
    <main-news></main-news>
  </b-container>
</template>

<script>

import MainAptGraph from '@/components/main/MainAptGraph.vue';
import MainNews from "@/components/main/MainNews.vue";
export default {
  name: "AppMain",
  components: {
    MainAptGraph,
    MainNews,
  },

  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
