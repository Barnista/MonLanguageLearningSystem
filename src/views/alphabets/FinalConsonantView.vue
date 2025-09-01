<template>
    <div id="final-consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'final-consonant'" class="mt-4" />
        <CompFinalConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/alphabets/compound-consonant', query: { lang }, hash: '#compound-consonant-table' }"
                class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_' }} (11)
            </router-link>
            <router-link :to="{ path: '/alphabets/double-consonant', query: { lang }, hash: '#double-consonant-table' }"
                class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.doubleConsonants || '_DOUBLE_CONSONANTS_' }} (2)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'final-consonant'" class="mt-4" />
    </div>
</template>

<script>

import CompFinalConsonantTable from '@/components/alphabets/final/CompFinalConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'FinalConsonantView',
    components: {
        CompFinalConsonantTable,
        CompAlphabetJourney
    },
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet
        }
    },
    mounted() {
        logPageView('FinalConsonantView');
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },

}

</script>