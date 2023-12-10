import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HousesView.vue'

import {capitalizeString} from '../functions/utils.js'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quotes",
    name: "all-quotes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/QuotesView.vue"),
  },
  {
    path: "/person",
    name: "all-persons",
    component: () => import("../views/PersonsView.vue"),
  },
  {
    path: "/:slug",
    name: "persons",
    component: () => import("../views/DynamicPersonsView.vue"),
    props: true,
  },
  {
    path: "/:persons/:slug",
    name: "person-quotes",
    component: () => import("../views/DynamicQuotesComponent.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${capitalizeString(to.name)} | House of Thrones`;

  next();
})

export default router;
