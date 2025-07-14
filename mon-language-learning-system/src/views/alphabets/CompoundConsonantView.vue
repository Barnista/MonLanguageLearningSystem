<template>
    <div id="compound-consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'compound-consonant'" class="mt-4" />
        <CompCompoundConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="`/alphabets/vowel?lang=${lang}#vowel-table`" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)
            </router-link>
            <router-link :to="`/alphabets/final-consonant?lang=${lang}#final-consonant-table`" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.finalConsonants || '_FINAL_CONSONANTS_' }} (10)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'compound-consonant'" class="mt-4" />
    </div>
</template>

<script>

import CompCompoundConsonantTable from '@/components/alphabets/CompCompoundConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages';

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
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
}
</script>