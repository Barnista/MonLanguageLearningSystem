<template>
    <div class="comp-keyboard-guide">
        <h1>{{ langSet[lang || 'en'].keyboardGuide.title || '_TITLE_' }}</h1>
        <div class="mt-3 mb-4 row">
            <div class="col-12 col-lg-6 text-center">
                <img src="@/assets/imgs/howto/d1-keyboard-concept.jpg"
                    alt="A computer keyboard layout highlighting specific keys for language learning. The keys are labeled with both English and Mon characters. Instructional text explains which keys correspond to Mon letters and how to use shift for additional characters. The environment is a clean digital illustration with a clear and instructional tone."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3 mt-2">
                <h3>1. {{ langSet[lang || 'en'].keyboardGuide.sect1Title || '_SECT_1_TITLE_' }}</h3>
                <p v-html="langSet[lang || 'en'].keyboardGuide.sect1Description" class="ms-4"></p>
                <ol class="">
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect1No1" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect1No2" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect1No3" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect1No4" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect1No5" class="pb-2"></li>
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
            <div class="col-12 col-lg-6 text-start px-md-3 mt-2">
                <h3>2. {{ langSet[lang || 'en'].keyboardGuide.sect2Title || '_SECT_2_TITLE_' }}</h3>
                <p v-html="langSet[lang || 'en'].keyboardGuide.sect2Description" class="ms-4"></p>
                <h5 class="ms-4 mt-3">{{ langSet[lang || 'en'].keyboardGuide.sect2Layer1Title ||
                    '_SECT_2_LAYER_1_' }}</h5>
                <ol class="ms-4">
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect2Layer1No1" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect2Layer1No2" class="pb-2"></li>
                </ol>
                <h5 class="ms-4">{{ langSet[lang || 'en'].keyboardGuide.sect2Layer2Title || '_SECT_2_LAYER_2_' }}
                </h5>
                <ol class="ms-4">
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect2Layer2No1" class="pb-2"></li>
                    <li v-html="langSet[lang || 'en'].keyboardGuide.sect2Layer2No2" class="pb-2"></li>
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
            <div class="col-12 col-lg-6 text-start px-md-3 mt-2">
                <h3>3. {{ langSet[lang || 'en'].keyboardGuide.sect3Title || '_SECT_3_TITLE_' }}</h3>
                <p v-html="langSet[lang || 'en'].keyboardGuide.sect3Description" class="ms-4"></p>
            </div>
        </div>
        <hr>
        <div class="mb-2 row">
            <div class="col-12 col-lg-6">
                <img src="@/assets/imgs/howto/d4-example-keyboard.jpg"
                    alt="A computer keyboard layout highlights specific keys used for typing Mon characters. Instructional text explains which keys correspond to Mon letters and how to use shift for additional characters. The environment is a clean digital workspace with a clear and educational tone."
                    class="w-100 h-auto border rounded shadow mb-3" style="max-width: 600px;">
            </div>
            <div class="col-12 col-lg-6 text-start px-md-3 mt-2">
                <h3>4. {{ langSet[lang || 'en'].keyboardGuide.sect4Title || '_SECT_4_TITLE_' }}</h3>
                <p v-html="langSet[lang || 'en'].keyboardGuide.sect3Description" class="ms-4"></p>
                <ol>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No1"></li>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No2"></li>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No3"></li>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No4"></li>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No5"></li>
                    <li class="mt-2" v-html="langSet[lang || 'en'].keyboardGuide.sect4No6"></li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

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