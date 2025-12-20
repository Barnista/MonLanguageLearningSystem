import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/based/HomeView.vue')
    //meta: {
    //  title: "",
    //  description: ""
    //}
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/based/misc/NotFoundView.vue')
  },
  {
    path: '/abouts',
    name: 'abouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/based/others/AboutView.vue')
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: () => import(/* webpackChunkName: "keyboard" */ '../views/based/apps/KeyboardView.vue')
  },
  {
    path: '/alphabets',
    name: 'alphabets-get-start',
    component: () => import('../views/based/alphabets/GetStartView.vue')
  },
  {
    path: '/alphabets/consonant',
    name: 'alphabets-consonant',
    component: () => import('../views/based/alphabets/ConsonantView.vue')
  },
  {
    path: '/alphabets/vowel',
    name: 'alphabets-vowel',
    component: () => import('../views/based/alphabets/VowelView.vue')
  },
  {
    path: '/alphabets/compound-consonant',
    name: 'alphabets-compound-consonant',
    component: () => import('../views/based/alphabets/CompoundConsonantView.vue')
  },
  {
    path: '/alphabets/final-consonant',
    name: 'alphabets-final-consonant',
    component: () => import('../views/based/alphabets/FinalConsonantView.vue')
  },
  {
    path: '/alphabets/double-consonant',
    name: 'alphabets-double-consonant',
    component: () => import('../views/based/alphabets/DoubleConsonantView.vue')
  },
  {
    path: '/alphabets/numerals',
    name: 'alphabets-numerals',
    component: () => import('../views/based/alphabets/NumeralsView.vue')
  },
  {
    path: '/apps/text-analyser',
    name: 'apps-text-analyser',
    component: () => import('../views/based/apps/TextAnalyserView.vue')
  },
  {
    path: '/apps/word-craft',
    name: 'apps-word-craft',
    component: () => import('../views/based/apps/WordCraftView.vue')
  },
  {
    path: '/apps/dictionary',
    name: 'apps-dictionary',
    component: () => import('../views/based/apps/DictionaryView.vue')
  },
  {
    path: '/apps/num-converter',
    name: 'apps-num-converter',
    component: () => import('../views/based/apps/NumConverterView.vue')
  },
  {
    path: '/report-issues',
    name: 'report-issues',
    component: () => import('../views/based/others/ReportIssuesView.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/based/others/CommunityView.vue')
  },
  {
    path: '/about-dev',
    name: 'about-dev',
    component: () => import('../views/based/others/AboutDevView.vue')
  },
  {
    path: '/apply-new-word',
    name: 'apply-new-word',
    component: () => import('../views/based/others/ApplyNewWordView.vue')
  },
  {
    path: '/change-logs',
    name: 'change-logs',
    component: () => import('../views/based/others/ChangeLogsView.vue')
  },
  {
    path: '/for-developers',
    name: 'for-developers',
    component: () => import('../views/based/others/ForDevelopersView.vue')
  },
  {
    path: '/monland',
    name: 'monland',
    component: () => import('../views/based/others/MonlandView.vue')
  },
  {
    path: '/grammars/pronoun',
    name: 'grammars-pronoun',
    component: () => import('../views/based/grammars/PronounView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/renaissance/authentication/LoginView.vue')
  },
    {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/renaissance/authentication/LogoutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/renaissance/authentication/RegisterView.vue')
  },
    {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/renaissance/authentication/ForgotPasswordView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/renaissance/dashboard/DashboardView.vue')
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
