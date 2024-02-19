<template>
    <main class="home">
      <h1 class="title">Aspiring Front-End Developer</h1>
    </main>    
</template>
  
 
  
<style scoped>

.home{
  height: 100vh;
  background: #282c34;
  margin-top: 4.6rem;
  display: grid;
}
.title{
  color: white;
  /* border: solid white; */
  font-family: 'Londrina Shadow', sans-serif;
  font-size: 5em;
  margin: auto;
  padding: 1rem;
}

.BTN{
  height: 60px;
  width: 210px;
  margin: auto;
  position: relative;
  bottom: 15rem;
  background: transparent;
  border-radius: 4px;
  transition: 0.5s ease-in-out;
  color: white;
}

.BTN:hover{
  background-color: azure;
  transition: 0.5s;
  transform: scale(1.05);
  box-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white;
  color: black;
}

@media screen and (max-width: 300px) {
 .BTN{
    height: 50px; 
    width: 150px; 
    font-size: 0.8em; 
 }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
 .BTN{
    height: 60px;
    width: 200px; 
    font-size: 1em; 
 }
}

@media screen and (min-width: 721px) and (max-width: 992px) {
 .BTN{
    height: 70px; 
    width: 250px; 
    font-size: 1.2em; 
 }
}

@media screen and (min-width: 993px) {
 .BTN{
    height: 80px; 
    width: 300px; 
    font-size: 1.4em;
 }
}

@media screen and (max-width: 300px) {
 .title{
    font-size: 2em; 
 }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
 .title{
    font-size: 3em; 
 }
}

@media screen and (min-width: 721px) and (max-width: 992px) {
 .title{
    font-size: 4em;
 }
}

@media screen and (min-width: 993px) {
 .title{
    font-size: 5em; 
 }
}

@media screen and (max-width: 300px) {
 .BTN{
    height: 40px; /* Adjust this value as needed */
    width: 150px; /* Adjust this value as needed */
    bottom: 10rem; /* Adjust this value as needed */
 }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
 .BTN{
    height: 50px; /* Adjust this value as needed */
    width: 200px; /* Adjust this value as needed */
    bottom: 12rem; /* Adjust this value as needed */
 }
}

@media screen and (min-width: 721px) and (max-width: 992px) {
 .BTN{
    height: 60px; /* Adjust this value as needed */
    width: 250px; /* Adjust this value as needed */
    bottom: 14rem; /* Adjust this value as needed */
 }
}

@media screen and (min-width: 993px) {
 .BTN{
    height: 70px; 
    width: 300px; 
    bottom: 16rem; 
 }
}

@media screen and (max-width: 320px) {
 .BTN{
    height: 40px; 
    width: 150px; 
    bottom: 10rem; 
 }
}


</style>
  