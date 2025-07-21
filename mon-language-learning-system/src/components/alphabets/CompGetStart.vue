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
        <CompWordCraft ref="compWordCraft" class="mt-4" :lang="lang" />
        <CompTextAnalyser ref="compTextAnalyser" class="mt-4" :lang="lang" />
        <hr>
    </div>
</template>

<script>

import advancedAlphabets from '@/services/mon-library/alphabets/alphabets-ai';
import CompTextAnalyser from '../mini-apps/CompTextAnalyser.vue';
import CompWordCraft from '../mini-apps/CompWordCraft.vue';

export default {
    name: 'CompGetStart',
    components: {
        CompTextAnalyser,
        CompWordCraft
    },
    props: {
        lang: String
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
        this.$refs.compTextAnalyser.setText('သတိသံပဋ္ဌာနံ');
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