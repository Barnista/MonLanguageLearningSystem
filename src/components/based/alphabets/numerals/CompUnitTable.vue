<template>
    <div class="comp-unit-table">
        
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    components: {
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        
    })
}
</script>

<style scope>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background: #f5f5f5;
}
</style>