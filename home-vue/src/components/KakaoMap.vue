<template>
    <div>
        <h2>카카오맵</h2>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name: 'KakaoMap',
    components: {},
    data() {
        return {
            map : null,
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
            script.onload = () => window.kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap(){
            const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };

            this.map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        }
    },
    
};
</script>

<style scoped>
#map{
    width: 100%;
    height: 400px;
}
</style>