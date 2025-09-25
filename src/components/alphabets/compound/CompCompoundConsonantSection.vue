<template>
    <div class="comp-compound-consonant-section">
        <div class="row">
            <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                <span class="fs-4">{{ compound.compoundWith.length }} {{ langSet[lang ? lang
                    :
                    'en'].learnAlphabets.consonants }}</span> {{ langSet[lang ? lang :
                        'en'].compoundConsonantView.compoundDescription1 }}
                <span class="fs-4">&ensp;{{ compound.compound }}</span> {{ langSet[lang ? lang :
                    'en'].compoundConsonantView.compoundDescription2 }}
                <span class="fs-4">{{ compound.compoundWith.join(', ') }}</span>.
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                <select v-model="selected" class="form-select text-success w-full fs-4 text-center">
                    <option value="" selected>{{ langSet[lang ? lang : 'en'].menu.tryConsonant }}
                    </option>
                    <option v-for="item in compound.compoundWith" :key="item" :value="item">
                        {{ item }}{{ compound.compound }} ({{ isBreathyConsonant(item) ? 'BT' : 'CL'
                        }})
                    </option>
                </select>
            </div>
        </div>
        <div class="my-2 d-block d-md-none">
            <div class="row">
                <div class="col-12 border bg-light py-1"></div>
                <div class="col-3 border text-center px-2 py-3" v-for="(vowel, index) in vowels2" :key="index">
                    <div>
                        <span class="fs-2">
                            {{ craftWord(selected, compound.compound,
                                vowel.compound).word || 'NaN' }}
                        </span>
                    </div>
                    <div class="mt-2">
                        <div class="text-muted">
                            /{{ craftWord(selected, compound.compound,
                                vowel.compound).ipa || 'NaN' }}/
                        </div>
                        <div v-if="craftWord(selected, compound.compound, vowel.compound).ipa2" class="text-muted">
                            /{{ craftWord(selected, compound.compound,
                                vowel.compound).ipa2 || 'NaN'
                            }}/
                        </div>
                        <div class="text-muted mt-2">
                            /{{ craftWord(selected, compound.compound,
                                vowel.compound).th || 'NaN' }}/
                        </div>
                        <div v-if="craftWord(selected, compound.compound, vowel.compound).th2" class="text-muted">
                            /{{ craftWord(selected, compound.compound,
                                vowel.compound).th2 || 'NaN'
                            }}/
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-2 d-md-block d-none">
            <table>
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
                                <span class="fs-2">
                                    {{ craftWord(selected, compound.compound,
                                        vowel.compound).word || 'NaN' }}
                                </span>
                            </div>
                            <div class="mt-2">
                                <div class="text-muted">
                                    /{{ craftWord(selected, compound.compound,
                                        vowel.compound).ipa || 'NaN' }}/
                                </div>
                                <div v-if="craftWord(selected, compound.compound, vowel.compound).ipa2"
                                    class="text-muted">
                                    /{{ craftWord(selected, compound.compound,
                                        vowel.compound).ipa2 || 'NaN'
                                    }}/
                                </div>
                                <div class="text-muted mt-2">
                                    /{{ craftWord(selected, compound.compound,
                                        vowel.compound).th || 'NaN' }}/
                                </div>
                                <div v-if="craftWord(selected, compound.compound, vowel.compound).th2"
                                    class="text-muted">
                                    /{{ craftWord(selected, compound.compound,
                                        vowel.compound).th2 || 'NaN'
                                    }}/
                                </div>
                            </div>
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

export default {
    name: 'CompCompoundConsonantSection',
    props: {
        lang: String,
        compound: Object
    },
    data() {
        return {
            selected: this.compound.compoundWith[0],
            langSet: displayLanguages.langSet,
            vowels: [
                monAlphabets.vowels.slice(0, 6), // Row 1
                monAlphabets.vowels.slice(6, 12), // Row 2
            ],
            vowels2: monAlphabets.vowels
        };
    },
    methods: {
        isBreathyConsonant(letter) {
            return monAlphabets.isBreathyConsonant(letter);
        },
        craftWord(consonant, compound, vowel) {
            return monAlphabets.craftWord2(consonant, compound, vowel, null);
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