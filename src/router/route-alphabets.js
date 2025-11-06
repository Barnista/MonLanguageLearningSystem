export default {
    routes: [
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
    ]
}