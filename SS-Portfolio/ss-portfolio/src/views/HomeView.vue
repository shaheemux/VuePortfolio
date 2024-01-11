<template>
  <section id="home">
      <div class="main">
        <h1 class="headings">SHAHEEM SALIE</h1>
        <h3 class="stuff"> Apiring Front-End Developer...</h3>
        <button class="btn">Lets Connect Socially</button>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

#home{
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: 100vh;
}
#home::before{
    margin-top: 3.5rem;
    height: 100vh;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: url(https://i.postimg.cc/kX6v5tQy/pictures-of-the-fore.jpg) no-repeat center center/cover;
    width: 100%;
    z-index: -1;
    opacity: .8;
}

.btn{
    padding: 10px 35px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    outline: none;
    outline: none;
    transition: .6s ease;
    margin-bottom: 200px;
}
.btn:hover{
    cursor: pointer;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white;
}

</style>