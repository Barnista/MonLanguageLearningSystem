<template>
    <div class="dictionary-view container">
        <CompDictionarySearch class="mt-5" />
    </div>
</template>

<script>
import CompDictionarySearch from '@/components/mini-apps/CompDictionarySearch.vue';

export default {
    name: 'DictionaryView',
    components: {
        CompDictionarySearch
    },
    mounted(){
    }
}
</script>