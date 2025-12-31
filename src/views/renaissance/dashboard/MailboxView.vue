<template>
    <div class="mailbox-view pb-5 custom-h-100" :style="{ backgroundColor: getAvatarById(currentUser?.photoURL).backgroundColor }">
        <div class="mt-3 mt-md-4 container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 col-xl-3">
                    <CompNavPanel :lang="lang" class="rounded border shadow mb-3 mb-md-4" />
                </div>
                <div class="col-12 col-md-8 col-lg-9 col-xl-9">
                    <CompMailbox class="rounded border shadow" :lang="lang" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompNavPanel from '@/components/renaissance/dashboard/panels/CompNavPanel.vue';
import CompMailbox from '@/components/renaissance/dashboard/CompMailbox.vue';
import { getAvatarById } from '@/data/avatars/avatars';
import { firebaseApp, logPageView } from '@/services/firebase/app';
import { getAuth } from 'firebase/auth';

export default {
    name: 'MailboxView',
    components: {
        CompNavPanel,
        CompMailbox
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