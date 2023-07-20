<script>
export default {
    name: "AppHeader",

    data(){
        return{
            navLinks:[
                {label: "Home", name: "home"},
                {label: "Progetti", name: "progetti"},
            ]
        }
    },

}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">

            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <template v-for="i in navLinks">
                     <router-link :to="{ name: i.name, params: i.params }">{{ i.label }}</router-link>
                </template>
            </div>
        </div>
    </nav>

</template>

<style scoped>

</style>