<template>
  <div class="home">
    <h1>System<span style="color:white;">.<span style="color:#e06c75;">out</span>.</span><span style="color:#61afef;">println</span>("</h1>
<div class="string">
  <!-- <h1 class="greeting en"></h1> -->
  <h1 class="greeting es">,Aspiring!</h1>
  <h1 class="greeting de">Front-end</h1>
  <h1 class="greeting it">developer!</h1>  
</div>
<h1 class="closure">");</h1>
    
</div>    
    
  </template>
  
 
  
  <style scoped>
 
 *{
  z-index: .1;
 }
 .home{
    background: #282c34;
    font-size: 2vmin;
    font-family: JetBrains Mono, monospace;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e4bb68;
  }


  .string {
    display: flex;
    flex-direction: column;
    text-align: center;
    animation: move 4s infinite;
  }
  
  .greeting {
    position: relative;
    top: 8.6vmin;
    animation: white-out 5s infinite;
  }
  
  .closure::after {
    content: '';
    position: absolute;
    height: 25vmin;
    width: 40vmin;
    background: #282c34;
    transform: translate(-45vmin, -24.5vmin);
  }
  
  .closure::before {
    content: '';
    position: absolute;
    height: 25vmin;
    width: 40vmin;
    background: #282c34;
    transform: translate(-40vmin, 5vmin);
  }
  
  /* .en {
    color: #fa8231;
  }
   */
  .es {
    color: white;
  }
  
  .de {
    color: #c678dd;
  }
  
  .it {
    color: #a9b0bd;
  }
  
  @keyframes move {
    25% {
      transform: translatey(-5.8vmin);
      opacity: 1;
    }
    50% {
      transform: translatey(-11vmin);
    }
    75% {
      transform: translatey(-21.5vmin);
    }
  }

   
  </style>
  