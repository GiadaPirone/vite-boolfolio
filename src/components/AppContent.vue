<script>

import axios from "axios";

export default {
    name: "AppContent",

    data(){
        return{
            api:"http://localhost:8000/api/",
            loading: false,
            projects: [],
            pageProject: 0,


        }
    },
    methods:{
        getProjects(){
            this.loading = true;

            axios.get(this.api + "projects").then(response=>{
                this.projects = response.data.results.data
                console.log(response);
                this.pageProject = response.data.results.current_page;


            this.loading = false;
         })
        },
        nextProject(){
            console.log("next");

            let config ={
                params:{
                    page: 2
                }
            }

            axios.get(this.api + "projects", config).then(response=>{
            this.projects = response.data.results.data
           
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
    <h3 v-if="loading">Caricamento in corso</h3>

    <div class="container-fluid mt-4">
        <div class="row justify-content-between" >
            <div v-for=" project in projects" class="card p-0 mb-4" style="width: 18rem;">

                <div  class="card-body">
                    <h5 class="card-title">{{ project.title}}</h5>
                    <p>{{ project.description }}</p>
                    <h4>Technologies: 
                        <span v-if="project.technologies.length" v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                        <span v-else>Nessuno</span>
                    </h4>
                    <p>{{ project.type_id ?? "nessun tipo selezionato"}}</p>
                </div>
            </div>
        </div>
    </div>
    <a class="button" @click="nextProject()">Pagina Successiva</a>

</template>

<style scoped>

.button{
    background-color: bisque;
    border-radius:5px ;
    padding: 1rem;
    cursor: pointer;
}

</style>