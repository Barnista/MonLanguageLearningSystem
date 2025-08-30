<template>
    <div class="community-view container">
        <CompCommunity :lang="lang" class="mt-5"></CompCommunity>
    </div>
</template>

<script>

import CompCommunity from '@/components/others/communities/CompCommunity.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'CommunityView',
    components: {
        CompCommunity
    },
    data() {
        return {
            // Data properties can be added here if needed
            langSet: displayLanguages.langSet,
            lang: this.$route.query.lang || 'en'
        };
    },
    mounted() {
        logPageView('CommunityView');
        // Any initialization logic can be added here
        this.lang = this.$route.query.lang || 'en';
    },
    methods: {
        // Methods for handling report issues can be added here
    },
    watch: {
        '$route.query.lang': function (newLang) {
            this.lang = newLang || 'en';
        }
    },
}
</script>