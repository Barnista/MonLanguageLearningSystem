<template>
    <div id="vowel-table" class="vowel-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.vowels }} (12)</h2>
        <p class="text-muted">{{ langSet[lang ? lang : 'en'].vowelView.description }}</p>
        <div class="mt-4">
            <h3 class="text-start">1. {{ langSet[lang ? lang : 'en'].vowelView.vowelType1Title }}</h3>
            <p class="text-start text-muted">{{ langSet[lang ? lang : 'en'].vowelView.vowelType1Description }}</p>
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
                            <div>
                                <span class="fs-3 fw-bold">{{ vowel.letter }}</span>
                            </div>
                            <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL(vowel)">
                                🔊 {{ `/${vowel.ipaCL}/` || 'N/A' }}
                            </button>
                            <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                                class="mt-2 ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                                ✅ {{ langSet[lang ? lang : 'en'].menu.copied }}
                            </button>
                            <button v-else class="mt-2 ms-2 btn btn-sm btn-outline-secondary py-0 px-1"
                                @click="copyToClipboard(vowel.letter, index, cIndex)">
                                📋 {{ langSet[lang ? lang : 'en'].menu.copy }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-4">
            <h3 class="text-start">2. {{ langSet[lang ? lang : 'en'].vowelView.vowelType2Title }}</h3>
            <p class="text-start text-muted">{{ langSet[lang ? lang : 'en'].vowelView.vowelType2Description }}</p>
            <div class="d-flex">
                <div class="">
                    <span class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                    <span> = {{ langSet[lang ? lang : 'en'].vowelView.vowelType2CL }}</span>
                </div>
                <div class="ms-2">
                    <span class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                    <span> = {{ langSet[lang ? lang : 'en'].vowelView.vowelType2BT }}</span>
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
                                <span class="fs-3 fw-bold">{{ vowel.compound || '-' }}</span>
                                <span v-if="vowel.compound2" class="fw-bold text-muted"><br>({{ langSet[lang ? lang :
                                    'en'].menu.or }} {{ vowel.compound2
                                    }})<br><small><a :href="`#${vowel.exception.id}`">({{ langSet[lang ? lang :
                                            'en'].menu.seeException }})</a></small></span>
                            </div>
                            <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL(vowel)">
                                🔊 {{ `/${vowel.ipaCL}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </button>
                            <button v-if="vowel.ipaCL2" class="mt-2 ms-1 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL2(vowel)">
                                🔊 {{ `/${vowel.ipaCL2}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </button>
                            <button class="mt-2 ms-1 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelBT(vowel)">
                                🔊 {{ `/${vowel.ipaBT}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                            </button>
                            <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                                class="mt-2 ms-1 btn btn-sm btn-light py-0 px-1 disabled">
                                ✅ {{ langSet[lang ? lang : 'en'].menu.copied }}
                            </button>
                            <button v-else class="mt-2 ms-1 btn btn-sm btn-outline-secondary py-0 px-1"
                                @click="copyToClipboard(vowel.compound, index, cIndex)">
                                📋 {{ langSet[lang ? lang : 'en'].menu.copy }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-for="(row, index) in vowels" :key="index">
                <div v-for="(vowel, cIndex) in row" :key="cIndex">
                    <div v-if="vowel.exception" class="mt-4">
                        <h4 class="text-start" :id="vowel.exception.id">
                            {{ langSet[lang ? lang : 'en'].menu.exception }} #{{ cIndex }}: {{ vowel.compound }} → <span
                                class="fw-bold">{{ vowel.compound2
                                }}</span>
                        </h4>
                        <p v-if="!vowel.exception.dependsOnFinal" class="text-start text-muted">
                            "{{ vowel.compound2 }}" <span v-html="langSet[lang ? lang : 'en'].vowelView.exceptionDescription"></span>
                        </p>
                        <p v-else class="text-start text-muted">
                            "{{ vowel.compound2 }}" <span v-html="langSet[lang ? lang : 'en'].vowelView.exceptionDescription2"></span>
                        </p>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody v-if="!vowel.exception.dependsOnFinal">
                                <tr>
                                    <td v-for="(consonant, cIndex) in vowel.exception.consonants.slice(0, 4)"
                                        :key="cIndex">
                                        <div>
                                            <span class="fs-4">{{ consonant }} → <span class="fw-bold">
                                                    {{ craftWord(consonant, vowel.compound).word ||
                                                        'N/A' }}</span></span>
                                            <span v-if="isClearConsonant(consonant)"
                                                class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                            <span v-else
                                                class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                        </div>
                                        <div>
                                            <span class="text-muted">/{{ craftWord(consonant, vowel.compound).ipa ||
                                                'N/A' }}/</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td v-for="(consonant, cIndex) in vowel.exception.consonants.slice(4, 8)"
                                        :key="cIndex">
                                        <div>
                                            <span class="fs-4">{{ consonant }} → <span class="fw-bold">
                                                    {{ craftWord(consonant, vowel.compound).word ||
                                                        'N/A' }}</span></span>
                                            <span v-if="isClearConsonant(consonant)"
                                                class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                            <span v-else
                                                class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                        </div>
                                        <div>
                                            <span class="text-muted">/{{ craftWord(consonant, vowel.compound).ipa ||
                                                'N/A' }}/</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td v-for="(final, cIndex) in vowel.exception.finals.slice(0, 5)"
                                        :key="cIndex">
                                        <div>
                                            <span class="fs-4">{{ final }} → <span class="fw-bold">
                                                    {{ craftWord2(vowel.compound, final).word ||
                                                        'N/A' }}</span></span>
                                        </div>
                                        <div>
                                            <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                                'N/A' }}/</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td v-for="(final, cIndex) in vowel.exception.finals.slice(5, 10)"
                                        :key="cIndex">
                                        <div>
                                            <span class="fs-4">{{ final }} → <span class="fw-bold">
                                                    {{ craftWord2(vowel.compound, final).word ||
                                                        'N/A' }}</span></span>
                                        </div>
                                        <div>
                                            <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                                'N/A' }}/</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-library/alphabets/alphabets';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompVowelTable',
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