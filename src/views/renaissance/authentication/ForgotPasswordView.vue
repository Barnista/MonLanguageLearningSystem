<template>
    <div class="forgot-password-view">
        <CompForgotPassword class="shadow" />
    </div>
</template>

<script>
import CompForgotPassword from '@/components/renaissance/authentication/CompForgotPassword.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';
export default {
    name: 'ForgotPasswordView',
    components: {
        CompForgotPassword
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
.forgot-password-view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>