<template>
  <q-page class="bg-secondary">
    <div class="col q-pa-md">
      <q-card class="q-pa-md text-h5 bg-pink">
        <h4 class="text-center text-white">Web site Crea-RJ em WordPress</h4>
        <p class="text-center text-white">
          Projeto feito junto com a equipe de TI e AMAC do Crea-RJ com o
          objetivo de desenvolver um site mais moderno e intuitivo,
        </p>
        <p class="text-center text-white">
          pensado especialmente para atender às necessidades e expectativas de
          quem os acompanha.
        </p>
        <p class="text-center text-white">
          Participei ativamente na criação das páginas e funcionalidades do
          site.
        </p>
      </q-card>
      <div class="q-pa-md">
        <q-video :ratio="32 / 9" src="./public/img/videositecrearj.mp4" />
      </div>
      <p class="text-h6 text-center text-white">
        Caso você queira ver o site do Crea-RJ clique abaixo:
      </p>
      <div class="column items-center" style="height: 150px">
        <div class="col">
          <q-btn
            outline
            label="Site Oficial do Crea-RJ"
            href="https://www.crea-rj.org.br/"
            class="text-white"
            size="20px"
          />
        </div>
      </div>
    </div>
  </q-page>
  <q-toolbar class="bg-secondary">
    <q-toolbar-title class="text-center text-white text-bold">
      Copyright © 2024 | Criado por Natasha Camargo
    </q-toolbar-title>
  </q-toolbar>
</template>
<script>
import { defineComponent } from "vue";
</script>
