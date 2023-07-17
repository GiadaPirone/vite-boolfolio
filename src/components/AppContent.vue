<script>

import axios from "axios";

export default {
    name: "AppContent",

    data(){
        return{
            api:"http://localhost:8000/api/",
            projects: [],


        }
    },
    methods:{
        getProjects(){
            axios.get(this.api + "projects").then(response=>{
            this.projects = response.data.results
            console.log(response.data.results);
        })
        }
    },
    mounted(){
        this.getProjects()
    }
}

</script>

<template>
    <h1>Progetti</h1>

    <div class="container-fluid mt-4">
        <div class="row justify-content-between" >
            <div v-for=" project in projects" class="card p-0 mb-4" style="width: 18rem;">

                <div  class="card-body">
                    <h5 class="card-title">{{ project.title}}</h5>
                    <p>{{ project.description }}</p>
                    
        
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>