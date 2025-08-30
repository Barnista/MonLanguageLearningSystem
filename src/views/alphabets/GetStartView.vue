<template>
    <div class="get-start-view container">
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
        <CompGetStart :lang="lang" class="mt-4" />
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="`/?lang=${lang}`" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].navbar.home || '_HOME_' }}
            </router-link>
            
            <router-link :to="`/alphabets/consonant?lang=${lang}#vowel-table`" class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.consonants || '_CONSONANTS_' }} (35)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
    </div>
</template>

<script>
import CompGetStart from '@/components/alphabets/CompGetStart.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'AlphabetGetStartView',
    components: {
        CompAlphabetJourney,
        CompGetStart
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