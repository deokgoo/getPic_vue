<template>
    <Modal>
    <div slot="header">
        <a href="" class="modal-default-button" @click.prevent="close">&times;</a>
        <br>
        <div class="container">
            <div class="row">
                
                <div class="col-sm-10">
                    <h2>
                        New Account
                    </h2>
                </div>
            </div>
        </div>
        
      
      
    </div>

    <div slot="body">
      <form id="add-board-form"
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="id" ref="input" placeholder="Email">
        <input class="form-control" :type="showpw" v-model="pw" ref="input" placeholder="password">
        <div class="container">
            <div class="row">
                <div class="col-9"></div>
                <div class="col-3">
                    <div @click="showing" :class="textColor">show</div>
                </div>
            </div>
        </div>
        <input class="form-control" type="text" v-model="check" ref="input" placeholder="KeyCode">
        <div v-show="errorMsg.length" class="text-danger" style="text-align:center;">{{errorMsg}}</div>
        <div class="text-primary" v-show="creating" style="text-align:center;">Creating...</div>
      </form>
    </div>
    
    <div slot="footer" class="row justify-content-md-center">
        <button class="btn col col-md-8" :class="{'btn-success': valid}" type="submit"
        form="add-board-form" :disabled="!valid" @click.prevent="fireSignUp">
        Sign Up</button>
    </div>
    
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import store from '../store'
import fire from '../api/firebase.js'
import {mapState} from 'vuex'


export default {
    computed: {
        ...mapState([
            'imgUrl',
            'email',
            'errorMsg',
            'creating'
        ])
    },
    created(){
        this.checked = false
        this.showpw = 'password'
        this.id = ''
        this.pw = ''
        this.check= ''
        store.commit('SET_errorMsg_CHANGE','')
    },
  components: {
    Modal
  },
  data() {
    return {
      id: '',
      pw: '',
      valid: true,
      checked: false,
      check:'',
      showpw: 'password',
      textColor:'text-secondary'
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0
    },
    checked(v){
        this.showpw = v ? 'text' : 'password'
        this.textColor = v ? 'text-dark' : 'text-secondary'
    },
    errorMsg(v){
        
    },
    id(v){
        store.commit('SET_creating_CHANGE',false)
        store.commit('SET_errorMsg_CHANGE',"")
        
    },
    pw(v){
        store.commit('SET_creating_CHANGE',false)
        store.commit('SET_errorMsg_CHANGE',"")
        
    },
    check(v){
        store.commit('SET_creating_CHANGE',false)
        store.commit('SET_errorMsg_CHANGE',"")
    }
    
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    close() {
      store.commit('SET_Modal_CHANGE',false)
    },
    addBoard() {
      this.$emit('close')
      this.$emit('submit', this.input)
    },
    fireSignUp(){
        if(!this.idCheck()) return
        if(!this.pwCheck()) return
        if(!this.keyCodeCheck()) return
        store.commit('SET_creating_CHANGE',true)
        fire.fireSignUp(this.id,this.pw)
    },
    keyCodeCheck(){
        store.commit('SET_errorMsg_CHANGE',store.state.keyCode == this.check?"":"Error KeyCode")
        return store.state.keyCode == this.check
    },
    idCheck(){
         var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        if(this.id.match(regExp)==null){
            store.commit('SET_errorMsg_CHANGE',"Invalid Email..")
            return false
        }
        return true
    },
    pwCheck(){
        if(this.pw.length<6){
            store.commit('SET_errorMsg_CHANGE',"password length > 6")
            return false
        }
        return true
    },
    showing(){
        console.log('showpw')
        this.checked = !this.checked
    }
  }
}
</script>

<style>

</style>
