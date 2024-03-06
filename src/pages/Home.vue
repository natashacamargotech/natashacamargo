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
            <q-item>
              <q-item-section class="text-h6 text-center">
                Frontend
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center">
                HTML
                <q-tooltip>
                  HTML 5 - Linguagem de marcação utilizada na construção de
                  páginas na Web
                </q-tooltip>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> CSS </q-item-section>
              <q-tooltip
                >CSS 3 - Mecanismo para adicionar estilos a uma página
                web</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> JavaScript </q-item-section>
              <q-tooltip>
                Linguagem de programação interpretada estruturada, de script em
                alto nível com tipagem dinâmica fraca e
                multiparadigma</q-tooltip
              >
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
            <q-item>
              <q-item-section class="text-h6 text-center">
                Backend
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Vue </q-item-section>
              <q-tooltip
                >Framework JavaScript de código-aberto, focado no
                desenvolvimento de interfaces de usuário e aplicativos de página
                única</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> JAVA </q-item-section>
              <q-tooltip
                >Linguagem de programação orientada a objetos</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> DART </q-item-section>
              <q-tooltip>Linguagem de script voltada à web</q-tooltip>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Angular </q-item-section>
              <q-tooltip
                >Plataforma de aplicações web de código-fonte aberto e front-end
                baseado em TypeScrip</q-tooltip
              >
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
            <q-item>
              <q-item-section class="text-h6 text-center">
                Frameworks
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Quasar </q-item-section>
              <q-tooltip>
                Framework de desenvolvimento front-end de código aberto baseado
                no Vue. js</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Bootstrap </q-item-section>
              <q-tooltip
                >Framework web com código-fonte aberto para desenvolvimento de
                componentes de interface e front-end para sites e aplicações
                web, usando HTML, CSS e JavaScript</q-tooltip
              >
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Flutter </q-item-section>
              <q-tooltip
                >Kit de desenvolvimento de interface de usuário, de código
                aberto</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Springboot </q-item-section>
              <q-tooltip
                >Extensão de convenção sobre configuração para a plataforma
                Spring Java destinada a ajudar a minimizar preocupações de
                configuração durante a criação de aplicativos baseados em
                Spring</q-tooltip
              >
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
            <q-item>
              <q-item-section class="text-h6 text-center">
                Testes
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Selenium </q-item-section>
              <q-tooltip
                >Framework portátil para testar aplicativos web</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center"> Play Wright </q-item-section>
              <q-tooltip
                >Biblioteca de automação de código aberto para testes de
                navegador e web scraping</q-tooltip
              >
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
          <q-item>
            <q-item-section class="text-h6 text-center">
              Banco de Dados
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> Oracle </q-item-section>
            <q-tooltip
              >Banco de dados para armazenamento, recuperação e gerenciamento de
              informações orientadas a documentos</q-tooltip
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> SQL DEVELOPER </q-item-section>
            <q-tooltip
              >Ferramenta gráfica que aprimora a produtividade e simplifica as
              tarefas de modelagem de dados.</q-tooltip
            >
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
          <q-item>
            <q-item-section class="text-h6 text-center">
              Serviços de Aplicação
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> Widfly </q-item-section>
            <q-tooltip>Servidor de aplicações open source</q-tooltip>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> JBOSS </q-item-section>
            <q-tooltip>
              Maximiza a produtividade administrativa ao facilitar a manutenção
              e atualização das suas implantações</q-tooltip
            >
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
          <q-item>
            <q-item-section class="text-h6 text-center">
              Gerenciamento
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> TRELLO </q-item-section>
            <q-tooltip
              >Ferramenta visual que possibilita ao time o gerenciamento de
              qualquer tipo de projeto, fluxo de trabalho ou monitoramento de
              tarefas</q-tooltip
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center">
              GLPI(Chamados)
            </q-item-section>
            <q-tooltip
              >Sistema de código aberto para Gerenciamento de Ativos de TI,
              rastreamento de problemas e central de serviços</q-tooltip
            >
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
          <q-item>
            <q-item-section class="text-h6 text-center">
              Outros
            </q-item-section>
          </q-item>
          <q-separator inset />
          <q-item clickable v-ripple>
            <q-item-section class="text-center"> GitHub </q-item-section>
            <q-tooltip
              >Plataforma de hospedagem de código-fonte e arquivos com controle
              de versão usando o Git</q-tooltip
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center"> GitLab </q-item-section>
            <q-tooltip
              >Gerenciador de repositório de software baseado em git, com
              suporte a Wiki, gerenciamento de tarefas e CI/CD.
            </q-tooltip>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>

  <div class="row bg-pink-2">
    <div class="col-6">Imagem</div>
    <div class="col-6">
      <h4 class="text-left">Soft Skills</h4>
      <q-item>
        <q-item-section class="text-left">Resilência</q-item-section></q-item
      >
      <q-item>
        <q-item-section class="text-left">Liderança</q-item-section></q-item
      >
      <q-item>
        <q-item-section class="text-left">Trabalho em Equipe</q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-left">Empatia</q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-left">Organização</q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="text-left">Criatividade</q-item-section>
      </q-item>
    </div>
  </div>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <h1 class="text-white">texto</h1>
      </q-parallax>
    </div>
  </div>
  <div>
    Teste de Espaço
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
</script>
