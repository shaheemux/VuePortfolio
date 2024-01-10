!<template>
  <div class="Home">
     <div class="container">
      <h2 class="text">ASPIRING FRONTEND DEVELOPER</h2>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Home{
  height: 100vh;
  background-image: linear-gradient(beige, floralwhite);
}
.container{
  background-image: linear-gradient(thistle , rgb(148, 122, 135));
  height: 100vh;
  text-align: center;
  padding: 1rem;
  display: grid;
}
.text{
  border: solid black 1px;
  padding: 1rem;
  text-shadow: 5px 8px 10px;
  letter-spacing: 2px;
  margin: auto;
  transition: 0.5s ease-in-out;
}
.text:hover{
  background-color: rgb(218, 218, 196);
  transition: 1s;
  transform: scale(1.05);
}


</style>