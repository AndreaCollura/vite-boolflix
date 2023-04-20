<template>
    <header>
        <div class="container-fluid d-flex justify-content-between align-items-center h-50 ">
            <div>
                <img class="w-50 p-1" src="../assets/style/img/logo.png" alt="">
            </div>
            <div>
            <!--from da trasformare in componente -->
                <form  class="row d-flex" @submit.prevent="store.startSearch">
                    <div class="col">
                        <div class="form-outline d-flex flex-nowrap">
                            <label placeholder="Search by title" class="text-white" for="searchbar"></label>
                            <input  type="text" id="searchbar" class="form-control" v-model.trim="store.userinput"/>
                            <button type="submit" class="btn btn-secondary ms-3">Search</button>
                        </div>
                    </div>
                </form>
            <!--from da trasformare in componente -->
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import {store} from '../data/store'
export default {
    
    name: 'HeaderComp',
    data(){
        return {
            store

        }
    },
    methods: {
        
    }



}
</script>

<style lang="scss" scoped>
h1{
    color: #e4131a;

}
    

</style>