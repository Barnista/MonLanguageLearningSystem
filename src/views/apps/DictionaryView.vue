<template>
    <div class="dictionary-view container">
        <h2 class="mt-4 d-none d-md-block">{{ langSet[lang || 'en'].dictionary.title || '_DICT_' }} {{ langSet[lang ||
            'en'].dictionary.translateToMon || '_MON_' }} - {{ langSet[lang || 'en'].dictionary.translateToThai ||
                '_THAI_' }}</h2>
        <div class="mt-3"></div>
        <CompDictionarySearch ref="compDictionarySearch" :lang="lang" :translate-from="translateFrom" :translate-to="translateTo"
            :search-limit="searchLimit" />
    </div>
</template>

<script>
import CompDictionarySearch from '@/components/mini-apps/CompDictionarySearch.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';
import { LangCode } from '@/services/lang-code';

export default {
    name: 'DictionaryView',
    components: {
        CompDictionarySearch
    },
    data: () => {
        return {
            lang: 'en',
            searchText: 'က',
            translateFrom: 'mnw', // Default translation from Mon to Thai
            translateTo: 'eng',
            // This can be changed to 'thai' for Thai to Mon translation
            langSet: displayLanguages.langSet,
            searchLimit: 10,
            langCode: LangCode
        }
    },
    mounted() {
        logPageView(this.$options.name);
        this.lang = this.$route.query.lang || 'en';
        this.searchText = this.$route.query.q || 'က';
        this.translateFrom = this.$route.query.from || this.langCode.Mon; // Default translation direction
        this.translateTo = this.$route.query.to || this.langCode.English;
    },
    methods: {
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
        '$route.query.q'(newText) {
            this.searchText = newText || '';
            this.$refs.compDictionarySearch.searchFromText(newText, this.translateFrom, this.translateTo);
        },
        '$route.query.from'(newTranslateFrom) {
            this.translateFrom = newTranslateFrom || this.langCode.Mon;
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom, this.translateTo);
        },
        '$route.query.to'(newTranslateTo) {
            this.translateTo = newTranslateTo || this.langCode.English;
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom, this.translateTo);
        }
    },
}
</script>