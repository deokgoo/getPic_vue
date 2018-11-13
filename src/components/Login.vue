<template>
    <div class="container login_container">
        <div class="login-form">
            <form>
                <div class="text-center">
                    <img src="http://kkddgg101.dothome.co.kr/getpic/images/Logo.png" class="rounded">
                </div>
                <h2 class="text-center">GetPic에 오신것을<br>환영합니다.</h2>   
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input type="text" id="btn_id" class="form-control" placeholder="Username" v-model='id' required="required">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                        <input type="password" id="btn_pw" class="form-control" placeholder="Password" v-model='pw' required="required">
                    </div>
                </div>        
                <div class="form-group">
                    <button class="btn btn-success btn-block" @click.prevent='fireLogin'>Log in</button>
                </div>
                <div class="clearfix">
                    <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
                    <a href="#" class="pull-right">Forgot Password?</a>
                </div>        
            </form>
            <p class="text-center small">Don't have an account! <a @click.prevent="signUp" class="text-primary

">Sign up here</a>.</p>
        </div>
        <AddAccount v-show="modalUp"></AddAccount>
    </div>
</template>

<script>
import AddAccount from './AddAccount.vue'
import {mapState} from 'vuex'
import store from '../store'

export default {
    computed: {
        ...mapState([
            'modalUp',
        ])
    },
    components:{
        'AddAccount' : AddAccount,
    },
    data(){
        return{
            id : '',
            pw : '',
            token : ''
        }
    },
    methods:{
        fireLogin(){
            console.log("fireM")
            this.$parent.$options.methods.Login(this.id,this.pw)
        },
        signUp(){
            store.commit('SET_Modal_CHANGE',true)
        }
    }
}
</script>

<style>
.input-group-addon{
    display: flex;
  justify-content: center;
  margin-right:6px;
}
.fa{
    margin: auto;
    
}
</style>
