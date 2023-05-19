<template>
  <b-container>
    <main-weather></main-weather>
    <main-news></main-news>
    <main-apt-graph></main-apt-graph>
  </b-container>
</template>

<script>
import MainWeather from "@/components/main/MainWeather.vue";
import MainAptGraph from "@/components/main/MainAptGraph.vue";
import MainNews from "@/components/main/MainNews.vue";

export default {
  name: "AppMain",
  components: {
    MainWeather,
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
