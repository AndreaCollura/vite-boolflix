<!-- <template>
    <div class="row p-5">
            <h1 class="text-white " v-if="store.titleListTv.length > 0">Serie TV </h1>

            <SeriesSlide  v-for="(titletv, index) in store.titleListTv"
                :key="titletv.index" :titletv="titletv" />

            <h1 class="text-white " v-if="store.titleListTv.length > 0">Films </h1>
            <MovieSlide  v-for="(titlemovie, index) in store.titleListMovie"
                :key="titlemovie.index" :titlemovie="titlemovie" />

        </div>
</template>

<script>
import { store } from '../data/store'
import SeriesSlide from './SeriesSlide.vue';
import MovieSlide from './MovieSlide.vue'
    export default {
        name: 'AllSlides',
        components: {
            
            SeriesSlide,
            MovieSlide
        },
    data() {
        return {
            store

        }

    },
        
    }
</script>

<style lang="scss" scoped>

</style> -->