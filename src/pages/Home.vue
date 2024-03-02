<template>
  <img src="public/img/banner.png" class="full-width" />

  <div class="row items-center" href="#sobre">
    <div class="col-7 q-pa-md">
      <q-card class="q-pa-md text-h5">
        <h4 class="text-center">Sobre Mim</h4>
        <p class="text-justify-between">
          Sou uma profissional com experiência em Odontologia e estou em
          transição de carreira para a área de Análise e Desenvolvimento de
          Sistemas.
        </p>
        <p class="text-justify-between">
          Minha atuação como cirurgiã-dentista com vivência nas áreas de
          elaboração de diagnósticos e atendimento ao cliente contribuem para a
          minha facilidade em implementar, desenvolver e projetar sistemas.
          Tenho experiência em docência e consultório, trabalho em equipe,
          liderança de equipe, capacidade analítica e de resolução de problemas,
          organização e gestão de projetos.
        </p>
        <p class="text-justify-between">
          Atualmente sou desenvolvedora de sistemas - FullStack em projetos de
          acesso corporativo e público.
        </p>
      </q-card>
    </div>
    <div class="col-5 q-mx-sx">
      <q-img
        src="public/img/natashaperfil.png"
        style="width: 450px; height: auto"
      />
    </div>
  </div>
  <div class="q-pa-md bg-pink-1">
    <div href="#skills">
      <h1 class="text-center bg-pink-1">Hard Skilss</h1>
    </div>
    <div class="row q-pa-md bg-pink-1">
      <div class="col">
        <div class="q-pa-md" style="max-width: 350px">
          <q-list
            dense
            bordered
            padding
            class="rounded-borders"
            style="min-height: 200px"
          >
            <q-item clickable v-ripple>
              <q-item-section class="text-h6 text-center">
                Frontend
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center">
                HTML <q-tooltip> HTML 5 </q-tooltip>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> CSS </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> JavaScript </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md" style="max-width: 350px">
          <q-list
            dense
            bordered
            padding
            class="rounded-borders"
            style="min-height: 200px"
          >
            <q-item clickable v-ripple>
              <q-item-section class="text-h6 text-center">
                Backend
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Vue </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> JAVA </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Flutter </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Angular </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md" style="max-width: 350px">
          <q-list
            dense
            bordered
            padding
            class="rounded-borders"
            style="min-height: 200px"
          >
            <q-item clickable v-ripple>
              <q-item-section class="text-h6 text-center">
                Frameworks
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Quasar </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Bootstrap </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Springboot </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md" style="max-width: 350px">
          <q-list
            dense
            bordered
            padding
            class="rounded-borders"
            style="min-height: 200px"
          >
            <q-item clickable v-ripple>
              <q-item-section class="text-h6 text-center">
                Testes
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Selenium </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Play Wright </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
  <div class="row q-pa-md bg-pink-1">
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center">
              Banco de Dados
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> Oracle </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> SQL DEVELOPER </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center">
              Serviços de Aplicação:
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> Widfly </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> JBOSS </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center">
              Gerenciamento
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> TRELLO </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center">
              GLPI(Chamados)
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center">
              Outros
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> GitHub </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> GitLab </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>

  <div class="bg-pink-2">
    <h1 class="text-center">Soft Skills</h1>
  </div>
  <div class="row q-pa-md bg-pink-2">
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list
          dense
          bordered
          padding
          class="rounded-borders"
          style="min-height: 200px"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-h6 text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> xxxx </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <h1 class="text-white">texto</h1>
      </q-parallax>
    </div>
  </div>
  <div class="bg-yellow" href="#trabalhos">
    <h1 class="text-center">Projetos</h1>
  </div>
  <div class="q-pa-md">
    <q-card class="bg-yellow"> Projeto 1</q-card>
  </div>
  <div class="q-pa-md">
    <q-card class="bg-yellow"> Projeto 2</q-card>
  </div>
  <div class="q-pa-md">
    <q-card class="bg-yellow"> Projeto 3</q-card>
  </div>

  <h1 class="text-center" href="#contato">Contato</h1>
  <div class="q-col-gutter-md row items-star bg-orange">
    <div class="q-col-gutter-md q-pa-xl">
      <q-btn class="glossy" color="pink" icon="X" label="GitHub" />
    </div>
    <div class="q-col-gutter-md q-pa-xl">
      <q-btn class="glossy" color="pink" icon="X" label="LinkedIn" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
</script>
