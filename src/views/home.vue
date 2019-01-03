<template>
  <div>
    <h3>this is home page</h3>
    <div>hahah{{homeInfo}}</div>
  </div>
</template>

<script>
  export default {
    serverRequest(store) {
      console.log("hahaha")
      return store.dispatch('getHomeInfo')
    },
    mounted() {


    },
    computed: {
      homeInfo() {
        return this.$store.state.homeInfo
      }
    }
  }
</script>

<style>
  
</style>