<template>
    <div id="pronoun-view" class="container">
        <CompGrammarJourney :lang="lang" :page="'pronoun'" class="mt-4" />
        <CompPronounTable :lang="lang" class="mt-4" />
        <CompGrammarJourney :lang="lang" :page="'pronoun'" class="mt-4" />
    </div>
</template>

<script>
import CompPronounTable from '@/components/grammars/pronoun/CompPronounTable.vue';
import CompGrammarJourney from '@/components/misc/CompGrammarJourney.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'PronounView',
    components: {
        CompPronounTable,
        CompGrammarJourney
    },
    data: () => ({
        lang: 'en',
        langSet: displayLanguages.langSet
    }),
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