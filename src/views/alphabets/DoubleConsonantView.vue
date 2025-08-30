<template>
    <div id="final-consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'double-consonant'" class="mt-4" />
        <CompDoubleConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="`/alphabets/final-consonant?lang=${lang}#final-consonant-table`"
                class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.finalConsonants || '_FINAL_CONSONANTS_' }} (10)
            </router-link>
            <router-link :to="`/?lang=${lang}`" class="btn btn-primary">
                {{ langSet[lang].navbar.home || '_HOME_' }}
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'double-consonant'" class="mt-4" />
    </div>
</template>

<script>

import CompDoubleConsonantTable from '@/components/alphabets/double/CompDoubleConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'DoubleConsonantView',
    components: {
        CompAlphabetJourney,
        CompDoubleConsonantTable
    },
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet
        }
    },
    mounted() {
        logPageView('DoubleConsonantView');
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
}

</script>