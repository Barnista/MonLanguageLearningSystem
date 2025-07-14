<template>
    <div id="double-consonant-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.doubleConsonants }} (2)</h2>
        <p v-html="langSet[lang ? lang : 'en'].doubleConsonantView.description"></p>
        <div>
            <ol>
                <li v-html="langSet[lang ? lang : 'en'].doubleConsonantView.titleType1"></li>
                <li v-html="langSet[lang ? lang : 'en'].doubleConsonantView.titleType2"></li>
            </ol>
            <hr>
        </div>
        <div class="mt-4">
            <h3 v-html="`1. ${langSet[lang ? lang : 'en'].doubleConsonantView.titleType1}`"></h3>
            <p v-html="langSet[lang ? lang : 'en'].doubleConsonantView.descriptionType1"></p>
            <div>
                ...table...
            </div>
            <p>
                <span class="fw-bold text-danger">{{ langSet[lang ? lang : 'en'].doubleConsonantView.note }}</span>
                <span class="fw-bold">{{ langSet[lang ? lang : 'en'].doubleConsonantView.noteType1 }}</span>
            </p>
            <hr>
        </div>
        <div class="mt-4">
            <h3 v-html="`2. ${langSet[lang ? lang : 'en'].doubleConsonantView.titleType2}`"></h3>
            <p v-html="langSet[lang ? lang : 'en'].doubleConsonantView.descriptionType2"></p>
            <div class="mb-3">
                <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.descriptionTable2"></span>
                <a class="ms-2 fw-bold" :href="`/alphabets/consonant?lang=${lang}`" target="_blank">
                    >> {{ langSet[lang ? lang :
                        'en'].learnAlphabets.consonants }} (35)
                </a>
            </div>
            <div class="mb-3">
                <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleType21"></span>
                <ol>
                    <li>
                        <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleType22"></span>
                    </li>
                    <li>
                        <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleType23"></span>
                    </li>
                </ol>
            </div>
            <div class="mb-3">
                <h4>{{ langSet[lang ? lang : 'en'].doubleConsonantView.ruleTitle2 }}</h4>
                <ol>
                    <li>
                        <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleNo21"></span>
                    </li>
                    <li>
                        <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleNo22"></span>
                    </li>
                    <li>
                        <span v-html="langSet[lang ? lang : 'en'].doubleConsonantView.ruleNo23"></span>
                    </li>
                </ol>
            </div>
            <div class="mb-3">
                <h4>{{ langSet[lang ? lang : 'en'].doubleConsonantView.titleTable2 }}</h4>
                <div>
                    ...table...
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompDoubleConsonantTable',
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
        }
    }
}
</script>