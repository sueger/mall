<template>

<div id="comments" v-if = "comments">
    <div class="detail-title">
        - 评论 -
    </div>
    <div>
        <div>
            全部评论({{comments.length}})
        </div>
        <div class="user-comment" v-for="(item,index) in comments" :key= "index">
            <img v-if= "item[3]" :src="item[3]"  alt="">
            <!-- <img v-else src="~assets/img/common/unnamed.jpg" alt=""> -->
            <div class="user-info">
                <p class="name">{{item[0]}}</p> 
                <p class="time">{{item[2]}}</p>    
            </div>
            <div class="comment">
                <p>{{item[1]}}</p>
            </div>
            

        </div>
    </div>

</div>

</template>

<script>
export default {
  name: 'DetailComment',
  props:{
    comments:{}
  },
  methods:{

  }

}
</script>

<style scoped>
#comments{
    padding-top: 12px;
}
.user-comment{
    /* padding-left: 10px;
    padding-bottom: 15px; */
    padding: 10px 10px 10px 10px;
}

.user-comment img{
    border-radius:50%;
    max-width: 30px;
    overflow: hidden;
    display: inline;
}

.user-info{
    display: inline-block;
    padding-bottom: 5px;
    padding-left: 10px;
}

.name{
    color: black;
    font-size: 15px;
}
.time{
    font-size: 10px;
}
.comment{
    color: black;
    font-size: 14px;
}

</style>