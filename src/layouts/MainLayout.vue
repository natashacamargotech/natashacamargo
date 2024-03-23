<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header reveal elevated>
      <q-toolbar class="bg-secondary text-white text-bold">
        <q-toolbar-title>Natasha Camargo</q-toolbar-title>

        <q-tabs v-model="tab">
          <q-tab name="sobre" label="Sobre mim" />
          <q-tab name="skills" label="Skills" />
          <q-tab name="trabalhos" label="Projetos" />
        </q-tabs>

        <q-space />
        <div class="row items-justify-end q-pa-md q-gutter-sm">
          <q-btn
            flat
            icon="fa-brands fa-github"
            href="https://github.com/natashacamargotech"
          />
          <q-btn
            flat
            icon="fa-brands fa-linkedin"
            href="https://www.linkedin.com/in/natashacamargo/"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup></script>
