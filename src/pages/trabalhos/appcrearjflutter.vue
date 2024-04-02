<template>
  <q-page class="bg-secondary">
    <div class="col">
      <q-card class="q-pa-md text-h5 bg-pink">
        <h4 class="text-center text-white">APP site Crea-RJ em Flutter</h4>
        <p class="text-center text-white">
          Projeto feito pela equipe de TI, o primeiro app do Crea-RJ,
        </p>
        <p class="text-center text-white">
          com o objetivo de facilitar o acesso as principais informações do
          engenheiro credenciado a instituição.
        </p>
        <p class="text-center text-white">Colaborei com os ajustes de UI/UX.</p>
      </q-card>
      <!-- <div class="col-6">
        <q-img
          src="img/appcrearj.png"
          style="height: 140px; max-width: 150px"
        />
      </div> -->

      <p class="text-h6 text-center text-white q-pa-md">
        Caso você queira ver o site do Crea-RJ clique abaixo:
      </p>
      <div class="column items-center">
        <div class="col q-pa-md">
          <q-btn
            outline
            label="App Oficial do Crea-RJ na Apple Store"
            href="https://apps.apple.com/br/app/crea-rj/id6450840382"
            class="text-white"
            size="20px"
          />
        </div>
        <div class="col q-pa-md">
          <q-btn
            outline
            label="App Oficial do Crea-RJ no Google Play"
            href="https://play.google.com/store/apps/details?id=aplicativo.crea.rj.oficial.producao&pli=1"
            class="text-white"
            size="20px"
          />
        </div>
        <div class="q-pt-md">
          <p class="text-center text-white">Liguagem de programação: Flutter</p>
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
