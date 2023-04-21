<template>
  <HeaderComp/>
  <!-- jumbo da add in seguito -->
  <main>
    <ResultsBox/>
  </main>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue';
import ResultsBox from './components/ResultsBox.vue';
import { store } from './data/store';

  export default {
    name: 'App',
    components: {
      HeaderComp,
      ResultsBox
      

    },
    data(){
      return{
        store

      }
    },
    methods: {

    },
    mounted(){
      
    }
    
  }
</script>

<style lang="scss" scoped>


</style>