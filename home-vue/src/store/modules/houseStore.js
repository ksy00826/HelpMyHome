import http from "@/api/http";

export default {
    state: {
        dongcodes: [], //모든 동코드 테이블을 저장: 
        /*
        "dongCode": "1100000000",
        "sidoName": "서울특별시",
        "gugunName": null,
        "dongName": null
        */
        sidos: [{ value: null, text: "시도이름" }],
        guguns: [{ value: null, text: "구군이름" }],
        dongs: [{ value: null, text: "동이름"}],
        houses: [], //리스트 뿌리기
        years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        searchInfo: {
            sidoName: null,
            gugunName: null,
            dongName: null,
        },
        // house: null, 
    },
    getters: {
        dongcodes(state){
            return state.dongcodes;
        },
        sidos(state){
            return state.sidos;
        },
        guguns(state){
            return state.guguns;
        },
        dongs(state){
            return state.dongs;
        },
        houses(state){
            return state.houses;
        },
        years(state){
            return state.years;
        },
        months(state){
            return state.months;
        },
        searchInfo(state){
            return state.searchInfo;
        }
    },
    mutations: {
        //clear
        CLEAR_SIDO_LIST(state) {
            state.sidos = [{ value: null, text: "시도이름" }];
        },
        CLEAR_GUGUN_LIST(state){
            state.guguns = [{ value: null, text: "구군이름" }];
        },
        CLEAR_DONG_LIST(state){
            state.dongs = [{ value: null, text: "동이름" }];
        },
        CLEAR_APT_LIST(state) {
            state.houses = [];
        },

        //setter
        SET_DONGCODE_LIST(state, payload){
            //동코드 리스트 로드
            payload.dongcodes.forEach((dongcode) => {
                state.dongcodes.push(dongcode)
            })

            //시도 리스트 저장
            state.dongcodes.forEach((dongcode) => {
                if (dongcode.sidoName != null && !state.sidos.includes(dongcode.sidoName))
                    state.sidos.push(dongcode.sidoName);
            })
        },
        SET_GUGUN_LIST(state, payload){
            state.dongcodes.forEach((dongcode) => {
                if (dongcode.sidoName == payload.sidoName
                    && dongcode.gugunName != null
                    && !state.guguns.includes(dongcode.gugunName)){
                        state.guguns.push(dongcode.gugunName);
                }
            })
        },
        SET_DONG_LIST(state, payload){
            state.dongcodes.forEach((dongcode) => {
                if (dongcode.gugunName == payload.gugunName
                    && dongcode.dongName != null
                    && !state.dongs.includes(dongcode.dongName)){
                        state.dongs.push(dongcode.dongName);
                }
            })
        },
        SET_HOUSE_LIST(state, payload){
            // console.log(payload.houses);
            state.houses = payload.houses;

            //현재 검색 정보 저장
            state.searchInfo = {
                sidoName: payload.sidoName,
                gugunName: payload.gugunName,
                dongName: payload.dongName,
            }
        }
    },
    actions: {
        getDongCodes({commit}){
            http
                .get(`/apt/dongcode`)
                .then(({data}) => {
                    // console.log(data);
                    commit({
                        type: "SET_DONGCODE_LIST", 
                        dongcodes: data});
                    })
                .catch((error) => {
                console.log(error);
                })

        },
        getGugun({commit}, payload){
            // console.log(payload.sidoName);
            commit({
                type: "SET_GUGUN_LIST",
                sidoName: payload.sidoName,
            })
        },
        getDong({commit}, payload){
            // console.log(payload.gugunName);
            commit({
                type: "SET_DONG_LIST",
                gugunName: payload.gugunName,
            })
        },
        getHouseList({commit}, payload){
            http
                .get(`/apt/${payload.sidoName}/${payload.gugunName}/${payload.dongName}/${payload.year}/${payload.month}`)
                .then(({data}) => {
                    commit({
                        type: "SET_HOUSE_LIST",
                        houses: data,
                        sidoName: payload.sidoName,
                        gugunName: payload.gugunName,
                        dongName: payload.dongName,
                    })
                })
        }
    },
}