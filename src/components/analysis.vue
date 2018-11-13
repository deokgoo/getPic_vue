<template>
    <div>
        <div class="container" style="margin-top:15px;">
        <FileUp></FileUp>
            
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
            </div>
            <img class="inputImgs col-md-auto" style="margin-top:15px;" v-bind:src="imgUrl">
            <div class="col col-lg-2">
            </div>    
        </div>    
    </div>
    <div class="container">
            <div class="row keyword_set">
                <component v-for="(item, index) in viewData" :key="(item,index)" :is="item" :selNum="index"></component>
            </div>
        </div>

    </div>
</template>

<script>
import FileUp from './FileUp.vue'
import Keyword_temp from './Keyword.vue'
import firebase from '../api/firebase.js'
import {mapState} from 'vuex'
import store from '../store'

export default {
    created(){
        store.commit('SET_IMGURL_CHANGE', 'https://www.hsjaa.com/images/joomlart/demo/default.jpg')
        store.commit('SET_Keyword_CHANGE',[])
        store.commit('SET_Modal_CHANGE',false)
    },
    computed: {
        ...mapState([
            'imgUrl',
            'email',
            'keywords'
        ])
    },
    watch:{
        keywords: function(val){
            for(var i=0;i<val.length;i++){
                this.viewData.push('keyword_temp')
            }
        }
    },
    components:{
        'FileUp' : FileUp,
        'keyword_temp' : Keyword_temp,
    },
    data(){
        return{
            fileUp: false,
            analys: false,
            viewData: []
        }
    },
    methods:{
        sendFireImg(imgData){
            console.log(imgData)
            firebase.fireSendImg(imgData)
        }
    }

}
</script>
<style>

</style>
