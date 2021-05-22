<template>
    <div>
        <div>
          <nav-bar class="navbar">
          <div slot="center">购物车({{cartL}})</div>
          </nav-bar>
        <good-list :cartList = 'cartList' />
        </div>
        <cart-sum/>

    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import GoodList from './childComps/CartList'
import CartSum from './childComps/CartSum'

import { mapGetters } from 'vuex'


export default {
  name: 'Cart',
  components:{
    NavBar,
    GoodList,
    CartSum
  },

  computed:{

    ...mapGetters({
      cartL: 'cartLength',
      cartList: 'cartList'
    }),
  }
}
</script>

<style scoped>

  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }




</style>
