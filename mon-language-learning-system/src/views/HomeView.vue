<template>
  <div class="home">
    <CompConsonantTable class="mb-2"  />
    <hr>
    <CompVowelTable class="mt-5" />
    <div class="my-5">
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CompConsonantTable from '@/components/alphabets/CompConsonantTable.vue'
import CompVowelTable from '@/components/alphabets/CompVowelTable.vue';

export default {
  name: 'HomeView',
  components: {
    CompConsonantTable,
    CompVowelTable
  }
}
</script>
