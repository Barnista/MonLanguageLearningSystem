<template>
    <div class="comp-decimal-table">
        <p v-html="langSet[lang ?? 'en'].numeralsView.decimalsDescription1"></p>
        <p v-html="langSet[lang ?? 'en'].numeralsView.decimalsDescription2"></p>
        <p v-html="langSet[lang ?? 'en'].numeralsView.decimalsDescription3"></p>
        <div class="text-end">
            <ButtonAskChatGPT :href="'https://chatgpt.com/share/68c7927e-b8b8-8006-bdd5-cbdb890a444e'" :lang="'en'"
                class="me-2" />
            <ButtonAskChatGPT :href="'https://chatgpt.com/share/68c792be-6a44-8006-95ce-bbc387d6351b'" :lang="'th'"
                class="me-2" />
        </div>
        <div class="row mt-3">
            <div class="col-12 col-lg-4 col-xl-3 mb-3 h-100">
                <div class="card rounded border shadow text-center pb-4 m-auto">
                    <span class="fs-1">{{ decimal.letter }}</span>
                    <span class="fs-4 text-success">{{ decimal.spelling }} / {{ decimal.spelling2 }}</span>
                    <span class="text-muted">/{{ decimal.ipa }}/</span>
                    <span class="text-muted">/{{ decimal.th }}/</span>
                </div>
            </div>
            <div class="col-12 col-lg-8 col-xl-9 mb-3">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 100px;">{{ langSet[lang ?? 'en'].numeralsView.monNumber }}</th>
                            <th>{{ langSet[lang ?? 'en'].numeralsView.spelling }}</th>
                            <th>IPA</th>
                            <th>TH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in decimalExamples" :key="index">
                            <td class="text-center">
                                <span class="fs-5">{{ item.letter }}</span>
                                <br>
                                <span class="text-muted">{{ item.number.toLocaleString() }}</span>
                            </td>
                            <td>{{ item.spelling }}</td>
                            <td>/{{ item.ipa }}/</td>
                            <td>/{{ item.th }}/</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAskChatGPT from '@/components/misc/buttons/ButtonAskChatGPT.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import dbNumerals from '@/services/mon-library/alphabets/db-numerals';

export default {
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    components: {
        ButtonAskChatGPT
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        decimalExamples: dbNumerals.decimalExamples,
        decimal: dbNumerals.symbols[0],
    })
}
</script>

<style scope>
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