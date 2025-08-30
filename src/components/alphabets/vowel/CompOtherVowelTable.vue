<template>
    <div id="other-vowel-table" class="other-vowel-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.otherVowels }}</h2>
        <p class="text-dark" v-html="langSet[lang ? lang : 'en'].vowelView.description2"></p>
        <div class="mt-4">
            <div class="d-flex">
                <div class="">
                    <span class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                    <span>= {{ langSet[lang ? lang : 'en'].vowelView.vowelType2CL }}</span>
                </div>
                <div class="ms-1">
                    <span class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                    <span>= {{ langSet[lang ? lang : 'en'].vowelView.vowelType2BT }}</span>
                </div>
            </div>
            <table class="my-2">
                <thead>
                    <tr>
                        <th>{{ langSet[lang ? lang : 'en'].table.no }}</th>
                        <th>{{ langSet[lang ? lang : 'en'].table.otherVowels }}</th>
                        <th><span v-html="langSet[lang ? lang : 'en'].table.otherVowelsOrigin"></span></th>
                        <th><span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span></th>
                        <th><span v-html="langSet[lang ? lang : 'en'].table.pronounciationThai"></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in otherVowels" :key="index">
                        <td class="fs-6">{{ index + 1 }}</td>
                        <td class="fw-bold fs-4">{{ item.letter }}</td>
                        <td class="fs-6 text-muted"><span v-html="item.origin"></span></td>
                        <td class="fs-6">
                            <div>
                                <span class="text-muted">
                                    {{ `/${item.ipaCL}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </span>
                                <span v-if="item.ipaCL2" class="ms-1 text-muted">
                                    {{ `/${item.ipaCL2}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </span>
                            </div>
                            <div>
                                <span class="text-muted">
                                    {{ `/${item.ipaBT}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                </span>
                                <span v-if="item.ipaBT2" class="ms-1 text-muted">
                                    {{ `/${item.ipaBT2}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                </span>
                            </div>
                        </td>
                        <td class="fs-6">
                            <div>
                                <span class="text-muted">
                                    {{ `/${item.thCL.replace('-', 'อ')}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </span>
                                <span v-if="item.thCL2" class="ms-1 text-muted">
                                    {{ `/${item.thCL2.replace('-', 'อ')}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </span>
                            </div>
                            <div>
                                <span class="text-muted">
                                    {{ `/${item.thBT.replace('-', 'อ')}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                </span>
                                <span v-if="item.thBT2" class="ms-1 text-muted">
                                    {{ `/${item.thBT2.replace('-', 'อ')}/` || 'NaN' }} <span
                                        class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                </span>
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
    name: 'CompOtherVowelTable',
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
            otherVowels: monAlphabets.otherVowels
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