<template>
    <div class="wordcraft-view container">
        <h2 class="d-none d-md-block mt-4">{{ langSet[lang || 'en'].wordCraft.title || '_TITLE_' }}</h2>
        <div class="mt-3"></div>
        <CompWordCraft :lang="lang" />
        <hr>
        <div class="accordion mb-4" id="accordionWordCraft">
            <div class="accordion-item shadow">
                <h2 class="accordion-header" :id="`accordionWordCraft`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseWordCraft`" aria-expanded="false"
                        aria-controls="collapseConsonantTable">
                        <h4 class="text-start">
                            <i class="bi bi-info-circle"></i>
                            <span class="ms-2">
                                {{ langSet[lang || 'en'].keyboard.howToUse }} (0)
                            </span>
                        </h4>
                    </button>
                </h2>
                <div :id="`collapseWordCraft`" class="accordion-collapse collapse"
                    aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionWordCraft`">
                    <div class="accordion-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompWordCraft from '@/components/based/mini-apps/CompWordCraft.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'WordCraftView',
    components: {
        CompWordCraft
    },
    setup() {
        // Grab query params
        const route = useRoute();
        const lang = route.query.lang || 'en';
        const langSEO = seoLanguages.langSEO[lang.toString()];
        useHead({
            htmlAttrs: { lang: langSEO["lang"] || 'en-US' },
            meta: langSEO["meta"]["default"],
            link: langSEO["link"]["default"]
        });
        useSeoMeta({
            ...langSEO["seoMeta"]["default"]
        });
    },
    data: () => {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet,
        }
    },
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