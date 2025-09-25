<template>
    <div id="consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'consonant'" class="mt-4" />
        <CompConsonantTable :lang="lang" class="mt-4" />
        <hr>
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/alphabets', query: { lang } }" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.getStart || '_GET_START_' }}
            </router-link>
            
            <router-link :to="{ path: '/alphabets/vowel', query: { lang }, hash: '#vowel-table' }" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'consonant'" class="mt-4" />
    </div>
</template>

<script>

import CompConsonantTable from '@/components/alphabets/consonant/CompConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'ConsonantView',
    components: {
        CompConsonantTable,
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