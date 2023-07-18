<script >
//Importiamo i componenti da usare
import AppContent from './components/AppContent.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppContent,
    AppHeader,
  },
  data(){
    return{

    }
  },
  
}


</script>

<template>

    <header>
      <AppHeader />
    </header>

    <router-view></router-view>
  
    <!-- <main>
      <AppContent />
    </main> -->

</template>



<style scoped>

</style>
