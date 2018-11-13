<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import fire from './api/firebase.js'

export default {
  name: 'app',
  created(){
      fire.fireConfig()
      
  },
  data () {
    return {
      
    }
  },
  methods:{
    Login(id,pw){
      fire.fireLogin(id,pw)
    }
  }
}
</script>

<style>
#app {
    margin: 0px;
    padding: 0px;
    width:100%;
    height:100%;   
}
* {
    margin: 0px;
    padding: 0px;
    
}
::-webkit-scrollbar { 
    display: none; 
}
html, body {
    height: 100%;
}
.btn_logout{
    margin:auto 10px;
    display: block;
}
.login_container{
    max-width: 100%;width: 100%;
    min-height:100%;
    background-image: url('http://kkddgg101.dothome.co.kr/getpic/public/img/slide/slide1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    display:flex;
    
}

.login-form {
    width:40%;
    min-width: 350px;
    margin: auto;
    align-items:center;
}
.login-form form {        
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.login-form h2 {
    margin: 0 0 15px;
}
.form-control, .btn {
    height: 10%;
    min-height: 50px;
    border-radius: 2px;
}
.input-group-addon .fa {
    font-size: 18px;
}
.btn {        
    font-size: 25px;
    font-weight: bold;
}
.text-center{
    font-weight: bold;
}


.search{
     min-width:300px;
     vertical-align: middle;
     width:100%;
     height:50px;
     margin:5px 0px;
     padding-left:40px;
     position: relative;
     top:5%;
 }
 .sSubmit{
     padding:0;margin:0;
     height:50px;
     min-width:50px;
     max-width:80px;
     display:inline-flex;
 }
 .hLogo{
     margin: 0px 5px;
     max-height:50px;
     min-width:100px;
 }



.navbar-new-top{
    height:50px;
    min-height:50px;
}
.navbar-brand{
    font-weight: 600;
}
.navbar-brand img{
    width: 20%;
}
.navbar-new-top ul{
    margin-right: 9%;
}
.navbar-new-top ul li{
    margin-right: 8%;
}
.navbar-new-bottom{
    background-color: #f7f7f7;
    box-shadow: 0 5px 6px -2px rgba(0,0,0,.3);
    border-top: 1px solid #e0e0e0;
    margin-top: 4px;
    height: 50px;
    max-height:50px;
    display: inline-block;
}
.navbar-new-bottom ul li{
    margin-left: 2%;
    margin-right: 2%;
}
.navbar-nav .nav-item a {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    transition: 1s ease;
}
.navbar-nav .nav-item a:hover{
    color: #0062cc;
}
.dropdown-menu.show{
    background: #f8f9fa;
    border-radius: 0;
    display: block;
    right:30px;
    z-index: 3;
}
.show{
    z-index:3 ;
}
.header-btn{
    width: 161%;
    border: none;
    border-radius: 1rem;
    padding: 8%;
    background: #0062cc;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
}

.navbar-login
{
    width: 305px;
    padding: 10px;
    padding-bottom: 0px;
}

.navbar-login-session
{
    padding: 10px;
    padding-bottom: 0px;
    padding-top: 0px;
}

.icon-size
{
    font-size: 87px;
}

#userInfo{
    color:white;
    text-decoration: none;

}

.btn_search{
    touch-action: none;
    height:16px;
    width:16px;
    position: absolute;
    z-index: 1;
    left:20px;
    top:45%;
}

.initPadding{
    padding:0px;
    width:100%;
}

.img_board{
    margin-top:30px;width:100%;
}

.headerView {
    position:fixed;
    width:100%;
    top: 0px;
    left: 0px;
    z-index: 2;
}
.searchView{
    width:100%;
    top: 50px;
    left: 0px;
    z-index: 1;
}
.board_container{
    margin-top:10px;
}

.dropdown-menu{
    z-index:3;
    text-align: center;
}

.collapse.show{
}

.btn-reset,
.btn-remove {
  border-radius: 80%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
}
.btn-reset {
  position: absolute;
  top: 35%;
  right: 10px;
}
.btn-reset::before, 
.btn-remove::before {
  content: 'X'
}
.menu>li>div{
   color:white;
   text-decoration: none; 
}

.inputImgs{
    width:720px;
    min-width:300px;
    max-width:720px;
    height:300px;
}
.lab{
    height:50px;
    margin:30px;
    font-size:25px;
    vertical-align: middle;
}
</style>
