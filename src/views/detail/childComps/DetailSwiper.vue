<template>
    
    <div id="dy-swiper" >
        <div  class="swiper-slide1" :style= "{width:imgWidth*slideCount+'px'}">
            
            <swiper-item v-for = "item in detailbanners" :key= "item">      
                    <img :src = "item" :style= "{width:imgWidth+'px'}" @load="imgLoad">           
            </swiper-item>
        </div> 
                       
        <div class="indicator1" >
            <span  v-for= "(item,index) in detailbanners" :key= "item" class= "indi1" 
            :class= "{indion1:currentIndex === index}" @click="indiClick(index)">
            </span>
        </div>
    </div>    
</template>

<script>
import SwiperItem from './SwiperItem'

export default {
  name: 'Swiper',
  props:{
      detailbanners:{
          default(){
              return []
          }
      },
  },
  components:{
      SwiperItem
  },

  data(){
      return{
          slideCount:0, //图片个数
          imgWidth:0, //把图片宽度设置为屏幕宽度
          totalWidth:0, //swiper的宽度
          currentIndex: 0, //当前index
          loaded: false  
      }
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    mounted: function (){
        setTimeout(()=>{
            this.getDom()
            this.changeImage();    
        },4000);
        // this.getDom()
        // this.changeImage();   
    },

  methods:{
      getDom(){

        this.slideCount=this.detailbanners.length
        this.imgWidth=screen.width //把图片宽度设置为屏幕宽度
        this.totalWidth=screen.width*this.slideCount //swiper的宽度
        // console.log(this.slideCount)
      },

      indiClick(index){
          //点开后重新计时
          this.stopTimer()
          this.changeImage()
          this.currentIndex = index
          let imgCon = document.getElementsByClassName('swiper-slide1')[0]
          imgCon.style.left = -index*this.imgWidth+'px'
        //   console.log(this.imgWidth) 
      },

      changeImage(){
        if(this.currentIndex>=this.slideCount-1){
            this.currentIndex=0
        }    
        else{
            this.currentIndex++
        }      
        // console.log(this.currentIndex)
          let imgCon = document.getElementsByClassName('swiper-slide1')[0]
          imgCon.style.left = -this.currentIndex*this.imgWidth+'px'
            this.timePlayer = setTimeout(() => {
            this.changeImage()
            // console.log('changing imgs')
        }, 4000);
        // console.log(this.slideCount + this.banners)

      },

      stopTimer(){
          clearTimeout(this.timePlayer)
      },

      imgLoad(){
          if(!this.loaded){
              this.$emit('swiperImgLoad')
              this.loaded = true
          }
          
      }
  },

}
</script>

<style>
    #dy-swiper{
        /* 临时 宽度*/
        /* width: 375px; */
        /* height: 200px; */
        overflow: hidden;
        position: relative;
       
    }

    .swiper-slide1{
        /* 临时所有图的总width */
        /* width: 1500px; */
        position: relative;
    }

    .swiper-slide1 img{
        /* 临时屏幕宽度 */
        /* width: 375px; */
        float: left;
        
        /* height: 100px; */
    }

    .indicator1{
        position: relative;
        bottom: 3rem;
        /* 临时 */
        left: 30%;
        height: 2rem;
    }

    .indi1{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10rem;
        margin: 1rem;
        background-color: rgb(135, 147, 202);
    }


    .indion1{
        background-color: rgb(247, 66, 66);
    }


</style>