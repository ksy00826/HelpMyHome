<template>
  <b-row class="mt-4 mb-4 text-center">
    <b-col class="sm-3">
      <b-form-select v-model="sidoName" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunName" :options="guguns" @change="dongList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="dongName" :options="dongs"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="year" :options="years"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="month" :options="months" @change="searchApt"></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoName: null,
      gugunName: null,
      dongName: null,
      year: '2022',
      month: '1',
    };
  },
  async mounted() {
    // this.$store.dispatch("getSido");
    // this.sidoList();
    // this.CLEAR_SIDO_LIST();
    this.SET_SIDO_LIST();
    this.CLEAR_APT_LIST();
    if (this.dongcodes.length == 0) this.getDongCodes();
    // console.log(this.dongcodes);
    // this.getSido();
  },
  methods: {
    ...mapActions(["getDongCodes", "getSido", "getGugun", "getDong", "getHouseList"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_DONG_LIST", "CLEAR_APT_LIST",
                      "SET_SIDO_LIST", "SET_GUGUN_LIST", "SET_DONG_LIST"]),

    gugunList() {
      // console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunName = null;
      if (this.sidoName) {
        this.getGugun({
          sidoName: this.sidoName
        });
      }
    },
    dongList(){
      this.CLEAR_DONG_LIST();
      this.dongName = null;
      if (this.gugunName) {
        this.getDong({
          gugunName: this.gugunName
        })
      }
    },
    searchApt() {
      if (this.dongName) this.getHouseList({
        sidoName: this.sidoName,
        gugunName: this.gugunName,
        dongName: this.dongName,
        year: this.year,
        month: this.month,
      });
    },
  },
  computed: {
    // ...mapState(["dongcodes"]),
    ...mapGetters(["dongcodes", "sidos", "guguns", "dongs", 'years', 'months'])
  }
};
</script>

<style></style>
