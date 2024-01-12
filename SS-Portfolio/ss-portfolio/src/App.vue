<template>
  <navbar/>
  <footers/>
  <router-view/>

</template>

<script>
import navbar from './components/navbar.vue'
import footers from './components/footer.vue'
export default {
  components: {
    navbar,
    footers
  }


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
