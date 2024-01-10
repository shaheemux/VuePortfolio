<template>
  
</template>

<script>
export default {
    computed:{
        fetchDataProjects(){
            this.$store.dispatch('fetchDataProjects')
        }
    },
    mounted(){
        this.fetchDataProjects
    }
}
</script>

<style>

</style>