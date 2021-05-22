<template>
    <div class="topacktop">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>

export default {
  name: 'BackToTop',
}
</script>

<style scoped>
    /* .topacktop{
        position: fixed;
        right:20px;
        bottom: 60px;
    } */

    div{
        position: fixed;
        right:-5%;
        bottom: 10%;
    }

    img{
        width: 50%;
    }


</style>
