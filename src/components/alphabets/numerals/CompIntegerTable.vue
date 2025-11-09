<template>
    <div class="comp-integer-table">
        <table class="mt-3">
            <thead>
                <tr>
                    <th>{{ langSet[lang || 'en'].numeralsView.monNumber }}</th>
                    <th>{{ langSet[lang || 'en'].numeralsView.spelling }}</th>
                    <th>IPA</th>
                    <th>TH</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in numbers" :key="index">
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
        <div class="mt-3">
            <h4>{{ langSet[lang || 'en'].numeralsView.integerExamples }}</h4>
            <table>
                <thead>
                    <tr>
                        <th style="width: 100px;">{{ langSet[lang || 'en'].numeralsView.monNumber }}</th>
                        <th>{{ langSet[lang || 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in examples" :key="index">
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
    data: () => ({
        langSet: displayLanguages.langSet,
        numbers: dbNumerals.numbers,
        examples: dbNumerals.examples,
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