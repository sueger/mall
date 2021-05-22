import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const Me = ()=> import('../views/me/Me')
const Menu = ()=> import('../views/menu/Menu')
const Detail = ()=> import('../views/detail/Detail')


Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: "/home"
      },
      {
        path: '/home',
        component: Home
      },
    
      {
        path: '/me',
        component: Me
      },
    
      {
        path: '/menu',
        component: Menu
      },
    
      {
        path: '/cart',
        component: Cart
      },

      {
        path: '/detail',
        component: Detail
      },
]

export default new Router({
    routes,
    mode:'history'

})

