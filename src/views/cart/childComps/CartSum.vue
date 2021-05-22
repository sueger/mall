<template>
    <div id="bottominfo">
        <div id="left">
        <img src="~assets/img/cart/checked.png" alt="">
        <span>全选 合计:￥{{totalPrice}}</span>
        <!-- <span>{{totalPrice}}</span> -->

        </div>

        <!-- <div id="right">
            <div>去计算</div>
        </div> -->


    </div>
    
</template>

<script>
export default {
  name: 'CartSum',
  props:{

  },
  data(){
      return {
          carts : this.$store.state.cartList
      }
  },



methods:{
    getCarts() {
        for (let i = 0; i < this.carts.length; i++) {
            this.carts[i] = Object.assign({}, this.carts[i], { editState: false });
        }

        this.carts = Object.assign({}, this.carts);

        return this.carts;
    }
},





computed:{

    totalPrice(){


    // return this.$store.state.cartList.filter(item =>{
    //          return item.checked
    //      }).reduce((preValue,item) =>{
    //          return item.price*item.count
    //      },0)


     return this.$store.state.cartList.filter(item =>{
             return item.checked
         }).reduce((preValue,item) =>{
             return preValue + item.price*item.count
         },0)


         
    },


},


}
</script>

<style scoped>
#bottominfo{
    background-color: rgb(182, 130, 130);
    height: 40px;
    position: absolute;
    width: 100%;
    bottom: 50px;
    line-height: 40px;
    /* display: flex; */
}
#left{
    display: flex;
    align-items: center;


}

#right{
    flex: 1;
}
#bottominfo img{
/* display: inline; */
height: 15px;
width: 15px;
margin-left: 5px;
margin-right: 5px;
}
</style>