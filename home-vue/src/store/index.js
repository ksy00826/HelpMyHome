import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dongcodes: [], //모든 동코드 테이블을 저장: 
      /*
      "dongCode": "1100000000",
      "sidoName": "서울특별시",
      "gugunName": null,
      "dongName": null
      */
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text: "선택하세요"}],
    houses: [], //리스트 뿌리기
    // house: null, 
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
