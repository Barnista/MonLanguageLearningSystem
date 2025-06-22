<template>
    <div class="vowel-view container">
        <CompVowelTable :lang="lang" class="mt-4"/>
        <div class="d-flex justify-content-between mt-4 mb-5">
            <router-link :to="`/alphabets/consonant?lang=${lang}#consonant-table`" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.consonants || '_CONSONANTS_' }} (35)
            </router-link>
            <router-link :to="`/alphabets/compound-consonant?lang=${lang}#compound-consonant-table`" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_' }} (11)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>

<script>

import CompVowelTable from '@/components/alphabets/CompVowelTable.vue';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'VowelView',
    components: {
        CompVowelTable
    },
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet
        }
    },
    mounted(){
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
}
</script>