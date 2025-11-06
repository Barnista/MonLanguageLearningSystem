export default {
    routes: [
        {
            path: '/abouts',
            name: 'abouts',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/others/AboutView.vue')
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
    ]
}