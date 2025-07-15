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
            <table class="my-3">
                <thead>
                    <tr>
                        <td class="bg-light fw-bold">
                            <span v-html="langSet[lang ? lang : 'en'].table.doubleExample"></span>
                        </td>
                        <td class="bg-light fw-bold">
                            <span v-html="langSet[lang ? lang : 'en'].table.doubleFullWriting"></span>
                        </td>
                        <td class="bg-light fw-bold">
                            <span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span>
                        </td>
                        <td class="bg-light fw-bold">
                            <span v-html="langSet[lang ? lang : 'en'].table.pronounciationThai"></span>
                        </td>
                        <td class="bg-light fw-bold">
                            <span v-html="langSet[lang ? lang : 'en'].table.translationThai"></span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in exampleDirect" :key="index">
                        <td class="fs-5 fw-bold">{{ item.word }}</td>
                        <td class="fs-5 fw-bold">{{ item.full }}</td>
                        <td class="fs-6 text-muted">/{{ item.ipa }}/</td>
                        <td class="fs-6 text-muted">/{{ item.th }}/</td>
                        <td class="fs-6 text-start">
                            <ol>
                                <li v-for="(tItem, tIndex) in item.translates" :key="tIndex">
                                    ({{ tItem.type }}) {{ tItem.meaning }}
                                </li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            </div>
            <div class="accordion" id="consonantTableAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingConsonantTable">
                        <button class="fw-bold accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseConsonantTable" aria-expanded="false"
                            aria-controls="collapseConsonantTable">
                            {{ langSet[lang ? lang : 'en'].learnAlphabets.consonants }} (35)
                        </button>
                    </h2>
                    <div id="collapseConsonantTable" class="accordion-collapse collapse"
                        aria-labelledby="headingConsonantTable" data-bs-parent="#consonantTableAccordion">
                        <div class="accordion-body">
                            <CompConsonantTable :lang="lang" />
                        </div>
                    </div>
                </div>
            </div>
            <hr>
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
                <table class="my-3">
                    <thead>
                        <tr>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.rowAt"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.columnAt"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.doubleAt"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.doubleExample"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.doubleFullWriting"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span>
                            </td>
                            <td class="bg-light fw-bold">
                                <span v-html="langSet[lang ? lang : 'en'].table.pronounciationThai"></span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in examplePaliSansakrit" :key="index">
                            <td class="fs-6">{{ (item.row > 5 ? '-' : item.row) }}</td>
                            <td class="fs-6">{{ item.column }} ({{ getConsonantByPoisition(item.row - 1,
                                item.column-1).letter }})</td>
                            <td class="fs-6">{{ (item.column == item.doubleWith ? langSet[lang ? lang :
                                'en'].table.itself : `${item.doubleWith} (${getConsonantByPoisition(item.row - 1,
                                item.doubleWith-1).letter})`) }}</td>
                            <td v-if="item.word" class="fs-5 fw-bold">{{ item.word }}</td>
                            <td v-else class="fs-5 fst-italic text-muted">{{ langSet[lang ? lang : 'en'].table.none }}</td>
                            <td class="fs-5 fw-bold">{{ (item.word) ? item.full : '' }}</td>
                            <td class="fs-6 text-muted">{{ (item.word) ? `/${item.ipa}/` : '' }}</td>
                            <td class="fs-6 text-muted">{{ (item.word) ? `/${item.th}/` : '' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages';
import CompConsonantTable from './CompConsonantTable.vue';
import doubleConsonants from '@/services/mon-library/alphabets/double-consonants';
import alphabets from '@/services/mon-library/alphabets/alphabets';

export default {
    name: 'CompDoubleConsonantTable',
    components: {
        CompConsonantTable
    },
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            exampleDirect: doubleConsonants.exampleDirect,
            examplePaliSansakrit: doubleConsonants.examplePaliSansakrit
        }
    },
    methods: {
        getConsonantByPoisition(row, column) {
            return alphabets.getConsonantByPosition(row, column);
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background: #f5f5f5;
}
</style>