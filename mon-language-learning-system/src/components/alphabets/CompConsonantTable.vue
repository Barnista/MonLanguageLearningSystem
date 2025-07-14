<template>
    <div id="consonant-table" class="consonant-table" style="--bs-breadcrumb-divider: '>';">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.consonants }} (35)</h2>
        <p class="text-dark" v-html="langSet[lang ? lang : 'en'].consonantView.description"></p>

        <div class="mt-4 d-flex">
            <div style="width: 24px; height: 24px;" class="bg-secondary"></div>
            <span style="margin-left: 8px;">
                = {{ langSet[lang ? lang : 'en'].consonantView.zeroConsonants }}
            </span>
            <div class="ms-1">
                <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                <span>= {{ langSet[lang ? lang : 'en'].consonantView.clearConsonants }}</span>
            </div>
            <div class="ms-1">
                <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                <span>= {{ langSet[lang ? lang : 'en'].consonantView.breathyConsonants }}</span>
            </div>
        </div>
        <table class="my-2">
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="bg-light"></td>
                    <td class="bg-light">{{ langSet[lang ? lang : 'en'].consonantView.column }} 1</td>
                    <td class="bg-light">{{ langSet[lang ? lang : 'en'].consonantView.column }} 2</td>
                    <td class="bg-light">{{ langSet[lang ? lang : 'en'].consonantView.column }} 3</td>
                    <td class="bg-light">{{ langSet[lang ? lang : 'en'].consonantView.column }} 4</td>
                    <td class="bg-light">{{ langSet[lang ? lang : 'en'].consonantView.column }} 5</td>
                </tr>
                <tr v-for="(item, index) in consonants" :key="index">
                    <td :class="item.type === 'none' ? 'bg-secondary' : 'bg-light'">
                        <span>{{ index < 5 ? `${langSet[lang ? lang : 'en'].consonantView.row} ${index + 1}` : '-'
                                }}</span>
                    </td>
                    <td v-for="(consonant, cIndex) in item.rows" :key="cIndex">
                        <div class="mb-2">
                            <span class="fs-2 fw-bold">{{ consonant.letter }}</span>
                            <span v-if="consonant.tone == 'clear'"
                                class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            <span v-if="consonant.tone == 'breathy'"
                                class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                        </div>
                        <div class="mb-2 text-muted">
                            <span>/{{ `/${consonant.ipa}/` || 'NaN' }}/</span>
                            <br>
                            <span>{{ `/${consonant.th}/` || 'NaN' }} <strong>({{ consonant.thLetter || 'NaN'
                                    }})</strong></span>
                        </div>
                        <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                            @click="pronouceConsonant(consonant)">
                            🔊
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.listen }}
                            </span>
                        </button>
                        <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                            class="mt-2 ms-1 btn btn-sm btn-light py-0 px-1 disabled">
                            ✅
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.copied }}
                            </span>
                        </button>
                        <button v-else class="mt-2 ms-1 btn btn-sm btn-outline-secondary py-0 px-1"
                            @click="copyToClipboard(consonant.letter, index, cIndex)">
                            📋
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.copy }}
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>{{ langSet[lang ? lang : 'en'].consonantView.note }}</p>
    </div>
</template>

<script>
import monAlphabets from '@/services/mon-library/alphabets/alphabets';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompConsonantTable',
    props: {
        lang: String
    },
    mounted() {
        console.log('con-lang', this.lang)
    },
    data() {
        return {
            langSet: displayLanguages.langSet,
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            consonants: monAlphabets.consonants,
        }
    },
    methods: {
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
        pronouceConsonant(consonant) {
            console.log(`Pronunciation: ${consonant.ipa}`);
            const audio = new Audio(consonant.sound);
            audio.play().catch(err => {
                console.error('Error playing sound: ', err);
            });
        }
    },
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