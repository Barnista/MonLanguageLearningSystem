<template>
    <div id="numeral-table">
        <h2>{{ langSet[lang || 'en'].numeralsView.title }} <span class="text-muted">(လမောက်သင်ချာ)</span>
        </h2>
        <p v-html="langSet[lang || 'en'].numeralsView.description"></p>
        <p v-html="langSet[lang || 'en'].numeralsView.description2"></p>

        <img src="@/assets/gifs/math-calculating.gif" class="landing-cover" />

        <div class="mt-4">
            <CompNumberConverter ref="compNumberConverter" :lang="lang" />
            <hr>
        </div>

        <div class="accordion mt-4" :id="`accordionInteger`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionInteger`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseInteger`" aria-expanded="false" aria-controls="collapseInteger">
                        <h3><i class="bi bi-123"></i> {{ langSet[lang || 'en'].numeralsView.integers }}</h3>
                    </button>
                </h2>
                <div :id="`collapseInteger`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionInteger`">
                    <div class="accordion-body">
                        <CompIntegerTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4" :id="`accordionDecimal`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionDecimal`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseDecimal`" aria-expanded="false" aria-controls="collapseDecimal">
                        <h3><i class="bi bi-0-square"></i> {{ langSet[lang || 'en'].numeralsView.decimals }}</h3>
                    </button>
                </h2>
                <div :id="`collapseDecimal`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionDecimal`">
                    <div class="accordion-body">
                        <CompDecimalTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4" :id="`accordionMathematic`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionMathematic`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseMathematic`" aria-expanded="false"
                        aria-controls="collapseMathematic">
                        <h3><i class="bi bi-calculator"></i> {{ langSet[lang || 'en'].numeralsView.mathematics }}</h3>
                    </button>
                </h2>
                <div :id="`collapseMathematic`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionMathematic`">
                    <div class="accordion-body">
                        <CompMathematicTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4 d-none" :id="`accordionUnit`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionUnit`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseUnit`" aria-expanded="false" aria-controls="collapseUnit">
                        <h3><i class="bi bi-beaker"></i> {{ langSet[lang || 'en'].numeralsView.units }}</h3>
                    </button>
                </h2>
                <div :id="`collapseUnit`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionUnit`">
                    <div class="accordion-body">
                        <CompUnitTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4 d-none" :id="`accordionCurrency`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionCurrency`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseCurrency`" aria-expanded="false" aria-controls="collapseCurrency">
                        <h3><i class="bi bi-cash-coin"></i> {{ langSet[lang || 'en'].numeralsView.currency }}</h3>
                    </button>
                </h2>
                <div :id="`collapseCurrency`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionCurrency`">
                    <div class="accordion-body">
                        <CompCurrencyTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4" :id="`accordionTime`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionTime`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseTime`" aria-expanded="false" aria-controls="collapseTime">
                        <h3><i class="bi bi-clock"></i> {{ langSet[lang || 'en'].numeralsView.time }}</h3>
                    </button>
                </h2>
                <div :id="`collapseTime`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionTime`">
                    <div class="accordion-body">
                        <CompTimeTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="accordion mt-4" :id="`accordionCalendar`">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`accordionCalendar`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseCalendar`" aria-expanded="false" aria-controls="collapseCalendar">
                        <h3><i class="bi bi-calendar3"></i> {{ langSet[lang || 'en'].numeralsView.calendar }}</h3>
                    </button>
                </h2>
                <div :id="`collapseCalendar`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#accordionCalendar`">
                    <div class="accordion-body">
                        <CompCalendarTable :lang="lang" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <img src="@/assets/gifs/patrick-star.gif" class="landing-cover" />

    </div>
</template>

<script>
import CompNumberConverter from '@/components/mini-apps/CompNumberConverter.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import dbCalendar from '@/services/mon-library/alphabets/db-calendar';
import dbNumerals from '@/services/mon-library/alphabets/db-numerals';
import CompIntegerTable from './CompIntegerTable.vue';
import CompDecimalTable from './CompDecimalTable.vue';
import CompMathematicTable from './CompMathematicTable.vue';
import CompTimeTable from './CompTimeTable.vue';
import CompCalendarTable from './CompCalendarTable.vue';
import CompCurrencyTable from './CompCurrencyTable.vue';
import CompUnitTable from './CompUnitTable.vue';

export default {
    name: 'CompNumeralTable',
    components: {
        CompNumberConverter,
        CompIntegerTable,
        CompDecimalTable,
        CompMathematicTable,
        CompTimeTable,
        CompCalendarTable,
        CompCurrencyTable,
        CompUnitTable
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
        examples: dbNumerals.examples,
        decimalExamples: dbNumerals.decimalExamples,
        decimal: dbNumerals.symbols[0],
        symbols: dbNumerals.symbols.slice(1, dbNumerals.symbols.length),
        equationExamples: dbNumerals.equationExamples,
        dbCalendar,
        clockExamples: dbCalendar.getClockExamples(),
        clockAmPmExamples: dbCalendar.getClockAmPmExamples(),
        clockVerbalExamples: dbCalendar.getClockLegacyExamples(),
        localDate: new Date(),
        localOClock: null,
        localAmPm: null
    }),
    created() {
        setInterval(() => {
            this.localDate = new Date();
            this.localOClock = this.dbCalendar.convertToOClock(this.localDate.getHours(), this.localDate.getMinutes(), 0);
            this.localAmPm = this.dbCalendar.convertToAmPm(this.localDate.getHours(), this.localDate.getMinutes(), 0);
        }, 1000);
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