<template>
  <div class="about">
    <p  class="description">{{$store.state.about.description}}</p>
    <p>{{$store.state.about.hobbies}}</p>
  </div>
</template>
<script>
export default {
    computed:{
        fetchDataAbout(){
            this.$store.dispatch('fetchDataAbout')
        }
    },
    mounted(){
        this.fetchDataAbout
    }
}
</script>

<style scoped>
.about{
  border: solid 1px solid;
  background-color: aqua;
  width: 50%;
}
.description{
  padding: 1rem;
}
</style>






