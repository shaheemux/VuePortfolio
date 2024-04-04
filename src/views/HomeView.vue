<template>
    <main class="home">
     <div class="parent">
      <h2 class="body">Hi , <span>I AM</span> <br> SHAHEEM SALIE....</h2>
      <img src="" alt="">
    </div>
      <div class="heading">

<div class="gridywrap">
  <div class="gridy-2 gridyhe-1">
    <div class="gridimg" style="background-image: url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016)">&nbsp;</div>
    
    <div class="gridinfo">
      <h3>About MYSELF</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt">Who am i ?</p>
      <router-link to="/about" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></router-link>
    </div>
  </div>
  <div class="gridy-1 gridyhe-1">
    <div class="gridimg" style="background-image: url(https://i.postimg.cc/5ysxRFQt/Css-Background-Image.avif)">&nbsp;</div>
    
    <div class="gridinfo">
      <h3>My work</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt">What i've done....</p>
      <router-link to="/projects" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></router-link>
    </div>
  </div>
  <div class="gridy-1 gridyhe-2">
    <div class="gridimg" style="background-image: url(https://i.postimg.cc/L5DzQvVZ/educ.jpg)">&nbsp;</div>
    
    <div class="gridinfo">
      <h3>Education & Experience</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt">What i've accomplished thus far...</p>
      <router-link to="/resume" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></router-link>
    </div>
  </div>
  <div class="gridy-2 gridyhe-1">
    <div class="gridimg" style="background-image: url(https://i.postimg.cc/VsGgFVrq/360-F-623150253-l-Pqj-Qnw-D86-Lg-DRDd2-S6x-Y6-RCqjo1-Ttm9.jpg)">&nbsp;</div>
    
    <div class="gridinfo">
      <h3>Testimonials</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt">What people have to say about me...</p>
      <router-link to="/testimonials" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></router-link>
    </div>
  </div>
  <div class="gridy-1 gridyhe-1">
    <div class="gridimg" style="background-image: url(https://ununsplash.imgix.net/photo-1418227165283-1595d13726cd?q=75&fm=jpg&s=cace1590a29be6d4d6db13c3ebd1ba72)">&nbsp;</div>
    <div class="gridinfo">
      <h3>Reach out to me</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt">Lets get in touch....</p>
      <router-link to="/contact" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></router-link>
    </div>
  </div>
  <div class="gridy-1 gridyhe-1">
    <div class="gridimg" style="background-image: url(https://unsplash.imgix.net/uploads/1411589183965bdf6e141/5f468e98?q=75&fm=jpg&s=007333c388fb36767cbd152600bea6b8)">&nbsp;</div>
    
    <div class="gridinfo">
      <h3>Item Title</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i></p>
        <p class="gridwho"><i class="fa fa-user"></i></p>
      </div>
      <p class="gridexerpt"></p>
      <a href="#" class="grid-btn grid-more"><span>More</span> <i class="fa fa-plus"></i></a>
    </div>
  </div>
</div>
      </div>
    </main>    
</template>
  
 
  
<style scoped>

.home{
   margin-top: 4.5rem; 
   height: 100%;
   box-sizing: border-box;
}



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

.body{
  margin-top: 8rem;
}

 .parent{
  height: 50vh;
  margin: 0;
  font: 100% / 1.5 Raleway, sans-serif;
  color: hsl(230, 100%, 95%);
  background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
  height: 100vh;
  display: flex;
}

h2 {
  margin: auto;
  font-size: 3.5rem;
  font-weight: 300;
  animation: lights 5s 750ms linear infinite;
}

.gridywrap{
  animation: fadeInDownBigFromRight 1s ease-out;
}
 

@keyframes fadeInDownBigFromRight {
 from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
 }

 to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
 }
}


@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600);

html .home * {
  box-sizing: border-box;
  font-family: 'Open Sans', Arial, sans-serif;
}
.gridywrap div[class*=gridy] {
  background: #eee;
  box-shadow: inset 0 0 0 1px #ddd;
  padding: 15px; float: left;
  position: relative;
}
.gridywrap .gridy-1,
.gridywrap .gridy-2,
.gridywrap .gridy-3 {width: 320px;
  overflow: hidden;}

.gridywrap .gridy-1 {width: 100%;}
.gridywrap .gridy-2 {width: 100%;}
.gridywrap .gridy-3 {width: 100%;}

.gridywrap .gridyhe-1 {height: 320px;}
.gridywrap .gridyhe-2 {height: 320px;}


@media screen and (min-width: 640px) {
  .gridywrap .gridyhe-2 {height: 320px;}
  .gridywrap {
    width: 100%;
  }
  .gridywrap .gridy-1 {width: 50%;}
  .gridywrap .gridy-2 {width: 50%;}
  .gridywrap .gridy-3 {width: 100%;}
}
@media screen and (min-width: 1024px) {
  .gridywrap .gridy-1 {width: 33.3%;}
  .gridywrap .gridy-2 {width: 66.6%;}
  .gridywrap .gridy-3 {width: 100%;}
  .gridywrap .gridyhe-2 {height: 640px;}
}

/*styling*/
.gridywrap .gridimg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
}
.gridywrap .gridimg img {
  width: 100%;
}
.gridywrap .gridinfo {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  text-align: center;
  transition: all 0.8s;
}
.gridywrap .gridinfo h3 {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin: 130px 0 20px;
  position: relative;
}
.gridywrap .gridinfo h3:after {
  content: '';
  width: 25px;
  border-top: 4px solid #fff;
  display: block;
  margin: 0 auto;
  margin-top: 25px;
}
.gridywrap .gridinfo .gridmeta {
  transition-delay: 0.25s;
}
.gridywrap .gridinfo .gridmeta p {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  margin-bottom: 15px;
}
.gridywrap .gridinfo .gridmeta p i {
  margin-right: 5px;
}
.gridywrap .gridinfo .gridmeta p.gridwho {
  margin-left: 25px;
}
.gridywrap .gridinfo p.gridexerpt {
  width: 60%;
  margin: 0 auto;
  line-height: 22px;
  margin-bottom: 25px;
  color: #fff;
  transition-delay: 0.5s;
}

.gridywrap .gridinfo * {
  opacity: 0;
  transition: all 0.8s;
}
.gridywrap .gridinfo h3 {
  opacity: 1;
}
.gridywrap .gridinfo .grid-btn {
  color: #fff;
  text-decoration: none;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 25px;
  border: 1px solid #fff; 
  display: block;
  overflow: hidden;
}
.gridywrap .gridinfo .grid-btn:hover {
  width: 75px;
  background: rgba(0,0,0,0.3);
}
.gridywrap .gridinfo .grid-btn span {
  opacity: 0;
  display: none;
  transition: opacity 0.8s;
}
.gridywrap .gridinfo .grid-btn:hover span {
  opacity: 1;
  display: inline;
}
.gridywrap .gridinfo .grid-btn:hover i {
  opacity: 0;
  display: none;
}

.gridywrap .gridinfo:hover * {
  opacity: 0.7;
}
.gridywrap .gridinfo:hover p {
  opacity: 1;
}
.gridywrap .gridinfo:hover {
  background: rgba(158, 12, 73, 0.7);
}
.gridywrap .gridinfo:hover h3 {
  margin-top: 70px;
  opacity: 1;
}

.intro {
  text-align: center;
  padding: 25px;
  background: #111;
  color: #ddd;
}
h1 {
  font-size: 48px;
  font-weight: 300;
  padding: 15px 0;
}
.intro p {
  opacity: 0.5;
  font-size: 12px;
}
.intro p a {
  color: #FA8CD3;
}

</style>
  