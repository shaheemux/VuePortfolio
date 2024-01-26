
<template>
    <div id="testimonials" >
       <div v-for="testimonial in testimonials" :key="testimonial.id" class="card">
         <!-- <img :src="testimonial.image" alt="Testimonial image"> -->
         <h3>{{ testimonial.name }}</h3>
         <p>{{ testimonial.testimonial }}</p>
       </div>
    </div>
</template>
   
   <script>
   import { mapState } from 'vuex';
   
   export default {
    computed: {
       ...mapState(['testimonials'])
    },
    async created() {
       await this.$store.dispatch('fetchTestimonials');
    }
   };
   </script>
   
<style scoped>

 #testimonials{
    height: 100svh;
 }

    /* #testimonials {
        height: 200vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 1rem;
        gap: 15px
    }

    img{
        clip-path: circle(50%);
        
    }

    .card {
        height: 450px;
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
        transition: 0.5s ease-in-out !important;
    }

    .card:hover{
        transform: scale(1.05);
    } */


</style>