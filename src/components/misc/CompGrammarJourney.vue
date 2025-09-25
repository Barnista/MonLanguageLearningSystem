<template>
    <div class="d-flex justify-content-center">
        <nav class="fs-6 fw-bold bg-white border rounded px-4 pt-2"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li v-if="page && page == 'pronoun'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.pronoun
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="{ path: '/grammars/pronoun', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.pronoun }}</router-link>
                </li>

                <li v-if="page && page == 'noun'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.noun
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/noun', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.noun }}</span>
                </li>

                <li v-if="page && page == 'verb'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.verb
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/verb', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.verb }}</span>
                </li>

                <li v-if="page && page == 'adverb'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.adverb
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/adverb', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.adverb }}</span>
                </li>

                <li v-if="page && page == 'adjective'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.adjective
                        }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/adjective', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.adjective }}</span>
                </li>

                <li v-if="page && page == 'preposition'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.preposition
                        }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/preposition', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.preposition }}</span>
                </li>

                <li v-if="page && page == 'interjection'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.interjection
                        }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/interjection', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.interjection }}</span>
                </li>

                <li v-if="page && page == 'conjunction'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.conjunction
                        }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/conjunction', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.conjunction }}</span>
                </li>

                <li v-if="page && page == 'classifier'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang :
                        'en'].learnSentence.classifier
                        }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <span class="text-secondary" :to="{ path: '/grammars/classifier', query: { lang } }">{{
                        langSet[lang ? lang : 'en'].learnSentence.classifier }}</span>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompJourney',
    props: {
        lang: String,
        page: String
    },
    data: () => {
        return {
            langOptions: displayLanguages.options,
            langSet: displayLanguages.langSet
        }
    },
}

</script>