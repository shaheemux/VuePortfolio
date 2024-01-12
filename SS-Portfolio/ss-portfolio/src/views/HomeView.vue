<template>
<div id="home">
     <div class="container">
      <div class="upper">SHAHEEM SALIE</div>
      <div class="lower">SHAHEEM SALIE</div>
      <div class="inside">ASPIRING FRONTEND DEVELOPER</div>
    </div>
</div> 
  
</template>

<script>
export default {

}
</script>

<style scoped>
*,
:before,
:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 #home{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
}

.container {
  width: 9.25em;
  height: 1.15em;
  font-size: 4rem;
  font-family: sans-serif;
  position: relative;
}

.container div {
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  position: absolute;
  left: 0;
  text-transform: uppercase;
  width: 100%;
  display: block;
  text-align: center;
}

.upper {
  top: 0;
  height: 52.5%;
  color: #fff;
  overflow: hidden;
  z-index: 3;
  animation: moveUp 1.5s ease-in-out 1;
  background-color: #121212;
}

.lower {
  bottom: 0;
  height: 100%;
  background: linear-gradient(180deg, #121212 52.5%, #fff 52.5%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  z-index: 1;
  animation: moveDown 1.5s ease-in-out 1;
}

.inside {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  text-align: center;
  z-index: 2;
  font-size: 1rem;
  color: #ff0033;
  
}

@keyframes moveUp {
  0%,
  100% {
    top: 0;
  }

  50%,
  70% {
    top: -45px;
  }
}

@keyframes moveDown {
  0%,
  100% {
    top: 0;
  }

  50%,
  70% {
    top: 30px;
  }
}

@media (max-width: 424px) {
  .container {
    font-size: 2.5rem;
  }

  .inside {
    font-size: 0.75rem;
  }
}

@media (max-width: 320px) {
  .container {
    font-size: 2rem;
  }

  .inside {
    font-size: 0.5rem;
  }
}



</style>