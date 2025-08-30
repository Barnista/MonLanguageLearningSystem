<template>
  <CompNavbar :lang="lang" @onChangeLang="onChangeLang" />

  <!-- Main Content -->
  <router-view class="safe-zone flex-grow-1" />

  <KeyboardModal ref="keyboardModal" :lang="lang" class="mt-5" />
  <div class="sticky-bottom text-end p-3" id="toastBtn">
    <button @click="showKeyboard" class="btn btn-lg btn-light bg-fabulous rounded-pill shadow">
      <i class="bi bi-keyboard"></i>
      {{ langSet[lang].keyboard.title }}
      <!-- For Mon, English, Thai, Burmese -->
    </button>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <small class="mb-0">v{{ about.appVersion }} © 2025 The Mon Language: Learning System. Developed by Barnista. All
      Rights Reserved.</small>
  </footer>
</template>

<script>

import KeyboardModal from './components/keyboard/KeyboardModal.vue';
import CompNavbar from './components/misc/CompNavbar.vue';

import about from './services/abouts/about';
import displayLanguages from './services/display-languages/display-languages';

export default {
  components: {
    CompNavbar,
    KeyboardModal
  },
  data: () => {
    return {
      about,
      lang: 'en',
      langSet: displayLanguages.langSet
    }
  },
  mounted() {
    this.lang = this.$route.query.lang || 'en';
    console.log('lang', this.lang);
  },
  watch: {
    '$route.query.lang'(newLang) {
      this.lang = newLang || 'en';
    }
  },
  methods: {
    showKeyboard() {
      const keyboardModal = this.$refs.keyboardModal;
      if (keyboardModal) {
        keyboardModal.show();
      }
    },
    onChangeLang(lang) {
      this.lang = lang;
      this.$router.replace({ query: { ...this.$route.query, lang } });
    }
  }
}

</script>

<style>
@font-face {
  font-family: 'Myanmar Text';
  src: url('@/assets/fonts/mmrtext.ttf'), url('@/assets/fonts/mmrtextb.ttf');
}

@font-face {
  font-family: 'Padauk';
  src: url('@/assets/fonts/Padauk-Regular.ttf'),
    url('@/assets/fonts/Padauk-Bold.ttf');
}

@font-face {
  font-family: 'Noto Sans Myanmar';
  src: url('@/assets/fonts/NotoSansMyanmar-Regular.ttf'),
    url('@/assets/fonts/NotoSansMyanmar-Medium.ttf'),
    url('@/assets/fonts/NotoSansMyanmar-Bold.ttf');
}

.mon-text {
   font-family: system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    Arial,
    sans-serif,
    "Myanmar Text",
    "Padauk",
    "Noto Sans Myanmar",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

/* Default Myanmar fonts for Mon text rendering */
body,
html,
#app {
  font-family: system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    Arial,
    sans-serif,
    "Myanmar Text",
    "Padauk",
    "Noto Sans Myanmar",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

.safe-zone {
  padding-top: 56px;
  /* Adjust based on your navbar height */
  min-height: calc(100vh - 56px);
  /* Ensure footer is at the bottom */
}

.bg-fabulous {
  background: linear-gradient(90deg, #ff8a00, #e52e71, #4a90e2, #ff8a00);
  background-size: 400% 400%;
  animation: gradient-flash 8s linear infinite;
  color: #fff !important;
}

@keyframes gradient-flash {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
