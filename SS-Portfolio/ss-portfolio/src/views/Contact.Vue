<template>
  
</template>

<script>
export default {
    computed:{
        fetchDataContact(){
            this.$store.dispatch('fetchDataContact')
        }
    },
    mounted(){
        this.fetchDataContact
    }
}
</script>

<style>

</style>