<template>
    <div class="keyboard-view">
        <div class="container my-5">
            <KeyboardSetComp :lang="lang" class="mb-4 p-3 border rounded shadow" />
            <hr>
            <div class="accordion mb-4" :id="`accordionKeyboard`">
                <div class="accordion-item shadow">
                    <h2 class="accordion-header" :id="`accordionKeyboard`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#collapseKeyboard`" aria-expanded="false"
                            aria-controls="collapseConsonantTable">
                            <h4 class="text-start">
                                <i class="bi bi-info-circle"></i>
                                <span class="ms-2">
                                    {{ langSet[lang || 'en'].keyboard.howToUse }} (4)
                                </span>
                            </h4>
                        </button>
                    </h2>
                    <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                        aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionKeyboard`">
                        <div class="accordion-body">
                            <CompKeyboardGuide id="guide" :lang="lang" class="mb-4" />
                        </div>
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

import CompKeyboardGuide from '@/components/based/keyboard/CompKeyboardGuide.vue';
import KeyboardSetComp from '@/components/based/keyboard/CompKeyboardSet.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'KeyboardView',
    components: {
        KeyboardSetComp,
        CompKeyboardGuide
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
            langSet: displayLanguages.langSet
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
};
</script>
