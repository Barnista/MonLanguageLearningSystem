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
                    <th><span v-html="langSet[lang ? lang : 'en'].table.pronounciation"></span></th>
                    <th>{{ langSet[lang ? lang : 'en'].table.other }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in finalGroups" :key="index">
                    <td class="fs-5">{{ index + 1 }}</td>
                    <td class="fw-bold fs-4 text-muted">{{ item.group }}</td>
                    <td class="fs-5">
                        <span v-for="(final, cIndex) in item.members" :key="cIndex" class="ms-2">
                            {{ final.final }} <span v-if="cIndex < (item.members.length - 1)"
                                class="text-muted">၊</span>
                        </span>
                    </td>
                    <td class="fs-5">က + {{ item.members[0].final }} = {{ craftWord('က', null, null, item.final).word }}
                    </td>
                    <td class="fs-5">
                        {{ `/${craftWord('က', null, null, item.members[0].final).ipa}/` || 'N/A' }}
                    </td>
                    <td class="fs-5 text-muted">
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
        <hr>
        <div v-for="(item, index) in finalGroups" :key="index" class="mt-4">
            <h3>
                {{ index + 1 }}. {{ langSet[lang ? lang : 'en'].finalConsonantView.group }}
                <span class="fw-bold">"{{ item.group }}"</span>
                <span class="text-muted ms-3">{{ `/${craftWord('က', null, null, item.members[0].final).ipa}/` || 'N/A'
                }}</span>
            </h3>
            <div class="ms-3 mt-1">
                <span class="fw-bold fs-5">{{ item.finalWith.length }} {{ langSet[lang ? lang :
                    'en'].learnAlphabets.vowels }}</span>
                <span class="ms-1">{{ langSet[lang ? lang : 'en'].finalConsonantView.groupDescription1 }}</span>
                <span class="ms-1 fw-bold">{{ langSet[lang ? lang : 'en'].finalConsonantView.group }} "{{ item.group }}"
                </span>
                <span>{{ langSet[lang ? lang : 'en'].finalConsonantView.groupDescription2 }}</span>
                <span v-for="(vowel, vIndex) in item.finalWith" :key="vIndex" class="fw-bold fs-5 ms-2">
                    {{ vowel ? vowel : '-' }}<span>,</span>
                </span>
            </div>
            <div class="row mt-2">
                <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                    <div class="ms-3 mt-1">
                        <span class="fw-bold fs-5">{{ item.members.length }} {{ langSet[lang ? lang :
                            'en'].finalConsonantView.groupDescription3 }}</span>
                        <span class="ms-1">{{ langSet[lang ? lang : 'en'].finalConsonantView.groupDescription4 }}</span>
                        <span v-for="(final, cIndex) in item.members" :key="cIndex" class="ms-2 fw-bold fs-5">
                            {{ final.final }} <span v-if="cIndex < (item.members.length - 1)"
                                class="text-muted">၊</span>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                    <select v-model="selectedFinals[index]"
                        class="form-select text-success w-full fs-5 fw-bold text-center">
                        <option value="" selected>{{ langSet[lang ? lang : 'en'].menu.tryFinalConsonant }}</option>
                        <option v-for="(final, zIndex) in item.members" :key="zIndex" :value="zIndex">
                            {{ final.final }}
                        </option>
                    </select>
                </div>
            </div>
            <table class="my-2">
                <thead>
                    <tr>
                        <td v-for="(row, kIndex) in item.finalWith" :key="kIndex" class="bg-light"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="(vowel, kIndex) in item.finalWith" :key="kIndex">
                            <div>
                                <span class="fs-3 fw-bold">
                                    {{ craftWord('က', null, vowel, item.members[selectedFinals[index]].final).word ||
                                        'N/A' }}
                                </span>
                                <br>
                                <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </div>
                            <div class="mt-2">
                                <span class="text-muted">
                                    /{{ craftWord('က', null, vowel, item.members[selectedFinals[index]].final).ipa ||
                                        'N/A' }}/
                                </span>
                                <br>
                                <span v-if="craftWord('က', null, vowel, item.members[selectedFinals[index]].final).ipa2"
                                    class="text-muted">
                                    /{{ craftWord('က', null, vowel, item.members[selectedFinals[index]].final).ipa2 ||
                                        'N/A'
                                    }}/
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(vowel, kIndex) in item.finalWith" :key="kIndex">
                            <div>
                                <span class="fs-3 fw-bold">
                                    {{ craftWord('ဂ', null, vowel, item.members[selectedFinals[index]].final).word ||
                                        'N/A' }}
                                </span>
                                <br>
                                <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                            </div>
                            <div class="mt-2">
                                <span class="text-muted">
                                    /{{ craftWord('ဂ', null, vowel, item.members[selectedFinals[index]].final).ipa ||
                                        'N/A' }}/
                                </span>
                                <br>
                                <span v-if="craftWord('ဂ', null, vowel, item.members[selectedFinals[index]].final).ipa2"
                                    class="text-muted">
                                    /{{ craftWord('ဂ', null, vowel, item.members[selectedFinals[index]].final).ipa2 ||
                                        'N/A'
                                    }}/
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>
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
            finalGroups: monAlphabets.getAllFinalConsonantGroups(),
            selectedFinals: []
        }
    },
    created() {
        for (let i = 0; i < this.finalGroups.length; i++) {
            this.selectedFinals.push(0);
        }
    },
    methods: {
        craftWord(consonant, compound, vowel, final) {
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