<template>
    <div id="Resume">
        <div class="aside">
      <h3 style="color: rgb(0, 0, 0); text-decoration: underline;">My Resume</h3>
    <div class="content">
        <div class="card1" id="text">
            <h2 style="color: rgb(0, 0, 0);">2018</h2>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">Gratuated High School , started working right after school for a year. </p>
 
        </div>
        <div class="card2" id="text">
            <h2 style="color: rgb(0, 0, 0);">2019</h2>
            <p style="padding: 1rem; color: rgb(0, 0, 0);">Worked as a Driver and Driver Assistant for one year straight.</p>
        </div>
        <div class="card3" id="text">
            <h3 style="color: rgb(0, 0, 0);">2020</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">i started becoming very passionate about the tech industry then applied for a IT Course.</p>
        </div>
        <div class="card4" id="text">
            <h3 style="color: rgb(0, 0, 0);">2021</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">I applied for an intership but didnt make it . i then offered to work for free and eventually got the job.</p>

        </div>
        <div class="card5" id="text">
            <h3 style="color: rgb(0, 0, 0);">2022</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">My internship ended and i was uemployed but still upskilling myself while making money off from my hobby.</p>
        </div>
        <div class="card6" id="text">
            <h3 style="color: rgb(0, 0, 0);">2023</h3>
            <p style="padding: 1rem; color: rgb(0, 0, 0);">Went Back to being a driver until i applied for Life Choices Coding Bootcamp.</p>
        </div>  
      </div>
    </div>

    <section>
        <h3 style="color: aliceblue; text-decoration: underline;">My OverAll Objective</h3>
         
    </section>


</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

 #Resume{
    height: 170vh;
    margin-top: 4.6rem;
    font-family: JetBrains Mono, monospace;
 }

 .aside{
    padding: 2rem;
    display: flex;
    margin-TOP: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: grid;
}
.content{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 1rem;
    margin: auto;
}

/* HTML CARD */

 #text{
  text-align: center;
  position: relative;

} 

 .card1{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out;
    
}
.card1:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
    transition: 0.5s;
    transform: scale(1.05);
}

.card2{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out;
}
.card2:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
    transition: 0.5s;
    transform: scale(1.05);
}


.card3{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out;

}
.card3:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
    transition: 0.5s;
    transform: scale(1.05);
}


.card4{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out;
}
.card4:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
    transition: 0.5s;
    transform: scale(1.05);
}

.card5{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out; 
}
.card5:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
    transition: 0.5s;
    transform: scale(1.05);
}

.card6{
    border: solid 2px black;
    height: 180px;
    width: 280px;
    transition: 0.5s ease-in-out;
} 
.card6:hover{
    box-shadow: 5px 6px 15px 10px rgb(82, 82, 81);
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
      grid-template-columns: 1fr 1fr 1fr;
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