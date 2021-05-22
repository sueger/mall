<template>
<div id="goodsinfo" v-if = "goodsInfo">
    <div class="detail-title">
        - 宝贝详情 -
    </div>
    <div>
        <img v-for="(item,index) in goodsInfo.displayimg" :src="item" :key= "index" alt="">
    </div>
</div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props:{
    goodsInfo:{}
  },

}
</script>

<style scoped>
#goodsinfo{
    padding-top: 12px;
}
#goodsinfo img{
    max-width: 100%;
    /* height: 100%; */
}
/* .detail-title{
  font-size: 10px;
  text-align: center;
} */

</style>