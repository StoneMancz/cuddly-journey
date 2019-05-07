import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setAxios from './setaxios'
import Cube from 'cube-ui'
setAxios()
Vue.prototype.$http = axios
    //路由守卫
router.beforeEach((to, from, next) => {
    //不论是刷新还是跳转路由,第一个进入的就是这个路由前置钩子函数
    store.commit("settoken", localStorage.getItem("token"))
        //是否设置了路由权限
    if (to.meta.requireAuth) {
        //判断vuex中是否有token
        if (store.state.token) {
            //有执行下一步
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
Vue.config.productionTip = false
Vue.use(Cube)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')