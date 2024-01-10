<template>

  
</template>

<script>
export default {
    computed:{
        fetchDataTestimonials(){
            this.$store.dispatch('fetchDataTestimonials')
        }
    },
    mounted(){
        this.fetchDataTestimonials
    }
}
</script>

<style>

</style>