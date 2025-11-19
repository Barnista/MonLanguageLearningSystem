<template>
    <div class="get-start-view container">
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
        <CompGetStart :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/', query: { lang } }" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].navbar.home || '_HOME_' }}
            </router-link>

            <router-link :to="{ path: '/alphabets/consonant', query: { lang }, hash: '#vowel-table' }"
                class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.consonants || '_CONSONANTS_' }} (35)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompGetStart from '@/components/alphabets/CompGetStart.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'AlphabetGetStartView',
    components: {
        CompAlphabetJourney,
        CompGetStart
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
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet
        }
    },
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