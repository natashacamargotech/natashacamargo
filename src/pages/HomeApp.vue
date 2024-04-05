<template>
  <div class="bg-pink" :id="Home">
    <!-- Banner -->

    <q-img src="img/bannersystemdeveloper.jpg" />

    <!-- Sobre Mim -->
    <div>
      <q-img src="img/sobremim.jpg" />
    </div>
  </div>
  <div>
    <ProjetosPage />
  </div>

  <div>
    <ContatoPage />
  </div>
</template>

<script setup>
import ProjetosPage from "pages/ProjetosPage.vue";

import ContatoPage from "pages/ContatoPage.vue";
</script>
