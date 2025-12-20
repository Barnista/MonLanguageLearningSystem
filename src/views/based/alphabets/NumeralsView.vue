<template>
    <div id="numerals-view" class="numerals-view container">
        <CompAlphabetJourney :lang="lang" :page="'numerals'" class="mt-4" />
        <CompNumeralTable :lang="lang" class="mt-4" />
        <hr>
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/alphabets/consonant', query: { lang }, hash: '#double-consonant-table' }"
                class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.doubleConsonants || '_DOUBLE_CONSONANTS_' }} (35)
            </router-link>
            <router-link :to="{ path: '/', query: { lang } }" class="btn btn-primary">
                {{ langSet[lang].navbar.home || '_HOME_' }}
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'numerals'" class="mt-4" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompNumeralTable from '@/components/based/alphabets/numerals/CompNumeralTable.vue';
import CompAlphabetJourney from '@/components/based/misc/CompAlphabetJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'NumeralsView',
    components: {
        CompAlphabetJourney,
        CompNumeralTable
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