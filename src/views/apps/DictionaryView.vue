<template>
    <div class="dictionary-view container">
        <h2 class="mt-4 d-none d-md-block">{{ langSet[lang || 'en'].dictionary.title || '_DICT_' }} {{ langSet[lang ||
            'en'].dictionary.translateToMon || '_MON_' }} — {{ langSet[lang || 'en'].dictionary.translateToEnglish ||
                '_ENG_' }}/{{ langSet[lang || 'en'].dictionary.translateToThai ||
                '_THA_' }}/{{ langSet[lang || 'en'].dictionary.translateToBurmese ||
                '_MYA_' }}</h2>
        <div class="mt-3"></div>
        <CompDictionarySearch ref="compDictionarySearch" :lang="lang" :translate-from="translateFrom" :translate-to="translateTo"
            :search-limit="searchLimit" :authorIncludes="authorIncludes" :orderBy="orderBy" />
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
            langCode: LangCode,
            authorIncludes: '3',
            orderBy: 'ASC',
        }
    },
    mounted() {
        logPageView(this.$options.name);
        this.lang = this.$route.query.lang || 'en';
        this.searchText = this.$route.query.q || 'က';
        this.translateFrom = this.$route.query.from || this.langCode.Mon; // Default translation direction
        this.translateTo = this.$route.query.to || this.langCode.English;
        this.authorIncludes = this.$route.query.author || '3';
        this.orderBy = this.$route.query.order || 'ASC';
    },
    methods: {
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
        '$route.query.q'(newText) {
            this.searchText = newText || '';
            this.$refs.compDictionarySearch.searchFromText(newText, this.translateFrom, this.translateTo, this.authorIncludes, this.orderBy);
        },
        '$route.query.from'(newTranslateFrom) {
            this.translateFrom = newTranslateFrom || this.langCode.Mon;
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom, this.translateTo);
        },
        '$route.query.to'(newTranslateTo) {
            this.translateTo = newTranslateTo || this.langCode.English;
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom, this.translateTo);
        },
        '$route.query.author'(newAuthor) {
            this.authorIncludes = newAuthor || '3';
            this.$refs.compDictionarySearch.searchFromText(this.searchText, this.translateFrom, this.translateTo, this.authorIncludes, this.orderBy);
        },
        '$route.query.order'(newOrder) {
            this.orderBy = newOrder || 'ASC';
            this.$refs.compDictionarySearch.searchFromText(this.searchText, this.translateFrom, this.translateTo, this.authorIncludes, this.orderBy);
        }
    },
}
</script>