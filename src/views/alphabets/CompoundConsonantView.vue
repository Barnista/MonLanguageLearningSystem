<template>
    <div id="compound-consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'compound-consonant'" class="mt-4" />
        <CompCompoundConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/alphabets/vowel', query: { lang }, hash: '#vowel-table' }" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)
            </router-link>
            <router-link :to="{ path: '/alphabets/final-consonant', query: { lang }, hash: '#final-consonant-table' }" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.finalConsonants || '_FINAL_CONSONANTS_' }} (10)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'compound-consonant'" class="mt-4" />
    </div>
</template>

<script>

import CompCompoundConsonantTable from '@/components/alphabets/compound/CompCompoundConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'CompoundConsonantView',
    components: {
        CompCompoundConsonantTable,
        CompAlphabetJourney
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