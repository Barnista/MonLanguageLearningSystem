import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routeAlphabets from './route-alphabets'
import routeApps from './route-apps'
import routeOthers from './route-others'
import routeMembership from './route-membership'
import routeLegal from './route-legal'
import routeGrammars from './route-grammars'

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
  ...routeApps.routes,
  ...routeAlphabets.routes,
  ...routeGrammars.routes,
  ...routeOthers.routes,
  ...routeMembership.routes,
  ...routeLegal.routes,
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
