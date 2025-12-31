<template>
    <div class="bg-light px-3 pt-3 pb-2">
        <nav class="nav flex-column">
            <div class="mb-3">
                <h6 class="text-uppercase fw-bold text-muted small">Shops</h6>
                <router-link :to="{ path: '/dashboard/banners', query: { lang } }" class="nav-link text-secondary"
                    :class="[{ active: $route.path === '/dashboard/banners' }]">
                    <i class="bi bi-gem me-2"></i>Banners
                    <span class="badge rounded-pill bg-success text-light">{{ shopBannerCount }}</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/items', query: { lang } }" class="nav-link text-secondary"
                    :class="[{ active: $route.path === '/dashboard/items' }]">
                    <i class="bi bi-coin me-2"></i>Items
                </router-link>
            </div>
            <div class="mb-3">
                <h6 class="text-uppercase fw-bold text-muted small">Mon Renaissance</h6>
                <router-link :to="{ path: '/dashboard/leaderboard', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/leaderboard' }]">
                    <i class="bi bi-trophy me-2"></i>Leaderboard
                </router-link>
                <router-link :to="{ path: '/dashboard/events', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/events' }]">
                    <i class="bi bi-dice-5 me-2"></i>Events
                    <span v-if="eventCount > 0" class="badge rounded-pill bg-danger text-light">{{ eventCount }}</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/quests', query: { lang } }" class="nav-link text-success"
                    :class="[{ active: $route.path === '/dashboard/quests' }]">
                    <i class="bi bi-calendar-check me-2"></i>Quests
                    <span class="badge rounded-pill bg-secondary text-light">{{ questCompletedCount + '/' + questCount
                    }}</span>
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
                    <span v-if="mailboxCount > 0" class="badge rounded-pill bg-danger text-light">{{ mailboxCount > 99 ?
                        '+99' : mailboxCount }}</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/achievements', query: { lang } }"
                    :class="[{ active: $route.path === '/dashboard/achievements' }]" class="nav-link">
                    <i class="bi bi-award me-2"></i>Achievements
                    <span v-if="achievementUnclaimedCount > 0" class="badge rounded-pill bg-danger text-light">{{ achievementUnclaimedCount }}</span>
                </router-link>
                <router-link :to="{ path: '/dashboard/profile', query: { lang } }"
                    :class="[{ active: $route.path === '/dashboard/profile' }]" class="nav-link">
                    <i class="bi bi-feather me-2"></i>My Profile
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
import { firebaseApp } from '@/services/firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseUser from '@/services/firebase/user';

export default {
    name: 'CompNavPanel',
    props: {
        lang: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            currentUser: null,
            mailboxCount: 0,
            questCount: 4,
            questCompletedCount: 0,
            eventCount: 0,
            shopItemCount: 0,
            shopBannerCount: 2,
            achievementUnclaimedCount: 0
        }
    },
    mounted() {
        const auth = getAuth(firebaseApp);
        this.currentUser = auth.currentUser;

        firebaseUser.getMailboxCount(this.currentUser.uid).then(val => {
            this.mailboxCount = val;
        });

        firebaseUser.getQuestCompletedCount(this.currentUser.uid).then(val => {
            this.questCompletedCount = val;
        });

        firebaseUser.getQuestCount(this.currentUser.uid).then(val => {
            this.questCount = val;
        });

        firebaseUser.getAchievementUnclaimedCount(this.currentUser.uid).then(val => {
            this.achievementUnclaimedCount = val;
        });
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