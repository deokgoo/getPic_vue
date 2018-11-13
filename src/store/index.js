import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        imgUrl:'https://www.hsjaa.com/images/joomlart/demo/default.jpg',
        token:'',
        email:'',
        defaultImg:true,
        keywords:[],
        modalUp : false,
        keyCode : 'kdg1004',
        errorMsg : '',
        creating : false
    },
    mutations:{
        SET_IMGURL_CHANGE(state, data){
            state.imgUrl = data
        },
        SET_token_CHANGE(state, data){
            state.token = data
        },
        SET_email_CHANGE(state, data){
            state.email = data
        },
        SET_defaultImg_CHANGE(state, data){
            state.defaultImg = data
        },
        SET_Keyword_CHANGE(state,data){
            state.keywords = data
        },
        SET_Modal_CHANGE(state,data){
            state.modalUp = data
        },
        SET_errorMsg_CHANGE(state,data){
            state.errorMsg = data
        },
        SET_creating_CHANGE(state,data){
            state.creating = data
        }
    }
})

export default store