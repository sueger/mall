<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">

            <slot></slot>
        </div>
        
    </div>
</template>

<script>

import BScroll from 'better-scroll'


export default {
  name: 'Scroll',
  data(){
      return{
          scroll: null,
          option:{
              click: true,
              probeType: this.probetype,
              pullUpLoad: this.pullUpLoad
          },
      }
  },

  props:{
      probetype:{
          type: Number,
          default:1,
      },

      pullUpLoad:{
          type: Boolean,
          default: false
      }
  },

  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,this.option)
    this.scroll.on('scroll', position =>{
        // console.log(position)
        this.$emit('scroll',position)
    })

    //监听上拉
    this.scroll.on('pullingUp', ()=>{
            // console.log('上拉加载')
            // console.log('pullingUp' + this.option.pullUpLoad)
        this.$emit('pullingUp')
    })

  },
}
</script>

<style scope>



</style>
