<template>
  <section class="about">


    <p class="sub"  style="text-decoration: underline;">
    About Myself
    </p>
    <div class="myself">


      <div class="box1">
        <img src="https://i.postimg.cc/Dwb6sJW1/img-1-1712061818408.jpg" style="height: 250px; width: 220px; border-radius: 6px; padding: 1rem; margin-left: 60px;" alt="">
      </div>


      <div class="box2">
          <P class="name" style="padding:1rem; font-size: 14px;">MY name is Moeghamat Shaheem Salie but Shaheem Salie for short . I am 25 years old and I was born and raised in Mitchells Plain Tafelsig . I Graduated high-school in 2018 . I am very passionate about the tech industry and love up-skillng myself within this field everyday . I am detail orientated with a "can do spirit". In my free time I always make sure to keep up with what is trending , video editing , graphic designing or just drawing . With zero coding experience I joined Life Choices academy coding Bootcamp and became very passionate about it started making life choices of my very own.</P>
      </div>
    </div>

    <div style="border-bottom: 1px solid;"></div>

    <div class="aside">
      <h3 class="skills" style="color: black; text-decoration: underline;">Skills</h3>
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
   height: 100%;
   padding: 1rem;
 
 }

 .name{
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
 }

 .skills{
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem
 }

.sub{
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}


.myself{
  height: 100%;
  margin-top: 2.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
}

.box1{
  height: 250px;
  width: 350px;
}

.box2{
  height: 100%;
  width: 350px;
}


@media screen and (max-width: 300px) {
 .about{
    min-height: 100vh;
    font-weight: bold;
    margin-top: 3rem;
 }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
 .about{
    min-height: 100vh;
    margin-top: 3rem;
 }
}

@media (max-width: 300px) {
    .AboutMyself {
        font-size: 12px; 
    }
}


@media screen and (min-width: 721px) and (max-width: 992px) {
 .about{
    min-height: 100vh;
    margin-top: 3rem;
 }
}

@media screen and (min-width: 993px) {
 .about{
    min-height: 100vh;
    margin-top: 3rem;
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
    animation: fadeInDownBig 1s ease-out;
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

@keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
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
    background-color: rgb(255, 255, 255);
    transform: scale(1.05);
}
.card9{
    border: solid 1px black;
    height: 180px;
    width: 180px;
    background-image: url(https://cdn-thumbs.imagevenue.com/96/41/fd/ME17QREP_t.png);
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s ease-in-out;
    padding: 1rem;
}
.card9:hover{
    box-shadow: 5px 6px 15px 10px rgb(250, 186, 108);
    transition: 1s;   
    background-color: rgb(255, 255, 255);
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