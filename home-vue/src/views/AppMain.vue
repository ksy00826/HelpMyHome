<template>
  <b-container>
    <main-weather></main-weather>
    <main-news></main-news>
  </b-container>
</template>

<script>
import MainWeather from "@/components/main/MainWeather.vue";
import MainNews from "@/components/main/MainNews.vue";

export default {
  name: "AppMain",
  components: {
    MainWeather,
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
