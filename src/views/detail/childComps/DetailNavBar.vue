<template>
  <div>
    <nav-bar>
        <div slot="left" class="back" @click= "backclick">  &lt; </div>
        <div slot="center" class="title">
            <div v-for= "(item,index) in titles" :key= "item" class="titileitem" 
            :class="{active : currentIndex==index}" @click="itemclick(index)">
                {{item}}

            </div>

        </div>
    </nav-bar>
        
  </div>

</template>

<script>

import NavBar from 'components/common/navbar/NavBar'


export default {
  name: 'Detail',
  components:{
    NavBar,
  },
  data(){
      return {
          titles:['商品','详情','评论','推荐'],
          currentIndex :0
      }
  },




  methods:{
      itemclick(index){
          this.currentIndex = index
        //   console.log(index)
        //index传给detail
          this.$emit("detailItemClick",index)
      },

      backclick(){
          this.$router.back()
      },
  }
}
</script>

<style>
.back{
    text-align: center;
    font-size: 18px;
}
.title{
    display: flex;
}

.titileitem{
    flex: 1;
}

.active{
    color: var(--color-high-text);
}


</style>