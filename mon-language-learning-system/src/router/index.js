import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/misc/NotFoundView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: () => import(/* webpackChunkName: "keyboard" */ '../views/KeyboardView.vue')
  },
  {
    path: '/alphabets',
    name: 'alphabets-get-start',
    component: () => import('../views/alphabets/GetStartView.vue')
  },
  {
    path: '/alphabets/consonant',
    name: 'alphabets-consonant',
    component: () => import('../views/alphabets/ConsonantView.vue')
  },
  {
    path: '/alphabets/vowel',
    name: 'alphabets-vowel',
    component: () => import('../views/alphabets/VowelView.vue')
  },
  {
    path: '/alphabets/compound-consonant',
    name: 'alphabets-compound-consonant',
    component: () => import('../views/alphabets/CompoundConsonantView.vue')
  },
  {
    path: '/alphabets/final-consonant',
    name: 'alphabets-final-consonant',
    component: () => import('../views/alphabets/FinalConsonantView.vue')
  },
  {
    path: '/alphabets/double-consonant',
    name: 'alphabets-double-consonant',
    component: () => import('../views/alphabets/DoubleConsonantView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return savedPosition;
    }
  }
})

export default router
