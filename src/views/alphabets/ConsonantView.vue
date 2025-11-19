<template>
    <div id="consonant-view" class="container">
        <CompAlphabetJourney :lang="lang" :page="'consonant'" class="mt-4" />
        <CompConsonantTable :lang="lang" class="mt-4" />
        <hr>
        <div class="mt-4">
            <h4>{{ langSet[lang || 'en'].aboutDevView.references || '_REFERENCES_' }}</h4>
            <ul>
                <li>
                    <span class="fw-bold text-success">
                        Sunthorn Sripanngern. (n.d.). Facebook post regarding Mon consonants [Facebook post].
                    </span>
                    Retrieved 18 November 2025, from
                    <a href="https://www.facebook.com/jakkasiha.sripanngern/posts/pfbid0mxjNwnzaVyCuNeXN7r2wxyoetqWi6iknaamf97NMABBxos7fhP3CmvsbPmPrEdtXl"
                        target="_blank" rel="noopener noreferrer">
                        https://www.facebook.com/jakkasiha.sripanngern/posts/pfbid0mxjNwnzaVyCuNeXN7r2wxyoetqWi6iknaamf97NMABBxos7fhP3CmvsbPmPrEdtXl
                    </a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        Phra Mahajaroon.
                    </span>
                    (1997). แบบเรียนภาษามอญ (ဗီုကတ်ဘာသာမန်).
                    <a href="https://drive.google.com/file/d/15s9o47OgTZh-VaMuVCD1k9VKfZIbMaWp/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        https://drive.google.com/file/d/15s9o47OgTZh-VaMuVCD1k9VKfZIbMaWp/view?usp=sharing
                    </a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        Mon language.
                    </span>
                    (2025, June 9). In Wikipedia.
                    <a href="https://en.wikipedia.org/wiki/Mon_language"
                        target="_blank">https://en.wikipedia.org/wiki/Mon_language</a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        Mon alphabet.
                    </span>
                    (2025, June 9). In Wikipedia.
                    <a href="https://en.wikipedia.org/wiki/Mon_alphabet"
                        target="_blank">https://en.wikipedia.org/wiki/Mon_alphabet</a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        ภาษามอญ.
                    </span>
                    (2025, June 9). In Wikipedia.
                    <a href="https://th.wikipedia.org/wiki/ภาษามอญ"
                        target="_blank">https://th.wikipedia.org/wiki/ภาษามอญ</a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        อักษรมอญ.
                    </span>
                    (2025, June 9). In Wikipedia.
                    <a href="https://th.wikipedia.org/wiki/อักษรมอญ"
                        target="_blank">https://th.wikipedia.org/wiki/อักษรมอญ</a>
                </li>
                <li>
                    <span class="fw-bold text-success">
                        คู่มือการเรียนรู้ภาษามอญ (ပြကိုဟ် ပရေင်ကတ်လ္ၚတ်လိက်မန်).
                    </span>
                    (2025, June 9). In FlipHTML5.
                    <a href="https://online.fliphtml5.com/yjjtg/ejio"
                        target="_blank">https://online.fliphtml5.com/yjjtg/ejio</a>
                </li>
            </ul>
        </div>
        <hr>
        <div class="d-flex justify-content-between mt-4">
            <router-link :to="{ path: '/alphabets', query: { lang } }" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                {{ langSet[lang].learnAlphabets.getStart || '_GET_START_' }}
            </router-link>

            <router-link :to="{ path: '/alphabets/vowel', query: { lang }, hash: '#vowel-table' }"
                class="btn btn-primary">
                {{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <CompAlphabetJourney :lang="lang" :page="'consonant'" class="mt-4" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompConsonantTable from '@/components/alphabets/consonant/CompConsonantTable.vue';
import CompAlphabetJourney from '@/components/misc/CompAlphabetJourney.vue';

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'ConsonantView',
    components: {
        CompConsonantTable,
        CompAlphabetJourney
    },
    setup() {
        // Grab query params
        const route = useRoute();
        const lang = route.query.lang || 'eng';
        const langSEO = seoLanguages.langSEO[lang];
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
}
</script>