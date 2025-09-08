<template>
    <div id="numeral-table">
        <h2>Numerals</h2>
        <p>
            This table presents Mon numerals, their readings, IPA transcriptions, Thai equivalents, and Arabic numerals. You can also use the converter below to see how numbers are represented in Mon. Additional sections cover multi-digit numbers, decimals, mathematics, quantitative units, currency, time, and calendar usage in Mon.
        </p>
        <div class="mt-3">
            <CompNumberConverter ref="compNumberConverter" :lang="lang" />
            <hr>
        </div>
        <div class="mt-4">
            <h4><i class="bi bi-123"></i> Integers</h4>
            <table>
                <thead>
                    <tr>
                        <th>เลขมอญ</th>
                        <th>คำอ่าน</th>
                        <th>IPA</th>
                        <th>TH</th>
                        <th>เลขอาราบิก</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in numbers" :key="index">
                        <td class="text-start">{{ item.letter }}</td>
                        <td>{{ item.spelling }}</td>
                        <td>{{ item.ipa }}</td>
                        <td>{{ item.th }}</td>
                        <td class="text-start">{{ item.number.toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>

        <div class="mt-4">
            <h4>Examples of Multi-Digit Integer</h4>
            <table>
                <thead>
                    <tr>
                        <th>เลขมอญ</th>
                        <th>คำอ่าน</th>
                        <th>IPA</th>
                        <th>TH</th>
                        <th>เลขอาราบิก</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in examples" :key="index">
                        <td class="text-start">{{ item.letter }}</td>
                        <td>{{ item.spelling }}</td>
                        <td>{{ item.ipa }}</td>
                        <td>{{ item.th }}</td>
                        <td class="text-start">{{ item.number.toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-0-square"></i> Decimals</h4>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-calculator"></i> Mathematics</h4>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-beaker"></i> Quantitative Unit (via Classifier)</h4>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-cash-coin"></i> Currency</h4>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-clock"></i> Time</h4>
            <hr>
        </div>

        <div>
            <h4><i class="bi bi-calendar3"></i> Calendar</h4>
            <hr>
        </div>
    </div>
</template>

<script>
import CompNumberConverter from '@/components/mini-apps/CompNumberConverter.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import dbNumerals from '@/services/mon-library/alphabets/db-numerals';

export default {
    name: 'CompNumeralTable',
    components: {
        CompNumberConverter
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        numbers: dbNumerals.numbers,
        examples: dbNumerals.examples
    }),
    created() {

    },
    mounted() {
        this.$refs.compNumberConverter.setArabicNum('27,900');
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