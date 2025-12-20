<template>
    <div class="comp-final-consonant-section">
        <div class="ms-3 mt-1">
            <span class="fs-5">{{ item.finalWith.length }} {{ langSet[lang ? lang :
                'en'].learnAlphabets.vowels }}</span>
            <span class="ms-1">{{ langSet[lang || 'en'].finalConsonantView.groupDescription1 }}</span>
            <span class="ms-1 fw-bold">{{ langSet[lang || 'en'].finalConsonantView.group }} "{{ item.group }}"
            </span>
            <span>{{ langSet[lang || 'en'].finalConsonantView.groupDescription2 }}</span>
            <span v-for="(vowel, vIndex) in item.finalWith" :key="vIndex" class="fw-bold fs-5 ms-2">
                {{ vowel.vowel ? vowel.vowel : '-' }}<span>,</span>
            </span>
        </div>
        <div class="row mt-2">
            <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                <div class="ms-3 mt-1">
                    <span class="fw-bold fs-5">{{ item.members.length }} {{ langSet[lang ? lang :
                        'en'].finalConsonantView.groupDescription3 }}</span>
                    <span class="ms-1">{{ langSet[lang || 'en'].finalConsonantView.groupDescription4 }}</span>
                    <span v-for="(final, cIndex) in item.members" :key="cIndex" class="ms-2 fw-bold fs-5">
                        {{ final.final }} <span v-if="cIndex < (item.members.length - 1)" class="text-muted">၊</span>
                    </span>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                <select v-model="selected" class="form-select text-success w-full fs-4 text-center">
                    <option value="" selected>{{ langSet[lang || 'en'].menu.tryFinalConsonant }}</option>
                    <option v-for="(final, zIndex) in item.members" :key="zIndex" :value="zIndex">
                        {{ final.final }}
                    </option>
                </select>
            </div>
        </div>
        <div class="my-2 d-block d-md-none">
            <div class="row">
                <div class="col-12 border bg-light py-1"></div>
                <div class="col-3 border text-center px-2 py-3" v-for="(vowel, kIndex) in item.finalWith" :key="kIndex">
                    <div>
                        <span class="fs-2">
                            {{ craftWord2('က', null, vowel.vowel,
                                item.members[selected].final).word ||
                                'NaN' }}
                        </span>
                    </div>
                    <div v-if="craftWord2('က', null, vowel.vowel, item.members[selected].final).word2">
                        <span class="fs-2">
                            {{ craftWord2('က', null, vowel.vowel,
                                item.members[selected].final).word2 ||
                                'NaN' }}
                        </span>
                    </div>
                    <div>
                        <span class="ms-2 badge rounded-pill text-bg-light text-primary">CL</span>
                    </div>
                    <div class="mt-2">
                        <div class="text-muted">
                            {{ `/${craftWord2('က', null, vowel.vowel,
                                item.members[selected].final).ipa ||
                                'NaN'}/` }}
                        </div>
                        <div class="text-muted mt-2">
                            {{ `/${craftWord2('က', null, vowel.vowel,
                                item.members[selected].final).th ||
                                'NaN'}/` }}
                        </div>
                    </div>
                </div>
                <div class="col-3 border text-center px-2 py-3" v-for="(vowel, kIndex) in item.finalWith" :key="kIndex">
                    <div>
                        <span class="fs-2">
                            {{ craftWord2('ဂ', null, vowel.vowel,
                                item.members[selected].final).word ||
                                'NaN' }}
                        </span>
                    </div>
                    <div v-if="craftWord2('ဂ', null, vowel.vowel, item.members[selected].final).word2">
                        <span class="fs-2">
                            {{ craftWord2('ဂ', null, vowel.vowel,
                                item.members[selected].final).word2 ||
                                'NaN' }}
                        </span>
                    </div>
                    <div>
                        <span class="ms-2 badge rounded-pill text-bg-light text-danger">BT</span>
                    </div>
                    <div class="mt-2">
                        <div class="text-muted">
                            {{ `/${craftWord2('ဂ', null, vowel.vowel,
                                item.members[selected].final).ipa ||
                                'NaN'}/` }}
                        </div>
                        <div class="text-muted mt-2">
                            {{ `/${craftWord2('ဂ', null, vowel.vowel,
                                item.members[selected].final).th ||
                                'NaN'}/` }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-2 d-none d-md-block">
            <table>
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
                                    {{ craftWord2('က', null, vowel.vowel,
                                        item.members[selected].final).word ||
                                        'NaN' }}
                                </span>
                            </div>
                            <div v-if="craftWord2('က', null, vowel.vowel, item.members[selected].final).word2">
                                <span class="fs-3 fw-bold">
                                    {{ craftWord2('က', null, vowel.vowel,
                                        item.members[selected].final).word2 ||
                                        'NaN' }}
                                </span>
                            </div>
                            <div>
                                <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </div>
                            <div class="mt-2">
                                <div class="text-muted">
                                    {{ `/${craftWord2('က', null, vowel.vowel,
                                        item.members[selected].final).ipa ||
                                        'NaN'}/` }}
                                </div>
                                <div class="text-muted mt-2">
                                    {{ `/${craftWord2('က', null, vowel.vowel,
                                        item.members[selected].final).th ||
                                        'NaN'}/` }}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(vowel, kIndex) in item.finalWith" :key="kIndex">
                            <div>
                                <span class="fs-3 fw-bold">
                                    {{ craftWord2('ဂ', null, vowel.vowel,
                                        item.members[selected].final).word ||
                                        'NaN' }}
                                </span>
                            </div>
                            <div v-if="craftWord2('ဂ', null, vowel.vowel, item.members[selected].final).word2">
                                <span class="fs-3 fw-bold">
                                    {{ craftWord2('ဂ', null, vowel.vowel,
                                        item.members[selected].final).word2 ||
                                        'NaN' }}
                                </span>
                            </div>
                            <div>
                                <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                            </div>
                            <div class="mt-2">
                                <div class="text-muted">
                                    {{ `/${craftWord2('ဂ', null, vowel.vowel,
                                        item.members[selected].final).ipa ||
                                        'NaN'}/` }}
                                </div>
                                <div class="text-muted mt-2">
                                    {{ `/${craftWord2('ဂ', null, vowel.vowel,
                                        item.members[selected].final).th ||
                                        'NaN'}/` }}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="langSet[lang || 'en'].finalConsonantView[`exception${index + 1}`]" class="fs-6 mt-3">
            <span class="fw-bold">{{ langSet[lang || 'en'].finalConsonantView.exception }}</span>
            <span class="ms-1" v-html="langSet[lang || 'en'].finalConsonantView[`exception${index + 1}`]"></span>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import monAlphabets from '@/services/mon-library/alphabets/alphabets';

export default {
    name: 'CompFinalConsonantSection',
    props: {
        lang: String,
        item: Object
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            selected: 0
        }
    },
    methods: {
        craftWord2(consonant, compound, vowel, final) {
            return monAlphabets.craftWord2(consonant, compound, vowel, final)
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