<template>
    <div class="about">
      <h1>{{ project-heading }}</h1>
      <p>{{$store.state.projects.description}}</p>
      <!-- <p>{{$store.state.about.hobbies}}</p> -->
    </div>
  </template>

<script>
export default {
    computed:{
        fetchDataProjects(){
            this.$store.dispatch('fetchDataProjects')
        }
    },
    mounted(){
        this.fetchDataProjects
    }
}
</script>

<style>

</style>