<template>
  <q-page class="bg-pink">
    <div class="col q-pa-md">
      <h4 class="text-center text-white">Jogo Pong</h4>
      <div class="q-pa-md">
        <q-video :ratio="32 / 9" src="./public/img/jogopong.mp4" />
      </div>
      <div class="q-pa-md text-h5">
        <p class="text-h6 text-center text-white">
          Projeto feito no site da Alura com objetivo de aprender lógica de
          programação.
        </p>
      </div>

      <p class="text-h6 text-center text-white">
        Caso você queira jogar clique abaixo:
      </p>
      <div class="column items-center">
        <div class="col q-pa-md">
          <q-btn
            outline
            rounded
            label="Jogo Pong com SCRATCH"
            href="https://scratch.mit.edu/projects/732378758"
            class="text-white"
            size="20px"
          />
        </div>

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
              label="Ver Outros Projetos"
              href="/#/home/"
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
