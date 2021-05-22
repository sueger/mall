<template>
<div v-if="goods">

    <div class="detail-title">
        {{goods.title}}
    </div>

    <div class="price">
        <span class="n-price">￥{{goods.newPrice}}</span>
        <span class="o-price">￥{{goods.oldPrice}}</span>
    </div>

    <div class="sell-info">
        <span v-for= "g in goods.columns" :key="g">{{g}}</span>
    </div>

    <div class="shop-info">
        <span v-for= "item in goods.services" :key ="item">☑ {{item}}</span>
    </div>
</div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',

  props:{
      goods:{}
  },
}
</script>

<style>
.detail-title{
    font-size: 18px;
    color: rgb(82, 78, 78);
    padding-top: 10px;
}
.price{
    padding-top: 10px;
}
.n-price{
    color: var(--color-high-text);
    font-size: 20px;

}

.o-price{
    color: rgb(134, 128, 129);
    font-size: 13px;
    text-decoration:line-through;
}

.sell-info{
    display: flex;
    padding-top: 8px;
    justify-content: space-between;  
}

.sell-info span{
    display: inline-block;
    /* flex: 1; */
    font-size: 13px;
}

.shop-info{
    display: flex;
    justify-content: space-between; 
    padding-top: 8px;
    color: black;
}

.shop-info span{
    display: inline-block;
    /* flex: 1; */
}
</style>