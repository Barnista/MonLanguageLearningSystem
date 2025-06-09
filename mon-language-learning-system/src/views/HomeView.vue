<template>
  <div class="home">
    <CompAlphabetTable />
    <div class="my-5">
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CompAlphabetTable from '@/components/alphabets/CompAlphabetTable.vue'

export default {
  name: 'HomeView',
  components: {
    CompAlphabetTable
  }
}
</script>
