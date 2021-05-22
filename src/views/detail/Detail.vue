<template>
  <div id="detail">
    <!-- <div>{{$store.state.cartList}}</div> -->
    <detail-nav-bar class="detail-nav-bar" @detailItemClick= "detailItemClick" ref= "detailnav"/>
    <scroll class="contents" ref= "detailscroll" @scroll= "detailContentScroll" :probetype= "3">
      <detail-swiper :detailbanners= 'topImages' />
      <detail-base-info :goods = "goods"/>
      <detail-shop-info :shopInfo = "shopInfo"/>
      <detail-goods-info :goodsInfo = "goodsInfo" ref="goodsInfo"  />
      <detail-intro :introInfo = "introInfo" />
      <detail-comment :comments = "comments" ref="comments"/>
      <goods-list :goodslist= "recommendList" ref="recommend"><div slot="title">-更多推荐-</div></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-to-top @click.native= "backToTop" v-show="totopshow"/>
  </div>

</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailshopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailIntro from './childComps/DetailIntro'
import DetailComment from './childComps/Detailcomment'
//推荐的商品
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackToTop from 'components/content/backToTop/BackToTop'

import {getDetail, Goods,getRecommend} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'


export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailIntro,
    DetailComment,
    GoodsList,
    Scroll,
    DetailBottomBar,
    BackToTop,

  },
  data(){
      return {
          iid: null,
          // title:['商品','详情','评论','推荐'],
          dataAll:[],
          goods:{},
          topImages:[],
          paras:[],
          shopInfo:[],
          goodsInfo:[],
          introInfo:[],
          comments:[],
          recommendList:[],
          themeY:[0,1000,2000,3000],
          // currentIndex:0,
          totopshow: false,
      }
  },

  created(){
      //保存传入的iid
    //   this.iid = this.$route.params.iid
    this.iid = this.$route.query.iid

      //根据iid请求商品详情数据
      getDetail(this.iid).then(res =>{
        // console.log(this.iid)
          this.dataAll = res.data[0]
          // console.log(dataAll.comments)
          this.topImages = this.dataAll.topImages
          //获取商品信息,统一展示
          this.goods = new Goods(this.dataAll.itemInfo,this.dataAll.columns, this.dataAll.shopInfo.services)
          //店铺信息
          this.shopInfo = this.dataAll.shopInfo
          //商品图片
          this.goodsInfo = this.dataAll.goodsInfo
          //尺寸介绍
          this.introInfo = this.dataAll.goodsInfo
          //评论
          this.comments = this.dataAll.comments

          
      this.$nextTick(() =>{
        this.themeY = []
        this.themeY.push(0)
        const offsetchange = 175
        //值不对，图片没有计算在内 有大约180px的偏差
        this.themeY.push(this.$refs.goodsInfo.$el.offsetTop +offsetchange)
        this.themeY.push(this.$refs.comments.$el.offsetTop+offsetchange)
        this.themeY.push(this.$refs.recommend.$el.offsetTop+offsetchange)

        // console.log(this.themeY)

      })
      })

      getRecommend('recommend','1').then(res =>{
        // console.log(res)
        this.recommendList = res.data
      })



  },

  methods:{
    detailItemClick(index){
      // console.log(this.themeY[index])
      this.$refs.detailscroll.scroll.scrollTo(0,-this.themeY[index],100)
      // console.log("detailItemClick"+index)
    
    },

    detailContentScroll(position){
      // console.log(position.y)
      var currentY = -position.y
      for(let i =0; i<this.themeY.length;i++){
        // console.log("once")
        if((currentY >= this.themeY[parseInt(i)] && currentY < this.themeY[parseInt(i+1)]) || (i== this.themeY.length-1 && currentY >= this.themeY[parseInt(i)])){
          // console.log(i + this.themeY[parseInt(i)])
          // this.currentIndex = i
          this.$refs.detailnav.currentIndex = i
        }
      }

      this.totopshow = (-position.y) > 579 
    },

    // contentScroll(position){
    //   this.totopshow = (-position.y) > 579 
    // },

    backToTop(){
      this.$refs.detailscroll.scroll.scrollTo(0,0,500)
    },

    addToCart(){
      
      const prod = {}
      prod.img = this.topImages
      prod.price = this.goods.newPrice
      prod.title = this.goods.title
      prod.iid = this.iid

      // this.$store.commit('addCart',prod)
      this.$store.dispatch('addCart',prod)
      // window.alert("已加入购物车");
    }
  }
}



</script>

<style>

#detail{
  /* 盖住tabbar */
  position: relative;
  z-index: 9;
  background-color: #fff;
  /* 配合better scroll */
  height: 100vh;
}

.contents{
  height: calc(100% - 55px - 49px);
  /* height: 300px; */
  background-color: #fcfcfc;
  overflow: hidden;
}

.detail-nav-bar{
  position: relative;

}




</style>