<template>
  <q-page class="bg-pink">
    <div class="col q-pa-md">
      <h3 class="text-center text-white">Web Site Crea-RJ</h3>
      <div class="q-pa-md">
        <q-video :ratio="32 / 9" src="./public/img/videositecrearj.mp4" />
      </div>
      <div class="q-pa-md text-h5 bg-pink">
        <p class="text-h6 text-center text-white">
          Projeto feito junto com a equipe de TI e AMAC do Crea-RJ com o
          objetivo de desenvolver um site mais moderno e intuitivo,
        </p>
        <p class="text-h6 text-center text-white">
          pensado especialmente para atender às necessidades e expectativas de
          quem os acompanha.
        </p>
        <p class="text-h6 text-center text-white">
          * Participei ativamente na criação das páginas e funcionalidades do
          site *
        </p>
      </div>
    </div>
    <p class="text-h6 text-center text-white">
      Caso você queira ver o site do Crea-RJ clique abaixo:
    </p>
    <div class="column items-center">
      <div class="col q-pa-md">
        <q-btn
          outline
          rounded
          label="Site Oficial do Crea-RJ"
          href="https://www.crea-rj.org.br/"
          class="text-white"
          size="20px"
        />
      </div>

      <div class="q-pt-md">
        <p class="text-h6 text-center text-white">
          Liguagem de programação: WordPress
        </p>
      </div>
      <div class="column items-center q-pa-md" style="height: 150px">
        <div class="col">
          <q-btn
            outline
            rounded
            icon="fas fa-chevron-left"
            label="Ver Outros Projetos"
            href="/#/projetos"
            class="text-white"
            size="20px"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
</script>
