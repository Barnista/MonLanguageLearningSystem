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
    path: '/membership',
    name: 'membership',
    component: () => import('../views/misc/LoginView.vue')
  },
  {
    path: '/abouts',
    name: 'abouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/others/AboutView.vue')
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
  },
  {
    path: '/alphabets/numerals',
    name: 'alphabets-numerals',
    component: () => import('../views/alphabets/NumeralsView.vue')
  },
  {
    path: '/apps/text-analyser',
    name: 'apps-text-analyser',
    component: () => import('../views/apps/TextAnalyserView.vue')
  },
  {
    path: '/apps/word-craft',
    name: 'apps-word-craft',
    component: () => import('../views/apps/WordCraftView.vue')
  },
  {
    path: '/apps/dictionary',
    name: 'apps-dictionary',
    component: () => import('../views/apps/DictionaryView.vue')
  },
  {
    path: '/apps/num-converter',
    name: 'apps-num-converter',
    component: () => import('../views/apps/NumConverterView.vue')
  },
  {
    path: '/report-issues',
    name: 'report-issues',
    component: () => import('../views/others/ReportIssuesView.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/others/CommunityView.vue')
  },
  {
    path: '/about-dev',
    name: 'about-dev',
    component: () => import('../views/others/AboutDevView.vue')
  },
  {
    path: '/apply-new-word',
    name: 'apply-new-word',
    component: () => import('../views/others/ApplyNewWordView.vue')
  },
  {
    path: '/change-logs',
    name: 'change-logs',
    component: () => import('../views/others/ChangeLogsView.vue')
  },
  {
    path: '/monland',
    name: 'monland',
    component: () => import('../views/others/MonlandView.vue')
  },
  {
    path: '/grammars/pronoun',
    name: 'grammars-pronoun',
    component: () => import('../views/grammars/PronounView.vue')
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
