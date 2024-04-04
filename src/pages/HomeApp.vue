<template>
  <div class="bg-pink" href="#sobre">
    <!-- Banner -->

    <q-img src="img/bannerhome.png" />

    <!-- Sobre Mim -->
    <div>
      <q-img src="img/sobremim.jpg" />
    </div>
  </div>
  <div href="#projetos">
    <ProjetosPage />
  </div>
  <!-- <div href="#skills">
    <SkilssPage />
  </div> -->
  <div href="#contato">
    <ContatoPage />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import ProjetosPage from "pages/ProjetosPage.vue";
import SkilssPage from "pages/SkillsPage.vue";
import ContatoPage from "pages/ContatoPage.vue";
</script>
