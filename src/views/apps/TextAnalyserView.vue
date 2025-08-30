<template>
    <div class="text-analyser-view container">
        <h2 class="d-none d-md-block mt-4">{{ langSet[lang || 'en'].textAnalyser.title || '_TITLE_' }}</h2>
        <div class="mt-3"></div>
        <CompTextAnalyser ref="compTextAnalyser" :lang="lang" :search-limit="searchLimit" />
        <hr>
        <div class="accordion mb-4" :id="`accordionTextAnalyser`">
            <div class="accordion-item shadow">
                <h2 class="accordion-header" :id="`accordionTextAnalyser`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseTextAnalyser`" aria-expanded="false"
                        aria-controls="collapseConsonantTable">
                        <h4 class="text-start">
                            <i class="bi bi-info-circle"></i>
                            <span class="ms-2">
                                {{ langSet[lang ? lang : 'en'].keyboard.howToUse }} (0)
                            </span>
                        </h4>
                    </button>
                </h2>
                <div :id="`collapseTextAnalyser`" class="accordion-collapse collapse"
                    aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionTextAnalyser`">
                    <div class="accordion-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompTextAnalyser from '@/components/mini-apps/CompTextAnalyser.vue';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'TextAnalyserView',
    components: {
        CompTextAnalyser
    },
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet,
            searchLimit: 10
        }
    },
    mounted() {
        this.lang = this.$route.query.lang || 'en';
        this.$refs.compTextAnalyser.setText('မ္ၚဵုရအဴ');
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
        '$route.query.q'(newText) {
            this.$refs.compTextAnalyser.setText(newText || 'အရံင်');
        }
    },
}
</script>