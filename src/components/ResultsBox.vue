<template>
    <section class="container-fluid mt-5 ">
            <SlidesComp/>
    </section>
</template>

<script>


import SlidesComp from './SlidesComp.vue';
/* import MovieSlide from './MovieSlide.vue' */
import { store } from '../data/store'
export default {
    name: 'ResultsBox',
    components: {
        SlidesComp,
        /* MovieSlide */
    },
    data() {
        return {
            store

        }

    },
    

    mounted() {

    }


}
</script>

<style lang="scss" scoped>

</style>