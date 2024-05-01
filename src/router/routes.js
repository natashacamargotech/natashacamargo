const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomeApp.vue") },
      {
        path: "natashacamargo/#/projetos",
        component: () => import("pages/ProjetosPage.vue"),
      },
      {
        path: "natashacamargo/#/sitecrearj",
        component: () => import("pages/trabalhos/sitecrearjwordpress.vue"),
      },
      {
        path: "natashacamargo/#/appcrearj",
        component: () => import("pages/trabalhos/appcrearjflutter.vue"),
      },
      {
        path: "natashacamargo/#/jogopong",
        component: () => import("pages/trabalhos/jogopong.vue"),
      },
      {
        path: "natashacamargo/#/jogocarrinho",
        component: () => import("pages/trabalhos/jogocarrinho.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
