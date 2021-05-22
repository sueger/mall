<template>
<div id="introInfo" >

    <img :src= "introInfo.size" alt="">
    <div class="intro">
        <p>{{introInfo.intro}}</p>
    </div>

</div>
</template>

<script>
export default {
  name: 'DetailIntro',
  props:{
    introInfo:{}
  },

}
</script>

<style scoped>
#introInfo img{
    max-width: 100%;
}

#introInfo .intro{
    padding-top: 8px;
}

</style>