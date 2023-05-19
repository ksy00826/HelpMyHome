<template>
  <b-container>
    <b-row>
      <b-col>
        <main-news></main-news>
      </b-col>
      <b-col>
        <main-apt-search></main-apt-search>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <main-weather></main-weather>
      </b-col>
      <b-col>
        <main-apt-graph></main-apt-graph>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MainWeather from "@/components/main/MainWeather.vue";
import MainAptGraph from "@/components/main/MainAptGraph.vue";
import MainNews from "@/components/main/MainNews.vue";
import MainAptSearch from "@/components/main/MainAptSearch.vue";
export default {
  name: "AppMain",
  components: {
    MainNews,
    MainAptSearch,
    MainWeather,
    MainAptGraph,
  },

  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
