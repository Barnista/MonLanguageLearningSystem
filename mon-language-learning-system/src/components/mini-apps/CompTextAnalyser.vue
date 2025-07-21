<template>
    <div class="comp-text-analyser">
        <div class="m-auto border rounded shadow" style="max-width: 900px;">
            <div class="bg-primary" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
            </div>
            <div class="pt-4 px-4">
                <div class="mb-4">
                    <label for="monInput" class="form-label fw-bold h4">{{ langSet[lang ?? 'en'].textAnalyser.header ||
                        '_HEADER_' }}:</label>
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
                            {{ langSet[lang ?? 'en'].textAnalyser.submitBtn || '_SUBMIT_' }}
                        </button>
                    </div>
                    <div class="accordion-item">
                        <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                            aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionKeyboard`">
                            <div class="accordion-body">
                                <CompSimpleKeyboard :input="text" @onChange="onChange" @onKeyPress="onKeyPress" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="text-center">
                            <div class="fw-bold text-muted">{{ langSet[lang ?? 'en'].textAnalyser.syllables ||
                                '_SYLLABLES_' }} ({{ syllables.length }}): <span class="fs-5">{{ text || 'NaN' }}</span></div>
                            <h1 class="mt-2 mb-3">
                                <span v-for="(letter, index) in syllables" :key="index">
                                    <span href="#" class="h1 fw-bold text-primary">{{ letter }}</span>
                                    <span v-if="index < (syllables.length - 1)" class="mx-1 text-muted">-</span>
                                </span>
                            </h1>
                            <div class="text-center">
                                <span class="fw-bold">IPA:</span>
                                <span class="fs-5 ms-2 text-muted">{{ ipa ? `/${ipa}/` : '/NaN/' }}</span>
                            </div>
                            <div class="text-center">
                                <span class="fw-bold">TH:</span>
                                <span class="fs-5 ms-2 text-muted">{{ th ? `/${th}/` : '/NaN/' }}</span>
                            </div>
                        </div>
                        <div class="text-center text-muted mt-5">
                            <span class="fw-bold">{{ langSet[lang ?? 'en'].textAnalyser.deconstructed ||
                                '_DECONSTRUCTED_' }} ({{ deconstructed.length }}):</span>
                            <span class="ms-2 text-muted">
                                {{ deconstructed }}
                            </span>
                        </div>
                        <div class="text-end text-muted">
                            <hr>
                            <small>
                                {{ langSet[lang ?? 'en'].textAnalyser.aiBy || '_CREDITS_' }} Barnista
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

export default {
    name: 'CompTextAnalyser',
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
            deconstructed: [],
            syllables: [],
            ipa: '',
            th: '',
            isKeyboardShown: false,
            collapseKeyboard: null
        }
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
            this.syllables = result.syllables;
            this.deconstructed = result.deconstructs;
            this.ipa = result.ipa;
            this.th = result.th;
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
    }
}
</script>