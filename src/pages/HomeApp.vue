<template>
  <div class="row bg-pink" href="#sobre">
    <!-- Banner -->
    <img src="public/img/banner.png" class="full-width" />
    <!-- Avatar -->
    <div class="col-6 q-mx-sx">
      <!-- <q-img src="" style="width: 450px; height: auto" /> -->
    </div>
    <div class="col-6 q-pa-md">
      <q-card class="q-pa-md text-h5 bg-pink">
        <h3 class="text-justify text-white">Olá,</h3>
        <p class="text-justify text-white">
          sou Natasha Camargo, desenvolvedora de sistemas - FullStack em
          projetos de acesso corporativo e público.
        </p>
        <p class="text-justify text-white">
          Tenho experiência em Odontologia, possuo experiência em gestão clínica
          e acadêmica.
        </p>
      </q-card>
    </div>
  </div>
  <div href="#projetos">
    <ProjetosPage />
  </div>
  <div href="#skills">
    <SkilssPage />
  </div>
  <div href="#contato">
    <FormularioPage />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import ProjetosPage from "pages/ProjetosPage.vue";
import SkilssPage from "pages/SkillsPage.vue";
import FormularioPage from "pages/FormularioPage.vue";
</script>
