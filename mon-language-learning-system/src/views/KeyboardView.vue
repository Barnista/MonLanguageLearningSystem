<template>
    <div class="keyboard-view">
        <div class="container my-5">
            <KeyboardSetComp :lang="lang" class="mb-4" />
            <hr>
            <CompKeyboardGuide class=""/>
        </div>
    </div>
</template>

<script>
import CompKeyboardGuide from '@/components/keyboard/CompKeyboardGuide.vue';
import KeyboardSetComp from '@/components/keyboard/CompKeyboardSet.vue';

export default {
    name: 'KeyboardView',
    components: {
        KeyboardSetComp,
        CompKeyboardGuide
    },
    data: () => {
        return {
            lang: 'en'
        }
    },
    mounted(){
        this.lang = this.$route.query.lang || 'en';
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
};
</script>
