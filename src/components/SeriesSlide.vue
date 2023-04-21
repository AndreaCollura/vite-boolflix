<template>
    <div class="card-title p-0 mb-5">
        <div class="overlay-info">
            <ul class="p-0">
                <li><span>Name:</span>
                    {{ titletv.name }}
                </li>
                <li><span>Language:</span> <span :class="'fi fi-' + language"></span></li>
                <li v-if="!(titletv.name === titletv.original_name)"><span>Original Name:</span> {{ titletv.original_name }}
                </li>
                <li><span>Rating:</span><span class="stars" :style="'--rating: '+ titletv.vote_average+ ';'"></span>
                </li>
                <li>
                    <span>Info:</span> <p class="">{{titletv.overview}}</p>
                </li>
            </ul>
        </div>
        <img :src="store.imgBsaeUrl + titletv.poster_path">
    </div>
</template>

<script>

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from '../data/store';
export default {
    name: 'SeriesSlide',
    props: ['titletv'],
    components: {
    
        
        

    },
    data() {
        return {
            store,
            
        }
    },

    computed: {
        language() {
            if (this.titletv.original_language == 'en') {
                return 'gb'
            } else if (this.titletv.original_language == 'undefined') {
                return 'xx'
            } else if (this.titletv.original_language == 'zh') {
                return 'cn'
            } else if (this.titletv.original_language == 'ja') {
                return 'jp'
            } else if (this.titletv.original_language == 'ko') {
                return 'kr'
            } else {
                return this.titletv.original_language
            }
        },
        
    },
    mounted(){
        
    }
}

</script>

<style lang="scss" scoped>



img {
    width: 100%;
    border-radius: 10px;
}

.card-title {
    width: 9rem;
    height: 13.5rem;
    position: relative;

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
        overflow-y:hidden;
        z-index: 1000;
        
        

        li {
            color: white;
            font-size: .9rem;
            list-style: none;
            text-transform: capitalize;
            padding-left: 5px;
            
            

            span {
                color: red;
            }
            
            p{
                white-space:pre-wrap;
            }
        }


    }

}

.card-title:hover .overlay-info {
    opacity: 1;
    transform: scale(1.2);
    
}

.stars {
   --percent: calc( var(--rating) / 10 * 100%);
    display: inline-block;
    font-size: 1rem;
    font-family: Times;
    line-height: 1;
    
    &::before {
        content: '★★★★★';
        letter-spacing: 3px;
        background: linear-gradient(90deg, rgba(222, 201, 17) var(--percent), rgb(255, 251, 251) var(--percent ));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    } 
}








</style>


<!-- // :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"
// v-bind:star-size="20" :fixed-points="3" :read-only="true" :fill="titletv.vote_average" :increment="0.01"
//                 :rating="titletv.vote_average" :round-start-rating="false"  -->