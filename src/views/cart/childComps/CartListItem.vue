<template>
    <div id="cart-item">

        <!-- {{itemInfo}} -->
        <div id="img">

            <img v-if= "checkImg" class="check-box"  src= "~assets/img/cart/checked.png" alt=""  @click= "checkClick" >
            <img  v-else class="check-box" src= "~assets/img/cart/unchecked.png"  alt=""  @click= "checkClick" >

            <img class="good-img" :src= "itemInfo.img[0]" alt="" >
        </div>

        <div id="text">
            <span class="title">{{itemInfo.title}}</span>
            <span class="price">￥{{itemInfo.price}}</span>
            <span class="number">×{{itemInfo.count}}</span>
        </div>

    </div>
    
</template>

<script>


// import imgc from "../../../assets/img/cart/checked.png"

export default {
  name: 'CartListItem',
  props:{
      itemInfo:{}
  },
  data(){
      return{
          checkImg:{
              type: Boolean,
            //   default: false
          }
      }
  },

  methods:{
      checkClick(){
          
          this.itemInfo.checked = !this.itemInfo.checked
          this.checkImg = this.itemInfo.checked
        //   console.log("this.itemInfo.checked"+this.itemInfo.checked)
        //   console.log("this.checkImg"+this.checkImg)
        console.log(this.$store.state.cartList.filter(item =>{
             return item.checked
         }).reduce((preValue,item) =>{
             return preValue + item.price*item.count
         },0))
      },

  }
}
</script>

<style scoped>

#cart-item{
    height: 100px;
    display: flex;
    padding-top: 10px;
    
}

#img{
    flex: 1;
    width: 190px;
    padding-right: 5px;
}


#text{
flex: 2;
position: relative;
}

#text .title{
    font-size: 15px;
    color: #000;

}

#text .price{
    color: rgb(238, 113, 11);
    position: absolute;
    /* left: 10px; */
    bottom: 5px;
}

#text .number{
    position: absolute;
    right: 20px;
    bottom: 5px;
}



.good-img{
    max-width: 100px;
    max-height: 90px;
    height: 100px;

}

.check-box{
    height: 15px;
    width: 15px;
    /* vertical-align: middle; */
    /* position: absolute; */
    /* top:10px; */
}





</style>