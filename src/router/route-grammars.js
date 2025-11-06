export default {
    routes: [
        {
            path: '/grammars/pronoun',
            name: 'grammars-pronoun',
            component: () => import('../views/grammars/PronounView.vue')
        }
    ]
}