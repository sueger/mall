<template>
    <div id='tab-control'>
        <div v-for="(item,index) in tabitems" :key="index" class="tab-control-item" 
        :class= "{active: clickedindex == index}" @click="changetored(index)">
            <span>{{item}}</span>
        </div>

    </div>

</template>

<script>

export default {
  name: 'TabControl',
  props:{
      tabitems:{
          type: Array,
          default(){
              return []
          }
      }
  },
  data(){
      return{
          clickedindex: 0
      }
  },
  methods:{
      changetored(index){
          this.clickedindex = index
          //index传给home
          this.$emit("tabcontrolClick",index)
      }
  },


}
</script>


<style>
 #tab-control{
     display: flex;
     height: 40px;
     line-height: 40px;
 }


.tab-control-item{
    flex: 1;
    text-align: center;
    background-color: #fff;
}

.tab-control-item span{
    padding-bottom: 4px;
}
.active{
    color: var(--color-high-text);
}

.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>
