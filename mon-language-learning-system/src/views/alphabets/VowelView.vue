<template>
    <div id="vowel-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'vowel'" class="mt-4" />
        <CompVowelTable :lang="lang" class="mt-4" />
        <hr>
        <CompOtherVowelTable :lang="lang" class="mt-4" />
        <hr>
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="`/alphabets/consonant?lang=${lang}#consonant-table`" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.consonants || '_CONSONANTS_' }} (35)
            </router-link>
            <router-link :to="`/alphabets/compound-consonant?lang=${lang}#compound-consonant-table`"
                class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_' }} (11)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'vowel'" class="mt-4" />
    </div>
</template>

<script>

import CompVowelTable from '@/components/alphabets/vowel/CompVowelTable.vue';
import CompOtherVowelTable from '@/components/alphabets/vowel/CompOtherVowelTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'VowelView',
    components: {
        CompVowelTable,
        CompOtherVowelTable,
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