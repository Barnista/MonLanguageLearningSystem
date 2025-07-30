<template>
    <div class="dictionary-view container">
        <CompDictionarySearch ref="compDictionarySearch" :lang="lang" :translate-from="translateFrom" :search-letter="searchLetter" :search-text="searchText" class="mt-5" />
    </div>
</template>

<script>
import CompDictionarySearch from '@/components/mini-apps/CompDictionarySearch.vue';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'DictionaryView',
    components: {
        CompDictionarySearch
    },
    data: () => {
        return {
            lang: 'en',
            searchText: '',
            searchLetter: 'အ',
            translateFrom: 'mon', // Default translation from Mon to Thai
            // This can be changed to 'thai' for Thai to Mon translation
            langSet: displayLanguages.langSet,
        }
    },
    mounted() {
        this.lang = this.$route.query.lang || 'en';
        this.searchText = this.$route.query.q || '';
        this.searchLetter = this.$route.query.letter || 'အ';
        this.translateFrom = this.$route.query.from || 'mon'; // Default translation direction
        this.$refs.compDictionarySearch.selectedLang(this.translateFrom);
        this.$refs.compDictionarySearch.searchFromText(this.searchText);
        this.$refs.compDictionarySearch.searchFromLetter(this.searchLetter);
    },
    methods: {
        switchTranslate() {
            if (this.translateFrom === 'mon') {
                //switch to thai
                this.translateFrom = 'thai';
            } else {
                //switch to mon
                this.translateFrom = 'mon';
            }
            this.selectedLang(this.translateFrom);
        },
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
        '$route.query.q'(newText) {
            this.searchText = newText || '';
            if(this.searchText.length>1)this.$refs.compDictionarySearch.searchFromText(this.searchText);
        },
        '$route.query.letter'(newLetter) {
            this.searchLetter = newLetter || '';
            if(this.searchText.length==1)this.$refs.compDictionarySearch.searchFromLetter(this.searchLetter);
        },
        '$route.query.from'(newTranslateFrom) {
            this.translateFrom = newTranslateFrom || 'mon';
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom);
        }
    },
}
</script>