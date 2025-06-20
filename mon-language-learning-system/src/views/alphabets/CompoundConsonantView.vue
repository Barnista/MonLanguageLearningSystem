<template>
    <div class="compound-consonant-view container">
        <CompCompoundConsonantTable class="mt-4" />
        <div class="d-flex justify-content-between mt-4 mb-5">
            <button @click="$router.push('/alphabets/vowel#vowel-table')" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                Vowels
            </button>
            <button @click="$router.push('/alphabets/vowel')" class="btn btn-primary" disabled>
                Next
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>

import CompCompoundConsonantTable from '@/components/alphabets/CompCompoundConsonantTable.vue';

export default {
    name: 'CompoundConsonantView',
    components: {
        CompCompoundConsonantTable
    }
}
</script>