<template>
    <div class="comp-vowel-compound-section">
        <h3>2. {{ langSet[lang ? lang : 'en'].vowelView.vowelType2Title }}</h3>
        <p class="text-dark" v-html="langSet[lang ? lang : 'en'].vowelView.vowelType2Description"></p>
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
        <div class="my-2 d-block d-md-none">
            <div class="row">
                <div class="col-12 border bg-light py-1"></div>
                <div class="col-3 border text-center px-2 py-3" v-for="(vowel, index) in vowels2" :key="index">
                    <div class="mb-2">
                        <span class="fs-2 fw-bold">{{ vowel.compound || '-' }}</span>
                        <span v-if="vowel.compound2" class="fw-bold text-muted"><br>({{ langSet[lang ? lang
                            :
                            'en'].menu.or }} {{ vowel.compound2
                            }})<br><small><a :href="`#${vowel.exception.id}`">({{ langSet[lang ? lang :
                                'en'].menu.seeException }})</a></small></span>
                    </div>
                    <div class="mb-2 text-muted">
                        <span class="me-1">{{ `/${vowel.ipaCL}/` || 'NaN' }}</span>
                        <span>{{ `/${vowel.thCL.replace('-', 'อ')}/` || 'NaN' }} </span>
                        <br>
                        <button class="mt-1 btn btn-sm btn-outline-success py-0 px-1" @click="pronouceVowelCL(vowel)">
                            🔊
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.listen }}
                            </span>
                            <span class="ms-1 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                        </button>
                    </div>
                    <div class="mb-2 text-muted" v-if="vowel.ipaCL2">
                        <span class="me-1">{{ `/${vowel.ipaCL2}/` || 'NaN' }}</span>
                        <span>{{ `/${vowel.thCL2.replace('-', 'อ')}/` || 'NaN' }}</span>
                        <br>
                        <button v-if="vowel.ipaCL2" class="mt-1 btn btn-sm btn-outline-success py-0 px-1"
                            @click="pronouceVowelCL2(vowel)">
                            🔊
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.listen }}
                            </span>
                            <span class="ms-1 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                        </button>
                    </div>
                    <div class="mb-2 text-muted">
                        <span class="me-1">{{ `/${vowel.ipaBT}/` || 'NaN' }}</span>
                        <span>{{ `/${vowel.thBT.replace('-', 'อ')}/` || 'NaN' }} </span>
                        <br>
                        <button class="mt-1 btn btn-sm btn-outline-success py-0 px-1" @click="pronouceVowelBT(vowel)">
                            🔊
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.listen }}
                            </span>
                            <span class="ms-1 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-2 d-none d-md-block">
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
                            <div class="mb-2">
                                <span class="fs-2 fw-bold">{{ vowel.compound || '-' }}</span>
                                <span v-if="vowel.compound2" class="fw-bold text-muted"><br>({{ langSet[lang ? lang
                                    :
                                    'en'].menu.or }} {{ vowel.compound2
                                    }})<br><small><a :href="`#${vowel.exception.id}`">({{ langSet[lang ? lang :
                                        'en'].menu.seeException }})</a></small></span>
                            </div>
                            <div class="mb-2 text-muted">
                                <span class="me-1">{{ `/${vowel.ipaCL}/` || 'NaN' }}</span>
                                <span>{{ `/${vowel.thCL.replace('-', 'อ')}/` || 'NaN' }} </span>
                                <br>
                                <button class="mt-1 btn btn-sm btn-outline-success py-0 px-1"
                                    @click="pronouceVowelCL(vowel)">
                                    🔊
                                    <span class="d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.listen }}
                                    </span>
                                    <span class="ms-1 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </button>
                            </div>
                            <div class="mb-2 text-muted" v-if="vowel.ipaCL2">
                                <span class="me-1">{{ `/${vowel.ipaCL2}/` || 'NaN' }}</span>
                                <span>{{ `/${vowel.thCL2.replace('-', 'อ')}/` || 'NaN' }}</span>
                                <br>
                                <button v-if="vowel.ipaCL2" class="mt-1 btn btn-sm btn-outline-success py-0 px-1"
                                    @click="pronouceVowelCL2(vowel)">
                                    🔊
                                    <span class="d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.listen }}
                                    </span>
                                    <span class="ms-1 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                </button>
                            </div>
                            <div class="mb-2 text-muted">
                                <span class="me-1">{{ `/${vowel.ipaBT}/` || 'NaN' }}</span>
                                <span>{{ `/${vowel.thBT.replace('-', 'อ')}/` || 'NaN' }} </span>
                                <br>
                                <button class="mt-1 btn btn-sm btn-outline-success py-0 px-1"
                                    @click="pronouceVowelBT(vowel)">
                                    🔊
                                    <span class="d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.listen }}
                                    </span>
                                    <span class="ms-1 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-for="(row, index) in vowels" :key="index">
            <div v-for="(vowel, cIndex) in row" :key="cIndex">
                <div v-if="vowel.exception" class="mt-4">
                    <h4 class="text-start" :id="vowel.exception.id">
                        {{ langSet[lang ? lang : 'en'].menu.exception }} #{{ cIndex }}: {{ vowel.compound }} → <span
                            class="fw-bold">{{ vowel.compound2
                            }}</span>
                    </h4>
                    <p v-if="!vowel.exception.dependsOnFinal" class="text-start text-muted">
                        "{{ vowel.compound2 }}" <span
                            v-html="langSet[lang ? lang : 'en'].vowelView.exceptionDescription"></span>
                    </p>
                    <p v-else class="text-start text-muted">
                        "{{ vowel.compound2 }}" <span
                            v-html="langSet[lang ? lang : 'en'].vowelView.exceptionDescription2"></span>
                    </p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            </tr>
                        </thead>
                        <tbody v-if="!vowel.exception.dependsOnFinal">
                            <tr>
                                <td v-for="(consonant, cIndex) in vowel.exception.consonants.slice(0, 4)" :key="cIndex">
                                    <div>
                                        <span class="fs-4">{{ consonant }} → <span class="fw-bold">
                                                {{ craftWord(consonant, vowel.compound).word ||
                                                    'NaN' }}</span></span>
                                        <span v-if="isClearConsonant(consonant)"
                                            class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                        <span v-else
                                            class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                    </div>
                                    <div>
                                        <span class="text-muted">/{{ craftWord(consonant, vowel.compound).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                    <div class="mt-1">
                                        <span class="text-muted">/{{ craftWord(consonant, vowel.compound).th ||
                                            'NaN' }}/</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td v-for="(consonant, cIndex) in vowel.exception.consonants.slice(4, 8)" :key="cIndex">
                                    <div>
                                        <span class="fs-4">{{ consonant }} → <span class="fw-bold">
                                                {{ craftWord(consonant, vowel.compound).word ||
                                                    'NaN' }}</span></span>
                                        <span v-if="isClearConsonant(consonant)"
                                            class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                                        <span v-else
                                            class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                                    </div>
                                    <div>
                                        <span class="text-muted">/{{ craftWord(consonant, vowel.compound).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                    <div class="mt-1">
                                        <span class="text-muted">/{{ craftWord(consonant, vowel.compound).th ||
                                            'NaN' }}/</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td v-for="(final, cIndex) in vowel.exception.finals.slice(0, 5)" :key="cIndex">
                                    <div>
                                        <span class="fs-4">{{ final }} → <span class="fw-bold">
                                                {{ craftWord2(vowel.compound, final).word ||
                                                    'NaN' }}</span></span>
                                    </div>
                                    <div>
                                        <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                    <div class="mt-1">
                                        <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td v-for="(final, cIndex) in vowel.exception.finals.slice(5, 10)" :key="cIndex">
                                    <div>
                                        <span class="fs-4">{{ final }} → <span class="fw-bold">
                                                {{ craftWord2(vowel.compound, final).word ||
                                                    'NaN' }}</span></span>
                                    </div>
                                    <div>
                                        <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                    <div class="mt-1">
                                        <span class="text-muted">/{{ craftWord2(vowel.compound, final).ipa ||
                                            'NaN' }}/</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import monAlphabets from '@/services/mon-library/alphabets/alphabets';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompVowelCompoundSection',
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
            vowels2: monAlphabets.vowels
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