<template>
    <div class="bg-light px-3 pt-3 pb-2">
        <div class="d-flex align-items-center justify-content-between">
            <img v-if="currentUser?.photoURL" :src="getAvatarById(currentUser.photoURL).src" alt="User Avatar"
                width="72" height="72" class="rounded-circle me-2">
            <div class="flex-fill">
                <h3>{{ currentUser?.displayName || 'User' }}</h3>
                <small class="d-block text-muted">Username: @{{ userData?.username }}</small>
                <small class="text-muted">Joined since: {{ joinedSince }}</small>
            </div>
            <div class="ps-3">
                <router-link :to="{ path: '/dashboard/profile', query: { lang } }" class="btn btn-primary shadow-sm">
                    <i class="bi bi-feather"></i>
                    <span class="d-none d-lg-inline ms-1">My Profile</span>
                </router-link>
                <router-link :to="{ path: '/logout', query: { lang } }" class="btn btn-secondary shadow-sm ms-2">
                    <i class="bi bi-box-arrow-right"></i>
                    <span class="d-none d-lg-inline ms-1">Logout</span>
                </router-link>
            </div>
        </div>
        <div class="stats">
            <div class="d-flex justify-content-around text-center">
                <div class="flex-fill pt-2 currency">
                    <h5 class="mb-0">Score</h5>
                    <p class="fs-5 fw-bold text-success mb-0"><i class="bi bi-trophy"></i> {{ (userData?.score
                        || 0) }}</p>
                </div>
                <div class="flex-fill pt-2 currency">
                    <h5 class="mb-0">Level</h5>
                    <p class="fs-5 fw-bold text-success mb-0"><i class="bi bi-chevron-double-up"></i> {{
                        calLevelFromEXP(userData?.exp || 0).lvl }}</p>
                </div>
                <div class="flex-fill pt-2 currency">
                    <h5 class="mb-0">Coins</h5>
                    <p class="fs-5 fw-bold text-primary mb-0"><i class="bi bi-coin"></i> {{ (userData?.coin
                        || 0).toLocaleString() }}</p>
                </div>
                <div class="flex-fill pt-2">
                    <h5 class="mb-0">Gems</h5>
                    <p class="fs-5 fw-bold text-primary mb-0"><i class="bi bi-gem"></i> {{ (userData?.gem || 0).toLocaleString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import FirebaseUser from '@/services/firebase/user';
import { firebaseApp } from '@/services/firebase/app';
import { getAvatarById } from '@/assets/data/avatars/avatars.js';
import progression from '@/assets/data/progression/progression';

export default {
    name: 'CompUserPanel',
    props: {
        lang: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            currentUser: null,
            userData: null,
            getAvatarById: getAvatarById,
            joinedSince: new Date().toLocaleDateString(),
            calLevelFromEXP: progression.calLevelFromEXP
        }
    },
    created() {
        // You can add any initialization logic here if needed
        const auth = getAuth(firebaseApp);
        if (!auth.currentUser) {
            this.$router.push({ name: 'login', query: { lang: this.lang } });
        } else {
            this.currentUser = auth.currentUser;
            FirebaseUser.loadUserData(auth.currentUser.uid).then((userData) => {
                // User data loaded
                this.userData = userData;
                this.joinedSince = userData?.createdAt ? new Date(userData.createdAt.toDate()).toLocaleDateString() : new Date().toLocaleDateString();
                console.log('User data loaded:', this.userData);
            }).catch((error) => {
                console.error('Error loading user data:', error);
            });
            console.log('User is authenticated:', auth.currentUser);
        }
    }
};
</script>

<style scoped>
.stats {
    border-top: 1px solid #dee2e6;
    margin-top: 8px;
}

.currency {
    border-right: 1px solid #dee2e6;
}
</style>