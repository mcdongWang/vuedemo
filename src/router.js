import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import(/* webpackChunkName: "hl.user" */ './views/User.vue'),
      children: [{
        path: 'post',
        name: 'userpost',
        component: () => import('./components/Post.vue'),
      }, {
        path: 'profile',
        name: 'userprofile',
        component: () => import('./components/Profile.vue'),
      }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "hl.about" */ './views/About.vue'),
    },
  ],
});
