<template>
    <div class="dashboard-view b-5" :style="{ backgroundColor: getAvatarById(currentUser?.photoURL).backgroundColor }">
        <div class="mt-3 mt-md-4 container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 col-xl-3">
                    <CompNavPanel :lang="lang" class="rounded border shadow mb-3 mb-md-4" />
                </div>
                <div class="col-12 col-md-8 col-lg-9 col-xl-9">
                    <CompUserPanel :lang="lang" class="rounded border shadow mb-3 mb-md-4" />
                    <CompDashboard class="rounded border shadow mt-3 mt-md-4" :lang="lang" />
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import CompDashboard from '@/components/renaissance/dashboard/CompDashboard.vue';
import CompUserPanel from '@/components/renaissance/dashboard/CompUserPanel.vue';
import CompNavPanel from '@/components/renaissance/dashboard/CompNavPanel.vue';
import { getAvatarById } from '@/data/avatars/avatars';
import { firebaseApp, logPageView } from '@/services/firebase/app';
import { getAuth } from 'firebase/auth';
export default {
    name: 'DashboardView',
    components: {
        CompDashboard,
        CompUserPanel,
        CompNavPanel
    },
    data() {
        return {
            lang: 'en',
            currentUser: null,
            getAvatarById: getAvatarById
        };
    },
    created() {
        const auth = getAuth(firebaseApp);
        this.currentUser = auth.currentUser;
    },
    mounted() {
        logPageView(this.$options.name);
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
    }
};
</script>

<style scoped>
.dashboard-view {
    min-height: 100vh;
}
</style>