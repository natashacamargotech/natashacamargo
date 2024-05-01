<template>
  <q-page class="bg-secondary">
    <div class="q-pt-xl text-center text-white">
      <p class="text-h2">PROJETOS</p>
      <p class="text-h5 q-pa-md">
        Aqui é possível ver as soluções criadas e desenvolvidas.
      </p>
    </div>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="500px"
        class="bg-secondary"
      >
        <q-carousel-slide :name="1" class="column no-wrap carrousel-slid">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="img/sitecrearj.png"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="q-pa-md example-row-equal-width">
                  <div class="row">
                    <div class="col">Site Crea-RJ</div>
                  </div>
                  <div class="row">
                    <div class="col q-pt-md">
                      <q-btn
                        label="ver detalhes do Projeto"
                        href="natashacamargo/#/sitecrearj"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="img/appcrearj.png"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="q-pa-md example-row-equal-width">
                  <div class="row">
                    <div class="col">App Crea-RJ</div>
                  </div>
                  <div class="row">
                    <div class="col q-pt-md">
                      <q-btn
                        label="ver detalhes do Projeto"
                        href="natashacamargo/#/appcrearj"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="img/websitealura.png"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="q-pa-md example-row-equal-width">
                  <div class="row">
                    <div class="col">Web Site Alura</div>
                  </div>
                  <div class="row">
                    <div class="col q-pt-md">
                      <q-btn
                        label="ver detalhes do Projeto"
                        href="https://natashacamargotech.github.io/natashacamargoportifolio/websitealura+.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="img/jogopong.png"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="q-pa-md example-row-equal-width">
                  <div class="row">
                    <div class="col">Jogo Pong</div>
                  </div>
                  <div class="row">
                    <div class="col q-pt-md">
                      <q-btn
                        label="ver detalhes do Projeto"
                        href="natashacamargo/#/jogopong"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="img/jogocarrinhos.png"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                <div class="q-pa-md example-row-equal-width">
                  <div class="row">
                    <div class="col">Jogo Carrinhos</div>
                  </div>
                  <div class="row">
                    <div class="col q-pt-md">
                      <q-btn
                        label="ver detalhes do Projeto"
                        href="natashacamargo/#/jogocarrinho"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script default>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style>
.q-carousel-slide .q-img {
  width: 100%;
  height: auto;
}
</style>
