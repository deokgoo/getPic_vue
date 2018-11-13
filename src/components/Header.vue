<template>
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success">
        <img src="http://kkddgg101.dothome.co.kr/getpic/images/Logo_w.png" class="navbar-brand hLogo" href="#"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="#">Ranking</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Popular</a>
                </li>
            </ul>
            <div class="pull-right">
                <ul class="nav pull-right">
                    <li class="dropdown">
                        <a href="#" id = "userInfo" class="dropdown-toggle" data-toggle="dropdown">
                            {{email}}님
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu menu bg-success">
                            <li><a><i class="icon-cog"></i> Preferences</a></li>
                            <li><a><i class="icon-envelope"></i> Contact Support</a></li>
                            <li class="divider"></li>
                            <li><div class="btn_logout" @click="fireLogout"><i class="icon-off"></i> Logout</div></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Search></Search>
    <router-view></router-view>
    </div>
</template>

<script>
import Search from './Search.vue'
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'imgUrl',
            'email'
        ])
    },
    components:{
        'Search' : Search,
    },
    created(){
        console.log(this.$store.state)
        
    },
    data(){
        return{
            
        }
    },
    methods:{
        fireLogout(){
            firebase.auth().signOut()
        }
    }
}
</script>

<style>

</style>
