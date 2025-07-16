<template>
    <div id="final-consonant-table">
        <h2>{{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants }} (10)</h2>
        <p v-html="langSet[lang ? lang : 'en'].finalConsonantView.description"></p>
        <table>
            <thead>
                <tr>
                    <th>{{ langSet[lang ? lang : 'en'].table.no }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalConsonant }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalSymbol }}</th>
                    <th>{{ langSet[lang ? lang : 'en'].table.finalExample }}</th>
                    <th><span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span></th>
                    <th>{{ langSet[lang ? lang : 'en'].table.other }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in finalGroups" :key="index">
                    <td class="fs-6">{{ index + 1 }}</td>
                    <td class="fs-4">{{ item.group }}</td>
                    <td class="fw-bold fs-4">
                        <span v-for="(final, cIndex) in item.members" :key="cIndex" class="ms-2">
                            {{ final.final }} <span v-if="cIndex < (item.members.length - 1)"
                                class="text-muted">၊</span>
                        </span>
                    </td>
                    <td class="fs-6 text-muted">က + {{ item.members[0].final }} = {{ craftWord2('က', null, null,
                        item.members[0].final).word
                    }}
                    </td>
                    <td class="fs-6 text-muted">
                        {{ `/${craftWord2('က', null, null, item.members[0].final).ipa}/` || 'NaN' }}
                    </td>
                    <td class="fs-5 text-muted">
                        <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                            class="mt-2 ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                            ✅ {{ langSet[lang ? lang : 'en'].menu.copied }}
                        </button>
                        <button v-else class="mt-2 ms-2 btn btn-sm btn-outline-secondary py-0 px-1"
                            @click="copyToClipboard(item.members[0].final, index, cIndex)">
                            📋 {{ langSet[lang ? lang : 'en'].menu.copy }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div v-for="(item, index) in finalGroups" :key="index" class="accordion mt-4" :id="`accordionNo${index}`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionNo${index}`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseNo${index}`" aria-expanded="false"
                        aria-controls="collapseConsonantTable">
                        <h3 class="text-start">
                            {{ index + 1 }}. {{ langSet[lang ? lang : 'en'].finalConsonantView.group }}
                            <span class="fw-bold">"{{ item.group }}"</span>
                            <span class="text-muted ms-2">{{ `/${craftWord2('က', null, null,
                                item.members[0].final).ipa}/` || 'NaN'
                                }}</span>
                            <span class="text-muted ms-2">{{ `/${item.thGroup}/` }}</span>
                        </h3>
                    </button>
                </h2>
                <div :id="`collapseNo${index}`" class="accordion-collapse collapse"
                    aria-labelledby="headingConsonantTable" :data-bs-parent="`#accordionNo${index}`">
                    <div class="accordion-body">
                        <CompFinalConsonantSection :lang="lang" :item="item" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>

import monAlphabets from '@/services/mon-library/alphabets/alphabets';
import displayLanguages from '@/services/display-languages';
import CompFinalConsonantSection from './CompFinalConsonantSection.vue';

export default {
    name: 'CompFinalConsonantTable',
    components: {
        CompFinalConsonantSection
    },
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            finalGroups: monAlphabets.getAllFinalConsonantGroups(),
        }
    },
    created() {
        
    },
    methods: {
        craftWord(consonant, compound, vowel, final) {
            return monAlphabets.craftWord(consonant, compound, vowel, final)
        },
        craftWord2(consonant, compound, vowel, final) {
            return monAlphabets.craftWord2(consonant, compound, vowel, final)
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