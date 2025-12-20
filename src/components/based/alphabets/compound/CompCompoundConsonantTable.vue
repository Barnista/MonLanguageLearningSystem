<template>
    <div id="compound-consonant-table" class="compound-consonant-table">
        <h2>{{ langSet[lang || 'en'].learnAlphabets.compoundConsonants }} (11)</h2>
        <p v-html="langSet[lang || 'en'].compoundConsonantView.description"></p>
        <table>
            <thead>
                <tr>
                    <th class="d-none">{{ langSet[lang || 'en'].table.no }}</th>
                    <th>{{ langSet[lang || 'en'].table.compoundConsonant }}</th>
                    <th>{{ langSet[lang || 'en'].table.compoundSymbol }}</th>
                    <th>{{ langSet[lang || 'en'].table.compoundExample }}</th>
                    <th class=""><span v-html="langSet[lang || 'en'].table.pronounciation"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in compounds" :key="index">
                    <td class="d-none fs-6">{{ index + 1 }}</td>
                    <td class="fs-2">{{ item.letter }}</td>
                    <td class="fs-2">{{ item.compound }}</td>
                    <td class="fs-6 text-muted">{{ item.example }}</td>
                    <td class=" fs-6 text-muted">
                        /{{ item.exampleIPA }}/
                        <br>
                        /{{ item.exampleTH }}/
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div v-for="(compound, index) in compounds" :key="index" class="accordion mt-4" :id="`accordionNo${index}`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionNo${index}`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseNo${index}`" aria-expanded="false"
                        aria-controls="collapseConsonantTable">
                        <h3 class="text-start">
                            {{ index + 1 }}. {{ compound.letter }} → {{ compound.compound }}
                            <span class="ms-2 text-muted"> {{ `/${compound.ipa}/` || 'NaN' }}</span>
                            <span class="ms-2 text-muted"> {{ `/${compound.th}/` || 'NaN' }}</span>
                        </h3>
                    </button>
                </h2>
                <div :id="`collapseNo${index}`" class="accordion-collapse collapse"
                    aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionNo${index}`">
                    <div class="accordion-body">
                        <CompCompoundConsonantSection :lang="lang" :compound="compound" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="mt-4">
            <h3>Exceptions:</h3>
            <p>These exceptions below describe how some consonants; when combining with some diacritics; create distinguish sounds that don't follow the rule. This exception has been noticed by Mr. Zuzarz Jaichop (aka သုည ပညါ).</p>
            <table>
                <thead>
                    <tr>
                        <th>Combines</th>
                        <th>Pronunciation</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in exceptions" :key="index">
                        <td>
                            <span class="fs-3">{{ item.letter }}</span>
                        </td>
                        <td>
                            <span class="fs-5 text-danger">/{{ item.ipa }}/</span>
                            <br>
                            <span class="fs-5 text-danger ms-2">/{{ item.th }}/</span>
                        </td>
                        <td>
                            <span v-html="item.example"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-library/alphabets/alphabets';
import displayLanguages from '@/services/display-languages/display-languages';
import CompCompoundConsonantSection from './CompCompoundConsonantSection.vue';

export default {
    name: 'CompCompoundConsonantTable',
    components: {
        CompCompoundConsonantSection
    },
    props: {
        lang: String
    },
    data() {
        return {
            langSet: displayLanguages.langSet,
            compounds: monAlphabets.compoundConsonants,
            exceptions: monAlphabets.consonants.slice(7, 8)[0].rows,
            vowels: [
                monAlphabets.vowels.slice(0, 6), // Row 1
                monAlphabets.vowels.slice(6, 12), // Row 2
            ],
        };
    },
    methods: {
        isClearConsonant(letter) {
            return monAlphabets.isClearConsonant(letter);
        },
        isBreathyConsonant(letter) {
            return monAlphabets.isBreathyConsonant(letter);
        },
        craftWord(consonant, compound, vowel) {
            return monAlphabets.craftWord2(consonant, compound, vowel, null);
        }
    }
};
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