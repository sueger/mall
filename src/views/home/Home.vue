<template>
  <div id='home'>
    <nav-bar class='home-navbar'>
          <div slot="center">购物主页</div>
    </nav-bar>

    <tab-control class="tabcontrol" :tabitems= "tabitems" 
    @tabcontrolClick= "tabcontrolClick" ref="tabControl1"
    v-show="isTabfixed"/>

    <scroll class="scroll" ref="homescroll" 
    :probetype="3" @scroll= "contentScroll" 
    :pull-up-load = "true" @pullingUp= "contentMore">
      <home-swiper :banners= 'banners' @swiperImgLoad = 'swiperImgLoad'/>
            <!-- <div>{{banners}}</div> -->
      <recommend-view :recommends = 'recommends' />
      <home-feature/>
      <tab-control class="tabcontrol" :tabitems= "tabitems" 
      @tabcontrolClick= "tabcontrolClick" ref="tabControl2"/>
    <goods-list :goodslist= "showGoods" />
    </scroll>

        <!-- 监听组件的click需要用native -->
    <back-to-top @click.native= "backToTop" v-show="totopshow"/>
        <!-- <main-tab/> -->
  </div>
</template>

<script>
// import MainTab from 'components/content/maintabbar/MainTabbar'
import NavBar from 'components/common/navbar/NavBar'

import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import TabControl from 'components/content/TabControl/TabControl'

import HomeFeature from './childComp/HomeFeature'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackToTop from 'components/content/backToTop/BackToTop'

import {getHomeData,getHomeDataMore} from 'network/home'
export default {
  name: 'Home',
  components:{
    // MainTab,
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackToTop,
  },
  data(){
    return{
      banners: [],
      recommends : [],
      goods:{
        'pop':{page:0 , list:[]},
        'new':{page:0 , list:[]},
        'select':{page:0 , list:[]}
      },
      tabitems:['流行','新款','精选'],
      currentType: 'pop',
      totopshow: false,
      pullupload:true,
      tabOffsetTop: 0,
      isTabfixed: false,
      saveY : 0

      
    }
  },
  created(){
    //调用methods的封装
  this.getHomeData()

    //调用methods的封装
  this.getHomeDataMore('pop')
  this.getHomeDataMore('new')
  this.getHomeDataMore('select')

  },

  activated(){
    this.$refs.homescroll.scroll.scrollTo(0,this.saveY,0)
    // console.log("activated"+this.saveY)
    this.$refs.homescroll.scroll.refresh()

  },

  deactivated(){
    this.saveY = this.$refs.homescroll.scroll.y
    // console.log("de"+ this.saveY)
  },

  methods:{
    //网络请求
    //广告等数据
    getHomeData(){
      getHomeData().then(res => {
      this.banners = res.data.banner
      this.recommends = res.data.recommend
      // console.log(this.banners)
    })
    },

    // getMoreData(){
    //   console.log("getMoreData")
    // },
    getHomeDataMore(type){
      const page = this.goods[type].page+1
      getHomeDataMore(type,page).then(res =>{
        if(res.data.length >0){
          this.goods[type].list.push(...res.data)
          this.goods[type].page+=1
          // console.log('getHomeDataMore' + type + this.goods[type].page)
          // console.log(res)
        }
        // else{
        //   // console.log('getHomeDataMore' + type + this.goods[type].page)
        // }


      // 完成上拉加载更多
      this.$refs.homescroll.scroll.finishPullUp()
    })
    },

    //事件监听
    tabcontrolClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='select'
          break
      }
       this.$refs.tabControl1.clickedindex = index
       this.$refs.tabControl2.clickedindex = index
       
    },
    //返回顶部
    backToTop(){
      this.$refs.homescroll.scroll.scrollTo(0,0,500)
      getHomeDataMore(this.currentType)
    },

    //上拉到一定程度时显示返回箭头
    contentScroll(position){
      this.totopshow = (-position.y) > 579 

      //tabControl是否吸顶,159是微调
      this.isTabfixed = (-position.y) > this.tabOffsetTop + 159
      
    },

    //上拉加载更多
    contentMore(){
      this.getHomeDataMore(this.currentType)
      //重新计算可滚动区域
      this.$refs.homescroll.scroll.refresh()
    },

    swiperImgLoad(){

      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }


  },
  computed:{
      showGoods(){
          return this.goods[this.currentType].list
      },
  }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  .home-navbar{
    background-color: var(--color-tint);
    color: #fff;
/* 
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tabcontrol{
    top:44px;
  }

  .scroll{
    height: calc(100% - 55px);
    /* height: 100px; */
    overflow: hidden;
  }


</style>
