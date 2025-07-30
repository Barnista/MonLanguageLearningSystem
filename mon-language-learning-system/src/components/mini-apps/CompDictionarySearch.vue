<template>
    <div class="comp-dictionary-search">
        <h1 class="mb-4">{{ langSet[lang || 'en'].dictionary.title || '_DICT_' }} {{ langSet[lang ||
            'en'].dictionary.translateToMon || '_MON_' }} - {{ langSet[lang || 'en'].dictionary.translateToThai ||
                '_THAI_' }}</h1>
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-danger" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="pt-4 px-4">
                <div class="mb-4">
                    <div for="monInput" class="m-auto d-flex justify-content-between" style="max-width: 340px;">
                        <span v-if="translateFrom == 'mon'" class="fs-4">
                            <img src="@/assets/flags/mon.svg" style="width: auto; height: 32px;">
                            {{ langSet[lang || 'en'].dictionary.translateToMon || '_MON_' }}
                        </span>
                        <span v-else class="fs-4">
                            <img src="@/assets/flags/thai.svg" style="width: auto; height: 32px;">
                            {{ langSet[lang || 'en'].dictionary.translateToThai || '_THAI_' }}
                        </span>
                        <span class="fs-4 text-muted">
                            {{ langSet[lang || 'en'].dictionary.translateTo || '_TO_' }}
                        </span>
                        <span v-if="translateFrom == 'mon'" class="fs-4">
                            <img src="@/assets/flags/thai.svg" style="width: auto; height: 32px;">
                            {{ langSet[lang || 'en'].dictionary.translateToThai || '_THAI_' }}
                        </span>
                        <span v-else class="fs-4">
                            <img src="@/assets/flags/mon.svg" style="width: auto; height: 32px;">
                            {{ langSet[lang || 'en'].dictionary.translateToMon || '_MON_' }}
                        </span>
                        <router-link class="btn btn-outline-danger"
                            :to="`/apps/dictionary?lang=${lang}&from=${(translateFrom === 'mon') ? 'thai' : 'mon'}&q=${text}`">
                            <i class="bi bi-arrow-left-right"></i>
                        </router-link>
                    </div>
                    <div class="input-group mt-4">
                        <button v-if="!isKeyboardShown" @click="showKeyboard()"
                            class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-keyboard"></i>
                        </button>
                        <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-chevron-bar-up"></i>
                        </button>
                        <input id="monInput" v-model="text" @keyup.enter="submitSearch(text)" type="text"
                            class="form-control form-control-lg"
                            :placeholder="langSet[lang ?? 'en'].dictionary.searchPlaceholder || '_PLACEHOLDER_'" />
                        <button @click="submitSearch(text)" type="submit" class="btn btn-danger btn-lg">
                            <i class="bi bi-arrow-return-right"></i>
                            {{ langSet[lang ?? 'en'].dictionary.searchBtn || '_SEARCH_' }}
                        </button>
                    </div>
                    <div class="accordion-item">
                        <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                            aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionKeyboard`">
                            <div class="accordion-body">
                                <CompSimpleKeyboard ref="simpleKeyboard" :input="text" @onChange="onChange"
                                    @onKeyPress="onKeyPress" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="text-center mt-2">
                        <span v-if="searchResult.length === 0" class="text-muted">{{ langSet[lang ||
                            'en'].dictionary.noResult || '_NO_RESULT_' }}</span>
                        <span v-else class="text-muted">{{ searchResult.length }} {{ langSet[lang ||
                            'en'].dictionary.found }}.
                            ({{ langSet[lang || 'en'].dictionary.outOf }} {{ wordCount }})</span>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="mt-5 row">
            <div class="col-12 mb-3 d-flex justify-content-between">
                <h2>{{ langSet[lang || 'en'].dictionary.letterFrom }} အ - ဩ</h2>
                <span class="fs-4 bg-warning rounded shadow px-3 pt-1 pb-2"><span class="fw-bold">{{ text
                }}</span> ({{ searchResult.length }})</span>
            </div>
            <div class="col-2 col-lg-1 mb-3">
                <div class="btn-group-vertical d-flex flex-wrap justify-content-center">
                    <router-link v-for="(item, index) in consonants" :key="index"
                        :to="`/apps/dictionary?lang=${lang}&from=${translateFrom}&q=${item.letter}`"
                        :class="['btn', (searchText === item.letter) ? 'btn-warning' : 'btn-success', 'shadow']">
                        <span :class="['fs-5', (searchText === item.letter) ? 'fw-bold' : '']">{{ item.letter
                            }}</span>
                    </router-link>
                    <router-link v-for="(item, index) in vowels" :key="index"
                        :to="`/apps/dictionary?lang=${lang}&from=${translateFrom}&q=${item.letter}`"
                        :class="['btn', (searchText === item.letter) ? 'btn-warning' : 'btn-secondary', 'shadow']">
                        <span :class="['fs-5', (searchText === item.letter) ? 'fw-bold' : '']">{{ item.letter
                            }}</span>
                    </router-link>
                </div>
            </div>
            <div class="col-10 col-lg-11 mb-3">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <ul class="list-group">
                            <li v-for="(item, index) in searchResult.slice(0, Math.ceil(searchResult.length / 2))"
                                :key="index"
                                class="list-group-item d-flex justify-content-between align-items-start pt-2">
                                <div class="ms-2 me-auto">
                                    <span class="fs-5 me-2">{{ item.no }}.</span>
                                    <span v-html="translateFrom == 'mon' ? hilightText(text, item.word) : item.word"
                                        class="fw-bold fs-4 text-dark"></span>
                                    <div class="mt-1">
                                        <span>IPA: <span class="text-muted">{{ `/${item.ipa}/` || 'NaN' }}</span></span>
                                        <span class="ms-3">TH: <span class="text-muted">{{ `/${item.th}/` || 'NaN'
                                        }}</span></span>
                                    </div>
                                    <div class="my-2">
                                        <span class="text-muted me-1">{{ langSet[lang || 'en'].dictionary.meanings }}:</span>
                                        <span v-for="(titem, tindex) in item.translates" :key="tindex">
                                            <span v-if="titem.type" class="me-2 fst-italic">
                                                <span class="text-success">({{
                                                    (lang == 'th') ? displayTranslateTypeTH(titem.type) : displayTranslateType(item.type) }})</span>
                                                <span class="ms-1 fw-bold"
                                                    v-html="translateFrom == 'thai' ? hilightText(text, titem.th) : titem.th"></span>
                                                <span class="ms-1 text-muted">|</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <button v-if="copiedIndex2 == item.no" class="mt-2 ms-1 btn btn-light disabled">
                                    <i class="bi bi-check-square-fill"></i>
                                    <span class="ms-2 d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.copied }}
                                    </span>
                                </button>
                                <button v-else @click="copyToClipboard2(item.word, item.no)"
                                    class="mt-2 ms-1 btn btn-outline-secondary">
                                    <i class="bi bi-clipboard"></i>
                                    <span class="ms-2 d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.copy }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6">
                        <ul class="list-group">
                            <li v-for="(item, index) in searchResult.slice(Math.ceil(searchResult.length / 2), searchResult.length)"
                                :key="index"
                                class="list-group-item d-flex justify-content-between align-items-start pt-2">
                                <div class="ms-2 me-auto">
                                    <span class="fs-5 me-2">{{ item.no }}.</span>
                                    <span v-html="translateFrom == 'mon' ? hilightText(text, item.word) : item.word"
                                        class="fw-bold fs-4 text-dark"></span>
                                    <div class="mt-1">
                                        <span>IPA: <span class="text-muted">{{ `/${item.ipa}/` || 'NaN' }}</span></span>
                                        <span class="ms-3">TH: <span class="text-muted">{{ `/${item.th}/` || 'NaN'
                                        }}</span></span>
                                    </div>
                                    <div class="my-2">
                                        <span class="text-muted me-1">{{ langSet[lang || 'en'].dictionary.meanings }}:</span>
                                        <span v-for="(titem, tindex) in item.translates" :key="tindex">
                                            <span v-if="titem.type" class="me-2 fst-italic">
                                                <span class="text-success">({{
                                                    (lang == 'th') ? displayTranslateTypeTH(titem.type) : displayTranslateType(item.type) }})</span>
                                                <span class="ms-1 fw-bold"
                                                    v-html="translateFrom == 'thai' ? hilightText(text, titem.th) : titem.th"></span>
                                                <span class="ms-1 text-muted">|</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <button v-if="copiedIndex2 == item.no" class="mt-2 ms-1 btn btn-light disabled">
                                    <i class="bi bi-check-square-fill"></i>
                                    <span class="ms-2 d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.copied }}
                                    </span>
                                </button>
                                <button v-else @click="copyToClipboard2(item.word, item.no)"
                                    class="mt-2 ms-1 btn btn-outline-secondary">
                                    <i class="bi bi-clipboard"></i>
                                    <span class="ms-2 d-none d-md-inline">
                                        {{ langSet[lang ? lang : 'en'].menu.copy }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center mt-2">
                    <span v-if="searchResult.length === 0" class="text-muted">{{ langSet[lang ||
                        'en'].dictionary.noResult || '_NO_RESULT_' }}</span>
                    <span v-else class="text-muted">{{ searchResult.length }} {{ langSet[lang || 'en'].dictionary.found
                        }}.
                        ({{ langSet[lang || 'en'].dictionary.outOf }} {{ wordCount }})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import CompSimpleKeyboard from '../keyboard/CompSimpleKeyboard.vue';

import dictionary from '@/services/mon-library/dictionary/dictionary';
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.min';
import dbConsonants from '@/services/mon-library/alphabets/db-consonants';
import dbVowels from '@/services/mon-library/alphabets/db-vowels';

export default {
    name: 'CompDictionarySearch',
    components: {
        CompSimpleKeyboard
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        },
        translateFrom: {
            type: String,
            default: 'mon'
        },
        searchText: {
            type: String,
            default: 'အ'
        },
    },
    data: () => {
        return {
            consonants: dbConsonants.plots(),
            vowels: dbVowels.plots(),
            langSet: displayLanguages.langSet,
            searchResult: [],
            isKeyboardShown: false,
            collapseKeyboard: null,
            text: '',
            letter: '',
            wordCount: dictionary.count(),
            copiedIndex: null,
            copiedIndex2: null,
        }
    },
    mounted() {
        this.collapseKeyboard = new Collapse('#collapseKeyboard', {
            toggle: false
        });
    },
    methods: {
        copyToClipboard(text, index) {
            this.copiedIndex = index;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copiedIndex = null;
                }, 5000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
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
        selectedLang(lang) {
            this.$refs.simpleKeyboard.switchLang(lang);
        },
        hilightText(text, word) {
            let n_word = word;
            if (text && word) {
                n_word = n_word.replace(text, `<span class="bg-warning">${text}</span>`);
            }
            return n_word;
        },
        submitSearch(text) {
            this.$router.push({
                path: '/apps/dictionary',
                query: {
                    lang: this.lang,
                    from: this.translateFrom,
                    q: text
                },
                //force: true
            });
        },
        searchFromText(text) {
            console.log('searchFromText', text);
            this.text = text;
            this.hideKeyboard();

            if (this.translateFrom == 'mon') this.searchResult = dictionary.searchByWord(text, false, 99, false);
            else this.searchResult = dictionary.searchByTranslateTH(text, false, 99, false);
        },
        searchFromLetter(letter) {
            console.log('searchFromLetter', letter);
            this.text = letter;
            this.hideKeyboard();

            if (this.translateFrom == 'mon') this.searchResult = dictionary.searchByWord(letter, false, 0, true);
            else this.searchResult = dictionary.searchByTranslateTH(letter, false, 0, true);
        },
        showKeyboard() {
            this.isKeyboardShown = true;
            this.collapseKeyboard.show();
        },
        hideKeyboard() {
            this.isKeyboardShown = false;
            this.collapseKeyboard.hide();
        },
        onChange(input) {
            this.text = input;
        },
        onKeyPress(button) {
            console.log("button", button);
            if (button === '{enter}') {
                this.searchFromText(this.text);
            }
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