<template>
    
    <div >
      <div class="detail-title">
        <slot  name="title"></slot>
      </div>

      <div id= "goodslist">
      <goods-list-item v-for= "(item,index) in goodslist" :key= "index"
      :goodsitem= "item" class="goodslistitem"/>
      </div>
       

    </div>


</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components:{
    GoodsListItem
  },

  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    },
  },

}
</script>

<style scope>
#goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 均匀排列每个元素每个元素周围分配相同的空间 */
  padding: 3px;
  margin-bottom: 50px;
}

/* #wrapper{
  height: 150px;
  overflow: hidden;
  background-color: rgb(138, 148, 207);

} */

.goodslistitem{
  width: 50%;
}

/* .EndofList{
  display: none;
} */

.detail-title{
  font-size: 10px;
  text-align: center;
  padding-bottom: 10px;
}
</style>
