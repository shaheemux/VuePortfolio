<template>
  <div class="projects">
    <div class="aside">
      <h3 style="color: aliceblue; text-decoration: underline;">My projects</h3>
    <div class="content">

        <div class="card1" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Calculator App</h3>
          <button style="border-radius:4px;"><a href="https://github.com/shaheemux/java-cal.git">Github Repo</a></button>
        </div>

        <div class="card2" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Netflix Clone</h3>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/Netflix-Clone-.git">Github Repo</a></button>
        </div>
        <div class="card3" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Counting App</h3>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/counter-app.git">Github Repo</a></button>
        </div>
        <div class="card4" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Todo List</h3>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/To-Do-List.git">Github Repo</a></button>
        </div>
        <div class="card5" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">My Portfolio</h3>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/My-Portfolio.git">Github Repo</a></button>
        </div>
        <div class="card6" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Minutes To Secods</h3>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/minutes-to-seconds.git">Github Repo</a></button>
        </div>  
    </div>
</div>
    
  </div>
</template>

<style scoped>

.projects{
    border-top: solid 1px;
    height: 100%;
    margin-top: 3.5rem;;
    font-family: JetBrains Mono, monospace;
}
h3 , a{
  color: black !important;
}

button{
  background: transparent;
  padding: 1rem;
  color: rgb(0, 0, 0);
  border: solid black 1px;
  transition: 0.5s ease-in-out;
}
button:hover{
  background: transparent;
  color: black;
  transition: 0.5s;
  transform: scale(1.05);
}

button , a {
  text-decoration: none;
  color: aliceblue;
}
button, a:hover {
  color: black;
}

.aside{
    padding: 2rem;
    display: flex;
    margin-TOP: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: grid;
    z-index: -5;
}
.content{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 1rem;
    margin: auto;
}

 #text{
  text-align: center;
  position: relative;

} 

.card1{
    border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
    
}
.card1:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);

}

.card2{
    border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
}
.card2:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card3{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
}
.card3:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card4{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
}
.card4:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card5{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;}
.card5:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card6{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
}
.card6:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

@media (max-width: 1330px){
    .content{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1200px){
   .content{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1080px) {
  .content{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 890px) {
    .content{
      grid-template-columns: 1fr 1fr;
    }
  }

@media (max-width: 780px) {
  .content{
      grid-template-columns: 1fr 1fr ;
    }
  }
@media (max-width: 500px) {
    .content{
      grid-template-columns: 1fr;
    }
  }



</style>