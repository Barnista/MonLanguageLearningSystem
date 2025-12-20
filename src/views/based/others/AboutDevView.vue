<template>
    <div class="about-dev-view container">
        <CompDevs :lang="lang" class="mt-5"></CompDevs>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompDevs from '@/components/based/others/CompDevs.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'AboutDevView',
    components: {
        CompDevs
    },
    setup() {
        // Grab query params
        const route = useRoute();
        const lang = route.query.lang || 'en';
        const langSEO = seoLanguages.langSEO[lang.toString()];
        useHead({
            htmlAttrs: { lang: langSEO["lang"] || 'en-US' },
            meta: langSEO["meta"]["default"],
            link: langSEO["link"]["default"]
        });
        useSeoMeta({
            ...langSEO["seoMeta"]["default"]
        });
    },
    data() {
        return {
            // Data properties can be added here if needed
            langSet: displayLanguages.langSet,
            lang: this.$route.query.lang || 'en'
        };
    },
    mounted() {
        logPageView(this.$options.name);
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