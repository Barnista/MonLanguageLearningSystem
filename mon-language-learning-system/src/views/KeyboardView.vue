<template>
    <div class="keyboard-view">
        <div class="container my-5">
            <KeyboardSetComp :lang="lang" class="mb-4" />
        </div>
    </div>
</template>

<script>
import KeyboardSetComp from '@/components/keyboard/KeyboardSetComp.vue';

export default {
    name: 'KeyboardView',
    components: {
        KeyboardSetComp
    },
    data: () => {
        return {
            lang: 'en'
        }
    },
    watch: {
        '$route.query.lang'(newLang) {
            this.lang = newLang || 'en';
        }
    },
};
</script>
