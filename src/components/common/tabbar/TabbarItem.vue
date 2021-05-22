<template>
        <div class='tabbar-item' @click='tabbarItemClick'>   
            <!-- 图片  -->
            <div v-if="!isAc">
                <slot name="item-icon" ></slot>
            </div>                   
            <div v-else>
                <slot name="item-icon-ac" ></slot>
            </div>
            
            <!-- 文字 -->
            <div :class= "{itemAc:isAc}">
                <slot name="item-name" ></slot>
            </div>
            
        </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props:{
      path: String
  },
//   data(){
//       return {
//           isAc : true
//       }
//   },

  computed:{
      isAc(){
          return this.$route.path == this.path
      }
  },

  methods:{
      tabbarItemClick(){
        this.$router.replace(this.path)
      }
  }
}
</script>

<style>

.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}

.itemAc{
    color: #e4554a;
}

/* [name="item-icon"]{
    height: 20px;
    width: 20px;
} */

.tabbar-item img{
    height: 20px;
    width: 20px;
}

</style>