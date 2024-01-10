<template>
  <div class="about">
   <div class="Parent">
    <p  class="description">{{$store.state.about.description}}</p>
    <p>{{$store.state.about.hobbies}}</p>
  </div> 
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
/* .Parent{
} */

.about{
  height: 100vh;
  border: solid 1px lime;
  border-radius: 4px;
  position: relative;
  top: 50pX;
  
}
.description{
  border: solid 5px black;
  padding: 1rem;
  color: rgb(0, 0, 0);


}

</style>






