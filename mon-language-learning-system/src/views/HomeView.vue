<template>
  <div class="home mt-4">
    <CompConsonantTable class="mb-2" />
    <hr>
    <CompVowelTable class="mt-5" />
    <hr>
    <CompCompoundCosonantTable class="mt-5" />
    <div class="my-5">
      <hr>
    </div>
    <KeyboardModal ref="keyboardModal" class="mt-5" />
    <div class="sticky-bottom text-end p-3" id="toastBtn">
      <button @click="showKeyboard" class="btn btn-lg btn-primary rounded-pill shadow">
        <i class="bi bi-keyboard"></i>
        Keyboard
        <!-- For Mon, English, Thai, Burmese -->
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CompCompoundCosonantTable from '@/components/alphabets/CompCompoundConsonantTable.vue';
import CompConsonantTable from '@/components/alphabets/CompConsonantTable.vue'
import CompVowelTable from '@/components/alphabets/CompVowelTable.vue';
import KeyboardModal from '@/components/keyboard/KeyboardModal.vue';

export default {
  name: 'HomeView',
  components: {
    CompConsonantTable,
    CompVowelTable,
    CompCompoundCosonantTable,
    KeyboardModal
  },
  methods: {
    showKeyboard() {
      const keyboardModal = this.$refs.keyboardModal;
      if (keyboardModal) {
        keyboardModal.show();
      }
    }
  }
}
</script>
