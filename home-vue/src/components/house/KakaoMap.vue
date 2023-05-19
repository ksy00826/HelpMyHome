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
            sumLat: 0,
            sumLng: 0,
        };
    },
    created() {},
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
            console.log(position)
            var marker = new window.kakao.maps.Marker({
                position: position,
                title: aptName,
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: aptName,
            })
            
            marker.setMap(this.map)
            kakao.maps.event.addListener(marker, 'mouseover', this.makeOverListener(this.map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', this.makeOutListener(infowindow));

            // 생성된 마커를 배열에 추가합니다
            this.markers.push(marker);
        },// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
        makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
        },

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        makeOutListener(infowindow) {
            return function() {
                infowindow.close();
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
            console.log(newHouse)
            // //기존 마커 지우기
            // if (this.marker != null) this.marker.setMap(null);
            // this.loadMap() //임시로 지도 재생성으로 함
            this.removeMarker();

            if (newHouse.length != 0){
                // console.log("sear",this.searchInfo)
                const area = this.searchInfo.sidoName + " " + this.searchInfo.gugunName + " " + this.searchInfo.dongName;
                console.log(area)

                //그리기
                //초기화
                this.sumLat = 0;
                this.sumLng = 0;
                newHouse.forEach((house) => {
                    // console.log(house)
                    this.addMarker(new window.kakao.maps.LatLng(house.lat, house.lng), house.apartmentName)
                    this.sumLat = Number(this.sumLat) + Number(house.lat);
                    this.sumLng = Number(this.sumLng) + Number(house.lng);
                })
                console.log(this.sumLat / newHouse.length);
                console.log(this.sumLng / newHouse.length);
                const avgLat = this.sumLat / newHouse.length;
                const avgLng = this.sumLng / newHouse.length;
                this.map.panTo(new window.kakao.maps.LatLng(avgLat, avgLng));
                this.map.setLevel(6);
            }
        }
    }
};
</script>

<style scoped>
#map{
    width: 100%;
    height: 400px;
}
</style>