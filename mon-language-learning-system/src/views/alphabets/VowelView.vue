<template>
    <div class="vowel-view container">
        <CompVowelTable class="mt-4"/>
        <div class="d-flex justify-content-between mt-4 mb-5">
            <button @click="$router.push('/alphabets/consonant#consonant-table')" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                Consonants
            </button>
            <button @click="$router.push('/alphabets/compound-consonant#compound-consonant-table')" class="btn btn-primary">
                Compound Consonants
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>

import CompVowelTable from '@/components/alphabets/CompVowelTable.vue';

export default {
    name: 'VowelView',
    components: {
        CompVowelTable
    }
}
</script>