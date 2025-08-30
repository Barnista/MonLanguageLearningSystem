<template>
    <div class="apply-new-word-view container">
        <div class="mt-4 text-end">
            <a v-if="lang === 'en'" href="https://forms.gle/TmNih5W5sZWU8UGw9" class="fw-bold text-success"
                target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                Open this link
            </a>
            <a v-if="lang === 'th'" href="https://forms.gle/jNSyvFETFd7CRXmM8" class="fw-bold text-success"
                target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                เปิดลิงค์แบบฟอร์ม
            </a>
            <a v-if="lang === 'mnw'" href="https://forms.gle/TmNih5W5sZWU8UGw9" class="fw-bold text-success"
                target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                Open this link
            </a>
        </div>
        <iframe v-if="lang === 'en'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfb0uqs6enw4mZQzOzYsnwHwrIPfoAfZRo1WyOsrNjG-aHDpA/viewform?embedded=true"
            width="640" height="532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe v-if="lang === 'th'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc6a3pt8vup_pILdKZ3HIaAhvaWf-RjHS7-nyPBVxio1OK7dA/viewform?embedded=true"
            width="640" height="532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe v-if="lang === 'mnw'" class="bg-light rounded border"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfb0uqs6enw4mZQzOzYsnwHwrIPfoAfZRo1WyOsrNjG-aHDpA/viewform?embedded=true"
            width="640" height="532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </div>
</template>


<script>

import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'ApplyNewWordView',
    data() {
        return {
            // Data properties can be added here if needed
            langSet: displayLanguages.langSet,
            lang: this.$route.query.lang || 'en'
        };
    },
    mounted() {
        logPageView('ApplyNewWordView');
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