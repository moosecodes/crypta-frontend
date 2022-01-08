import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/encryption',
    name: 'Encryption',
    // route level code-splitting
    // this generates a separate chunk (encryption.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "encryption" */ '../views/Encryption.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
