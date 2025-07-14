<template>
    <div class="d-flex justify-content-center">
        <nav class="fs-6 fw-bold d-none d-md-block bg-white border rounded px-4 pt-2"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="mt-2 breadcrumb-item" aria-current="page">
                    <span class="fw-bold text-muted">Get Start</span>
                </li>

                <li v-if="page && page == 'consonant'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang : 'en'].learnAlphabets.consonants
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="`/alphabets/consonant?lang=${lang}`">{{ langSet[lang ? lang :
                        'en'].learnAlphabets.consonants }}</router-link>
                </li>

                <li v-if="page && page == 'vowel'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang : 'en'].learnAlphabets.vowels
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="`/alphabets/vowel?lang=${lang}`">{{ langSet[lang ? lang :
                        'en'].learnAlphabets.vowels }}</router-link>
                </li>

                <li v-if="page && page == 'compound-consonant'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang : 'en'].learnAlphabets.compoundConsonants
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="`/alphabets/compound-consonant?lang=${lang}`">{{ langSet[lang
                        ?
                        lang : 'en'].learnAlphabets.compoundConsonants }}</router-link>
                </li>

                <li v-if="page && page == 'final-consonant'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="`/alphabets/final-consonant?lang=${lang}`">{{ langSet[lang ?
                        lang : 'en'].learnAlphabets.finalConsonants }}</router-link>
                </li>

                <li v-if="page && page == 'double-consonant'" class="mt-2 breadcrumb-item active" aria-current="page">
                    <span class="fw-bold text-light bg-primary px-2 py-1 rounded">{{ langSet[lang ? lang : 'en'].learnAlphabets.doubleConsonants
                    }}</span>
                </li>
                <li v-else class="mt-2 breadcrumb-item">
                    <router-link class="text-success" :to="`/alphabets/double-consonant?lang=${lang}`">{{ langSet[lang ?
                        lang : 'en'].learnAlphabets.doubleConsonants }}</router-link>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages';

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