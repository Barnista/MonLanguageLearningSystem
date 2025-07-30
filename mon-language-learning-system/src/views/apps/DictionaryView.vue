<template>
    <div class="dictionary-view container">
        <CompDictionarySearch ref="compDictionarySearch" :lang="lang" :translate-from="translateFrom" class="mt-5" />
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
            searchText: 'အ',
            translateFrom: 'mon', // Default translation from Mon to Thai
            // This can be changed to 'thai' for Thai to Mon translation
            langSet: displayLanguages.langSet,
        }
    },
    mounted() {
        this.lang = this.$route.query.lang || 'en';
        this.searchText = this.$route.query.q || 'အ';
        this.translateFrom = this.$route.query.from || 'mon'; // Default translation direction
        this.$refs.compDictionarySearch.selectedLang(this.translateFrom);
        if (this.searchText.length > 1) {
            this.$refs.compDictionarySearch.searchFromText(this.searchText);
        } else {
            this.$refs.compDictionarySearch.searchFromLetter(this.searchText[0]);
        }
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
            if (this.searchText.length > 1) {
                this.$refs.compDictionarySearch.searchFromText(this.searchText);
            } else {
                this.$refs.compDictionarySearch.searchFromLetter(this.searchText[0]);
            }
        },
        '$route.query.from'(newTranslateFrom) {
            this.translateFrom = newTranslateFrom || 'mon';
            this.$refs.compDictionarySearch.selectedLang(this.translateFrom);
        }
    },
}
</script>