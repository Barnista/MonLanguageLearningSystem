<template>
    <div class="compound-consonant-view container">
        <CompCompoundConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4 mb-5">
            <router-link :to="`/alphabets/vowel?lang=${lang}#vowel-table`" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)
            </router-link>
            <router-link :to="`/?lang=${lang}`" class="btn btn-primary">
                {{ langSet[lang].navbar.home || '_HOME_' }}
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>

<script>

import CompCompoundConsonantTable from '@/components/alphabets/CompCompoundConsonantTable.vue';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompoundConsonantView',
    components: {
        CompCompoundConsonantTable
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