import { createRouter, createWebHistory } from 'vue-router';
import RoutesBased from './routes-based';
import RoutesRenaissance from './routes-renaissance';

const routes = [
  ...RoutesBased,
  ...RoutesRenaissance
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
