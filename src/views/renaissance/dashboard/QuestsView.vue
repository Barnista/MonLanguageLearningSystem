<template>
    <div class="quests-view pb-5 custom-h-100" :style="{ backgroundColor: getAvatarById(currentUser?.photoURL).backgroundColor }">
        <div class="mt-3 mt-md-4 container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 col-xl-3">
                    <CompNavPanel :lang="lang" class="rounded border shadow mb-3 mb-md-4" />
                </div>
                <div class="col-12 col-md-8 col-lg-9 col-xl-9">
                    <CompQuests class="rounded border shadow" :lang="lang" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompNavPanel from '@/components/renaissance/dashboard/panels/CompNavPanel.vue';
import CompQuests from '@/components/renaissance/dashboard/CompQuests.vue';
import { getAvatarById } from '@/data/avatars/avatars';
import { firebaseApp, logPageView } from '@/services/firebase/app';
import { getAuth } from 'firebase/auth';

export default {
    name: 'QuestsView',
    components: {
        CompNavPanel,
        CompQuests
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