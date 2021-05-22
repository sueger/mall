<template>
  <div id="goodsitem" @click="itemClick">
      
          <img :src="goodsitem.img" alt="">
          <div class="goodsinfo">
            <p>{{goodsitem.title}}</p>
            <span class="price">￥{{goodsitem.price}}</span>
            <span class="star">&nbsp;&nbsp;&nbsp;&nbsp;☆</span>
            <span>{{goodsitem.cfav}}</span>
          </div>
        <!-- <a :href="goodsitem.link">
        </a> -->
  </div>

</template>

<script>

export default {
  name: 'GoodsListItem',
  props:{
      goodsitem:{
          type: Object,
          default(){
              return {}
          }
      }
  },

  methods:{

      itemClick(){
        //   console.log(this.$router.push('/detail/'+ this.goodsitem.iid))
          
        //   console.log(this.$router.push('/detail?iid=' + this.goodsitem.iid))
        this.$router.push({
            path: '/detail',
            query:{
                iid: this.goodsitem.iid
            },
            

        })
        // console.log(this.goodsitem.iid)
      }

  }

}
</script>

<style>
#goodsitem {
    padding: 3px;
}

#goodsitem img{
    width: 100%;
    height: auto;
    /* height: 100%; */
    border-radius: 5px;
}

.goodsinfo{
    font-size: 0.8rem;
}

.goodsinfo p{
    overflow: hidden;
    /* 用一个省略号 ('…')来表示被截断的文本” */
    text-overflow: ellipsis; 
    /* 连续的空白符会被合并。但文本内的换行无效。 */
    white-space: nowrap;
}

.goodsinfo .price{
    color: var(--color-high-text);
}

.goodsinfo .star{
    color: rgb(236, 183, 9);
}
 
</style>
