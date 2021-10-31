import { createRouter, createWebHistory, useRoute } from "vue-router";
import Planet from "../views/Planet.vue";
import data from "../../data.json";

const routes = [
  {
    path: "/",
    redirect: (to) => {
      return { path: "/planet/1" };
    },
  },
  {
    path: "/planet/:id",
    name: "Planet",
    component: Planet,
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = data.planets.find(
        (planet) => planet.id === parseInt(to.params.id)
      );
      if (!exists)
        return (
          {
            name: "NotFound",
            // allows keeping the URL while rendering a different page
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          },
          {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("../views/NotFound.vue"),
          }
        );
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
