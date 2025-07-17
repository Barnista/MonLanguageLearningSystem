<template>
    <div class="comp-keyboard-guide">
        <h1>{{ langSet[lang ? lang : 'en'].keyboard.howToUse }}:</h1>
        <div class="mt-3 mb-4 row">
            <div class="col-12 col-lg-6 text-center">
                <img src="@/assets/imgs/howto/d1-keyboard-concept.jpg"
                    alt="A computer keyboard layout highlighting specific keys for language learning. The keys are labeled with both English and Mon characters. Instructional text explains which keys correspond to Mon letters and how to use shift for additional characters. The environment is a clean digital illustration with a clear and instructional tone."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3">
                <h3>1. How each menu works?</h3>
                <ol>
                    <li>Keyboard layout</li>
                    <li>Shift buttons</li>
                    <li>Output Textbox</li>
                    <li>Copy text button</li>
                    <li>Keyboard language switches</li>
                </ol>
            </div>
        </div>
        <hr>
        <div class="mt-3 mb-4 row">
            <div class="col-12 col-lg-6">
                <img src="@/assets/imgs/howto/d2-wordcraft-concept.jpg"
                    alt="A digital illustration showing a word crafting interface for language learning. The main focus is a virtual workspace where Mon and English letters are arranged to form words. Instructional text explains how to drag and drop letters to build words in Mon. The background is clean and modern, creating an inviting and educational atmosphere."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3">
                <h3>2. How a Mon word is constructed?</h3>
                <h5 class="mt-3">Layer 1</h5>
                <ol>
                    <li>Consonant</li>
                    <li>Compound Consonant</li>
                </ol>
                <h5>Layer 2</h5>
                <ol>
                    <li>Vowel</li>
                    <li>Final Consonant</li>
                </ol>
            </div>
        </div>
        <hr>
        <div class="mt-3 mb-4 row">
            <div class="col-12 col-lg-6">
                <img src="@/assets/imgs/howto/d3-example-wordcraft.jpg"
                    alt="A virtual wordcraft interface displays Mon and English letters being arranged to form a word. Instructional text reads Drag and drop letters to build Mon words. The workspace is clean and modern, with a friendly and educational atmosphere."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3">
                <h3>3. Let me show you how to construct a word.</h3>
            </div>
        </div>
        <hr>
        <div class="mb-2 row">
            <div class="col-12 col-lg-6">
                <img src="@/assets/imgs/howto/d4-example-keyboard.jpg"
                    alt="A computer keyboard layout highlights specific keys used for typing Mon characters. Instructional text explains which keys correspond to Mon letters and how to use shift for additional characters. The environment is a clean digital workspace with a clear and educational tone."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3">
                <h3>4. Let's type it on the keyboard.</h3>
                <ol>
                    <li>key 1</li>
                    <li>key 2</li>
                    <li>key 3</li>
                    <li>key 4</li>
                    <li>key 5</li>
                    <li>key 6</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompKeyboardGuide',
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet
        }
    }
}
</script>