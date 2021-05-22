<template>
    <div>
        <cart-list-item v-for= "(item,index) in cartList" :key= "index"
        :itemInfo = "item"/>
        <!-- {{cartList}} -->
    </div>
    
</template>

<script>


import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components:{
    CartListItem
  },
  props:{
    cartList:{}
  },
}
</script>

<style scoped>
/* 
.contents{
  height: calc(100% - 55px - 49px -44px);

  background-color: #fcfcfc;
  overflow: hidden;
} */



</style>
