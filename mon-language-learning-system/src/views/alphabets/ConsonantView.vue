<template>
    <div class="consonant-view container">
        <CompConsonantTable :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4 mb-5">
            <button @click="$router.push('/previous-content')" class="btn btn-secondary" disabled>
                <i class="bi bi-arrow-left"></i>
                Previous
            </button>
            <button @click="$router.push('/alphabets/vowel#vowel-table')" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.vowels }}
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>

import CompConsonantTable from '@/components/alphabets/CompConsonantTable.vue';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'ConsonantView',
    components: {
        CompConsonantTable
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