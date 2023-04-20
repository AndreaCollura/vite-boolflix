<template>
    <div class="card-title p-0 mb-5">
        <div class="overlay-info">
            <ul class="p-0">
                <li><span>Title:</span>
                    {{ titlemovie.title }}
                </li>
                <li><span>Language:</span> <span :class="'fi fi-'+language"></span></li>
                <li v-if="!(titlemovie.title === titlemovie.original_title)"><span >Original Title:</span> {{ titlemovie.original_title }}</li>
                <li> <span>Rating:</span>  {{ titlemovie.vote_average }}</li>
            </ul>
        </div>
        <img :src="store.imgBsaeUrl + titlemovie.poster_path">
    </div>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from '../data/store';
export default {
    name: 'MovieSlide',
    props: ['titlemovie'],
    components: {
        

    },
    data() {
        return {
            store,
            
        }
    },
    methods: {
        
    },
    computed:{
        language(){
            if(this.titlemovie.original_language == 'en'){
                return 'gb'
            } else if (this.titlemovie.original_language == 'undefined'){
                return 'xx'

            } else if (this.titlemovie.original_language == 'zh'){
                return 'cn'
            } else if (this.titlemovie.original_language == 'ja'){
                return 'jp'
            }else if (this.titlemovie.original_language == 'ko'){
                return 'kr'
            }
            else {
                return this.titlemovie.original_language
            }
        
        }
    }
}

</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        border-radius: 10px;
    }
    .card-title{
        width: 9rem;
        height: 13.5rem;
        position: relative;
        .overlay-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.89);
            opacity: 0;
            transition: 0.3s;
            border-radius: 10px;
            li {
                color: white;
                font-size: .9rem;
                list-style: none;
                text-transform: capitalize;
                padding-left: 5px;
                span{
                    color: red;
                }
            }
            
            
        } 

    }

    .card-title:hover .overlay-info {
        opacity: 1;
    }


</style>