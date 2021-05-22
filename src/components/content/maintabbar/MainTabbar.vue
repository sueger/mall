<template>

    <tabBar>
      <tab-bar-item path='/home'>            
        <img slot="item-icon" src="~assets/img/tabbar/home.jpg" alt="">
        <img slot="item-icon-ac" src="~assets/img/tabbar/home-a.jpg" alt="">       
        <div slot="item-name">首页</div> 
      </tab-bar-item>

      <tab-bar-item path='/cart'>            
        <img slot="item-icon" src="~assets/img/tabbar/cart.jpg" alt="">
        <img slot="item-icon-ac" src="~assets/img/tabbar/cart-a.jpg" alt="">
        <div slot="item-name">购物车</div>
      </tab-bar-item>

      <tab-bar-item path='/menu'>            
        <img slot="item-icon" src="~assets/img/tabbar/menu.jpg" alt="">
        <img slot="item-icon-ac" src="~assets/img/tabbar/menu-a.jpg" alt="">
        <div slot="item-name">分类</div>
      </tab-bar-item>

      <tab-bar-item path='/me'>            
        <img slot="item-icon" src="~assets/img/tabbar/me.jpg" alt="">
        <img slot="item-icon-ac" src="~assets/img/tabbar/me-a.jpg" alt="">
        <div slot="item-name">我的</div>
      </tab-bar-item>

    </tabBar>

</template>

<script>


import TabBarItem from 'components/common/tabbar/TabbarItem';
import TabBar from 'components/common/tabbar/Tabbar'

export default {
  name: 'MainTab',
  components:{
    TabBar,
    TabBarItem,
  }

}
</script>

<style>
 
</style>
