<template>
    <div class="contact">

        <section id="Contact">
      <div class="container3">
        <div class="hero">
          
          <form>
            <div class="row2">
              <div class="input-group">
                <input type="text" id="name" required>
                <label for="name"><i class="fa-solid fa-user"></i> Your Name</label>
              </div>
  
              <div class="input-group">
                <input type="text" id="number" required>
                <label for="number"><i class="fa-solid fa-phone"></i> Phone No.</label>
              </div>
            </div>
           
            
            <div class="input-group">
              <input type="text" id="email" required>
              <label for="email"><i class="fa-solid fa-envelope"></i> Email Id</label>
            </div>

            <div class="input-group">
              <textarea id="message" rows="8" required></textarea>
              <label for="message"><i class="fa-solid fa-comment"></i> Your message</label>
            </div>
            <button type="submit" class="button5"><i class="fa-solid fa-arrows-turn-right"></i> SUBMIT</button>
          </form>
      </div>
    </div> 
       </section>
     </div>

</template>

<style scoped>
.contact{
    background: black;
    height: 100lvh;
    margin-top: 3rem;
    font-family: JetBrains Mono, monospace;
}

#Contact{
    height: 100vh;
    font-size: cincel;
}
.hero{
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: .3;
}
form{
    width: 90%;
    max-width: 600px;
}
.input-group{
    margin-bottom: 30px;
    position: relative;


}

input, textarea{
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid #757575;
    color: #a0a0a0;
    background: transparent;
    font-size: 15px;
}
label{
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    color: #fff;
    cursor: text;
    transition: 0.2s;


}
.button5{
    padding: 10px;
    color: #fff;
    outline: none;
    background: transparent;
    border: 1px solid #fff;
    width: 100%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
.button5:hover{
    transition: 0.5s;
    transform: scale(1.05);
}
input:focus~label{
    top: -35px;
    font-size: 14px;

}
input:focus~label,
input:valid~label,
textarea:focus~label,
textarea:valid~label{
    top: -35px;
    font-size: 14px;

}
.row2{
    display: flex;
    align-items: center;
    justify-content: center;
}
.row2 , .input-group{
    flex: basis 48%;

}
.ending{
    font-size: 35px;
    font-family: cincel;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: rgb(158, 158, 158)
}

@media all and (max-width: 720px){

    .ending{
        color: white
        
    }
    .hero{
        height: 110vh;
        
    }
}
@media all and (max-width: 300px){
    .ending{
        color: white;
    }
}
</style>

