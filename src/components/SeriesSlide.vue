<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <div class="text-center">
            <img :src="('https://image.tmdb.org/t/p/w500/') + titletv.poster_path">
            <h4 class="text-white">{{ titletv.name }}</h4>
            <span class="text-uppercase"></span>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'SeriesSlide',
    props: ['titletv'],
    components: {

    },
    data() {
        return {
            store
        }
    }
}

</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }


</style>