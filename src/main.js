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
Vue.config.productionTip = false
Vue.use(Cube)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')