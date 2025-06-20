<template>
  <CompNavbar />

  <!-- Main Content -->
  <router-view class="safe-zone flex-grow-1" />

  <KeyboardModal ref="keyboardModal" class="mt-5" />
  <div class="sticky-bottom text-end p-3" id="toastBtn">
    <button @click="showKeyboard" class="btn btn-lg btn-primary rounded-pill shadow">
      <i class="bi bi-keyboard"></i>
      Keyboard
      <!-- For Mon, English, Thai, Burmese -->
    </button>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <small class="mb-0">v{{ about.appVersion }} © 2025 The Mon Language: Learning System. Developed by Barnista. All Rights Reserved.</small>
  </footer>
</template>

<script>

import KeyboardModal from './components/keyboard/KeyboardModal.vue';
import CompNavbar from './views/misc/CompNavbar.vue';

import about from './models/about';

export default {
  components: {
    CompNavbar,
    KeyboardModal
  },
  data: () => {
    return {
      about
    }
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

<style>
.safe-zone {
  padding-top: 56px;
  /* Adjust based on your navbar height */
  min-height: calc(100vh - 56px);
  /* Ensure footer is at the bottom */
}
</style>
