<template>
    <div class="comp-get-start">
        <div class="mt-4">
            <h2>Get Start</h2>
            <p>
                The Mon alphabet represents a writing system of significant historical and typological interest in
                Southeast Asia. It is derived from the ancient Brahmi script lineage and has been instrumental in the
                transmission of Theravāda Buddhist texts and Mon cultural heritage.
            </p>
            <p>
                Historically, it has influenced neighboring scripts such as Burmese and Thai, while maintaining its own
                distinct phonological and orthographic features.
            </p>
        </div>
        <hr>
        <div class="mt-4">
            <h4>Craft a Word by Yourselves</h4>
            <CompWordCraft ref="compWordCraft" class="mt-4" :lang="lang" />
        </div>
        <hr>
        <div class="mt-4">
            <h3>Introducing Mon Alphabets AI</h3>
            <p>To help you study the Mon language with latest technology. Trained with every grammatical rules. Simply,
                just type in any Mon word and it will analyse for you on; how to pronounce, and how to see
                syllable-by-syllable.</p>
            <CompTextAnalyser ref="compTextAnalyser" class="mt-4" :lang="lang" />
        </div>
        <hr>
        <div class="mt-4">
            <h4>Script Type</h4>
            <ul>
                <li>
                    The Mon script is classified <a href="https://en.wikipedia.org/wiki/Abugida" target="_blank"
                        class="fw-bold">abugida</a>,
                    wherein each consonantal character inherently includes a vowel sound unless modified.
                </li>
                <li>
                    The writing direction is <strong>left to right</strong>, in horizontal rows.
                </li>
            </ul>
        </div>
        <hr>
        <div class="mt-4">
            <h3>Writing System & Alphabetical Structure</h3>
            <div class="row mt-3">
                <div class="col-12 col-lg-6 mb-2">
                    <img src="@/assets/imgs/howto/d2-wordcraft-concept.jpg"
                        alt="A digital illustration showing a word crafting interface for language learning. The main focus is a virtual workspace where Mon and English letters are arranged to form words. Instructional text explains how to drag and drop letters to build words in Mon. The background is clean and modern, creating an inviting and educational atmosphere."
                        class="w-100 h-auto border rounded shadow mb-3">
                </div>
                <div class="col-12 col-lg-6 mb-2">
                    <ol class="fs-5 fw-bold">
                        <li>Consonants</li>
                        <li>Compound Consonants</li>
                        <li>Vowels</li>
                        <li>Final Consonants</li>
                        <li>Double Consonants</li>
                    </ol>
                </div>
            </div>
        </div>
        <hr>
        <div class="mt-4">
            <h4>Comparison to Khmer, Thai, and Burmese</h4>
            <p>
                ...(content)...
            </p>
        </div>
        <hr>
        <div class="mt-4">
            <h4>Cultural & National Identity Preservation</h4>
            <p>
                ...(content)...
            </p>
        </div>
        <hr>
        <div class="mt-4">
            <h4>Fun Facts</h4>
            <ul>
                <li>
                    <strong>Mon language</strong>, unlike Thai language, is a <strong>non-tonal language</strong>
                    meaning changes in pitch (how high or low the voice is) do not change the meaning of a word.
                </li>
                <li>
                    There are at least <strong>697 Mon words</strong> that have <strong>influenced Thai words</strong>
                    til this day.
                </li>
            </ul>
        </div>
        <hr>
        <div class="mt-4">
            <h4>References</h4>
            <ol>
                <li>Mon language. (2025, July 21). In <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank"
                        class="fw-bold text-success">Wikipedia</a>. <a href="https://en.wikipedia.org/wiki/Mon_language"
                        target="_blank">https://en.wikipedia.org/wiki/Mon_language</a>.</li>
                <li>ภาษามอญ. (2025, July 21). In <a
                        href="https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81"
                        target="_blank" class="fw-bold text-success">Wikipedia</a>. <a
                        href="https://th.wikipedia.org/wiki/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%8D"
                        target="_blank">https://th.wikipedia.org/wiki/ภาษามอญ</a>.</li>
                <li>Abugida. (2025, July 21). In <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank"
                        class="fw-bold text-success">Wikipedia</a>. <a href="https://en.wikipedia.org/wiki/Abugida"
                        target="_blank">https://en.wikipedia.org/wiki/Abugida</a>.</li>
            </ol>
        </div>
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