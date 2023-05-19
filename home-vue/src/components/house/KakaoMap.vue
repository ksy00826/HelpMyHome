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
        addMarker(position) {
            // 마커를 생성합니다
            console.log(position)
            var marker = new window.kakao.maps.Marker({
                position: position
            });
            // var marker = new kakao.maps.Marker({
            //     map: map, // 마커를 표시할 지도
            //     position: positions[i].latlng, // 마커를 표시할 위치
            //     title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            //     image : markerImage // 마커 이미지 
            // });
            
            // 생성된 마커를 배열에 추가합니다
            marker.setMap(this.map)
            this.markers.push(marker);
        }
    },
    computed: {
        ...mapGetters(["houses", "searchInfo"])
    },
    watch:{
        houses : function(newHouse) {
            console.log(newHouse)
            // console.log("sear",this.searchInfo)
            const area = this.searchInfo.sidoName + " " + this.searchInfo.gugunName + " " + this.searchInfo.dongName;
            console.log(area)

            // //기존 마커 지우기
            // if (this.marker != null) this.marker.setMap(null);
            this.loadMap() //임시로 지도 재생성으로 함
            //그리기
            //초기화
            this.sumLat = 0;
            this.sumLng = 0;
            newHouse.forEach((house) => {
                // console.log(house)
                this.addMarker(new window.kakao.maps.LatLng(house.lat, house.lng))
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
};
</script>

<style scoped>
#map{
    width: 100%;
    height: 400px;
}
</style>