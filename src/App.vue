<template>
  <div>
    <h2>欢迎来到ssr渲染页面</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/animate">animate</router-link>
    <router-link to="/people">people</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted() {

    }
  }
</script>

<style>
  
</style>