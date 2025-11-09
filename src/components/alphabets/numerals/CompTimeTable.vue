<template>
    <div class="comp-time-table">
        <p v-html="langSet[lang || 'en'].numeralsView.timeDescription"></p>
        <p v-html="langSet[lang || 'en'].numeralsView.timeDescription2"></p>
        <div class="mt-3">
            <div class="row">
                <div class="col-12 col-lg-4 mb-3 text-center">
                    <CompAnalogClock :size="300" class="d-inline" />
                </div>
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div v-if="localOClock" class="card shadow-sm px-3 pt-2 pb-4 text-center">
                                <span class="fs-3">
                                    {{ localOClock.letter }}
                                    <span class="text-muted">({{ localOClock.letterEN }})</span>
                                </span>
                                <span class="fs-5 text-success">{{ localOClock.spelling }}</span>
                                <span class="text-muted">/{{ localOClock.ipa }}/</span>
                                <span class="text-muted">/{{ localOClock.th }}/</span>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div v-if="localAmPm" class="card shadow-sm px-3 pt-2 pb-4 text-center">
                                <span class="fs-3">
                                    {{ localAmPm.letter }}
                                    <span class="text-muted">({{ localAmPm.letterEN }})</span>
                                </span>
                                <span class="fs-5 text-success">{{ localAmPm.spelling }}</span>
                                <span class="text-muted">/{{ localAmPm.ipa }}/</span>
                                <span class="text-muted">/{{ localAmPm.th }}/</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <h4>{{ langSet[lang || 'en'].numeralsView.time24HourClock }}</h4>
            <table class="mt-2">
                <thead>
                    <tr>
                        <th style="width: 200px;">{{ langSet[lang || 'en'].numeralsView.time }}</th>
                        <th>{{ langSet[lang || 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in clockExamples" :key="index">
                        <td>
                            <span class="fs-5">{{ item.letter }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterTH }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterEN }}</span>
                        </td>
                        <td>
                            {{ item.spelling }}
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
            <h4>{{ langSet[lang || 'en'].numeralsView.time12HourClock }}</h4>
            <table class="mt-2">
                <thead>
                    <tr>
                        <th style="width: 200px;">{{ langSet[lang || 'en'].numeralsView.time }}</th>
                        <th>{{ langSet[lang || 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in clockAmPmExamples" :key="index">
                        <td>
                            <span class="fs-5">{{ item.letter }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterTH }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterEN }}</span>
                        </td>
                        <td>
                            {{ item.spelling }}
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
            <h4>{{ langSet[lang || 'en'].numeralsView.timeVerbal }}</h4>
            <table class="mt-2">
                <thead>
                    <tr>
                        <th style="width: 200px;">{{ langSet[lang || 'en'].numeralsView.time }}</th>
                        <th>{{ langSet[lang || 'en'].numeralsView.spelling }}</th>
                        <th>IPA</th>
                        <th>TH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in clockVerbalExamples" :key="index">
                        <td>
                            <span class="fs-5">{{ item.letter }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterTH }}</span>
                            <br>
                            <span class="text-muted">{{ item.letterEN }}</span>
                        </td>
                        <td>
                            {{ item.spelling }}
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
    </div>
</template>

<script>
import CompAnalogClock from '@/components/misc/CompAnalogClock.vue';
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
        CompAnalogClock,
    },
    data: () => ({
        langSet: displayLanguages.langSet,
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