<template>
    <div class="comp-text-analyser">
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-primary" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="pt-3 px-3 pt-md-4 px-md-4">
                <div class="mb-4">
                    <label for="monInput" class="form-label fw-bold h4">{{ langSet[lang ?? 'en'].textAnalyser.header ||
                        '_HEADER_' }}: <span class="fw-normal text-muted">{{ text || 'NaN' }}</span></label>
                    <div class="input-group mt-2">
                        <button v-if="!isKeyboardShown" @click="showKeyboard()"
                            class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-keyboard"></i>
                        </button>
                        <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-chevron-bar-up"></i>
                        </button>
                        <input id="monInput" v-model="text" @keyup.enter="analyseMonText(text)" type="text"
                            class="form-control form-control-lg"
                            :placeholder="langSet[lang ?? 'en'].textAnalyser.placeholder || '_PLACEHOLDER_'" />
                        <button @click="analyseMonText(text)" type="submit" class="btn btn-primary btn-lg">
                            <i class="bi bi-arrow-return-right"></i>
                            <span class="ms-1 d-none d-md-inline">
                                {{ langSet[lang ?? 'en'].textAnalyser.submitBtn || '_SUBMIT_' }}
                            </span>
                        </button>
                    </div>
                    <div class="accordion-item">
                        <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                            aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionKeyboard`">
                            <div class="accordion-body">
                                <CompSimpleKeyboard v-if="windowWidth > 800" ref="mobileKeyboard" :input="text"
                                    @onChange="onChange" @onKeyPress="onKeyPress" />
                                <CompMobileKeyboard v-if="windowWidth <= 800" ref="mobileKeyboard" :input="text"
                                    @onChange="onChange" @onKeyPress="onKeyPress" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="text-center">
                            <div class="fw-bold text-muted">{{ langSet[lang ?? 'en'].textAnalyser.syllables ||
                                '_SYLLABLES_' }} ({{ syllables.length }}): <span class="fw-normal fs-4">{{ words || 'NaN'
                                    }}</span>
                            </div>
                            <h1 class="mt-2 mb-0">
                                <span v-for="(letter, index) in syllables" :key="index">
                                    <span href="#" class="fs-1 fw-bold text-primary">{{ letter }}</span>
                                    <span v-if="index < (syllables.length - 1)" class="mx-1 text-muted">-</span>
                                </span>
                            </h1>
                            <div v-if="ipas.length <= 1" class="w-100 d-block mt-3 mb-4">
                                <div class="text-center">
                                    <span class="fw-bold">IPA:</span>
                                    <span class="fs-5 ms-2 text-muted">{{ ipa ? `/${ipas[0]}/` : '/NaN/'
                                    }}</span>
                                </div>
                                <div class="text-center">
                                    <span class="fw-bold">TH:</span>
                                    <span class="fs-5 ms-2 text-muted">{{ th ? `/${ths[0]}/` : '/NaN/'
                                    }}</span>
                                </div>
                            </div>
                            <div v-if="ipas.length > 1" id="carouselAutoplaying" class="carousel carousel-dark slide">
                                <div class="carousel-indicators">
                                    <button v-for="(item, index) in ipas" :key="index" type="button"
                                        data-bs-target="#carouselAutoplaying" :data-bs-slide-to="index.toString()"
                                        :class="[(index == 0) ? 'active' : '']"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div v-for="(item, index) in ipas" :key="index"
                                        :class="['carousel-item', (index == 0) ? 'active' : '']">
                                        <div class="w-100 d-block pt-5 pb-5">
                                            <div class="text-center">
                                                <span class="fw-bold">IPA:</span>
                                                <span class="fs-5 ms-2 text-muted">{{ ipa ? `/${item}/` : '/NaN/'
                                                }}</span>
                                            </div>
                                            <div class="text-center">
                                                <span class="fw-bold">TH:</span>
                                                <span class="fs-5 ms-2 text-muted">{{ th ? `/${ths[index]}/` : '/NaN/'
                                                }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button v-if="ipas.length > 1" class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button v-if="ipas.length > 1" class="carousel-control-next" type="button"
                                    data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div class="text-center text-muted">
                            <span class="fw-bold">{{ langSet[lang ?? 'en'].textAnalyser.deconstructed ||
                                '_DECONSTRUCTED_' }} ({{ deconstructed.length }}):</span>
                            <span class="ms-2 text-muted">
                                {{ deconstructed }}
                            </span>
                        </div>
                        <div v-if="text == 'စိုတ်မန်စိုတ်မွဲ'" class="text-center mt-3">
                            <router-link class="btn btn-outline-light bg-fabulous shadow" :to="{ path: '/monland', query: { lang } }"
                                target="_blank">
                                <i class="bi bi-question-diamond"></i>
                                <span class="ms-1">
                                    {{ langSet[lang ?? 'en'].textAnalyser.unlockMonland || '_UNLOCK_MON_RENAISSANCE_' }}
                                </span>
                            </router-link>
                        </div>
                        <div v-if="meanings.length > 0" class="text-muted mt-5 row">
                            <hr>
                            <div class="fw-bold text-center mb-2">
                                {{ langSet[lang ?? 'en'].textAnalyser.meanings ||
                                    '_MEANINGS_' }} ({{ meanings.length }}):
                                <router-link class="ms-1" :to="{ path: '/apps/dictionary', query: { lang, from: 'mon', q: words } }"
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
                                            <span v-html="hilightText(text, mItem.word)"
                                                class="fs-4 text-dark"></span>
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
                                                        <!--<span class="text-success">({{
                                                            (lang == 'th') ? displayTranslateTypeTH(tItem.type) :
                                                                displayTranslateType(tItem.type) }})</span>-->
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
                                            <span v-html="hilightText(text, mItem.word)"
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
                                                        <!--<span class="text-success">({{
                                                            (lang == 'th') ? displayTranslateTypeTH(tItem.type) :
                                                                displayTranslateType(tItem.type) }})</span>-->
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
                                {{ langSet[lang ?? 'en'].textAnalyser.aiBy || '_CREDITS_' }} Barnista
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
        </div>
    </div>
</template>


<script>
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.min';
import advancedAlphabets from '@/services/mon-library/alphabets/alphabets-ai';
import CompSimpleKeyboard from '../keyboard/CompSimpleKeyboard.vue';
import displayLanguages from '@/services/display-languages/display-languages';
//import dictionary from '@/services/mon-library/dictionary/dictionary';
import CompMobileKeyboard from '../keyboard/CompMobileKeyboard.vue';

export default {
    name: 'CompTextAnalyser',
    components: {
        CompSimpleKeyboard,
        CompMobileKeyboard
    },
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
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            text: '',
            words: '',
            deconstructed: [],
            syllables: [],
            meanings: [],
            ipa: '',
            th: '',
            ipas: [],
            ths: [],
            isKeyboardShown: false,
            collapseKeyboard: null,
            copiedIndex2: null,
        }
    },
    created() {
        //dictionary.initDB();
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    },
    mounted() {
        this.collapseKeyboard = new Collapse('#collapseKeyboard', {
            toggle: false
        });
    },
    methods: {
        analyseMonText(text) {
            this.hideKeyboard();

            const result = advancedAlphabets.analyseText(text);
            this.words = result.text;
            this.syllables = result.syllables;
            this.deconstructed = result.deconstructs;
            this.ipa = result.ipa;
            this.th = result.th;

            //multiple pronunciations according to Mon grammatical rules
            this.ipas = result.ipas;
            this.ths = result.ths;

            //this.meanings = dictionary.searchByWord(this.words, true, this.searchLimit, false);
            console.log(result);
        },
        setText(text) {
            this.text = text;
            this.analyseMonText(text);
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
                this.analyseMonText(this.text);
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
            return type
            //return dictionary.getTranslateTypeTH(type)
        },
        displayTranslateType(type) {
            return type
            //return dictionary.getTranslateType(type)
        }
    }
}
</script>