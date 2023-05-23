<template>
    <div class="text-center">
        <!-- <div id="roadview" style="width:100%;height:300px;"></div> -->
        <v-row>
            <v-col cols="3" style="height:600px;">
                <div>
                    <b-card class="mb-2">
                        <div id="roadview" style="width:100%; height:200px"></div>
                        <p></p>
                        <h3>{{ house.apartmentName }}</h3>
                        <b-card-text>
                            <p>{{ house.dongName }} {{ house.buildYear }}</p>
                            <p>매매정보</p>
                            <b-table :items="dealInfo" :key="dealInfo.dealYear"></b-table>
                        </b-card-text>
                    </b-card>
                </div>
            </v-col>
            <v-col>
                <div id="map"></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
// const vueThis = this;
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'KakaoMap',
    components: {},
    data() {
        return {
            map : null,
            markers: [],
            bounds: null, //지도의 영역 범위 재설정을 위한 변수
            selectedMarker: null, //마커 클릭
            //로드뷰
            roadview: null,
            roadviewClient: null,
        };
    },
    created() {
    },
    mounted(){
        if(window.kakao && window.kakao.maps){
            this.loadMap();
        }
        else{
            this.loadScript();
        }
        
        //로드뷰를 해당 아이디 div에 생성합니다
        if (!this.roadview){
            console.log("created roadView")
            var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
            this.roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
            this.roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
        }
    },
    methods: {
        ...mapActions(["setHouse", "getDealInfo"]),
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
        addMarker(position, aptName, house) {
            // 마커를 생성합니다
            // console.log(position)
            var marker = new window.kakao.maps.Marker({
                position: position,
            });
            marker.setMap(this.map)
            console.log(aptName)
            //이벤트 등록
            //아파트 이름 커스텀 오버레이 이벤트 등록
            var customOverlay = new kakao.maps.CustomOverlay({
                position: marker.getPosition(),   
                content: `<div class ="label"><span class="left"></span><span class="center">${aptName}</span><span class="right"></span></div>`,
                yAnchor: 2,
            });
            kakao.maps.event.addListener(marker, 'mouseover', this.makeOverListener(this.map, customOverlay));
            kakao.maps.event.addListener(marker, 'mouseout', this.makeOutListener(customOverlay));

            //클릭 이벤트 등록 : 중심좌표 이동 + 로드뷰 및 정보 띄우기
            const vueThis = this;
            console.log(house)
            kakao.maps.event.addListener(marker, 'click', function() {
                // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
                vueThis.selectedMarker = marker;
                // 클릭된 집을 현재 집으로 설정합니다. : 그냥 변수에 설정하는 게
                // this.house = house
                console.log("in", house)
                vueThis.setHouse(house);
                // console.log(marker)
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
        ...mapGetters(["houses", "searchInfo", "house", "dealInfo"])
    },
    watch:{
        houses : function(newHouse) {
            console.log(newHouse)
            // //기존 마커 지우기
            this.removeMarker();
            //바운드 객체
            this.bounds = new kakao.maps.LatLngBounds();
            // console.log("newHouse: " +newHouse + typeof(newHouse)) //string
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
                    this.addMarker(new window.kakao.maps.LatLng(house.lat, house.lng), house.apartmentName, house)
                })
                this.map.setBounds(this.bounds); //지도 영역 재지정
            }
        },
        house: function(newHouse){
            // this.map.panTo()
            //지도 이동
            console.log(newHouse);
            this.map.panTo(new window.kakao.maps.LatLng(newHouse.lat, newHouse.lng));

            //선택된 apt의 매매정보 가져오기 : aptCode
            this.getDealInfo(newHouse.aptCode)

            //로드뷰 띄우기
            var position = new window.kakao.maps.LatLng(newHouse.lat, newHouse.lng)
            console.log("로드뷰 포지션!!: "+ position) //33.450701, 126.570667

            // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
            console.log("this")
            console.log(this) //yes
            // console.log(vueThis); //no
            const vueThis = this;
            this.roadviewClient.getNearestPanoId(position, 50, function(panoId) {
                vueThis.roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
            });
        },
        selectedMarker: function(newSel){
            //로드뷰 띄우기
            
            var position = newSel.getPosition();
            console.log("로드뷰 포지션: "+ position) //33.450701, 126.570667

            // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
            const vueThis = this;
            this.roadviewClient.getNearestPanoId(position, 50, function(panoId) {
                vueThis.roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
            });
        }
    }
};
</script>

<style>
#map{
    width: 100%;
    height: 600px;
}
.label{
    padding: 5px 10px;
    background-color: white;
    border-color: black;
    -webkit-border-radius:15px;
    color: black;
}
</style>