<template>
    <div class="dashboard-container bg-light px-3 py-4" id="comp-dashboard">
        <div class="mb-3">
            <h1 class="text-center">Welcome {{ currentUser?.displayName || 'User' }}!</h1>
            <hr class="my-4">
            <p>Start learning and achieve your language goals today.</p>
        </div>
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Progress</h5>
                        <div class="progress" style="height: 25px;">
                            <div class="progress-bar bg-success" :style="{ width: (userData?.exp % 1000) / 10 + '%' }">
                            </div>
                        </div>
                        <small class="text-muted">{{ userData?.exp % 1000 }} / 1000 XP to next level</small>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Streaks</h5>
                        <p class="fs-5"><i class="bi bi-fire text-warning"></i> {{ userData?.streak || 0 }} day streak
                        </p>
                        <small class="text-muted">Keep it up!</small>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Recent Activity</h5>
                        <ul class="list-unstyled">
                            <li v-if="!userData?.recentActivity?.length" class="text-muted">No activity yet. Start a
                                lesson!</li>
                            <li v-for="(activity, index) in userData?.recentActivity?.slice(0, 5)" :key="index"
                                class="mb-2">
                                <small>{{ activity.title }} <span class="text-success">+{{ activity.xp }}
                                        XP</span></small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '@/services/firebase/app';

export default {
    name: 'CompDashboard',

    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data() {
        return {
            currentUser: null,
        }
    },
    created() {
        // You can add any initialization logic here if needed
        const auth = getAuth(firebaseApp);
        if (!auth.currentUser) {
            this.$router.push({ name: 'login', query: { lang: this.lang } });
        } else {
            this.currentUser = auth.currentUser;
            console.log('User is authenticated:', auth.currentUser);
        }
    }
}
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