<template>
  <q-page class="bg-secondary">
    <!-- HardSkilss -->
    <div class="q-pa-md">
      <div href="#skills">
        <h2 class="text-center text-white">Hard Skilss</h2>
      </div>
      <div class="row q-pa-md">
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
                <q-item-section class="text-h6 text-center text-white">
                  Frontend
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  HTML
                  <q-tooltip>
                    HTML 5 - Linguagem de marcação utilizada na construção de
                    páginas na Web
                  </q-tooltip>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  CSS
                </q-item-section>
                <q-tooltip
                  >CSS 3 - Mecanismo para adicionar estilos a uma página
                  web</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  JavaScript
                </q-item-section>
                <q-tooltip>
                  Linguagem de programação interpretada estruturada, de script
                  em alto nível com tipagem dinâmica fraca e
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
                <q-item-section class="text-h6 text-center text-white">
                  Backend
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Vue
                </q-item-section>
                <q-tooltip
                  >Framework JavaScript de código-aberto, focado no
                  desenvolvimento de interfaces de usuário e aplicativos de
                  página única</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  JAVA
                </q-item-section>
                <q-tooltip
                  >Linguagem de programação orientada a objetos</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  DART
                </q-item-section>
                <q-tooltip>Linguagem de script voltada à web</q-tooltip>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Angular
                </q-item-section>
                <q-tooltip
                  >Plataforma de aplicações web de código-fonte aberto e
                  front-end baseado em TypeScrip</q-tooltip
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
                <q-item-section class="text-h6 text-center text-white">
                  Frameworks
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Quasar
                </q-item-section>
                <q-tooltip>
                  Framework de desenvolvimento front-end de código aberto
                  baseado no Vue. js</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Bootstrap
                </q-item-section>
                <q-tooltip
                  >Framework web com código-fonte aberto para desenvolvimento de
                  componentes de interface e front-end para sites e aplicações
                  web, usando HTML, CSS e JavaScript</q-tooltip
                >
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Flutter
                </q-item-section>
                <q-tooltip
                  >Kit de desenvolvimento de interface de usuário, de código
                  aberto</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Springboot
                </q-item-section>
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
                <q-item-section class="text-h6 text-center text-white">
                  Testes
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Selenium
                </q-item-section>
                <q-tooltip
                  >Framework portátil para testar aplicativos web</q-tooltip
                >
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="text-center text-white">
                  Play Wright
                </q-item-section>
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
    <div class="row q-pa-md">
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
              <q-item-section class="text-h6 text-center text-white">
                Banco de Dados
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                Oracle
              </q-item-section>
              <q-tooltip
                >Banco de dados para armazenamento, recuperação e gerenciamento
                de informações orientadas a documentos</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                SQL DEVELOPER
              </q-item-section>
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
              <q-item-section class="text-h6 text-center text-white">
                Serviços de Aplicação
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                Widfly
              </q-item-section>
              <q-tooltip>Servidor de aplicações open source</q-tooltip>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                JBOSS
              </q-item-section>
              <q-tooltip>
                Maximiza a produtividade administrativa ao facilitar a
                manutenção e atualização das suas implantações</q-tooltip
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
              <q-item-section class="text-h6 text-center text-white">
                Gerenciamento
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                TRELLO
              </q-item-section>
              <q-tooltip
                >Ferramenta visual que possibilita ao time o gerenciamento de
                qualquer tipo de projeto, fluxo de trabalho ou monitoramento de
                tarefas</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
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
              <q-item-section class="text-h6 text-center text-white">
                Outros
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                GitHub
              </q-item-section>
              <q-tooltip
                >Plataforma de hospedagem de código-fonte e arquivos com
                controle de versão usando o Git</q-tooltip
              >
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section class="text-center text-white">
                GitLab
              </q-item-section>
              <q-tooltip
                >Gerenciador de repositório de software baseado em git, com
                suporte a Wiki, gerenciamento de tarefas e CI/CD.
              </q-tooltip>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- SoftSkilss -->

    <div class="row bg-accent">
      <div class="col">
        <div href="#skills">
          <h2 class="text-center text-white">Soft Skilss</h2>
        </div>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white">Resilência</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white">Liderança</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white"
              >Trabalho em Equipe</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white">Empatia</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white">Organização</q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="white" name="fa-regular fa-heart" />
            </q-item-section>

            <q-item-section class="text-white">Criatividade</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="row items-center">
        <div class="col">Avatar</div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
</script>
