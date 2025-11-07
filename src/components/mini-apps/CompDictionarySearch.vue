<template>
    <div class="comp-dictionary-search">
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-danger" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="py-3 px-3 py-md-4 px-md-4">
                <div class="mb-4">
                    <div for="monInput" class="m-auto d-flex justify-content-center">
                        <button v-if="translateFrom == langCode.Mon" class="btn btn-outline-secondary shadow-sm">
                            <img src="@/assets/flags/mon.svg" class="flag">
                            {{ langSet[lang || 'en'].dictionary.translateToMon || '_MON_' }}
                        </button>
                        <div v-else class="btn-group shadow-sm">
                            <button type="button" class="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img v-if="translateFrom == 'eng'" src="@/assets/flags/en_uk.svg" class="flag">
                                <span v-if="translateFrom == 'eng'" class="ms-1">English</span>
                                <img v-if="translateFrom == 'tha'" src="@/assets/flags/thai.svg" class="flag">
                                <span v-if="translateFrom == 'tha'" class="ms-1">ไทย</span>
                                <img v-if="translateFrom == 'mya'" src="@/assets/flags/mya.svg" class="flag">
                                <span v-if="translateFrom == 'mya'" class="ms-1">မြန်မာ</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: 'eng', to: langCode.Mon, q: text } }">
                                        <img src="@/assets/flags/en_uk.svg" class="flag">
                                        English
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: 'tha', to: langCode.Mon, q: text } }">
                                        <img src="@/assets/flags/thai.svg" class="flag">
                                        ไทย
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: 'mya', to: langCode.Mon, q: text } }">
                                        <img src="@/assets/flags/mya.svg" class="flag">
                                        မြန်မာ
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <router-link class="btn btn-outline-danger shadow-sm mx-3 px-3"
                            :to="{ path: '/apps/dictionary', query: { lang, from: translateTo, to: translateFrom, q: text } }">
                            <i class="bi bi-arrow-left-right"></i>
                        </router-link>
                        <button v-if="translateTo == langCode.Mon" class="btn btn-outline-secondary shadow-sm">
                            <img src="@/assets/flags/mon.svg" class="flag">
                            {{ langSet[lang || 'en'].dictionary.translateToMon || '_MON_' }}
                        </button>
                        <div v-else class="btn-group shadow-sm">
                            <button type="button" class="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img v-if="translateTo == 'eng'" src="@/assets/flags/en_uk.svg" class="flag">
                                <span v-if="translateTo == 'eng'" class="ms-1">English</span>
                                <img v-if="translateTo == 'tha'" src="@/assets/flags/thai.svg" class="flag">
                                <span v-if="translateTo == 'tha'" class="ms-1">ไทย</span>
                                <img v-if="translateTo == 'mya'" src="@/assets/flags/mya.svg" class="flag">
                                <span v-if="translateTo == 'mya'" class="ms-1">မြန်မာ</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: langCode.Mon, to: 'eng', q: text } }">
                                        <img src="@/assets/flags/en_uk.svg" class="flag">
                                        English
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: langCode.Mon, to: 'tha', q: text } }">
                                        <img src="@/assets/flags/thai.svg" class="flag">
                                        ไทย
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/apps/dictionary', query: { lang, from: langCode.Mon, to: 'mya', q: text } }">
                                        <img src="@/assets/flags/mya.svg" class="flag">
                                        မြန်မာ
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="input-group mt-4">
                        <button v-if="!isKeyboardShown" @click="showKeyboard()"
                            class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-keyboard"></i>
                        </button>
                        <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                            <i class="bi bi-chevron-bar-up"></i>
                        </button>
                        <input id="monInput" v-model="text" @keyup="submitSearch(text)"
                            @keyup.enter="submitSearch(text)" type="text" class="form-control form-control-lg"
                            :placeholder="langSet[lang ?? 'en'].dictionary.searchPlaceholder || '_PLACEHOLDER_'" />
                        <button @click="submitSearch(text)" type="submit" class="btn btn-danger btn-lg">
                            <i class="bi bi-arrow-return-right"></i>
                            <span class="ms-1 d-none d-md-inline">
                                {{ langSet[lang ?? 'en'].dictionary.searchBtn || '_SEARCH_' }}
                            </span>
                        </button>
                    </div>
                    <div class="accordion-item">
                        <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                            aria-labelledby="headingConsonantTable2" :data-bs-parent="`#accordionKeyboard2`">
                            <div class="accordion-body">
                                <CompSimpleKeyboard v-if="windowWidth > 800" ref="mobileKeyboard" :input="text"
                                    @onChange="onChange" @onKeyPress="onKeyPress" />
                                <CompMobileKeyboard v-if="windowWidth <= 800" ref="mobileKeyboard" :input="text"
                                    @onChange="onChange" @onKeyPress="onKeyPress" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="text-center mt-2">
                        <span v-if="searchResult.length === 0" class="text-muted">{{ langSet[lang ||
                            'en'].dictionary.noResult || '_NO_RESULT_' }}</span>
                        <span v-else class="text-muted">{{ Number(searchResult.length).toLocaleString() }} {{
                            langSet[lang ||
                                'en'].dictionary.found }}.
                            ({{ langSet[lang || 'en'].dictionary.outOf }} {{ count.toLocaleString()
                            }})</span>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between text-muted">
                    <small>
                        <span class="me-1">{{ langSet[lang ?? 'en'].aboutView.poweredBy || '_POWERED_BY_' }}</span>
                        <a class="fw-bold" href="https://github.com/Barnista/MonDictDB" target="_blank">
                            <i class="bi bi-github"></i>
                            MonDictDB
                        </a>
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
        <!--<div class="text-center mt-4">
            <router-link class="fw-bold btn btn-lg btn-outline-danger"
                :to="{ name: 'apply-new-word', params: { lang } }" target="_blank">
                <i class="bi bi-plus-square-dotted"></i>
                {{ langSet[lang ?? 'en'].dictionary.applyNewWord || '_APPLY_NEW_WORD_' }}
            </router-link>
        </div>-->
        <!--<hr>-->
        <div class="mt-5 row">
            <div class="col-12 mb-3 d-flex justify-content-between">
                <h3>{{ langSet[lang || 'en'].dictionary.letterFrom }} က - အ</h3>
                <span class="fs-5 bg-warning rounded shadow px-3 pt-1 pb-2"><span class="fw-bold">{{ text
                }}</span> ({{ searchResult.length.toLocaleString() }})</span>
            </div>
            <div class="col-12">
                <nav aria-label="Search result pages">
                    <ul class="pagination justify-content-center">
                        <li class="page-item shadow-sm">
                            <button class="page-link" @click="changePage(page - 1)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li v-for="p in pageNavs" :key="p.val" class="page-item shadow-sm">
                            <button class="page-link" :class="[(page == p.val) ? 'active' : '']"
                                @click="changePage(p.val)">{{ p.label }}</button>
                        </li>
                        <li class="page-item shadow-sm">
                            <button class="page-link" @click="changePage(page + 1)" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-2 col-md-2 col-lg-1 mb-3 pe-0 pe-md-2">
                <div class="btn-group-vertical d-flex flex-wrap justify-content-center">
                    <router-link v-for="(item, index) in consonants" :key="index"
                        :to="{ path: '/apps/dictionary', query: { lang, from: langCode.Mon, to: (translateTo != langCode.Mon) ? translateTo : 'eng', q: item.letter } }"
                        :class="['btn', (text === item.letter) ? 'btn-warning' : 'btn-success', 'shadow']">
                        <span :class="['fs-5', (text === item.letter) ? 'fw-bold' : '']">{{ item.letter
                            }}</span>
                    </router-link>
                    <router-link v-for="(item, index) in vowels" :key="index"
                        :to="{ path: '/apps/dictionary', query: { lang, from: langCode.Mon, to: (translateTo != langCode.Mon) ? translateTo : 'eng', q: item.letter } }"
                        :class="['btn', (text === item.letter) ? 'btn-warning' : 'btn-secondary', 'shadow']">
                        <span :class="['fs-5', (text === item.letter) ? 'fw-bold' : '']">{{ item.letter
                            }}</span>
                    </router-link>
                </div>
            </div>
            <div class="col-10 col-md-10 col-lg-11 mb-3">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <ul class="list-group shadow-sm">
                            <li v-for="(item) in searchResult1" :key="item.id" class="list-group-item">
                                <CompCardDefinition :lang="lang" :word="item" :definitions="item.definitions"
                                    :hilight="text" />
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6">
                        <ul class="list-group shadow-sm">
                            <li v-for="(item) in searchResult2" :key="item.id" class="list-group-item">
                                <CompCardDefinition :lang="lang" :word="item" :definitions="item.definitions"
                                    :hilight="text" />
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
            <div class="col-12">
                <nav aria-label="Search result pages">
                    <ul class="pagination justify-content-center">
                        <li class="page-item shadow-sm">
                            <button class="page-link" @click="changePage(page - 1)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li v-for="p in pageNavs" :key="p.val" class="page-item shadow-sm">
                            <button class="page-link" :class="[(page == p.val) ? 'active' : '']"
                                @click="changePage(p.val)">{{ p.label }}</button>
                        </li>
                        <li class="page-item shadow-sm">
                            <button class="page-link" @click="changePage(page + 1)" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <hr>
        <div class="text-center mt-4">
            <router-link class="fw-bold btn btn-lg btn-outline-danger"
                :to="{ name: 'apply-new-word', params: { lang: lang } }" target="_blank">
                <i class="bi bi-plus-square-dotted"></i>
                {{ langSet[lang ?? 'en'].dictionary.applyNewWord || '_APPLY_NEW_WORD_' }}
            </router-link>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

import dictionary from '@/services/mon-library/dictionary/dictionary';
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.min';
import dbConsonants from '@/services/mon-library/alphabets/db-consonants';
import dbVowels from '@/services/mon-library/alphabets/db-vowels';
import CompMobileKeyboard from '../keyboard/CompMobileKeyboard.vue';
import CompSimpleKeyboard from '../keyboard/CompSimpleKeyboard.vue';
import { MonDictDB } from '@/services/mon-library/dictionary/mon-dict-db';
import { LangCode } from '@/services/lang-code';
import CompCardDefinition from './CompCardDefinition.vue';
//import DataTable from 'datatables.net-vue3';
//import DataTablesCore from 'datatables.net-bs5';

//DataTable.use(DataTablesCore);

export default {
    name: 'CompDictionarySearch',
    components: {
        CompSimpleKeyboard,
        CompMobileKeyboard,
        CompCardDefinition,
        //DataTable
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        },
        translateFrom: {
            type: String,
            default: 'mnw'
        },
        translateTo: {
            type: String,
            default: 'eng'
        },
        query: {
            type: String,
            default: 'က'
        }
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
            db: null,
            translateLang: 'tha',
            count: 0,
            langCode: LangCode,
            isLoading: false,
            itemsPerPage: 200,
            page: 1,
            pageNavs: [],
            searchResult1: [],
            searchResult2: []
        }
    },
    created() {
        dictionary.initDB();
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });

        this.startDB();
    },
    mounted() {
        this.collapseKeyboard = new Collapse('#collapseKeyboard', {
            toggle: false
        });

        console.log('DataTable', this.$refs.dataTable)
    },
    methods: {
        async startDB() {
            try {
                this.db = await MonDictDB.startDB()
                this.count = await MonDictDB.count(this.db);
                this.searchFromText(this.query, this.translateFrom, this.translateTo)
            } catch (error) {
                console.error(error)
            }
        },
        selectedLang(translateFrom, translateTo) {
            console.log('SELECTED-LANG', translateFrom, translateTo)
            this.searchFromText(this.query, translateFrom, translateTo)
        },
        submitSearch(text) {
            this.$router.push({
                path: '/apps/dictionary',
                query: {
                    lang: this.lang,
                    from: this.translateFrom,
                    to: this.translateTo,
                    q: text
                },
                //force: true
            });
        },
        searchFromText(text, translateFrom, translateTo) {
            this.text = text;
            this.hideKeyboard();

            if (translateFrom == this.langCode.Mon) {
                //this.searchResult = dictionary.searchByWord(text, false, 99, false);
                this.isLoading = true;
                MonDictDB.searchByWord(this.db, text, false, 99, true, translateTo)
                    .then(vals => {
                        this.isLoading = false;
                        this.searchResult = vals;
                        this.calPageNavs()
                        this.changePage(1)
                        console.log('RESULT COUNT', this.searchResult.length)
                    }).catch(error => {
                        this.isLoading = false;
                        console.error('ERR_searchFromText', error)
                    })
            } else {
                //this.searchResult = dictionary.searchByTranslateTH(text, false, 99, false);
                this.isLoading = true;
                MonDictDB.searchByDefinition(this.db, text, false, 99, false, translateFrom)
                    .then(vals => {
                        this.isLoading = false;
                        this.searchResult = vals;
                        this.calPageNavs()
                        this.changePage(1)
                        console.log('RESULT', this.searchResult)
                    }).catch(error => {
                        this.isLoading = false;
                        console.error('ERR_searchFromText', error)
                    })
            }
        },
        calPageNavs() {
            this.pageNavs = []
            //display 2 columns per page
            const pageMax = Math.ceil(this.searchResult.length / (this.itemsPerPage * 1))

            for (let i = 0; i < pageMax; i++) {
                this.pageNavs.push({
                    label: i + 1,
                    val: i + 1
                })
            }
        },
        changePage(page) {
            if (page > 0 && page <= this.pageNavs.length) {
                console.log('PAGE CHANGED', page)
                this.page = page;

                const min1 = Math.ceil((this.page - 1) * this.itemsPerPage)
                const max1 = Math.ceil((this.page - 1) * this.itemsPerPage) + this.itemsPerPage / 2
                const min2 = Math.ceil((this.page - 1) * this.itemsPerPage) + this.itemsPerPage / 2
                const max2 = Math.ceil((this.page - 1) * this.itemsPerPage) + this.itemsPerPage

                console.log('COORDINATE', min1, max1, min2, max2)

                this.searchResult1 = this.searchResult.slice(min1, max1)
                this.searchResult2 = this.searchResult.slice(min2, max2)
            } else {
                console.log('PAGE CHANGE IS OUT OF BOUND')
            }
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
    }
}
</script>

<style>
.flag {
    width: auto;
    height: 28px;
}
</style>