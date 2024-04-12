<template>
  <q-page class="bg-pink">
    <div class="col q-pa-md">
      <h4 class="text-center text-white">APP Crea-RJ</h4>
      <div class="q-pa-md text-h5 bg-pink">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <q-img
              class="rounded-borders"
              src="img/appcrearj.png"
              style="height: 650px; max-width: 850px"
            />
          </div>
          <div class="col"></div>
        </div>
        <div></div>
        <p class="text-center text-white q-pt-xl">
          Projeto feito pela equipe de TI, o primeiro app do Crea-RJ,
        </p>
        <p class="text-center text-white">
          com o objetivo de facilitar o acesso as principais informações do
          engenheiro credenciado a instituição.
        </p>

        <p class="text-center text-white">
          * Colaborei com os ajustes de UI/UX *
        </p>
      </div>

      <p class="text-h6 text-center text-white q-pa-md">
        Caso você queira ver o app do Crea-RJ clique abaixo:
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
        <div class="column items-center">
          <div class="q-pt-md">
            <p class="text-h6 text-center text-white">
              Liguagem de programação: Flutter
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
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
</script>
