<template>
  <navbar/>
  <router-view/>
  <footers/>

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
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
