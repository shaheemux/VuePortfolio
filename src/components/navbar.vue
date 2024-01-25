<template>
  <div id="navbar">   
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
    <div class="container-fluid">
      <!-- <h3 style="color: #fa8231;;   font-family: JetBrains Mono, monospace;">Shaheem<span style="  color:#c678dd;"><span style="color: rgb(214, 39, 39);">.</span>("Salie")</span></h3> -->
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
            <router-link to="/resume" class="nav-link">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
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
    background-color: #393d46 !important;     
  }
  .navbarNav{   
    text-align: center !important;

  }
  .nav-link{
    color: white !important;
  }

  .nav-link {
  color: #e1e1e1;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.nav-link:focus,
.nav-link:hover {
  color: #fff;
}

.nav-link:focus:after,
.nav-link:hover:after {
  width: 100%;
  left: 0%;
}

.nav-link:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
  
  </style>
 
