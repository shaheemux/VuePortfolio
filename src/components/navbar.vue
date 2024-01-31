<template>
  <div id="navbar">
    <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Shaheem Salie</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          <img src="" alt="">
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
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
  </div>
</nav>   
  </div> 
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
    
    .navbar-brand{
      color: white;
      font-family: 'Roboto Mono', monospace;
      font-size: 2em;
    }
  .navbar{
    background-color: #393d46 !important;     
  }
  .offcanvas-header{
   background-image: url(https://cdn-thumbs.imagevenue.com/0d/43/60/ME17K5PL_t.jpg);
   color: white;
  }
  .offcanvas-body{
    background-image: url(https://cdn-thumbs.imagevenue.com/0d/43/60/ME17K5PL_t.jpg);  
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
 
