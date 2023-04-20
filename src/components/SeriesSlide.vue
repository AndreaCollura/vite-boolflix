<template>
    <div class="card-title p-0 mb-5">
        <div class="overlay-info">
            <ul class="p-0">
                <li><span>Name:</span>
                    {{ titletv.name }}
                </li>
                <li><span>Lenguage:</span> {{titletv.original_language}}</li>
                <li><span>Original Name:</span> {{ titletv.original_name }}</li>
                <li> <span>Rating:</span>  {{ titletv.vote_average }}</li>
            </ul>
        </div>
        <img :src=" store.imgBsaeUrl + titletv.poster_path">
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