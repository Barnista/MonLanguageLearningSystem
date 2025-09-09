<template>
    <div id="numeral-table">
        <h2>{{ langSet[lang ?? 'en'].numeralsView.title }} <span class="text-muted">(လမောက်သင်ချာ)</span>
        </h2>
        <p v-html="langSet[lang ?? 'en'].numeralsView.description"></p>
        <p v-html="langSet[lang ?? 'en'].numeralsView.description2"></p>

        <img src="@/assets/gifs/math-calculating.gif" class="landing-cover" />

        <div class="mt-4">
            <CompNumberConverter ref="compNumberConverter" :lang="lang" />
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-123"></i> {{ langSet[lang ?? 'en'].numeralsView.integers }}</h3>
            <table class="mt-3">
                <thead>
                    <tr>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.monNumber }}</th>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.arabicNumber }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in numbers" :key="index">
                        <td class="text-start fs-5">{{ item.letter }}</td>
                        <td>{{ item.spelling }}</td>
                        <td>/{{ item.ipa }}/</td>
                        <td>/{{ item.th }}/</td>
                        <td class="text-start">{{ item.number.toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>

        <div class="mt-4">
            <h3>{{ langSet[lang ?? 'en'].numeralsView.integerExamples }}</h3>
            <table>
                <thead>
                    <tr>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.monNumber }}</th>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                        <th>{{ langSet[lang ?? 'en'].numeralsView.arabicNumber }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in examples" :key="index">
                        <td class="text-start fs-5">{{ item.letter }}</td>
                        <td>{{ item.spelling }}</td>
                        <td>/{{ item.ipa }}/</td>
                        <td>/{{ item.th }}/</td>
                        <td class="text-start">{{ item.number.toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-0-square"></i> {{ langSet[lang ?? 'en'].numeralsView.decimals }}</h3>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-calculator"></i> {{ langSet[lang ?? 'en'].numeralsView.mathematics }}</h3>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-beaker"></i> {{ langSet[lang ?? 'en'].numeralsView.units }}</h3>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-cash-coin"></i> {{ langSet[lang ?? 'en'].numeralsView.currency }}</h3>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-clock"></i> {{ langSet[lang ?? 'en'].numeralsView.time }}</h3>
            <hr>
        </div>

        <div class="mt-4">
            <h3><i class="bi bi-calendar3"></i> {{ langSet[lang ?? 'en'].numeralsView.calendar }}</h3>
            <hr>
        </div>
        <img src="@/assets/gifs/patrick-star.gif" class="landing-cover" />

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
.landing-cover {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
}

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