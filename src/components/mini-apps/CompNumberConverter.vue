<template>
    <div class="comp-number-converter">
        <div class="m-auto border rounded shadow" style="max-width: 800px;">
            <div class="bg-warning" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="px-3 pt-3 pb-3">
                <h4>Num Converter (Mon-Thai-Arabic)</h4>
                <p>Please insert any number on any input to see results.</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" style="width: 88px;">#Arabic</span>
                    <input type="text" class="form-control" v-model="arabicNum" @keyup="convertFromArabic"
                        placeholder="1,057,314.573">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" style="width: 88px;">#Thai</span>
                    <input type="text" class="form-control" v-model="thaiNum" @keyup="convertFromThai"
                        placeholder="๑,๐๕๗,๓๑๔.๕๗๓">
                </div>
                <div class="input-group input-group-lg mb-3">
                    <span class="input-group-text fw-bold" style="width: 88px;">#Mon</span>
                    <input type="text" class="form-control fw-bold text-primary" v-model="monNum"
                        @keyup="convertFromMon" placeholder="၁၀၅၇၃၁၄.၅၇၃">
                </div>
                <hr>
                <div class="text-center mt-3 pb-3">
                    <h4 class="h1 text-primary mb-3">{{ numResult ? numResult.monNum : 'NaN' }}</h4>
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
import dbNumerals from '@/services/mon-library/alphabets/db-numerals';

export default {
    name: 'CompNumberConverter',
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
        numResult: null
    }),
    methods: {
        convertFromMon() {
            this.numResult = dbNumerals.convertFromMon(this.monNum);
            this.monNum = this.numResult.monNum;
            this.thaiNum = this.numResult.thaiNum;
            this.arabicNum = this.numResult.arabicNum;
        },
        convertFromThai() {
            this.numResult = dbNumerals.convertFromThai(this.thaiNum);
            this.monNum = this.numResult.monNum;
            this.thaiNum = this.numResult.thaiNum;
            this.arabicNum = this.numResult.arabicNum;
        },
        convertFromArabic() {
            this.numResult = dbNumerals.convertFromArabic(this.arabicNum);
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
        }
    }
}
</script>