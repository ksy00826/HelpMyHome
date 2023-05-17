<template>
	<!-- Services-->
		<div class="container">
			<div class="text-center">
				<h3 class="underline-hotpink">집 찾기</h3>
			</div>
			<kakao-map></kakao-map>
			<house-search-bar></house-search-bar>
			<div>
				<input type="text" id="searchName">
				<button type="button" onclick="searchName()">아파트 이름 검색</button>
			</div>
			<house-list></house-list>
		</div>
</template>

<script>
import KakaoMap from "@/components/house/KakaoMap.vue"
import HouseSearchBar from '@/components/house/HouseSearchBar';
import HouseList from '@/components/house/HouseList.vue';

export default {
  name: "AppHouse",
  data() {
	return {
		sidoName: "null",
		gugunName: "null",
	};
  },
  props: {
    msg: String,
  },
  components: {
    KakaoMap,
	HouseSearchBar,
	HouseList,
  },
  method: {
  }
};
</script>

<style scoped>
.underline-hotpink {
    padding-top: 10px;
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(231, 27, 139, 0.3) 30%);
}
</style>
