export default {
    routes: [
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
            path: '/keyboard',
            name: 'keyboard',
            component: () => import(/* webpackChunkName: "keyboard" */ '../views/KeyboardView.vue')
        },
    ]
}