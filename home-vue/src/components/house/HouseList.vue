<template>
  <div v-if="houses && houses.length != 0" class="bv-example-row mt-3">
    <b-table striped hover :items="houses"></b-table>
    <!-- <house-list-item v-for="(house, index) in houses" :key="index" :house="house" /> -->
  </div>
  <div v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>주택 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </div>
</template>

<script>
// import HouseListItem from "@/components/house/HouseListItem";
import { mapGetters } from "vuex";

export default {
  name: "HouseList",
  components: {
    // HouseListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["houses"]),
    // houses() {
    //   return this.$store.state.houses;
    // },
  },
};
</script>

<style></style>
