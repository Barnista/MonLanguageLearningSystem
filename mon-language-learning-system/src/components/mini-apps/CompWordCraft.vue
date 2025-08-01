<template>
    <div class="comp-word-craft">
        <div class="m-auto border rounded shadow" style="max-width: 700px;">
            <div class="bg-success" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="py-4 px-4">
                <div class="text-center">
                    <h1 class="headline mt-3 mb-4 fw-bold text-primary">
                        {{ craftedWord ? craftedWord.word : 'NaN' }}
                    </h1>
                    <span class="ms-2 fs-5 text-muted">
                        {{ craftedWord ? `/${craftedWord.crafted.ipa}/` : '/NaN/' }}
                    </span>
                    <span class="ms-2 fs-5 text-muted">
                        {{ craftedWord ? `/${craftedWord.crafted.th}/` : '/NaN/' }}
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
                        class="py-2 form-select form-select-lg text-light bg-primary" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in consonants" :key="index" :value="item.letter">{{ item.letter }}
                        </option>
                    </select>
                    <div class="fs-2 px-1 text-muted">
                        +
                    </div>
                    <select v-model="sCompound" @change="onCraftWord"
                        class="py-2 form-select form-select-lg text-dark bg-warning" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in compoundCosonants" :key="index" :value="item.compound">{{
                            item.compound }}</option>
                    </select>
                    <div class="fs-2 px-1 text-muted">
                        +
                    </div>
                    <select v-model="sVowel" @change="onCraftWord"
                        class="py-2 form-select form-select-lg text-light bg-success" aria-label="Large select example">
                        <option v-for="(item, index) in vowels" :key="index" :value="item.compound">{{ item.compound ?
                            item.compound : langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <option v-for="(item, index) in vowels" :key="index" :value="item.letter">{{ item.letter ?
                            item.letter : langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                    </select>
                    <div class="fs-2 px-1 text-muted">
                        +
                    </div>
                    <select v-model="sFinal" @change="onCraftWord"
                        class="py-2 form-select form-select-lg text-light bg-danger" aria-label="Large select example">
                        <option value="" selected>{{ langSet[lang].wordCraft.optionNone || '_NONE_' }}</option>
                        <optgroup v-for="(item, index) in finalConsonants" :key="index"
                            :label="`${item.group} (${item.thGroup})`">
                            <option v-for="(member, mIndex) in item.members" :key="mIndex" :value="member.final">{{
                                member.final }}</option>
                        </optgroup>
                    </select>
                </div>
                <div class="text-center mt-3 mb-3">
                    <span class="circle rounded-pill bg-primary shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block1 || '_B1_' }}
                    </span>
                    <span class="circle rounded-pill bg-warning shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block2 || '_B2_' }}
                    </span>
                    <span class="circle rounded-pill bg-success shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block3 || '_B3_' }}
                    </span>
                    <span class="circle rounded-pill bg-danger shadow-sm">
                    </span>
                    <span class="ms-1 me-3 text-muted">
                        = {{ langSet[lang].wordCraft.block4 || '_B4_' }}
                    </span>
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

import alphabetsAi from '@/services/mon-library/alphabets/alphabets-ai';

export default {
    name: 'CompWordCraft',
    props: {
        lang: {
            type: String,
            default: 'en'
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
            sConsonant: 'က',
            sCompound: 'ြ',
            sVowel: 'ော',
            sFinal: 'ပ်',
            craftedWord: null,
            copied: false
        }
    },
    mounted() {
        this.onCraftWord();
    },
    methods: {
        onCraftWord() {
            // This method can be used to craft a word based on the selected options
            const craftedWord = `${this.sConsonant}${this.sCompound}${this.sVowel}${this.sFinal}`;
            this.craftedWord = alphabetsAi.analyseSingleWord(craftedWord);
            console.log(`Crafted Word:`, this.craftedWord);
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
            }else{
                console.warn('No crafted word to copy');
                this.copied = false;
            }
        },
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