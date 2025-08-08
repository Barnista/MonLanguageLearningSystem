<template>
    <div class="apply-new-word-view">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfb0uqs6enw4mZQzOzYsnwHwrIPfoAfZRo1WyOsrNjG-aHDpA/viewform?embedded=true" width="640" height="532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
</template>


<script>

import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'ApplyNewWordView',
    data() {
        return {
            // Data properties can be added here if needed
            langSet: displayLanguages.langSet,
            lang: this.$route.query.lang || 'en'
        };
    },
    mounted(){
        // Any initialization logic can be added here
        this.lang = this.$route.query.lang || 'en';
    },
    methods: {
        // Methods for handling report issues can be added here
    },
    watch: {
        '$route.query.lang': function(newLang) {
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
    margin-top: 32px;
}
</style>