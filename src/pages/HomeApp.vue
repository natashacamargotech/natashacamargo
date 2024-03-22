<template>
  <div class="row items-center bg-primary" href="#sobre">
    <!-- Banner -->
    <img src="public/img/banner.png" class="full-width" />
    <!-- Avatar -->
    <div class="col-5 q-mx-sx">
      <!-- <q-img src="" style="width: 450px; height: auto" /> -->
    </div>
    <div class="col-7 q-pa-md">
      <q-card class="q-pa-md text-h5">
        <h4 class="text-center text-black">Sobre Mim</h4>
        <p class="text-justify-between text-black">
          Sou uma profissional com experiência em Odontologia e estou em
          transição de carreira para a área de Análise e Desenvolvimento de
          Sistemas.
        </p>
        <p class="text-justify-between text-black">
          Minha atuação como cirurgiã-dentista com vivência nas áreas de
          elaboração de diagnósticos e atendimento ao cliente contribuem para a
          minha facilidade em implementar, desenvolver e projetar sistemas.
          Tenho experiência em docência e consultório, trabalho em equipe,
          liderança de equipe, capacidade analítica e de resolução de problemas,
          organização e gestão de projetos.
        </p>
        <p class="text-justify-between text-black">
          Atualmente sou desenvolvedora de sistemas - FullStack em projetos de
          acesso corporativo e público.
        </p>
      </q-card>
    </div>
  </div>

  <div class="row items-center" href="#projetos">
    <ProjetosComponent />
  </div>

  <div>
    <SkilssComponent />
  </div>

  <q-toolbar class="bg-pink">
    <q-toolbar-title class="text-center text-black">
      Copyright © 2024 | Criado por Natasha Camargo
    </q-toolbar-title>
  </q-toolbar>
</template>

<script setup>
import { defineComponent } from "vue";
import ProjetosComponent from "pages/ProjetosComponent.vue";
import SkilssComponent from "pages/SkillsComponent.vue";
</script>
