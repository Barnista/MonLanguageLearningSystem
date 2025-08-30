<template>
    <div class="comp-word-craft">
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-success" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="py-4 px-4">
                <div class="text-center">
                    <h1 class="headline mt-3 mb-4 fw-bold text-primary">
                        {{ craftedWord ? craftedWord.word : 'NaN' }}
                    </h1>
                    <span class="ms-2 fs-5 text-muted">
                        {{ craftedWord ? `/${craftedWord.ipa}/` : '/NaN/' }}
                    </span>
                    <span class="ms-2 fs-5 text-muted">
                        {{ craftedWord ? `/${craftedWord.th}/` : '/NaN/' }}
                    </span>
                    <button v-if="copied" class="ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                        ✅
                        <span class="d-none d-md-inline">
                            {{ langSet[lang ? lang : 'en'].menu.copied }}
                        </span>
                    </button>
                    <button v-else class="ms-2 btn btn-sm btn-outline-secondary py-0 px-1" @click="copyToClipboard()">
                        📋
                        <span class="d-none d-md-inline">
                            {{ langSet[lang ? lang : 'en'].menu.copy }}
                        </span>
                    </button>
                </div>
                <div class="dash mt-4"></div>
                <div class="d-flex mt-4">
                    <select v-model="sConsonant" @change="onCraftWord"
                        class="py-2 me-1 form-select form-select-lg text-light bg-danger" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in consonants" :key="index" :value="item.letter">{{ item.letter }}
                        </option>
                    </select>
                    <div class="d-none d-md-inline fs-2 text-muted">
                        +
                    </div>
                    <select v-model="sCompound" @change="onCraftWord"
                        class="py-2 mx-1 form-select form-select-lg text-light bg-success" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in compoundCosonants" :key="index" :value="item.compound">{{
                            item.compound }}</option>
                    </select>
                    <div class="d-none d-md-inline fs-2 text-muted">
                        +
                    </div>
                    <select v-model="sVowel" @change="onCraftWord"
                        class="py-2 mx-1 form-select form-select-lg text-dark bg-warning" aria-label="Large select example">
                        <option v-for="(item, index) in vowels" :key="index" :value="item.compound">{{ item.compound ?
                            item.compound : langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in vowels" :key="index" :value="item.letter">{{ item.letter ?
                            item.letter : langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                    </select>
                    <div class="d-none d-md-inline fs-2 text-muted">
                        +
                    </div>
                    <select v-model="sFinal" @change="onCraftWord"
                        class="py-2 ms-1 form-select form-select-lg text-light bg-primary" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <optgroup v-for="(item, index) in finalConsonants" :key="index"
                            :label="`${item.group} (${item.thGroup})`">
                            <option v-for="(member, mIndex) in item.members" :key="mIndex" :value="member.final">{{
                                member.final }}</option>
                        </optgroup>
                    </select>
                </div>
                <div class="text-center mt-3 mb-5">
                    <span class="circle rounded-pill bg-danger shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block1 || '_B1_' }}
                    </span>
                    <span class="circle rounded-pill bg-success shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block2 || '_B2_' }}
                    </span>
                    <span class="circle rounded-pill bg-warning shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block3 || '_B3_' }}
                    </span>
                    <span class="circle rounded-pill bg-primary shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block4 || '_B4_' }}
                    </span>
                </div>
                <div v-if="meanings.length > 0" class="text-muted mt-5 row">
                    <hr>
                    <div class="fw-bold text-center mb-2">
                        {{ langSet[lang ?? 'en'].textAnalyser.meanings ||
                            '_MEANINGS_' }} ({{ meanings.length }}):
                        <router-link class="ms-1" :to="`/apps/dictionary?lang=${lang}&from=${'mon'}&q=${words}`"
                            target="_blank">
                            {{ langSet[lang ?? 'en'].menu.readMore || '_READ_MORE_' }}
                        </router-link>
                    </div>
                    <div class="col-12 col-lg-6 mb-2">
                        <ul class="list-group shadow-sm">
                            <li v-for="(mItem, mIndex) in meanings.slice(0, Math.ceil(meanings.length / 2))"
                                :key="mIndex"
                                class="list-group-item d-flex justify-content-between align-items-start pt-2">
                                <div class="ms-2 me-auto">
                                    <span class="me-2">{{ Number(mItem.no).toLocaleString() }}.</span>
                                    <span v-html="hilightText(craftedWord.word, mItem.word)"
                                        class="fw-bold fs-5 text-dark"></span>
                                    <div class="mt-1">
                                        <small>IPA: <span class="text-muted">{{ `/${mItem.ipa}/` || 'NaN'
                                        }}</span></small>
                                        <small class="ms-3">TH: <span class="text-muted">{{ `/${mItem.th}/` ||
                                            'NaN'
                                                }}</span></small>
                                    </div>
                                    <div class="my-1">
                                        <small class="text-muted me-1">{{ langSet[lang ||
                                            'en'].dictionary.meanings
                                        }}:</small>
                                        <small v-for="(tItem, tIndex) in mItem.translates" :key="tIndex">
                                            <span v-if="tItem.type" class="me-2 fst-italic">
                                                <span class="text-success">({{
                                                    (lang == 'th') ? displayTranslateTypeTH(tItem.type) :
                                                        displayTranslateType(tItem.type) }})</span>
                                                <span class="ms-1 fw-bold" v-html="tItem.th"></span>
                                                <span class="ms-1 text-muted">|</span>
                                            </span>
                                        </small>
                                    </div>
                                </div>
                                <button v-if="copiedIndex2 == mItem.no"
                                    class="mt-2 ms-1 btn btn-sm btn-light disabled">
                                    <i class="bi bi-check-square-fill"></i>
                                    <span class="ms-2 d-none">
                                        {{ langSet[lang ? lang : 'en'].menu.copied }}
                                    </span>
                                </button>
                                <button v-else @click="copyToClipboard2(mItem.word, mItem.no)"
                                    class="mt-2 ms-1 btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-clipboard"></i>
                                    <span class="ms-2 d-none">
                                        {{ langSet[lang ? lang : 'en'].menu.copy }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6 mb-2">
                        <ul class="list-group shadow-sm">
                            <li v-for="(mItem, mIndex) in meanings.slice(Math.ceil(meanings.length / 2), meanings.length)"
                                :key="mIndex"
                                class="list-group-item d-flex justify-content-between align-items-start pt-2">
                                <div class="ms-2 me-auto">
                                    <span class="me-2">{{ Number(mItem.no).toLocaleString() }}.</span>
                                    <span v-html="hilightText(craftedWord.word, mItem.word)"
                                        class="fw-bold fs-5 text-dark"></span>
                                    <div class="mt-1">
                                        <small>IPA: <span class="text-muted">{{ `/${mItem.ipa}/` || 'NaN'
                                        }}</span></small>
                                        <small class="ms-3">TH: <span class="text-muted">{{ `/${mItem.th}/` ||
                                            'NaN'
                                                }}</span></small>
                                    </div>
                                    <div class="my-1">
                                        <small class="text-muted me-1">{{ langSet[lang ||
                                            'en'].dictionary.meanings
                                        }}:</small>
                                        <small v-for="(tItem, tIndex) in mItem.translates" :key="tIndex">
                                            <span v-if="tItem.type" class="me-2 fst-italic">
                                                <span class="text-success">({{
                                                    (lang == 'th') ? displayTranslateTypeTH(tItem.type) :
                                                        displayTranslateType(tItem.type) }})</span>
                                                <span class="ms-1 fw-bold" v-html="tItem.th"></span>
                                                <span class="ms-1 text-muted">|</span>
                                            </span>
                                        </small>
                                    </div>
                                </div>
                                <button v-if="copiedIndex2 == mItem.no"
                                    class="mt-2 ms-1 btn btn-sm btn-light disabled">
                                    <i class="bi bi-check-square-fill"></i>
                                    <span class="ms-2 d-none">
                                        {{ langSet[lang ? lang : 'en'].menu.copied }}
                                    </span>
                                </button>
                                <button v-else @click="copyToClipboard2(mItem.word, mItem.no)"
                                    class="mt-2 ms-1 btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-clipboard"></i>
                                    <span class="ms-2 d-none">
                                        {{ langSet[lang ? lang : 'en'].menu.copy }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <!--<div v-else class="text-center text-muted">
                                <small>{{ langSet[lang ?? 'en'].textAnalyser.noMeaning || '_NO_MEANING_FOUND_'
                                    }}</small>
                            </div>-->
                </div>
                <hr>
                <div class="d-flex justify-content-between text-muted">
                    <small>
                        {{ langSet[lang ?? 'en'].aboutView.developedBy || '_CREDITS_' }} Barnista
                    </small>
                    <small class="text-end">
                        {{ langSet[lang ?? 'en'].menu.foundIssues || '_FOUND_ISSUES_' }}
                        <router-link class="fw-bold" :to="{ name: 'report-issues', params: { lang: lang } }"
                            target="_blank">
                            {{ langSet[lang ?? 'en'].menu.reportIssues || '_REPORT_ISSUES_' }}
                        </router-link>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

import dbConsonants from '@/services/mon-library/alphabets/db-consonants';
import dbCompoundConsonants from '@/services/mon-library/alphabets/db-compound-consonants';
import dbVowels from '@/services/mon-library/alphabets/db-vowels';
import dbFinalConsonants from '@/services/mon-library/alphabets/db-final-consonants';

import alphabets from '@/services/mon-library/alphabets/alphabets';
import dictionary from '@/services/mon-library/dictionary/dictionary';

export default {
    name: 'CompWordCraft',
    props: {
        lang: {
            type: String,
            default: 'en'
        },
        searchLimit: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            langSet: displayLanguages.langSet,
            consonants: [
                ...dbConsonants.plots(),
            ],
            compoundCosonants: [
                ...dbCompoundConsonants.plots(),
            ],
            vowels: [

                ...dbVowels.plots(),
            ],
            finalConsonants: [
                ...dbFinalConsonants.plots(),
            ],
            sConsonant: 'အ',
            sCompound: '',
            sVowel: 'ော',
            sFinal: 'ပ်',
            craftedWord: null,
            meanings: [],
            copied: false,
            copiedIndex2: null,
        }
    },
    created() {
        dictionary.initDB();
    },
    mounted() {
        this.onCraftWord();
    },
    methods: {
        setLetters(consonant, compound, vowel, final) {
            this.sConsonant = consonant;
            this.sCompound = compound;
            this.sVowel = vowel;
            this.sFinal = final;
            this.onCraftWord();
        },
        onCraftWord() {
            // This method can be used to craft a word based on the selected options
            //const craftedWord = `${this.sConsonant}${this.sCompound}${this.sVowel}${this.sFinal}`;
            //this.craftedWord = alphabetsAi.analyseSingleWord(craftedWord);
            this.craftedWord = alphabets.craftWord2(this.sConsonant, this.sCompound, this.sVowel, this.sFinal);
            console.log(`Crafted Word:`, this.craftedWord);

            this.meanings = dictionary.searchByWord(this.craftedWord.word, true, this.searchLimit, true);
            console.log(`Meanings:`, this.meanings);
        },
        copyToClipboard() {
            if (this.craftedWord) {
                this.copied = true;
                navigator.clipboard.writeText(this.craftedWord.word).then(() => {
                    //alert('Copied to clipboard: ' + text);
                    setTimeout(() => {
                        this.copied = false;
                    }, 3000); // Clear after 2 seconds
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            } else {
                console.warn('No crafted word to copy');
                this.copied = false;
            }
        },
        copyToClipboard2(text, index) {
            this.copiedIndex2 = index;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copiedIndex2 = null;
                }, 5000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        },
        hilightText(text, word) {
            let n_word = word;
            if (text && word) {
                n_word = n_word.replace(text, `<span class="bg-warning">${text}</span>`);
            }
            return n_word;
        },
        displayTranslateTypeTH(type) {
            return dictionary.getTranslateTypeTH(type)
        },
        displayTranslateType(type) {
            return dictionary.getTranslateType(type)
        }
    }
}
</script>

<style>
.headline {
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 700;
    color: #007bff;
    /* Bootstrap primary color */
}

.circle {
    padding: 1px 16px;
}

/* Red border */
.dash {
    border-top: 1px dashed gray;
}
</style>