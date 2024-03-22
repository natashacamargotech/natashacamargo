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
  <div>
    <SkilssComponent />
  </div>

  <div>
    <ProjetosComponent />
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
import ProjetosComponent from "pages/ProjetosComponent.vue";
import SkilssComponent from "pages/SkillsComponent.vue";
</script>
