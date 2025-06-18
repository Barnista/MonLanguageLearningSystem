<template>
    <div class="keyboard-view">
        <div class="container my-5">
            <KeyboardSetComp class="mb-2" />
        </div>
    </div>
</template>

<script>
import KeyboardSetComp from '@/components/keyboard/KeyboardSetComp.vue';

export default {
    name: 'KeyboardView',
    components: {
        KeyboardSetComp
    }
};
</script>
