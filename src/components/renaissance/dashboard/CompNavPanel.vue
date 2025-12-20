<template>
    <div class="bg-light px-3 pt-3 pb-2">
        <nav class="nav flex-column">
            <div class="mb-3">
                <h6 class="text-uppercase fw-bold text-muted small">Shops</h6>
                <router-link :to="{ path: '/dashboard/shops', query: { lang } }" class="nav-link text-secondary"
                    :class="[{ active: $route.path === '/dashboard/shops' }]">
                    <i class="bi bi-gem me-2"></i>Banners
                    <span class="badge rounded-pill bg-success text-light">3</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/shops', query: { lang } }" class="nav-link text-secondary"
                    :class="[{ active: $route.path === '/dashboard/shops' }]">
                    <i class="bi bi-coin me-2"></i>Items
                    <span class="badge rounded-pill bg-success text-light">124</span>
                </router-link>
            </div>
            <div class="mb-3">
                <h6 class="text-uppercase fw-bold text-muted small">Mon Renaissance</h6>
                <router-link :to="{ path: '/leaderboard', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/leaderboard' }]">
                    <i class="bi bi-trophy me-2"></i>Leaderboard
                </router-link>
                <router-link :to="{ path: '/dashboard/events', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/events' }]">
                    <i class="bi bi-dice-5 me-2"></i>Events
                    <span class="badge rounded-pill bg-danger text-light">1</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/daily-quests', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/daily-quests' }]">
                    <i class="bi bi-calendar-check me-2"></i>Quests
                    <span class="badge rounded-pill bg-secondary text-light">3/4</span>
                </router-link>
                <!--<router-link :to="{ path: '/dashboard/e-library', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/e-library' }]">
                    <i class="bi bi-book me-2"></i>E-Library
                </router-link>-->
            </div>
            <div class="mb-3">
                <h6 class="text-uppercase fw-bold text-muted small">My Account</h6>
                <router-link :to="{ path: '/dashboard', query: { lang } }" class="nav-link"
                    :class="[{ active: $route.path === '/dashboard' }]">
                    <i class="bi bi-house me-2"></i>Dashboard
                </router-link>
                <router-link :to="{ path: '/dashboard/mailbox', query: { lang } }"
                    :class="[{ active: $route.path === '/dashboard/mailbox' }]" class="nav-link">
                    <i class="bi bi-envelope me-2"></i>Mailbox
                    <span class="badge rounded-pill bg-danger text-light">+99</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/achievements', query: { lang } }"
                    :class="[{ active: $route.path === '/dashboard/achievements' }]" class="nav-link">
                    <i class="bi bi-award me-2"></i>Achievements
                </router-link>
                <router-link :to="{ path: '/dashboard/profile', query: { lang } }"
                    :class="[{ active: $route.path === '/dashboard/profile' }]" class="nav-link">
                    <i class="bi bi-feather me-2"></i>Profile
                </router-link>
            </div>
            <div class="">
                <h6 class="text-uppercase fw-bold text-muted small">Helps</h6>
                <router-link :to="{ path: '/dashboard/tutorials', query: { lang } }" class="nav-link text-secondary"
                    :class="[{ active: $route.path === '/dashboard/tutorials' }]">
                    <i class="bi bi-info-circle me-2"></i>Tutorials
                </router-link>
                <hr>
                <router-link :to="{ path: '/logout', query: { lang } }" class="nav-link text-danger">
                    <i class="bi bi-box-arrow-right me-2"></i>Logout
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'CompNavPanel',
    props: {
        lang: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.active {
    font-weight: bold;
    background-color: #9cc7ff33;
    border-radius: 8px;
}
</style>