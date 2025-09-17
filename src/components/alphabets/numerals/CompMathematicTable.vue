<template>
    <div class="comp-mathematic-table">
        <p v-html="langSet[lang ?? 'en'].numeralsView.mathematicsDescription"></p>
        <div class="row mt-3">
            <div v-for="(symbol, index) in symbols" :key="index"
                :class="[(index < symbols.length - 1) ? 'col-6 col-lg-4' : 'col-12 col-lg-8', 'mb-3']">
                <div class="card rounded border shadow-sm text-center pb-3 pt-2 m-auto">
                    <span class="fs-1">{{ symbol.letter }}<span class="text-muted">{{ symbol.letter2 ? ` (
                            ${symbol.letter2} )` : '' }}</span></span>
                    <span class="fs-4 text-success">{{ symbol.spelling }}{{ symbol.spelling2 ? ` /
                        ${symbol.spelling2}` :
                        '' }}</span>
                    <span class="text-muted">/{{ symbol.ipa }}/{{ symbol.ipa2 ? ` | /${symbol.ipa2}/` : '' }}</span>
                    <span class="text-muted">/{{ symbol.th }}/{{ symbol.th2 ? ` | /${symbol.th2}/` : '' }}</span>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <h4>{{ langSet[lang ?? 'en'].numeralsView.mathematicsExamples }}</h4>
            <table>
                <thead>
                    <tr>
                        <th style="width: 150px;">{{ langSet[lang ?? 'en'].numeralsView.equation }}</th>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in equationExamples" :key="index">
                        <td class="text-center">
                            <span class="fs-5">{{ item.equation }}</span>
                            <br>
                            <span class="text-muted">{{ item.equation2 }}</span>
                        </td>
                        <td>{{ item.spelling }}</td>
                        <td>/{{ item.ipa }}/</td>
                        <td>/{{ item.th }}/</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
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

    },
    data: () => ({
        langSet: displayLanguages.langSet,
        symbols: dbNumerals.symbols.slice(1, dbNumerals.symbols.length),
        equationExamples: dbNumerals.equationExamples,
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