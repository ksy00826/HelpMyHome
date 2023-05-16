<template>

	<!-- Services-->
	<section class="page-section" id="services">
		<div class="container">
			<div class="text-center">
				<h2 class="section-heading text-uppercase">집 찾기</h2>
			</div>
			<div class="row text-center">
				
        <!--카카오맵-->

        <kakao-map></kakao-map>

				<form method="post" action="">
					<input type="hidden" name="cmd" value="search">
					<!-- 시도 선택 -->
					<select id="sido" onchange="changeSido(this)" name="sido">
						<option value="0">시도선택</option>
					</select> 
					
					<!-- 구군 선택 -->
					<select id="gugun" onchange="changeGugun(this)" name="gugun">
						<option value="0" selected>구군선택</option>
					</select> 
					
					<!-- 동 선택 -->
					<select id="dong" name="dong">
						<option value="0" selected>동선택</option>
					</select> 
					
					<!-- 매매날짜 선택 -->
					<select id="year" onchange="changeYear(this)" name="year">
						<option value="0" selected>매매년도선택</option>
					</select> <select id="month" name="month">
						<option value="0" selected>매매월선택</option>
					</select>
					<button type="button" id="btn-homeSearch" >검색</button>
        </form>
                
				<!-- 관심지역 추가 -->
        <form method="post" action="${root }/home">
					<input type="hidden" name="cmd" value="add">
           <button type="submit" id="btn-add">관심지역 추가</button>
        </form>
				<form method="post" action="${root }/home">
					<input type="hidden" name="cmd" value="selectInterest"> <select
						name="selectedDongCode">
						<option value="0">관심지역 목록</option>
						<option value="1">관심지역</option>
						<c:forEach items="${interestLs }" var="interDto">
							<option value="${interDto.dongCode }">${interDto.area }</option>
						</c:forEach>
					</select> <select id="year2" onchange="changeYear2(this)" name="year2">
						<option value="0" selected>매매년도선택</option>
					</select> <select id="month2" name="month2">
						<option value="0" selected>매매월선택</option>
					</select>
					<button type="submit" id="btn-search">관심지역 검색</button>
				</form>
				<div>
					<input type="text" id="searchName">
					<button type="button" onclick="searchName()">아파트 이름 검색</button>
				</div>
				<!--  <button onclick="draw()">그리기</button>-->

				<!-- 실행 결과 표로 출력 -->
				<div>
					<table width="100%">
						<thead>
							<tr>
								<th>아파트이름</th>
								<th>층</th>
								<th>면적</th>
								<th>법정동</th>
								<th>거래금액</th>
							</tr>
						</thead>
						<tbody id="apt-list">
						</tbody>
					</table>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
import KakaoMap from "@/components/KakaoMap.vue";

export default {
  name: "AppMain",
  props: {
    msg: String,
  },
  components: {
    KakaoMap,
  }
};
</script>

<style scoped>

</style>
