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
        sidos: [{ value: null, text: "선택하세요" }],
        guguns: [{ value: null, text: "선택하세요" }],
        dongs: [{ value: null, text: "선택하세요"}],
        houses: [], //리스트 뿌리기
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
    },
    mutations: {
        //clear
        CLEAR_SIDO_LIST(state) {
        state.sidos = [{ value: null, text: "선택하세요" }];
        },
        CLEAR_GUGUN_LIST(state){
        state.guguns = [{ value: null, text: "선택하세요" }];
        },
        CLEAR_DONG_LIST(state){
        state.dongs = [{ value: null, text: "선택하세요" }];
        },
        CLEAR_APT_LIST(state) {
        state.houses = [];
        },

        //setter
        SET_DONGCODE_LIST(state, payload){
        // console.log(payload.dongcodes);
        payload.dongcodes.forEach((dongcode) => {
            state.dongcodes.push(dongcode)
        })
        // console.log(state.dongcodes)
        
        state.dongcodes.forEach((dongcode) => {
            if (state.sidos.includes)state.sidos.push(dongcode.sidoName);
        })
        },
        // SET_SIDO_LIST(state){
        //   state.dongcodes.forEach((dongcode) => {
        //     console.log("?");
        //     console.log("for", dongcode);
        //   })
        // }

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
        // getGugun(context, payload){

        // }
    },
}