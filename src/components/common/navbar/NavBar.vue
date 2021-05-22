<template>
    <div id="nav-bar">
        <div class="left"><slot name = "left"></slot></div>
        <div class="center"><slot name = "center"></slot></div>
        <div class="right"><slot name = "right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
    #nav-bar{
        height: 44px;
        line-height: 44px;
        display: flex;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .5);
    }
    #nav-bar .left, #nav-bar .right{
        width: 60px;     
        /* background-color: rgb(52, 150, 137);  */
    }

    #nav-bar .center {
        flex: 1;
        text-align: center;
    }


</style>
