<template>
  <q-layout class="shadow-2 rounded-borders">
    <q-header reveal elevated>
      <q-toolbar class="bg-pink text-white text-bold">
        <q-toolbar-title>Portifolio Natasha Camargo</q-toolbar-title>

        <q-tabs v-model="tab">
          <q-route-tab to="/" label="Home" />
        </q-tabs>

        <q-space />
        <div class="row items-justify-end q-pa-md q-gutter-sm">
          <q-btn
            flat
            inline
            icon="fa-brands fa-github"
            href="https://github.com/natashacamargotech"
          />
          <q-btn
            flat
            inline
            icon="fa-brands fa-linkedin"
            href="https://www.linkedin.com/in/natashacamargo/"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-toolbar class="bg-pink">
      <q-toolbar-title class="text-center text-white text-bold">
        Copyright © 2024 | Criado por Natasha Camargo
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>
