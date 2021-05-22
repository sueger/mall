import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

//安装插件
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },

    mutations:{
        addCounter(state, payload){
            payload.count +=1
        },

        addToCart(state, payload){
            state.cartList.push(payload)
            payload.checked = true  //默认在购物车中选中
        },

    },

    actions:{
        addCart(context, payload){
            //查找数组中是否有该商品
            let p = context.state.cartList.find(item => item.iid == payload.iid)
            if(p){
                // p.count += 1
                context.commit('addCounter', p)
            }
            else{
                payload.count = 1
                // context.state.cartList.push(payload)
                context.commit('addToCart', payload)
            }
        }
    },

    getters
})


export default store
