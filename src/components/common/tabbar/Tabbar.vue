<template>
    <div id='tabbar'>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>

#tabbar{
  display: flex;
  background-color: rgb(233, 229, 229);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 1px -3px 5px rgba(199, 163, 163, 0.2);
  z-index: 1;
}

</style>
