<template>
  <b-container>
    <b-row>
      <b-col>
        <main-weather></main-weather>
      </b-col>
      <b-col>
        <main-apt-graph></main-apt-graph>
      </b-col>
    </b-row>
    <b-row>
      <main-news></main-news>
    </b-row>
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
