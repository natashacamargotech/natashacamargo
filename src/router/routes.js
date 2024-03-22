const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "home", component: () => import("pages/Home.vue") },
      {
        path: "projetos",
        component: () => import("pages/ProjetosComponent.vue"),
      },
      {
        path: "jogopong",
        component: () => import("pages/trabalhos/jogopong.vue"),
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
