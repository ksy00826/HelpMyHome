<template>
  <b-container>
    <main-weather></main-weather>
  </b-container>
</template>

<script>
import MainWeather from '@/components/main/MainWeather.vue';

export default {
  name: "AppMain",
  components: {
    MainWeather,
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
