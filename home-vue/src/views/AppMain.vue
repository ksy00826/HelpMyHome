<template>
  <b-container>
    <main-weather></main-weather>
    <main-apt-graph></main-apt-graph>
  </b-container>
</template>

<script>
import MainWeather from '@/components/main/MainWeather.vue';
import MainAptGraph from '@/components/main/MainAptGraph.vue';

export default {
  name: "AppMain",
  components: {
    MainWeather,
    MainAptGraph,
  },

  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
