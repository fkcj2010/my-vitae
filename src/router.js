import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('./pages/Life.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./pages/Movie.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('./pages/Food.vue')
    },
    {
      path: '/study',
      name: 'study',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/Study.vue')
    }
  ]
})
