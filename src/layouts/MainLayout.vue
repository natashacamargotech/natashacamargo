<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header>
      <q-toolbar class="bg-pink-2 text-black">
        <q-toolbar-title>Natasha Camargo</q-toolbar-title>

        <q-tabs v-model="tab">
          <q-tab name="sobre" label="Sobre mim" />
          <q-tab name="skills" label="Skills" />
          <q-tab name="trabalhos" label="Projetos" />
          <q-tab name="contato" label="Contato" />
        </q-tabs>

        <q-space />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar class="bg-pink-2">
        <q-toolbar-title class="text-center text-black">
          Copyright © 2024 | Criado por Natasha Camargo
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup></script>
