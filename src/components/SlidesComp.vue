<template>
    <h1 class="text-white " v-if="store.titleListTv.length > 0">Tv Series </h1>
    <div class="container-fluid d-flex ">
        
        <div class="card-title p-0 m-0" v-for="(titletv, index) in store.titleListTv" :key="titletv.index"
            :titletv="titletv">
            <div class="overlay-info">
                <ul class="p-0">
                    <li><span>Name:</span>
                        {{ titletv.name }}
                    </li>
                    <li><span>Language:</span> <img class="" :src="'/images/'+titletv.original_language+'.png'" ></li>
                    <li v-if="!(titletv.name === titletv.original_name)"><span>Original Name:</span> {{
                        titletv.original_name }}
                    </li>
                    <li><span>Rating:</span><span class="stars" :style="'--rating: ' + titletv.vote_average + ';'"></span>
                    </li>
                    <li>
                        <span>Info:</span>
                        <p class="">{{ titletv.overview }}</p>
                    </li>
                </ul>
            </div>
            <img :src="store.imgBsaeUrl + titletv.poster_path">
        </div>
    </div>
    <h1 class="text-white mt-4 " v-if="store.titleListMovie.length > 0">Films </h1>
    <div class="container-fluid d-flex flex-wrap mt-3">
        <div class="card-title p-0 mb-5" v-for="(titlemovie, index) in store.titleListMovie" :key="titlemovie.index"
            :titlemovie="titlemovie">
            <div class="overlay-info">
                <ul class="p-0">
                    <li><span>Title:</span>
                        {{ titlemovie.title }}
                    </li>
                    <li><span>Language:</span> <img :src="'/images/'+titlemovie.original_language+'.png'" ></li>
                    <li v-if="!(titlemovie.title === titlemovie.original_title)"><span>Original Title:</span> {{
                        titlemovie.original_title }}</li>
                    <li> <span>Rating:</span> <span class="stars"
                            :style="'--rating: ' + titlemovie.vote_average + ';'"></span> </li>
                </ul>
            </div>
            <img :src="store.imgBsaeUrl + titlemovie.poster_path">
        </div>
    </div>
</template>

<script>

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from '../data/store';
export default {
    name: 'SlidesComp',
    props: ['titletv', 'titlemovie'],
    components: {




    },
    data() {
        return {
            store,

        }
    },

    computed: {
        

    },
    mounted() {

    }
}

</script>

<style lang="scss" scoped>


.card-title {
    width: 9rem;
    height: 13.5rem;
    position: relative;

    img {
    width: 100%;
    border-radius: 10px;
    }


    .overlay-info {
        display: flex;
        flex-direction: column;
        padding: 5px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.89);
        opacity: 0;
        transition: 0.3s;
        border-radius: 10px;
        overflow-y: hidden;
        z-index: 1000;



        li {
            color: white;
            font-size: .6rem;
            list-style: none;
            text-transform: capitalize;
            padding-left: 5px;

            img{
                width: 20px;
            }



            span {
                color: red;
            }

            p {
                white-space: pre-wrap;
            }
        }


    }

}

.card-title:hover .overlay-info {
    opacity: 1;
    transform: scale(1.2);

}

.stars {
    --percent: calc(var(--rating) / 10 * 100%);
    display: inline-block;
    font-size: .9rem;
    font-family: Times;
    line-height: 1;

    &::before {
        content: '★★★★★';
        letter-spacing: 3px;
        background: linear-gradient(90deg, rgba(222, 201, 17) var(--percent), rgb(255, 251, 251) var(--percent));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
}
</style>


<!-- // :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"
// v-bind:star-size="20" :fixed-points="3" :read-only="true" :fill="titletv.vote_average" :increment="0.01"
//                 :rating="titletv.vote_average" :round-start-rating="false"  -->