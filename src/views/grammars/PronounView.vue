<template>
    <div id="pronoun-view" class="container">
        <CompGrammarJourney :lang="lang" :page="'pronoun'" class="mt-4" />
        <CompPronounTable :lang="lang" class="mt-4" />
        <CompGrammarJourney :lang="lang" :page="'pronoun'" class="mt-4" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompPronounTable from '@/components/grammars/pronoun/CompPronounTable.vue';
import CompGrammarJourney from '@/components/misc/CompGrammarJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'PronounView',
    components: {
        CompPronounTable,
        CompGrammarJourney
    },
    setup() {
        // Grab query params
        const route = useRoute();
        const lang = route.query.lang || 'eng';
        const langSEO = seoLanguages.langSEO[lang];
        useHead({
            htmlAttrs: { lang: langSEO["lang"] || 'en-US' },
            meta: langSEO["meta"]["default"],
            link: langSEO["link"]["default"]
        });
        useSeoMeta({
            ...langSEO["seoMeta"]["default"]
        });
    },
    data: () => ({
        lang: 'en',
        langSet: displayLanguages.langSet
    }),
    mounted() {
        logPageView(this.$options.name);
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
}
</script>