<template>
    <div id="final-consonant-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants }} (10)</h2>
        <p class="text-muted">
            {{ langSet[lang ? lang : 'en'].finalConsonantView.description }}
        </p>
        <table>
            <thead>
                <tr>
                    <th>{{ langSet[lang ? lang : 'en'].table.no }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalConsonant }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalSymbol }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalExample }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.other }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in finals2" :key="index">
                    <td class="fs-5">{{ index + 1 }}</td>
                    <td class="fw-bold fs-4 text-muted">{{ item.letter }}</td>
                    <td class="fw-bold fs-4">{{ item.final }}</td>
                    <td class="fs-5">က + {{ item.final }} = {{ craftWord('က', null, null, item.final).word }}</td>
                    <td class="fs-5 text-muted">
                        <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1">
                            🔊 {{ `/${craftWord('က', null, null, item.final).ipa}/` || 'N/A' }}
                        </button>
                        <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                            class="mt-2 ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                            ✅ {{ langSet[lang ? lang : 'en'].menu.copied }}
                        </button>
                        <button v-else class="mt-2 ms-2 btn btn-sm btn-outline-secondary py-0 px-1"
                            @click="copyToClipboard(item.final, index, cIndex)">
                            📋 {{ langSet[lang ? lang : 'en'].menu.copy }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-alphabets';

import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompFinalConsonantTable',
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            finals: [
                monAlphabets.getAllFinalConsonants().slice(0, 5),
                monAlphabets.getAllFinalConsonants().slice(5, 10)
            ],
            finals2: monAlphabets.getAllFinalConsonants()
        }
    },
    mounted() {
        console.log(this.finals);
    },
    methods: {
        craftWord(consonant, compound, vowel, final){
            return monAlphabets.craftWord(consonant, compound, vowel, final)
        },
        copyToClipboard(text, index, cIndex) {
            this.copiedIndex = index;
            this.copiedCIndex = cIndex;
            this.copiedText = text;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copiedBtnIndex = null;
                    this.copiedText = '';
                }, 2000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        },
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background: #f5f5f5;
}
</style>