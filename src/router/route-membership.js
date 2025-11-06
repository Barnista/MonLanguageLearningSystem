export default {
    routes: [
        {
            path: '/membership',
            name: 'membership',
            component: () => import('../views/misc/LoginView.vue')
        },
    ]
}