import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        cartarry: []
    },
    mutations: {
        //添加到购物车
        tocart(state, tag) {
            let goods = state.cartarry.find(v => v.title == tag.label)
            if (goods) {
                goods.cartCount += 1
            } else {
                state.cartarry.push({
                    title: tag.label,
                    cartCount: 1
                })
            }
        },
        //清空购物车
        clearcart(state) {
            state.cartarry = []
        },
        //减少数量
        remove_cart(state, index) {
            if (state.cartarry[index].cartCount > 1) {
                state.cartarry[index].cartCount--;
            } else {
                var message = confirm("确定删除商品嘛?");
                if (message) {
                    state.cartarry.splice(index, 1)
                }
            }
        },
        //设置路由守卫
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {

    },
    getters: {
        countsum: state => {
            let num = 0
            state.cartarry.forEach(v => {
                num += v.cartCount
            })
            return num
        }
    }
})