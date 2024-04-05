const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/HomeApp.vue") },

      {
        path: "sitecrearj",
        component: () => import("pages/trabalhos/sitecrearjwordpress.vue"),
      },
      {
        path: "appcreaj",
        component: () => import("pages/trabalhos/appcrearjflutter.vue"),
      },
      {
        path: "jogopong",
        component: () => import("pages/trabalhos/jogopong.vue"),
      },
      {
        path: "jogocarrinho",
        component: () => import("pages/trabalhos/jogocarrinho.vue"),
      },
      {
        path: "skills",
        component: () => import("pages/SkillsPage.vue"),
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
