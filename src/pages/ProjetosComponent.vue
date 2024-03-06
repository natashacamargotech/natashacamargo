<template>
  <q-card>
    <div class="bg-yellow">
      <h1 class="text-center">Projetos</h1>
    </div>
    <div class="q-pa-md">
      <q-card-section horizontal class="row items-center">
        <div class="col-6 bg-pink">Imagem</div>
        <div class="col-6 bg-grey">
          <p class="text-center text-h4">Lógica de Programação</p>
          <p class="text-center">
            Projeto feito pelo site Alura com objetivo de aprender lógica.
          </p>
          <p class="text-center">
            Liguagem de programção: HTML5 | CSS3 | JavaScript
          </p>
          <q-btn label="Deploy" />
          <q-btn
            label="Scratch"
            href="https://scratch.mit.edu/projects/732378758"
          />
        </div>
      </q-card-section>
    </div>
    <div class="q-pa-md">
      <q-card-section class="bg-yellow"> Projeto 2</q-card-section>
    </div>
    <div class="q-pa-md">
      <q-card-section class="bg-yellow"> Projeto 3</q-card-section>
    </div>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
</script>
