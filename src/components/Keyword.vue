<template>
    <span class='col-md-2 lab badge badge-pill badge-primary' v-bind:class="labels[selNum%8]">{{keywords[selNum]}}</span>
</template>

<script>
import store from '../store'
import {mapState} from 'vuex'
export default {
    props:['selNum'],
    computed: {
        ...mapState([
            'keywords'
        ])
    },
    data(){
        return{
            labels : ["badge badge-pill badge-primary","badge badge-pill badge-secondary","badge badge-pill badge-success","badge badge-pill badge-danger","badge badge-pill badge-warning","badge badge-pill badge-info","badge badge-pill badge-light","badge badge-pill badge-dark"],
            key : 'test'
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>
