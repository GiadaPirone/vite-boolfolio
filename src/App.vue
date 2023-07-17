<script >
//Importiamo i componenti da usare
import AppContent from './components/AppContent.vue'

import axios from "axios";

export default {
  components: {
    AppContent,
  },
  data(){
    return{

    }
  }
}


</script>

<template>
  <main>
    <!-- Usiamo i componenti importati sopra -->
    <AppContent />
  </main>
</template>

<style scoped>

</style>
