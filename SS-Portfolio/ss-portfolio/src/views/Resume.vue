<template>
    <div id="Resume">
    </div>

</template>

<script>
export default {
    computed:{
        fetchDataResume(){
            this.$store.dispatch('fetchDataResume')
        }
    },
    mounted(){
        this.fetchDataResume
    }
}
</script>

<style>

</style>