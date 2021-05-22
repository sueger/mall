<template>
<div v-if = "shopInfo">
  <!-- {{shopInfo}} -->
  <div class="shop-logo">
    <img :src="shopInfo.shopLogo" alt="">
    <div>{{shopInfo.shopName}}</div>
  </div>

  <div class="score">
    <div class="number">
      {{shopInfo.cSell}} 
      <span><br>总销量</span>
    </div>
    <div class="number"> 
      {{shopInfo.goodsNo}} 
      <span><br>全部宝贝</span>
    </div>
    <div class="scores">
      <!-- {{shopInfo.score}} -->
      <div v-for = "(item,index) in shopInfo.score" :key= "index">
        {{item.name +" "+ item.sco}} 
        <span v-if = "item.isBetter == 'true'" class="highscore">高</span>
        <span v-else-if= "item.isBetter == 'false'" class="lowscore">低</span>
        <span v-else>{{item.isBetter}}</span>
      </div>

      <!-- <div>价格合理  {{shopInfo.priceceScore}} <span class="high-score">高</span></div>
      <div>质量满意  {{shopInfo.qualityScore}} <span class="low-score">低</span></div> -->
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'DetailShopInfo',

  props:{
    shopInfo:{}
  },

}
</script>

<style>
.shop-logo{
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.shop-logo img{
  height:  40px;
  width: 40px;
  border-radius:50%;
  max-width: 40px;
  max-height: 40px;
}

.shop-logo div{
  display: inline-block;
  padding-left: 10px;
}
.score{
  display: flex;
  padding-top: 8px;
  align-items: center;
}
.number{
  text-align: center;
  flex: 0.5;
  /* justify-content: space-between;   */
  
}

.number span{
  font-size: 12px;
}
.scores{
  text-align: center;
  flex: 1;
  font-size: 14px;
  line-height: 18px;
  border-left: rgba(117, 110, 110, 0.4) 1px solid;
}

.lowscore{
  background-color: rgb(77, 226, 144);
  color: #fff;
}

.highscore{
  background-color: rgb(201, 57, 57);
  color: #fff;
}
</style>