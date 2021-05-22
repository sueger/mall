<template>
  <div id="app">
    <!-- <keep-alive>
    <router-view/>
    </keep-alive> -->

    <router-view/>
    <main-tab/>
  </div>
</template>

<script>

import MainTab from 'components/content/maintabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
</style>
