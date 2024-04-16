<template>
  <div class="projects">
    <h3 class="work" style="color: black; text-decoration: underline;">MY WORK</h3>
    <div class="aside">
    <div class="content">

        <div class="card1" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">E-Commerce Website</h3>
          <button style="border-radius:4px;"><a href="https://capstone-project-c0944.web.app/" target="_blank">VIEW ONLINE</a></button>
          <br>
          <br>
          <button style="border-radius:4px;"><a href="https://github.com/shaheemux/CapStone-Project" target="_blank">VIEW ON GITHUB</a></button>
        </div>

        <div class="card2" id="text">
          <h3 style="color: white; padding: 1rem;">Netflix Clone</h3>
          <button style="border-radius:4px ;"><a href="https://netflix-clone-mu-jade.vercel.app/" target="_blank">VIEW ONLINE</a></button>
          <br>
          <br>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/Netflix-Clone-.git" target="_blank">VIEW ON GITHUB</a></button>
        </div>


        <div class="card3" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Tailwind Css Project</h3>
          <button style="border-radius:4px ;"><a href="https://tailwind-project-pi.vercel.app/" target="_blank">VIEW ONLINE</a></button>
          <br>
          <br>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/tailwind-project.git" target="_blank">VIEW ON GITHUB</a></button>
        </div>

        <div class="card4" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">My Portfolio with Html/Css</h3>
           <div class="btne">
            <button style="border-radius:4px ;"><a href="https://my-portfolio-swart-five-69.vercel.app/" target="_blank">VIEW ONLINE</a></button><br>
            <br>
            <button style="border-radius:4px;"><a href="https://github.com/shaheemux/My-Portfolio.git" target="_blank">VIEW ON GITHUB</a></button> 
          </div> 
        </div>
        <div class="card5" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Tekken Gallery</h3>
          <button style="border-radius:4px ;"><a href="https://tekken-8-gallary.vercel.app/" target="_blank">VIEW ONLINE</a></button>
          <br>
          <br>
          <button style="border-radius:4px ;"><a href="https://github.com/shaheemux/tekken-8-gallary-.git" target="_blank">VIEW ON GITHUB</a></button>
        </div>

        <div class="card6" id="text">
          <h3 style="color: aliceblue; padding: 1rem;">Minutes To Secods</h3>
          <button style="border-radius:4px ;"><a href="" target="_blank">VIEW ONLINE</a></button>
          <br>
          <br>
          <button style="border-radius:4px ;"><a href="" target="_blank">VIEW ONLINE</a></button>
        </div>  
    </div>
</div>
    
  </div>
</template>

<style scoped>

.projects{
    height: 100%;
    margin-top: 6.5rem;;
    font-family: JetBrains Mono, monospace;
}

.work{
  font-family: "Lilita One", sans-serif;
  /* font-weight: 400; */
  font-size: 2rem;
  color: black !important;
  /* border: 1px solid black; */
  display: inline-block;
  padding: 1rem;
}

h3 , a{
  color: rgb(255, 255, 255) !important;
  font-weight: 500 !important;
}

button{
  background: transparent;
  padding: 1rem;
  color: rgb(8, 8, 8);
  border: solid rgb(255, 255, 255) 1px;
  transition: 0.5s ease-in-out;
  border-radius: 50%;
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
    animation: zoomIn 1s ease-in-out;
}

@keyframes zoomIn {
 from {
    opacity: 0;
    transform: scale(0);
 }
 to {
    opacity: 1;
    transform: scale(1);
 }
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
    background-image: url(https://i.postimg.cc/fR231z4K/Netflix-Clone-Mozilla-Firefox-2024-04-10-10-14-16.png);
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(5px);
}
.card1:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
    background: linear-gradient(to top, #09203f 0%, #537895 100%);

}

.card2{
    border: solid 2px rgb(0, 0, 0);
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
    background-image: url(https://i.postimg.cc/wB2wCsqr/Netflix-Clone-Mozilla-Firefox-2024-04-10-10-13-09.png);
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(5px);
}
.card2:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
}

.card3{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
    background-image: url(https://i.postimg.cc/J4XyBzmG/Tailwind-project-Mozilla-Firefox-2024-04-10-09-47-32.png);
    background-size: cover;
    background-position: center;
}
.card3:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
}

.card4{
  border: solid 2px black;
  height: 250px;
  width: 340px;
  transition: 0.5s ease-in-out;
  background-image: url(https://i.postimg.cc/t4KQhng2/Shaheem-Salie-Mozilla-Firefox-2024-04-15-15-50-35.png);
  background-position: center;
  background-size: cover;

}
.card4:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
}

.card5{
  border: solid 2px black;
    height: 250px;
    width: 340px;
    transition: 0.5s ease-in-out;
    background-image: url(https://i.postimg.cc/PJtw3qSw/Tekken-8-Gallery-Mozilla-Firefox-2024-04-15-16-02-39.png);
    background-position: center;
    background-size: cover;
}


.card5:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
    background: rgb(167, 179, 242);
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
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
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
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
      grid-template-columns:  1fr 1fr;
    }
  }

  @media (max-width: 890px) {
    .content{
      grid-template-columns: 1fr 1fr;
    }
  }

@media (max-width: 780px) {
  .content{
      grid-template-columns: 1fr ;
    }
  }
@media (max-width: 500px) {
    .content{
      grid-template-columns: 1fr;
    }
  }
</style>