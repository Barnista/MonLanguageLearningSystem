<template>
    <div class="comp-get-start">
        <h2 class="mt-4">Introduction</h2>
        <p>
            The Mon script is an abugida used for writing the Mon language. It is read from left to right, similar to
            the Latin alphabet.
        </p>
        <p>
            Each character represents a consonant with an inherent vowel sound. Vowel signs are added to modify the
            vowel sound, and additional marks are used for tones and other phonetic features.
        </p>
        <p>
            Writing in Mon involves combining consonants and vowel signs to form syllables. The script is cursive and
            rounded, making it visually distinct from other scripts in the region.
        </p>
        <hr>
        <div class="container border rounded shadow py-4 px-4" style="max-width: 800px;">
            <div class="text-center">
                <span class="headline fw-bold text-primary">
                    ခဗဒာယ်
                </span>
                <br>
                <span class="fs-5 text-muted">
                    /kʰaˀpɛ̤ˀta̤i/
                </span>
                <span class="fs-5 text-muted">
                    /ขะเปี่ยต่าย/
                </span>
            </div>
            <div class="d-flex mt-3">
                <select class="p-2 ps-3 form-select form-select-lg mb-3" aria-label="Large select example">
                    <option selected>Cn.</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="fs-2 px-1 text-primary">
                    +
                </div>
                <select class="p-2 ps-3 form-select form-select-lg mb-3" aria-label="Large select example">
                    <option selected>Cp.</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="fs-2 px-1 text-primary">
                    +
                </div>
                <select class="p-2 ps-3 form-select form-select-lg mb-3" aria-label="Large select example">
                    <option selected>Vw.</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="fs-2 px-1 text-primary">
                    +
                </div>
                <select class="p-2 ps-3 form-select form-select-lg mb-3" aria-label="Large select example">
                    <option selected>Fn.</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <CompTextAnalyst ref="compTextAnalyst" class="mt-5" />
        <hr>
    </div>
</template>

<script>

import advancedAlphabets from '@/services/mon-library/alphabets/advanced-alphabets';
import CompTextAnalyst from '../mini-apps/CompTextAnalyst.vue';

export default {
    name: 'CompGetStart',
    components: {
        CompTextAnalyst
    },
    data: () => {
        return {
            words: '',
            deconstructed: [],
            syllables: [],
            ipa: '',
            th: ''
        }
    },
    mounted() {
        this.$refs.compTextAnalyst.setText('သတိသံပဋ္ဌာနံ');
    },
    methods: {
        analyseMonText(text) {
            const result = advancedAlphabets.analyseText(text);
            this.syllables = result.syllables;
            this.deconstructed = result.deconstructs;
            this.ipa = result.ipa;
            this.th = result.th;
            console.log(result);
        },
    }
}
</script>

<style>
.headline {
    font-size: 72pt;
}
</style>