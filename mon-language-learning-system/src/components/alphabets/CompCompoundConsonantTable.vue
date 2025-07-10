<template>
    <div id="compound-consonant-table" class="compound-consonant-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.compoundConsonants }} (11)</h2>
        <p>{{ langSet[lang ? lang : 'en'].compoundConsonantView.description }}</p>
        <table>
            <thead>
                <tr>
                    <th>{{ langSet[lang ? lang : 'en'].table.no }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.compoundConsonant }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.compoundSymbol }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.compoundExample }}</th>
                    <th><span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in compounds" :key="index">
                    <td class="fs-5">{{ index + 1 }}</td>
                    <td class="fw-bold fs-4">{{ item.letter }}</td>
                    <td class="fw-bold fs-4">{{ item.compound }}</td>
                    <td class="fs-5">{{ item.example }}</td>
                    <td class="fs-5 text-muted">/{{ item.exampleIPA }}/</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div v-for="(compound, index) in compounds" :key="index" class="mt-4 pt-2">
            <h3 class="text-start">
                {{ index + 1 }}. {{ compound.letter }} → {{ compound.compound }}
                <button class="ms-2 btn btn-outline-secondary"> 🔊 /{{ compound.ipa || 'N/A' }}/ </button>
            </h3>
            <div class="row">
                <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                    <span class="fw-bold fs-5">{{ compound.compoundWith.length }} {{ langSet[lang ? lang : 'en'].learnAlphabets.consonants }}</span> {{ langSet[lang ? lang : 'en'].compoundConsonantView.compoundDescription1 }}
                    <span class="fw-bold fs-5">{{ compound.compound }}</span> {{ langSet[lang ? lang : 'en'].compoundConsonantView.compoundDescription2 }}
                    <span class="fw-bold fs-5">{{ compound.compoundWith.join(', ') }}</span>.
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                    <select v-model="compound.selected"
                        class="form-select text-success w-full fs-5 fw-bold text-center">
                        <option value="" selected>{{ langSet[lang ? lang : 'en'].menu.tryConsonant }}</option>
                        <option v-for="item in compound.compoundWith" :key="item" :value="item">
                            {{ item }}{{ compound.compound }} ({{ isBreathyConsonant(item) ? 'BT' : 'CL' }})
                        </option>
                    </select>
                </div>
            </div>
            <table class="my-2">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                    </tr>
                    <tr v-for="(row, index) in vowels" :key="index">
                        <td v-for="(vowel, cIndex) in row" :key="cIndex">
                            <div>
                                <span class="fs-3 fw-bold">
                                    {{ craftWord(compound.selected, compound.compound, vowel.compound).word || 'N/A' }}
                                </span>
                                <span v-if="isClearConsonant(compound.selected)"
                                    class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                <span v-else class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                            </div>
                            <div class="mt-2">
                                <span class="text-muted">
                                    /{{ craftWord(compound.selected, compound.compound, vowel.compound).ipa || 'N/A' }}/
                                </span>
                                <br>
                                <span v-if="craftWord(compound.selected, compound.compound, vowel.compound).ipa2"
                                    class="text-muted">
                                    /{{ craftWord(compound.selected, compound.compound, vowel.compound).ipa2 || 'N/A'
                                    }}/
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-library/alphabets/alphabets';
import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompCompoundConsonantTable',
    props: {
        lang: String
    },
    data() {
        return {
            langSet: displayLanguages.langSet,
            compounds: monAlphabets.getAllCompoundConsonants(),
            vowels: [
                monAlphabets.vowels.slice(0, 6), // Row 1
                monAlphabets.vowels.slice(6, 12), // Row 2
            ],
        };
    },
    methods: {
        isClearConsonant(letter){
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