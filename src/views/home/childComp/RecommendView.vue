<template>
    <div id='recommend'>
        <div v-for = "item in recommends.list" :key="item.list" class="recommend-item">
            <a :href= "item.link">
                <img :src= "item.image" alt="">
                <div>{{item.title}}</div>
            </a>   
        </div>        
    </div>
</template>

<script>
export default {
  name: 'Recommends',
  props:{
      recommends:{
        //   type: Array,
          default() {
              return null
          }
      }
    }
}
</script>

<style scoped>
#recommend {
    display: flex;
    padding: 0px 10px 15px;
}
.recommend-item{
    flex: 1;    
    text-align: center; 
    font-size: 14px;
}

.recommend-item img{
    width: auto;
	height: auto;
	max-width: 80%;
	max-height: 80%;
    margin-bottom: 5px;
    margin-top: 5px;
}


</style>