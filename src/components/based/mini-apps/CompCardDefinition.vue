<template>
    <div class="d-flex justify-content-between align-items-start pt-2">
        <div class="ms-2 me-auto">
            <span class="fs-5 me-2">{{ word.id }}.</span>
            <span v-html="hilightText(hilight, word.word)"
                class="fs-3 text-dark"></span>
            <div class="mt-1">
                <span>IPA: <span class="text-muted me-2">{{ `/${word.ipa}/` || 'NaN' }}</span></span>
                <span>TH: <span class="text-muted">{{ `/${word.th}/` || 'NaN'
                }}</span></span>
            </div>
            <div class="my-2">
                <span v-for="(defn, dindex) in definitions" :key="dindex" class="fst-italic me-2">
                    <span class="fw-bold text-success me-1">({{ defn.pos_code }})</span>
                    <span v-html="hilightText(hilight, defn.definition)"></span>
                    <br v-if="dindex%2 != 0">
                </span>
            </div>
            <div class="mt-3">
                <span class="text-muted">
                    <i class="bi bi-feather"></i>
                    {{ word.authorName }}
                </span>
            </div>
        </div>
        <button v-if="isCopied" class="mt-2 ms-1 btn btn-light disabled">
            <i class="bi bi-check-square-fill"></i>
            <span class="ms-2 d-none">
                {{ langSet[lang || 'en'].menu.copied }}
            </span>
        </button>
        <button v-else @click="copyToClipboard(word.word)" class="mt-2 ms-1 btn btn-outline-secondary shadow-sm">
            <i class="bi bi-clipboard"></i>
            <span class="ms-2 d-none">
                {{ langSet[lang || 'en'].menu.copy }}
            </span>
        </button>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import { LangCode } from '@/services/lang-code';

export default {
    name: 'CompCardDefinition',
    props: {
        lang: {
            type: String,
            default: 'en'
        },
        word: {
            type: Object,
            default: () => ({})
        },
        definitions: {
            type: Array,
            default: () => ([])
        },
        hilight: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        isCopied: false,
        langCode: LangCode
    }),
    methods: {
        copyToClipboard(text) {
            this.isCopied = true;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.isCopied = false;
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
    }
}
</script>