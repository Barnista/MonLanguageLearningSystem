export default {
    routes: [
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: () => import('../views/misc/PrivacyPolicyView.vue')
        },
        {
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: () => import('../views/misc/TermsOfUseView.vue')
        }
    ]
}