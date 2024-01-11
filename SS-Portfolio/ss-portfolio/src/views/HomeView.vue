<template>
  <section id="home">
    <div class="title">
      <h2 class="text">Aspiring Front-End Developer</h2>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.title{
    border: solid 1px black;
    padding: 1rem;
    text-align: left;
    position: relative;
    top: 100px;
    font-family: 'Vina Sans', sans-serif;
    font-size: 6rem;
    color: white;
    letter-spacing: 4px;
    text-shadow: 3px 8px 10px black;
}

.text{
    border: solid black 1px;
}
#home{
    background-image: linear-gradient(rgb(194, 194, 191), rgb(124, 110, 124));
    height: 100vh;
    margin-top: 4.5rem;
}

@media (max-width: 1080px) {
    .title {
        font-size: 5rem; /* Adjust font size and other styles as needed */
    }
}

@media (max-width: 720px) {
    .title {
        font-size: 4rem; /* Adjust font size and other styles as needed */
    }
}

@media (max-width: 650px) {
    .title {
        font-size: 3.5rem; /* Adjust font size and other styles as needed */
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 3rem; /* Adjust font size and other styles as needed */
        top: 50px; /* Adjust position as needed */
    }
}

@media (max-width: 320px) {
    .title {
        font-size: 2.5rem; /* Adjust font size and other styles as needed */
        top: 20px; /* Adjust position as needed */
    }
}

@media (max-width: 280px) {
    .title {
        font-size: 2rem; /* Adjust font size and other styles as needed */
        top: 10px; /* Adjust position as needed */
        padding: 0.5rem; /* Adjust padding as needed */
    }
}



</style>