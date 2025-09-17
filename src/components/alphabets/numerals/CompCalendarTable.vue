<template>
    <div class="comp-calendar-table">
        <p v-html="langSet[lang ?? 'en'].numeralsView.calendarDescription1">
        </p>
        <p v-html="langSet[lang ?? 'en'].numeralsView.calendarDescription2">
        </p>
        <div class="mt-3 row">
            <div class="col-12 col-lg-6 mb-3">
                <div class="card shadow-sm pt-3 pb-4 text-center">
                    <h4>{{ langSet[lang ?? 'en'].numeralsView.todayIs }} (date/month/year)</h4>
                    <span class="fs-4">
                        {{ currentddMMyyyy.letter }}
                    </span>
                    <span class="fs-5 text-muted">
                        {{ currentddMMyyyy.letterTH }}
                    </span>
                    <span class="fs-5 text-muted">
                        {{ currentddMMyyyy.letterEN }}
                    </span>
                </div>
            </div>
            <div class="col-12 col-lg-6 mb-3">
                <div class="card shadow-sm pt-3 pb-4 text-center">
                    <h4>{{ langSet[lang ?? 'en'].numeralsView.todayIs }} (dd/MM/yyyy)</h4>
                    <span class="fs-4">
                        {{ currentDateMonthYear.letter }}
                    </span>
                    <span class="fs-5 text-muted">
                        {{ currentDateMonthYear.letterTH }}
                    </span>
                    <span class="fs-5 text-muted">
                        {{ currentDateMonthYear.letterEN }}
                    </span>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <h3>{{ langSet[lang ?? 'en'].numeralsView.months }}</h3>
            <p v-html="langSet[lang ?? 'en'].numeralsView.monthsDescription1"></p>
            <div class="mt-3">
                <h4>
                    <i class="bi bi-calendar2-month"></i>
                    {{ langSet[lang ?? 'en'].numeralsView.gregorianCalendar }}
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>{{ langSet[lang ?? 'en'].numeralsView.tableNo }}</th>
                            <th style="min-width: 180px;">{{ langSet[lang ?? 'en'].numeralsView.tableMonth }}</th>
                            <th>{{ langSet[lang ?? 'en'].numeralsView.tableDaysCount }}</th>
                            <th>IPA</th>
                            <th>TH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in months" :key="item.letterEN">
                            <td>
                                {{ item.month }}
                            </td>
                            <td>
                                <span class="fs-5">{{ item.letter }}</span>
                                <br>
                                <span class="text-muted">{{ item.letterTH }}</span>
                                <br>
                                <span class="text-muted">{{ item.letterEN }}</span>
                            </td>
                            <td>
                                {{ item.days }} {{ langSet[lang ?? 'en'].numeralsView.days }}
                            </td>
                            <td>
                                /{{ item.ipa }}/
                            </td>
                            <td>
                                /{{ item.th }}/
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-3">
                <h4>
                    <i class="bi bi-moon-stars"></i>
                    {{ langSet[lang ?? 'en'].numeralsView.lunarCalendar }}
                </h4>
                <p v-html="langSet[lang ?? 'en'].numeralsView.lunarCalendarDescription"></p>
                <table>
                    <thead>
                        <tr>
                            <th style="min-width: 180px;">{{ langSet[lang ?? 'en'].numeralsView.tableMonth }}</th>
                            <th>IPA</th>
                            <th>TH</th>
                            <th>{{ langSet[lang ?? 'en'].numeralsView.tableGregorian }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in lunarMonths" :key="item.lunarMonth">
                            <td>
                                <span class="fs-5">{{ item.letter }}</span>
                                <br>
                                <span class="text-muted">{{ item.letterTH }}</span>
                                <br>
                                <span class="text-muted">{{ item.letterEN }}</span>
                            </td>
                            <td>
                                /{{ item.ipa }}/
                            </td>
                            <td>
                                /{{ item.th }}/
                            </td>
                            <td>
                                <span class="fs-5">{{ findMonthByLunarMonth(item.lunarMonth).letter }}</span>
                                <br>
                                <span class="text-muted">{{ findMonthByLunarMonth(item.lunarMonth).letterTH }}</span>
                                <br>
                                <span class="text-muted">{{ findMonthByLunarMonth(item.lunarMonth).letterEN }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
        </div>
        <div class="mt-4">
            <h3>{{ langSet[lang ?? en].numeralsView.years }}</h3>
            <p v-html="langSet[lang ?? en].numeralsView.yearsDescription"></p>
            <div class="mt-3">
                <h4>{{ langSet[lang ?? en].numeralsView.religionBased }}</h4>
                <table>
                    <thead>
                        <tr>
                            <th>{{ langSet[lang ?? en].numeralsView.tableName }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableAbb }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableStartYear }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableYearNow }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in yearSystems" :key="item.letterEN">
                            <td>
                                <span class="fs-5">{{ item.letter }}</span>
                                <br>
                                <span>{{ item.letterTH }}</span>
                                <br>
                                <span>{{ item.letterEN }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ item.abbriviation }}</span>
                                <br>
                                <span>{{ item.abbriviationTH }}</span>
                                <br>
                                <span>{{ item.abbriviationEN }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ item.startYear }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ currentYear - item.startYear }} {{ item.abbriviationEN }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-3">
                <h4>{{ langSet[lang ?? en].numeralsView.realmBased }}</h4>
                <p v-html="langSet[lang ?? en].numeralsView.realmBasedDescription"></p>
                <table>
                    <thead>
                        <tr>
                            <th style="min-width: 180px;">{{ langSet[lang ?? en].numeralsView.tableName }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableAbb }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableStartYear }}</th>
                            <th>{{ langSet[lang ?? en].numeralsView.tableYearNow }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in historicalYearSystems" :key="item.letterEN">
                            <td>
                                <span class="fs-5">{{ item.letter }}</span>
                                <br>
                                <span>{{ item.letterTH }}</span>
                                <br>
                                <span>{{ item.letterEN }}</span>
                                <br>
                                <span class="text-muted">{{ item.descriptionEN }}</span>
                                <br>
                                <span class="text-muted">{{ item.descriptionTH }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ item.abbriviation }}</span>
                                <br>
                                <span>{{ item.abbriviationTH }}</span>
                                <br>
                                <span>{{ item.abbriviationEN }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ item.startYear }}</span>
                            </td>
                            <td>
                                <span class="fs-5">{{ currentYear - item.startYear }} {{ item.abbriviationEN }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import dbCalendar from '@/services/mon-library/alphabets/db-calendar';

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
        months: dbCalendar.months,
        lunarMonths: dbCalendar.lunarMonths,
        yearSystems: dbCalendar.yearSystems,
        historicalYearSystems: dbCalendar.historicalYearSystems,
        calendar: dbCalendar.calendar,
        currentYear: (new Date()).getFullYear(),
        currentDateMonthYear: dbCalendar.getDateMonthYear(new Date()),
        currentddMMyyyy: dbCalendar.getddMMyyyy(new Date()),
        findMonthByLunarMonth: dbCalendar.findMonthByLunarMonth,
    }),
    created() {
        setInterval(() => {
            this.currentDateMonthYear = dbCalendar.getDateMonthYear(new Date());
            this.currentddMMyyyy = dbCalendar.getddMMyyyy(new Date());
        }, 60 * 1000);
    },
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