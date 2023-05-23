// import http from "@/api/http";

export default {
    state: {
        loginUser: null,
    },
    getters: {
        loginUser(state){
            return state.loginUser;
        },
    },
    mutations: {
        SET_LOGIN_USER(state, payload){
            state.loginUser = payload.loginUser;
            console.log("save: ")
            console.log(state.loginUser)
        }
    },
    actions: {
        setLoginUser({commit}, loginUser){
            console.log("setUser" + loginUser)
            commit({
                type: "SET_LOGIN_USER",
                loginUser: loginUser,
            })
        }
    },
}