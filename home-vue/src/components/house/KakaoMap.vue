<template>
    <div class="text-center">
        <div id="map"></div>
    </div>
</template>

<script>
// const vueThis = this;
import { mapGetters } from 'vuex';
export default {
    name: 'KakaoMap',
    components: {},
    data() {
        return {
            map : null,
            markers: [],
            bounds: null, //지도의 영역 범위 재설정을 위한 변수
            selectedMarker: null, //마커 클릭
        };
    },
    created() {
        this.vueThis = this;
    },
    mounted(){
        if(window.kakao && window.kakao.maps){
            this.loadMap();
        }
        else{
            this.loadScript();
        }
    },
    methods: {
        loadScript() {
            const script = document.createElement("script");
            script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=74f1e792cc4d7d72169a67ae909e2b50&libraries=services,clusterer,drawing"
            /* global kakao */
            script.onload = () => kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap(){
            const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };

            this.map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        },

            // 마커를 생성하고 지도위에 표시하는 함수입니다
        addMarker(position, aptName) {
            // 마커를 생성합니다
            // console.log(position)
            var marker = new window.kakao.maps.Marker({
                position: position,
            });
            marker.setMap(this.map)

            //이벤트 등록
            //아파트 이름 커스텀 오버레이 이벤트 등록
            var customOverlay = new kakao.maps.CustomOverlay({
                position: marker.getPosition(),   
                content: `<div class ="label"><span class="left"></span><span class="center">${aptName}</span><span class="right"></span></div>`,
                yAnchor: 2,
            });
            kakao.maps.event.addListener(marker, 'mouseover', this.makeOverListener(this.map, customOverlay));
            kakao.maps.event.addListener(marker, 'mouseout', this.makeOutListener(customOverlay));

            //클릭 이벤트 등록
            const vueThis = this;
            kakao.maps.event.addListener(marker, 'click', function() {
                // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
                vueThis.selectedMarker = marker;
                vueThis.map.panTo(marker.getPosition()); //panTo 함수 못찾은거.. this 문제 ㅠㅠ
            });

            // 생성된 마커를 배열에 추가합니다
            this.markers.push(marker);
            //바운드 배열에도 위치를 추가
            this.bounds.extend(position);
        },// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 


        makeOverListener(map, customOverlay) {
            return function() {
                customOverlay.setMap(map)
            };
        },

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        makeOutListener(customOverlay) {
            return function() {
                customOverlay.setMap(null);
            };
        },
        removeMarker(){
            for (var marker of this.markers){
                marker.setMap(null);
            }
            marker = []
        }
    },
    computed: {
        ...mapGetters(["houses", "searchInfo"])
    },
    watch:{
        houses : function(newHouse) {
            // console.log(newHouse)
            // //기존 마커 지우기
            this.removeMarker();
            //바운드 객체
            this.bounds = new kakao.maps.LatLngBounds();
            console.log("newHouse: " +newHouse + typeof(newHouse)) //string
            if (newHouse.length != 0){//.length != 0 && newHouse != undefined && newHouse != null && newHouse
                // console.log("sear",this.searchInfo)
                // const area = this.searchInfo.sidoName + " " + this.searchInfo.gugunName + " " + this.searchInfo.dongName;
                // console.log(area)

                //그리기
                //초기화
                this.sumLat = 0;
                this.sumLng = 0;
                newHouse.forEach((house) => {
                    // console.log(house)
                    this.addMarker(new window.kakao.maps.LatLng(house.lat, house.lng), house.apartmentName)
                })
                this.map.setBounds(this.bounds); //지도 영역 재지정
            }
        }
    }
};
</script>

<style>
#map{
    width: 100%;
    height: 500px;
}
.label{
    padding: 5px 10px;
    background-color: white;
    border-color: black;
    -webkit-border-radius:15px;
    color: black;
}
</style>