<template>
  <div id="navbar">   
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">Pricing</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
   
  .navbar{
    background-color: #282c34 !important;
    
     
  }
  .nav-link{
    
    color: white !important;
  }
  
  </style>
 
