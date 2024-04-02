<template>
  <q-page class="bg-secondary">
    <div class="col">
      <q-card class="q-pa-md text-h5 bg-pink">
        <h4 class="text-center text-white">Jogo Pong</h4>
        <p class="text-center text-white">
          Projeto feito no site da Alura com objetivo de aprender lógica de
          programação.
        </p>
      </q-card>
      <div class="q-pa-md">
        <q-video :ratio="32 / 9" src="./public/img/jogopong.mp4" />
      </div>

      <p class="text-h6 text-center text-white q-pa-md">
        Caso você queira jogar clique abaixo:
      </p>
      <div class="column items-center">
        <div class="col q-pa-md">
          <q-btn
            outline
            label="Jogo Pong com SCRATCH"
            href="https://scratch.mit.edu/projects/732378758"
            class="text-white"
            size="20px"
          />
        </div>

        <div class="q-pt-md">
          <p class="text-center text-white">
            Liguagem de programação: HTML5 | CSS3 | JavaScript
          </p>
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
