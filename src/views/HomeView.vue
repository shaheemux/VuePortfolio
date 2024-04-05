<template>
 <div class="home">
  <h2>Hi , i am <br> Shaheem Salie <br> An Aspiring Web <br> Developer... <span><router-link to="/moreinfo">Who am i ?</router-link></span></h2>
 </div>
</template>
  

<style scoped>
   @keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}

.home {
 margin: 0;
 font: 100% / 1.5 Raleway, sans-serif;
 color: hsl(230, 100%, 95%);
 background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
}

.content {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
}

/* @keyframes zoomIn {
 from {
    opacity: 0;
    transform: scale(0);
 }
 to {
    opacity: 1;
    transform: scale(1);
 }
} */
span{
  transition: 0.5s ease-in-out;
  border: solid 1px white;
  padding: 1rem;
  border-radius: 12px;
  font-size: 25px;
  position: relative;
  bottom: 1rem;
  left: 1rem;
}

span:hover{
  transition: 0.5s;
  transform: scale(1.2);
  
}


h2 {
 margin: auto;
 margin-top: 10rem;
 font-size: 12px;
 font-weight: 300;
 animation: lights 5s 750ms linear infinite;
 text-align: left;
 
}

.btn {
 margin: auto;
 margin-left: 20px;
 font-size: 12px;
 animation: lights 5s 1000ms linear infinite;
 border: solid 1px;
 padding: 1rem;
 text-align: center;
}

/* Responsive styles */
@media (min-width: 768px) {
 .content {
    flex-direction: row;
    justify-content: space-around;
 }

 h2 {
    font-size: 4rem;
 }

 .btn {
    font-size: 14px;
 }
}

@media (min-width: 1024px) {
 h2 {
    font-size: 5rem;
 }

 .btn {
    font-size: 16px;
 }
}
</style>