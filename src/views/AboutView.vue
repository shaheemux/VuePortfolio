<template>
  <section class="about">
    <div class="intro">
      <h3 style="text-decoration: underline; color: aliceblue; color: black;">About Myself</h3>
      <p style="border: solid;">My name is Moeghamat Shaheem Salie but Shaheem Salie for short . I am 25 years old and I was born and raised in Mitchells Plain Tafelsig . I Graduated high-school in 2018 . I am very passionate about the tech industry and love up-skillng myself within this field everyday .  I am detail orientated with a "can do spirit". In my free time I always make sure to keep up with what's trending , video editing , graphic designing or just drawing  . With zero coding experience I joined Life Choices academy coding Bootcamp and became very passionate about it started making life choices of my very own.</p>
    </div>


    <div class="aside">
      <h3 style="color: aliceblue; text-decoration: underline;">Skills</h3>
    <div class="content">
        <div class="card1" id="text"></div>
        <div class="card2" id="text"></div>
        <div class="card3" id="text"></div>
        <div class="card4" id="text"></div>
        <div class="card5" id="text"></div>
        <div class="card6" id="text"></div>  
        <div class="card7" id="text"></div>  
        <div class="card8" id="text"></div>  
        <div class="card9" id="text"></div>  
    </div>
</div>
    
  </section>
</template>

<style scoped>

.about{
   border-top: solid 1px;
   height: 100vh;
   position: relative;
   top: 1rem;
}

.intro{
  margin-top: 1rem;
  color: black;
  display: grid;
  place-items: center;
}

p{
  padding: 1rem;
}

@media screen and (max-width: 300px) {
 .about{
    min-height: 100vh;
    font-weight: bold;
 }
 .intro{
    padding: 1rem;
    width: 100%; /* Adjust this value as needed */
 }
 p{
    padding: 1rem;
 }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
 .about{
    min-height: 100vh;
    font-weight: bold;
    font-family: JetBrains Mono, monospace;
 }
 .intro{
    padding: 1rem;

 }
 p{
    padding: 1rem;
 }
}

@media screen and (min-width: 721px) and (max-width: 992px) {
 .about{
    min-height: 100vh;
    margin-top: 3.5rem;
    font-family: JetBrains Mono, monospace;
 }
 .intro{
    padding: 1rem;
 }
 p{
    padding: 1rem;
 }
}

@media screen and (min-width: 993px) {
 .about{
    min-height: 100vh;
    margin-top: 3rem;
    font-weight: bold;
    font-family: JetBrains Mono, monospace;
 }
 .intro{
    padding: 1rem;
 }
 p{
    padding: 1rem;
 }
}


/* cards */

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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/74/6e/28/ME17GJIJ_t.png);
    transition: 0.5s ease-in-out;
    
}
.card1:hover{
    box-shadow: 5px 6px 15px 10px rgb(224, 111, 6);
    transition: 1s;   
    background-color: rgb(241, 99, 5);
    transform: scale(1.05);
}

/* CSS CARD */

.card2{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/45/25/78/ME17GJJ6_t.png);
    transition: 0.5s ease-in-out;
}
.card2:hover{
    box-shadow: 5px 6px 15px 10px hwb(199 5% 28%);
    transition: 1s;   
    background-color: rgb(13, 138, 240);
    transform: scale(1.05);
}

/* JavaScript CARD */

.card3{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/89/f3/a1/ME17GJJ7_t.png);
    transition: 0.5s ease-in-out;
}
.card3:hover{
    box-shadow: 5px 6px 15px 10px rgb(241, 245, 12);
    transition: 1s;   
    background-color: yellow;
    transform: scale(1.05);
}

/* TAILWIND CARD */

.card4{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/a7/39/56/ME17GJJ8_t.png);  
    transition: 0.5s ease-in-out;
}
.card4:hover{
    box-shadow: 5px 6px 15px 10px rgb(107, 152, 182);
    transition: 1s;   
    background-color: rgb(97, 144, 160);
    transform: scale(1.05);
}

/* Bootstrap card */

.card5{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/d6/9b/8f/ME17GJJA_t.png);
    transition: 0.5s ease-in-out;
}
.card5:hover{
    box-shadow: 5px 6px 15px 10px rgb(90, 8, 221);
    transition: 1s;   
    background-color: rgb(44, 3, 68);
    transform: scale(1.05);
}

/* VUE JS */

.card6{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/8f/b7/ab/ME17GJJB_t.png);
    transition: 0.5s ease-in-out;
}
.card6:hover{
    box-shadow: 5px 6px 15px 10px rgb(7, 150, 78);
    transition: 1s;   
    background-color: rgb(8, 158, 108);
    transform: scale(1.05);
}

.card7{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/dd/84/c2/ME17QJGI_t.png);
    transition: 0.5s ease-in-out;
}
.card7:hover{
    box-shadow: 5px 6px 15px 10px rgb(93, 149, 125);
    transition: 1s;   
    background-color: rgb(142, 146, 145);
    transform: scale(1.05);
}

.card8{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/71/68/fe/ME17QJGQ_t.png);
    transition: 0.5s ease-in-out;
}
.card8:hover{
    box-shadow: 5px 6px 15px 10px rgb(126, 227, 222);
    transition: 1s;   
    background-color: rgb(165, 179, 174);
    transform: scale(1.05);
}
.card9{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    transition: 0.5s ease-in-out;
    padding: 1rem;
}
.card9:hover{
    box-shadow: 5px 6px 15px 10px rgb(126, 227, 222);
    transition: 1s;   
    background-color: rgb(165, 179, 174);
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

/* cards */


</style>