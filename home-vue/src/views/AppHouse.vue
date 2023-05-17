<template>

	<!-- Services-->
	<section class="page-section" id="services">
		<div class="container">
			<div class="text-center">
				<h2 class="section-heading text-uppercase">집 찾기</h2>
			</div>
			<kakao-map></kakao-map>
			<house-search-bar></house-search-bar>
			<div>
				<input type="text" id="searchName">
				<button type="button" onclick="searchName()">아파트 이름 검색</button>
			</div>
			<house-list></house-list>
		</div>
	</section>
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
	gugunList(){
		
	}
  }
};
</script>

<style scoped>

</style>
