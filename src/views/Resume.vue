<template>
  <div class="education">
	<h1 style="text-decoration: underline;">Education & Experience</h1>
<ul>
    <li style="--accent-color:#41516C">
        <div class="date">2018</div>
        <div class="title"></div>
        <div class="descr">Gratuated High School , started working right after school for a year. </div>
    </li>
    <li style="--accent-color:#FBCA3E">
        <div class="date">2019</div>
        <div class="title"></div>
        <div class="descr">Worked as a Driver and Driver Assistant for one year straight.</div>
    </li>
    <li style="--accent-color:#E24A68">
        <div class="date">2020</div>
        <div class="title"></div>
        <div class="descr">i started becoming very passionate about the tech industry then applied for a IT Course.</div>
    </li>
    <li style="--accent-color:#1B5F8C">
        <div class="date">2021</div>
        <div class="title"></div>
        <div class="descr">Upon completion the course i applied for a internship for IT support at Web Help and worked entire year until my contract ended.</div>
    </li>
    <li style="--accent-color:#4CADAD">
        <div class="date">2022</div>
        <div class="title"></div>
        <div class="descr">My internship ended and i was uemployed but still upskilling myself while making money off from my hobby.</div>
    </li>
    <li style="--accent-color:purple">
        <div class="date">2023</div>
        <div class="title"></div>
        <div class="descr">Went Back to being a driver until i applied at Life Choices Coding Bootcamp.</div>
    </li>
    <li style="--accent-color:red">
        <div class="date">2023</div>
        <div class="title"></div>
        <div class="descr">Gratuated at Life Choices coding acedemy and i am now working at Life Choices as a intern.</div>
    </li>
</ul>
<div class="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"></a></div>
 
<div class="blank"></div>

  <div class="experience">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis blanditiis excepturi consequuntur assumenda, ab esse. Non doloremque impedit harum aspernatur dolor soluta numquam dignissimos quasi, deserunt ipsa ipsum. Atque, fuga!</p>
  </div>

  </div>
</template>

<style scoped>
  .education{
    margin-top: 4.5rem;
    padding: 1rem;
    margin-right: 6rem;
  }

  h1{
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: black;
  }

    /* Define the keyframes for the zoom-in effect */
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

.education{
 animation: zoomIn 1s ease-in-out;
 margin-left: 6rem;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.education {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
}

h1 {
  text-align: center;
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

.credits {
  margin-top: 1rem;
  text-align: right;
}
.credits a {
  color: var(--color);
}

@media (max-width: 450px) {
 .education {
    margin-right: 2rem; /* Reduce margin to better fit smaller screens */
    padding: 0.5rem; /* Reduce padding to better fit smaller screens */
 }

 h1 {
    font-size: 1.5rem; /* Reduce font size to better fit smaller screens */
 }

 ul {
    --col-gap: 1rem; /* Reduce column gap to better fit smaller screens */
    --row-gap: 1rem; /* Reduce row gap to better fit smaller screens */
    --line-w: 0.15rem; /* Reduce line width to better fit smaller screens */
    width: min(40rem, 90%); /* Adjust width to better fit smaller screens */
 }

 ul li .date {
    --dateH: 2rem; /* Reduce date height to better fit smaller screens */
    font-size: 1rem; /* Reduce font size to better fit smaller screens */
 }

 ul li .title,
 ul li .descr {
    padding-inline: 1rem; /* Reduce padding to better fit smaller screens */
 }

 ul li .title::before,
 ul li .descr::before {
    height: 0.3rem; /* Reduce shadow height to better fit smaller screens */
 }

 .credits {
    margin-top: 0.5rem; /* Reduce margin to better fit smaller screens */
 }
}
  
.blank{
  border-bottom: solid 1px black;
}

</style>