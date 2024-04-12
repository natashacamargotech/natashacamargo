<template>
  <q-page class="bg-pink">
    <div class="col q-pa-md">
      <h4 class="text-center text-white">Jogo Carrinhos</h4>
      <div class="q-pa-md">
        <q-video :ratio="32 / 9" src="./public/img/jogocarrinhos.mp4" />
      </div>
      <div class="q-pa-md text-h5">
        <p class="text-center text-white">
          Projeto feito no site da Alura com objetivo de aprender lógica de
          programação.
        </p>
      </div>

      <div class="column items-center">
        <div class="q-pt-md">
          <p class="text-h6 text-center text-white">
            Liguagem de programação: HTML5 | CSS3 | JavaScript
          </p>
        </div>
        <div class="column items-center q-pa-md" style="height: 150px">
          <div class="col">
            <q-btn
              outline
              rounded
              icon="fas fa-chevron-left"
              label="Ver Outros Trabalhos"
              href="/#/projetos"
              class="text-white"
              size="20px"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
</script>
