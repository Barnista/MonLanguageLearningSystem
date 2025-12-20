<template>
    <div class="login-view bg-fabulous">
        <CompLogin class="shadow" />
    </div>
</template>

<script>
import CompLogin from '@/components/renaissance/authentication/CompLogin.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';
export default {
    name: 'LoginView',
    components: {
        CompLogin
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
.login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>