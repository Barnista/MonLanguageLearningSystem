<template>
    <div class="register-view pb-5">
        <CompRegister :lang="lang" class="shadow" />
    </div>
</template>

<script>
import CompRegister from '@/components/renaissance/authentication/CompRegister.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
    name: 'RegisterView',
    components: {
        CompRegister
    },
    data() {
        return {
            lang: 'en',
            langSet: displayLanguages.langSet,
        };
    },
    mounted() {
        logPageView(this.$options.name);
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        },
    }
};
</script>

<style scoped>
.register-view {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #6a994d 0%, #38673e 100%);
}
</style>