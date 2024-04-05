<template>
  <q-page class="bg-secondary" style="min-height: auto">
    <div class="row">
      <div class="row items-center col-2 bg-secondary">
        <div class="q-pa-md text-center text-white">
          <p class="text-h3">PROJETOS</p>
          <p class="text-h7 q-pa-md">
            Aqui é possível ver as soluções criadas e desenvolvidas.
          </p>
        </div>
      </div>
      <div class="col">
        <div>
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="bg-secondary"
            style="height: 600px"
          >
            <q-carousel-slide :name="1" class="column">
              <div
                class="row fit justify-start items-center q-col-gutter no-wrap"
              >
                <q-img
                  class="col-4"
                  style="height: 600px"
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
                            href="/#/sitecrearj/"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-img>
                <q-img
                  class="col-4"
                  style="height: 600px"
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
                            href="/#/appcrearj/"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-img>
                <q-img
                  class="col-4"
                  style="height: 600px"
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
                            href="https://natashacamargotech.github.io/natashacamargo.tech/websitealura+.html"
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
                class="row fit justify-start items-center q-col-gutter no-wrap"
              >
                <q-img
                  class="col-4"
                  style="height: 600px"
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
                            href="/#/jogopong/"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-img>
                <q-img
                  class="col-4"
                  style="height: 600px"
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
                            href="/#/jogocarrinho/"
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
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
