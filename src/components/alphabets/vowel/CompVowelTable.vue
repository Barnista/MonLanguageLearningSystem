<template>
    <div id="vowel-table" class="vowel-table">
        <h2>{{ langSet[lang || 'en'].learnAlphabets.vowels }} (12)</h2>
        <p class="text-dark" v-html="langSet[lang || 'en'].vowelView.description"></p>
        <div class="mt-4 mb-2">
            <h3>1. {{ langSet[lang || 'en'].vowelView.vowelType1Title }}</h3>
            <p class="text-dark" v-html="langSet[lang || 'en'].vowelView.vowelType1Description"></p>
            <table class="my-2">
                <thead>
                    <tr>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in vowels" :key="index">
                        <td v-for="(vowel, cIndex) in row" :key="cIndex">
                            <div class="mb-2">
                                <span class="fs-1">{{ vowel.letter }}</span>
                            </div>
                            <div class="mb-2 text-muted">
                                <span>{{ `/${vowel.ipaCL}/` || 'NaN' }}</span>
                                <br>
                                <span>{{ `/${vowel.thCL.replace('-', 'อ')}/` || 'NaN' }} </span>
                            </div>
                            <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL(vowel)">
                                🔊
                                <span class="d-none d-md-inline">
                                    {{ langSet[lang || 'en'].menu.listen }}
                                </span>
                            </button>
                            <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                                class="mt-2 ms-1 btn btn-sm btn-light py-0 px-1 disabled">
                                ✅
                                <span class="d-none d-md-inline">
                                    {{ langSet[lang || 'en'].menu.copied }}
                                </span>
                            </button>
                            <button v-else class="mt-2 ms-1 btn btn-sm btn-outline-secondary py-0 px-1"
                                @click="copyToClipboard(vowel.letter, index, cIndex)">
                                📋
                                <span class="d-none d-md-inline">
                                    {{ langSet[lang || 'en'].menu.copy }}
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
        <CompVowelCompoundSection :lang="lang" class="mt-4"/>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-library/alphabets/alphabets';
import displayLanguages from '@/services/display-languages/display-languages';
import CompVowelCompoundSection from './CompVowelCompoundSection.vue';

export default {
    name: 'CompVowelTable',
    components: {
        CompVowelCompoundSection
    },
    props: {
        lang: String
    },
    data() {
        return {
            langSet: displayLanguages.langSet,
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            vowels: [
                monAlphabets.vowels.slice(0, 6),
                monAlphabets.vowels.slice(6, 12)
            ],
        }
    },
    methods: {
        isClearConsonant(consonant) {
            return monAlphabets.isClearConsonant(consonant);
        },
        craftWord(consonant, vowel) {
            return monAlphabets.craftWord2(consonant, null, vowel, null);
        },
        craftWord2(vowel, final) {
            return monAlphabets.craftWord2('က', null, vowel, final);
        },
        copyToClipboard(text, index, cIndex) {
            this.copiedIndex = index;
            this.copiedCIndex = cIndex;
            this.copiedText = text;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copiedBtnIndex = null;
                    this.copiedText = '';
                }, 2000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        },
        pronouceVowelCL(vowel) {
            const audio = new Audio(vowel.soundCL);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelCL2(vowel) {
            const audio = new Audio(vowel.soundCL2);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelBT(vowel) {
            const audio = new Audio(vowel.soundBT);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
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