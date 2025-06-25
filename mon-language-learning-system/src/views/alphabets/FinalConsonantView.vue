<template>
    <div id="final-consonant-view" class="container">
        <CompFinalConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4 mb-5">
            <router-link :to="`/alphabets/compound-consonant?lang=${lang}#compound-consonant-table`"
                class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_' }} (11)
            </router-link>
            <router-link :to="`/?lang=${lang}`" class="btn btn-primary">
                {{ langSet[lang].navbar.home || '_HOME_' }}
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>

<script>

import CompFinalConsonantTable from '@/components/alphabets/CompFinalConsonantTable.vue';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'FinalConsonantView',
    components: {
        CompFinalConsonantTable
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