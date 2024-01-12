<template>
  <section class="about">
    <div class="intro">
      <p>My name is Shaheem Salie, I was born and raised in Mitchells Plain, Tafelsig.
I am 24 years old and I completed matric in 2018. </p>

      <p>I worked a full year as a driver assistant. The following year I studied IT
Technical Support while working part-time as a driver. Three months after
completing my IT course, I applied for work in a call center. The following
month I applied for an IT Technician assistant vacancy that was available
but did not make the cut for the job. I then requested to work for free for
2 weeks to prove my worth. I was eventually employed and worked as an
IT Technician assistant until my contract ended. </p>

      <p>Ever since my contract ended, I decided to work independently for a small fee . I used that opportunity to upskill myself in my profession. Eventually, I came across Life Choices Academy and immediately got drawn to Coding  . </p>
    </div>

    <div class="container">
      <h1 id="article3">My Professions</h1>
    <div class="placeholder">
        <div class="card1" id="text"></div>
        <div class="card2" id="text"></div>
        <div class="card3" id="text"></div>
        <div class="card4" id="text"></div>
        <div class="card5" id="text"></div>
        <div class="card6" id="text"></div>
        <div class="card7" id="text"></div>
        <div class="card8" id="text"></div>
        <div class="card9" id="text"></div>
        <div class="card10" id="text"></div>    
    </div>
</div>

  </section>
</template>
<script>
export default {
   
}
</script>

<style scoped>
.about{
  background-image: linear-gradient(thistle , rgb(188, 211, 226) );
  min-height: 100vh;
  display: grid;
  flex-wrap: wrap;
  padding: 1rem;
  margin-top: 3.7rem;
  border: solid 1px black;
}
.intro{
  background-color: white;
  padding: 1rem;
  border: solid black 1px;
  color: rgb(37, 37, 37);

}
#article3{
  text-align: center;
  text-decoration: underline;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
}




p{
  padding: 1rem;
}

/* cards */

.container{
    padding: 2rem;
    display: flex;
    margin-TOP: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: grid;
}
.placeholder{
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
  height: 200px;
  width: 200px;
  transition: 0.5s ease-in-out;
  text-align: center;
  background-image: url(https://cdn-thumbs.imagevenue.com/68/7a/43/ME17GOFD_t.png);
  padding: 1rem;
}

.card7:hover{
    transition: 0.5s;   
    transform: scale(1.05);
    box-shadow: 5px 6px 15px 10px;
 
}

.card8{
  border: solid 1px black;
  height: 180px;
  width: 180px;
  text-align: center;
  background-image: url(https://cdn-thumbs.imagevenue.com/cb/ff/26/ME17GOFJ_t.png);
}

.card8:hover{
    transition: 0.5s;   
    box-shadow: 5px 6px 15px 10px;
    transform: scale(1.05);
}
.card9{
  border: solid 1px black;
  height: 180px;
  width: 180px;
  text-align: center;
  background-image: url(https://cdn-thumbs.imagevenue.com/55/14/47/ME17GOFM_t.png);

}

.card9:hover{
    transition: 0.5s;   
    transform: scale(1.05);
    box-shadow: 5px 6px 15px 10px;
}

.card10{
  border: solid 1px black;
  height: 180px;
  width: 200px;
  text-align: center;
  background-image: url(https://cdn-thumbs.imagevenue.com/6e/e9/09/ME17GOFN_t.png);

}

.card10:hover{
    transition: 0.5s;   
    transform: scale(1.05);
    box-shadow: 5px 6px 15px 10px;
}

@media (max-width: 1330px){
    .placeholder{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1200px){
    .placeholder{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1080px) {
    .placeholder{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 890px) {
    .placeholder{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

@media (max-width: 780px) {
    .placeholder{
      grid-template-columns: 1fr 1fr ;
    }
  }
@media (max-width: 500px) {
    .placeholder{
      grid-template-columns: 1fr;
    }
  }

</style>






