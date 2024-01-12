<template>
    <div class="projects">
      <h1>This is an about page</h1>
      <p>{{$store.state.about.description}}</p>
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