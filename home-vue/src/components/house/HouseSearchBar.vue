<template>
  <b-row class="mt-4 mb-4 text-center">
    <b-col class="sm-3">
      <b-form-select v-model="sidoName" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunName" :options="guguns" @change="dongList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="dongName" :options="dongs" @change="searchApt"></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoName: null,
      gugunName: null,
      dongName: null,
    };
  },
  created() {
    // this.$store.dispatch("getSido");
    // this.sidoList();
    this.CLEAR_SIDO_LIST();
    this.CLEAR_APT_LIST();
    this.getDongCodes();
    // console.log(this.dongcodes);
    // this.SET_SIDO_LIST();
    // this.getSido();
  },
  methods: {
    ...mapActions(["getDongCodes", "getSido", "getGugun", "getHouseList"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_APT_LIST",
                      "SET_SIDO_LIST", "SET_GUGUN_LIST", "SET_DONG_LIST"]),

    gugunList() {
      // console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunName = null;
      if (this.sidoName) this.getGugun(this.sidoName);
    },
    dongList(){
      
    },
    searchApt() {
      if (this.gugunCode) this.getHouseList(this.gugunCode);
    },
  },
  computed: {
    ...mapState(["dongcodes"]),
    ...mapGetters(["sidos", "guguns", "dongs", "houses"])
  }
};
</script>

<style></style>
