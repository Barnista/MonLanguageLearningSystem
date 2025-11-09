<template>
    <div class="comp-number-converter">
        <div class="m-auto border rounded shadow" style="max-width: 800px;">
            <div class="bg-warning" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="px-3 pt-3 pb-3">
                <h4>{{ langSet[lang || 'en'].numConverter.title || '_TITLE_' }}</h4>
                <p>{{ langSet[lang || 'en'].numConverter.description || '_DESCRIPTION_' }}</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" style="width: 128px;">{{ langSet[lang || 'en'].numConverter.arabic
                        }}</span>
                    <input type="text" class="form-control" v-model="arabicNum" @keyup="convertFromArabic"
                        placeholder="1,057,314.573">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" style="width: 128px;">{{ langSet[lang || 'en'].numConverter.thai
                        }}</span>
                    <input type="text" class="form-control" v-model="thaiNum" @keyup="convertFromThai"
                        placeholder="๑,๐๕๗,๓๑๔.๕๗๓">
                </div>
                <div class="input-group input-group">
                    <span class="input-group-text" style="width: 128px;">{{ langSet[lang ||
                        'en'].numConverter.mon }}</span>
                    <input type="text" class="form-control text-success" v-model="monNum"
                        @keyup="convertFromMon" placeholder="၁၀၅၇၃၁၄.၅၇၃">
                    <button v-if="!isKeyboardShown" @click="showKeyboard()"
                        class="btn btn-outline-light bg-fabulous btn-lg">
                        <i class="bi bi-calculator"></i>
                    </button>
                    <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                        <i class="bi bi-chevron-bar-up"></i>
                    </button>
                </div>
                <div class="accordion-item">
                    <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                        aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionKeyboard`">
                        <div class="accordion-body">
                            <CompNumpadKeyboard :input="monNum" @onChange="onChange" @onKeyPress="onKeyPress" />
                        </div>
                    </div>
                </div>
                <hr>
                <div class="text-center mt-3 pb-3">
                    <h4 class="h1 fs-1 text-success mb-3">
                        {{ numResult ? numResult.monNum : 'NaN' }}
                        <button v-if="copied" class="ms-2 btn btn-sm btn-light py-1 px-2 disabled">
                            <i class="bi bi-check-lg me-1"></i>
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.copied }}
                            </span>
                        </button>
                        <button v-else class="ms-2 btn btn-sm btn-outline-secondary py-1 px-2"
                            @click="copyToClipboard()">
                            <i class="bi bi-clipboard me-1"></i>
                            <span class="d-none d-md-inline">
                                {{ langSet[lang ? lang : 'en'].menu.copy }}
                            </span>
                        </button>
                    </h4>
                    <h4 class="mb-2">{{ numResult ? numResult.spelling : 'NaN' }}</h4>
                    <span class="fs-6"><span class="fw-bold">IPA: </span><span class="text-muted">{{ numResult ?
                        `/${numResult.ipa}/` : 'NaN'
                            }}</span></span>
                    <br>
                    <span class="fs-6"><span class="fw-bold">TH: </span><span class="text-muted">{{ numResult ?
                        `/${numResult.th}/` : 'NaN'
                            }}</span></span>
                </div>
                <hr>
                <div class="d-flex justify-content-between text-muted">
                    <small>
                        {{ langSet[lang || 'en'].aboutView.developedBy || '_CREDITS_' }} Barnista
                    </small>
                    <small class="text-end">
                        {{ langSet[lang || 'en'].menu.foundIssues || '_FOUND_ISSUES_' }}
                        <router-link class="fw-bold" :to="{ name: 'report-issues', params: { lang: lang } }"
                            target="_blank">
                            {{ langSet[lang || 'en'].menu.reportIssues || '_REPORT_ISSUES_' }}
                        </router-link>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import dbNumerals from '@/services/mon-library/alphabets/db-numerals';
import CompNumpadKeyboard from '../keyboard/CompNumpadKeyboard.vue';
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.min';

export default {
    name: 'CompNumberConverter',
    components: {
        CompNumpadKeyboard
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        dbNumerals,
        monNum: '',
        thaiNum: '',
        arabicNum: '',
        numResult: null,
        isKeyboardShown: false,
        collapseKeyboard: null,
        copied: null,
    }),
    mounted() {
        this.collapseKeyboard = new Collapse('#collapseKeyboard', {
            toggle: false
        });
    },
    methods: {
        convertFromMon() {
            this.numResult = dbNumerals.convertFromMon(this.monNum, true);
            this.monNum = this.numResult.monNum;
            this.thaiNum = this.numResult.thaiNum;
            this.arabicNum = Number(this.numResult.arabicNum).toLocaleString();
        },
        convertFromThai() {
            this.numResult = dbNumerals.convertFromThai(this.thaiNum, true);
            this.monNum = this.numResult.monNum;
            this.thaiNum = this.numResult.thaiNum;
            this.arabicNum = Number(this.numResult.arabicNum).toLocaleString();
        },
        convertFromArabic() {
            this.numResult = dbNumerals.convertFromArabic(this.arabicNum, true);
            this.monNum = this.numResult.monNum;
            this.thaiNum = this.numResult.thaiNum;
            this.arabicNum = this.numResult.arabicNum;
        },
        setMonNum(monNum) {
            this.monNum = monNum;
            this.convertFromMon();
        },
        setThaiNum(thaiNum) {
            this.thaiNum = thaiNum;
            this.convertFromThai();
        },
        setArabicNum(arabicNum) {
            this.arabicNum = arabicNum;
            this.convertFromArabic();
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
            this.monNum = input;
            this.convertFromMon();
        },
        onKeyPress(button) {
            console.log("button", button);
        },
        copyToClipboard() {
            this.copied = true;
            navigator.clipboard.writeText(this.monNum).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copied = false;
                }, 5000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        },
    }
}
</script>