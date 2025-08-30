<template>
    <div class="report-issues container">
        <div class="mt-4 text-end">
            <a v-if="lang === 'en'" href="https://forms.gle/gojTLT25uPB6xYuw6" class="fw-bold text-success" target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                Open this link
            </a>
            <a v-if="lang === 'th'" href="https://forms.gle/m98mcQmYLEXWC3ZE6" class="fw-bold text-success" target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                เปิดลิงค์แบบฟอร์ม
            </a>
            <a v-if="lang === 'mnw'" href="https://forms.gle/gojTLT25uPB6xYuw6" class="fw-bold text-success" target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                Open this link
            </a>
        </div>
        <iframe v-if="lang === 'en'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdyN4YkqAfeM3WdUB8j368ddTJgvuKL_hI1vdWE5eNNzuYPPg/viewform?embedded=true"
            width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe v-if="lang === 'th'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeOTGPpXu_nvySzzSNZNlLIqmqyOCJcCXALotx1g2e6lKCE9w/viewform?embedded=true"
            width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe v-if="lang === 'mnw'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdyN4YkqAfeM3WdUB8j368ddTJgvuKL_hI1vdWE5eNNzuYPPg/viewform?embedded=true"
            width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
</template>

<script>

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'ReportIssuesView',
    data() {
        return {
            // Data properties can be added here if needed
            langSet: displayLanguages.langSet,
            lang: this.$route.query.lang || 'en'
        };
    },
    mounted() {
        logPageView('ReportIssuesView');
        // Any initialization logic can be added here
        this.lang = this.$route.query.lang || 'en';
    },
    methods: {
        // Methods for handling report issues can be added here
    },
    watch: {
        '$route.query.lang': function (newLang) {
            this.lang = newLang || 'en';
        }
    },
}
</script>

<style>
iframe {
    border: none;
    width: 100%;
    height: 80vh;
    margin-top: 8px;
}
</style>