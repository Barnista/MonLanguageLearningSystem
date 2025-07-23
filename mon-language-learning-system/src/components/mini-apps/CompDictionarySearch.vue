<template>
    <div class="comp-dictionary-search">
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-danger" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="pt-4 px-4">
                <div class="mb-4">
                    <div for="monInput" class="m-auto d-flex justify-content-between" style="max-width: 320px;">
                        <span v-if="translateFrom == 'mon'" class="fs-4">
                            <img src="@/assets/flags/mon.svg" style="width: auto; height: 32px;">
                            Mon
                        </span>
                        <span v-else class="fs-4">
                            <img src="@/assets/flags/thai.svg" style="width: auto; height: 32px;">
                            Thai
                        </span>
                        <span class="fs-4 text-muted">
                            to
                        </span>
                        <span v-if="translateFrom == 'mon'" class="fs-4">
                            <img src="@/assets/flags/thai.svg" style="width: auto; height: 32px;">
                            Thai
                        </span>
                        <span v-else class="fs-4">
                            <img src="@/assets/flags/mon.svg" style="width: auto; height: 32px;">
                            Mon
                        </span>
                        <button class="btn btn-outline-danger" @click="switchTranslate()">
                            <i class="bi bi-arrow-left-right"></i>
                        </button>
                    </div>
                    <div class="input-group mt-3">
                        <button v-if="!isKeyboardShown" @click="showKeyboard()"
                            class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-keyboard"></i>
                        </button>
                        <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-chevron-bar-up"></i>
                        </button>
                        <input id="monInput" v-model="text" @keyup.enter="searchFromText(text)" type="text"
                            class="form-control form-control-lg"
                            :placeholder="langSet[lang ?? 'en'].textAnalyser.placeholder || '_PLACEHOLDER_'" />
                        <button @click="searchFromText(text)" type="submit" class="btn btn-danger btn-lg">
                            <i class="bi bi-arrow-return-right"></i>
                            {{ langSet[lang ?? 'en'].textAnalyser.submitBtn || '_SUBMIT_' }}
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
                    <ol class="list-group list-group-numbered">
                        <li v-for="(item, index) in searchResult" :key="index"
                            class="list-group-item d-flex justify-content-between align-items-start pt-2">
                            <div class="ms-2 me-auto">
                                <span v-html="translateFrom == 'mon' ? hilightText(text, item.word) : item.word"
                                    class="fw-bold fs-4 text-dark"></span>
                                <div class="mt-1">
                                    <span>IPA: <span class="text-muted">{{ `/${item.ipa}/` || 'NaN' }}</span></span>
                                    <br>
                                    <span>TH: <span class="text-muted">{{ `/${item.th}/` || 'NaN' }}</span></span>
                                </div>
                                <div class="my-2">
                                    <span class="fw-bold text-muted me-1">แปล:</span>
                                    <span v-for="(titem, tindex) in item.translates" :key="tindex" class="me-2">
                                        <span class="text-muted">({{
                                            displayTranslateTypeTH(titem.type) }})</span>
                                        <span class="ms-1"
                                            v-html="translateFrom == 'thai' ? hilightText(text, titem.th) : titem.th"></span>
                                    </span>
                                </div>
                            </div>
                            <button class="mt-2 ms-1 btn btn-outline-secondary">
                            <i class="bi bi-clipboard"></i>
                            <span class="ms-2 d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.copy }}
                            </span>
                        </button>
                        </li>
                    </ol>
                    <div class="text-center mt-2">
                        <span class="text-muted">{{ searchResult.length }} word(s) found.</span>
                    </div>
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

export default {
    name: 'CompDictionarySearch',
    components: {
        CompSimpleKeyboard
    },
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            text: '',
            searchResult: [],
            isKeyboardShown: false,
            collapseKeyboard: null,
            translateFrom: 'mon'
        }
    },
    mounted() {
        this.collapseKeyboard = new Collapse('#collapseKeyboard', {
            toggle: false
        });
    },
    methods: {
        selectedLang(lang) {
            this.$refs.simpleKeyboard.switchLang(lang);
        },
        switchTranslate() {
            if (this.translateFrom === 'mon') {
                //switch to thai
                this.translateFrom = 'thai';
            } else {
                //switch to mon
                this.translateFrom = 'mon';
            }
            this.selectedLang(this.translateFrom);
        },
        hilightText(text, word) {
            let n_word = word;
            if (text && word) {
                n_word = n_word.replace(text, `<span class="bg-warning">${text}</span>`);
            }
            return n_word;
        },
        searchFromText(text) {
            this.hideKeyboard();

            if (this.translateFrom == 'mon') this.searchResult = dictionary.searchByWord(text, true, 10, false);
            else this.searchResult = dictionary.searchByTranslateTH(text, true, 10, false);
        },
        setText(text) {
            this.text = text;
            this.searchFromText(text);
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
        }
    }
}
</script>