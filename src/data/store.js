import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
titleListTv: [],
titleListMovie: [],
baseUrl: "https://api.themoviedb.org/3/",
endpoint: {
    tvtitle: "search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=",
    movietitle: "search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=",
},
userinput: "",
imgBsaeUrl: 'https://image.tmdb.org/t/p/w500/',


startSearch() {
    const urltv = this.baseUrl + this.endpoint.tvtitle + this.userinput;
    const urlmovie = this.baseUrl + this.endpoint.movietitle + this.userinput;

    axios.get(urltv).then((res) => {
        this.titleListTv = res.data.results;
        // console.log(urltv);
        console.log(this.titleListTv);
    });

    axios.get(urlmovie).then((res) => {
        this.titleListMovie = res.data.results;
        // console.log(urlmovie);
        console.log(this.titleListMovie);
    });
    
    },
});
