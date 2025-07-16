<template>
    <div class="get-start-view container">
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
        <CompGetStart class="mt-4" />
        <CompAlphabetJourney :lang="lang" :page="'get-start'" class="mt-4" />
    </div>
</template>

<script>
import CompGetStart from '@/components/alphabets/CompGetStart.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';
import displayLanguages from '@/services/display-languages';

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