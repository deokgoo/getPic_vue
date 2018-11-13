import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '../store'

import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Analys from '../components/analysis.vue'

Vue.use(vueRouter)

const NotFounds = {template:'<div> <h1>404 NOT FOUND</h1></div>'}

const requireAuth = (to, from, next) => {
    const isAuth = store.state.token
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    isAuth ? next() : next(loginPath)
}

const routes = [
    {
        path:'/',
        component:Header,
        beforeEnter:requireAuth,
        children:[
            {path:'analys/',component:Analys}
        ]
    },
    {
        path:'/login',
        component:Login
    }
]

const router = new vueRouter({
    mode:'history',
    routes
})

export default router