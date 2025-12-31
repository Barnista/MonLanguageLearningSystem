export default [
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
    },
    {
        path: '/dashboard/profile',
        name: 'dashboard-profile',
        component: () => import('../views/renaissance/dashboard/ProfileView.vue')
    },
    {
        path: '/dashboard/mailbox',
        name: 'dashboard-mailbox',
        component: () => import('../views/renaissance/dashboard/MailboxView.vue')
    },
    {
        path: '/dashboard/achievements',
        name: 'dashboard-achievements',
        component: () => import('../views/renaissance/dashboard/AchievementsView.vue')
    },
    {
        path: '/dashboard/leaderboard',
        name: 'dashboard-leaderboard',
        component: () => import('../views/renaissance/dashboard/LeaderboardView.vue')
    },
    {
        path: '/dashboard/events',
        name: 'dashboard-events',
        component: () => import('../views/renaissance/dashboard/EventsView.vue')
    },
    {
        path: '/dashboard/quests',
        name: 'dashboard-quests',
        component: () => import('../views/renaissance/dashboard/QuestsView.vue')
    },
    {
        path: '/dashboard/banners',
        name: 'dashboard-banners',
        component: () => import('../views/renaissance/dashboard/shops/BannersView.vue')
    },
    {
        path: '/dashboard/items',
        name: 'dashboard-items',
        component: () => import('../views/renaissance/dashboard/shops/ItemsView.vue')
    },
    {
        path: '/dashboard/tutorials',
        name: 'dashboard-tutorials',
        component: () => import('../views/renaissance/dashboard/helps/TutorialsView.vue')
    },
];