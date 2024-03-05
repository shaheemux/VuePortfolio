<template>
    <div id="testimonials">
        <div class="aside">
      <h3 style="color: rgb(0, 0, 0); text-decoration: underline;">Testimonnials</h3>
    <div class="content">
        <div class="card1" id="text">
            <img src="https://i.postimg.cc/C1CqYPmZ/Whats-App-Image-2023-11-04-at-12-02-39-1b8952d6.jpg" height="120px" style="padding: 1rem;" alt="">
            <h2 style="color: rgb(0, 0, 0); text-decoration: underline">Jayden Adonis</h2>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">It is truly refreshing to work alongside someone as reliable and dedicated as Shaheem . 
                    I have had the privilege of collaborating with him on several projects.</p>
        </div>
        <div class="card2" id="text">
            <img src="https://cdn-thumbs.imagevenue.com/61/1b/0b/ME17K711_t.jpeg" height="120px" style="padding: 1rem;" alt="">
            <h2 style="color: rgb(0, 0, 0); text-decoration: underline">Ricky Matthews</h2>
            <p style="padding: 0.5rem; color: rgb(0, 0, 0);">I have had the pleasure of managing Shaheem for the past two years, and I can attest to his exceptional
                     reliability and strong work ethic. Shaheem consistently demonstrates a high level of commitment to his work and is a go to team player, 
                     always ensuring that tasks are completed efficiently and accurately.</p>
        </div>
        <div class="card3" id="text">
            <img src="https://cdn-thumbs.imagevenue.com/f7/a9/06/ME17K709_t.png" height="120px" style="padding: 1rem;" alt="">
            <h3 style="color: rgb(0, 0, 0); text-decoration: underline">Matthew Brown</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">Shaheem has been a student of mine for the past 5 months and dempnstated hardwork and commitment to things that needed to be done . EXceptionally good with always compromising for himself to adapt to a environment and works well with others .</p>
        </div>
        <div class="card4" id="text">
            <img src="https://i.postimg.cc/Rhjg3Cjs/Whats-App-Image-2023-11-04-at-12-02-38-93a1314e.jpg" height="120px" style="padding: 1rem;" alt="">
            <h3 style="color: rgb(0, 0, 0); text-decoration: underline">Tyler Botha</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">Working with Shaheem has been an absolute pleasure. Their reliability and dedication to their work are
                     evident in every task they undertake. Shaheem approaches their responsibilities with a level of 
                     professionalism and commitment that is truly inspiring.</p>

        </div>
        <div class="card5" id="text">
            <img src="https://cdn-thumbs.imagevenue.com/e6/5f/8a/ME17K71Q_t.jpeg" height="120px" style="padding: 1rem;" alt="">
            <h3 style="color: rgb(1, 1, 1); text-decoration: underline">Maliek Hendricks</h3>
            <p style="color: rgb(0, 0, 0); padding: 1rem;">Shaheem has been working for me for 2 years and always performed exceptionally well and always getting the job done . He is a really reliant person whenever i needed someoone to come in on a weekend to work he would always pitch.</p>
        </div>
        <div class="card6" id="text">
            <img src="https://cdn-thumbs.imagevenue.com/16/4a/13/ME17K71P_t.jpeg" height="120px" style="padding: 1rem;" alt="">
            <h3 style="color: rgb(0, 0, 0); text-decoration: underline">Fagan Miller</h3>
            <p style="padding: 1rem; color: rgb(0, 0, 0);">I have been Shaheem's Educator for 3 years and throughout the years he has excelled through his failures and still pushed himself . Although he was lazy , he always got the work done reguardless of the consequences.</p>
        </div>  
      </div>
    </div>
    </div>
</template>
   

   
<style scoped>

 #testimonials{
    height: 100dvh;
    height: 100%;
    border-top: solid 1px;
    margin-top: 4.5rem;
    font-family: JetBrains Mono, monospace;
    
 }
  
 img{
    border-radius: 50%;
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
    height: 440px;
    width: 300px;
    transition: 0.5s ease-in-out;
    
}
.card1:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);

}

.card2{
    border: solid 2px black;
    height: 440px;
    width: 300px;
    transition: 0.5s ease-in-out;
}
.card2:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card3{
    border: solid 2px black;
    height: 440px;
    width: 300px;
    transition: 0.5s ease-in-out;
}
.card3:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

/* TAILWIND CARD */

.card4{
    border: solid 2px black;
    height: 440;
    width: 300px;
    transition: 0.5s ease-in-out;
}
.card4:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card5{
    border: solid 2px black;
    height: 440px;
    width: 300px;
    transition: 0.5s ease-in-out;
}
.card5:hover{
    box-shadow: 5px 6px 15px 10px rgb(11, 11, 11);
    transition: 0.5s;
    transform: scale(1.05);
}

.card6{
    border: solid 2px black;
    height: 440px;
    width: 300px;
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