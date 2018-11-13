<template>
    <div class="searchView bg-success">
    <div class="container bg-success">
            <div class="row justify-content-md-center">
                <div class="col-12">
                    <form v-on:submit.prevent>
                        <div class="row">
                            <div class="col-12 initPadding">
                                <i class="fa fa-search btn_search"></i>
                                <input class="search" type="text" v-on:keyup.prevent="resetJud" v-model="searchValue" placeholder="Search..."/>
                                <button v-show="searchValue.length" type="reset" class="btn-reset" @click='onReset'></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div> 
    </div>
</template>

<script>
export default {
    created(){
        console.log('start')
    },
    data(){
        return{
            searchValue : ''
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.inputValue = newVal
        }
    },
    methods:{
        resetJud(e){
            if (e.keyCode != 13) return
            //you send result
        },
        //Reset Btn
        onReset(){
            this.searchValue = ''
        }
    }
}
</script>

<style>

</style>
