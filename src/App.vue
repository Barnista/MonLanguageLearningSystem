<template>
  <CompNavbar :lang="lang" :currentUser="currentUser" @onChangeLang="onChangeLang" />

  <!-- Main Content -->
  <router-view class="safe-zone flex-grow-1" />

  <KeyboardModal ref="keyboardModal" :lang="lang" />

  <div class="sticky-bottom text-end p-3" id="toastBtn">
    <button @click="showKeyboard" class="btn btn-lg btn-secondary pb-1 pt-2 px-3 rounded-pill shadow">
      <i class="bi bi-keyboard"></i>
    </button>
    <router-link v-if="!currentUser" :to="{ path: '/login', query: { lang } }" class="ms-2 btn btn-lg bg-fabulous pb-1 pt-2 px-3 rounded-pill shadow">
      <i class="bi bi-person-circle"></i>
      Renaissance
    </router-link>
    <router-link v-else :to="{ path: '/dashboard#comp-dashboard', query: { lang } }" class="ms-2 btn btn-lg bg-fabulous pb-1 pt-2 ps-2 pe-3 rounded-pill shadow">
      <img v-if="currentUser.photoURL" :src="getAvatarById(currentUser.photoURL).src" alt="User Avatar" width="28"
        height="28" class="rounded-circle me-1" :class="[{ circleActive: $route.path === '/dashboard' }]">
      My Dashboard
    </router-link>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <small class="mb-0">v{{ about.appVersion }} © 2025 The Mon Language: Learning System. Developed by Barnista. All
      Rights Reserved.</small>
  </footer>
</template>

<script>

import KeyboardModal from './components/based/keyboard/KeyboardModal.vue';
import CompNavbar from './components/based/misc/CompNavbar.vue';

import about from './services/abouts/about';
import displayLanguages from './services/display-languages/display-languages';

import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from './services/firebase/app';
import { avatarFullPack, getAvatarById } from './assets/data/avatars/avatars';

export default {
  components: {
    CompNavbar,
    KeyboardModal
  },
  setup() {
    // Setup logic: SEO + auth state listener
    try {
      const route = useRoute();
      const lang = route.query.lang || 'en';
      const langSEO = seoLanguages.langSEO[lang.toString()];
      useHead({
        htmlAttrs: { lang: langSEO["lang"] || 'en-US' },
        meta: langSEO["meta"]["default"],
        link: langSEO["link"]["default"]
      });
      useSeoMeta({
        ...langSEO["seoMeta"]["default"]
      });
    } catch (error) {
      console.error('Error in setup:', error);
    }
  },
  data: () => {
    return {
      about,
      lang: 'en',
      langSet: displayLanguages.langSet,
      currentUser: null,
      avatars: avatarFullPack,
      getAvatarById: getAvatarById
    }
  },
  mounted() {
    this.lang = this.$route.query.lang || 'en';
    console.log('lang', this.lang);
    const auth = getAuth(firebaseApp);

    setInterval(() => {
      this.currentUser = auth.currentUser;
    }, 1000);
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
      try {
        this.lang = lang;
      } catch (error) {
        this.lang = 'en';
      }
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

@font-face {
  font-family: 'Pyidaungsu';
  src: url('@/assets/fonts/Pyidaungsu-2.5.4_Regular.ttf'),
    url('@/assets/fonts/Pyidaungsu-2.5.4_Bold.ttf'),
    url('@/assets/fonts/PyidaungsuNumbers-Regular.ttf');
}

.icon-fonrt {
  font-family: 'FontAwesome', sans-serif;
}

.mon-text {
  font-family: "Pyidaungsu",
    "Padauk",
    "Myanmar Text",
    "Noto Sans Myanmar",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

/* Default Myanmar fonts for Mon text rendering */
body,
html,
#app {
  font-family: "Pyidaungsu",
    "Padauk",
    "Myanmar Text",
    "Noto Sans Myanmar",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    Arial,
    sans-serif,
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

.bg-transparent {
  background-color: transparent !important;
}

.custom-h-100 {
  min-height: 100vh;
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
