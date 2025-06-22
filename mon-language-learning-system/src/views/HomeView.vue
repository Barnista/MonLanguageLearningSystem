<template>
  <div class="home container">
    <div class="text-center my-5">
      <h1 class="display-4 fw-bold mb-3">{{ langSet[lang].homeView.welcome || '_WELCOME_TO_' }} {{ about.appName }}</h1>
      <p class="lead mb-4">
        <span v-html="langSet[lang].homeView.description || '_DESCRIPTION_'"></span>
      </p>
      <!--<img src="@/assets/mon-script-banner.png" alt="Mon Script Banner" class="img-fluid rounded shadow-sm mb-4" style="max-width: 400px;">-->
    </div>
    <div class="row my-4">
      <h2 class="text-dark mb-4">{{ langSet[lang].learnAlphabets.title || '_LEARN_ALPHABETS_' }} (အက္ခရ်မန်)</h2>
      <div class="col-6 col-md-4 mb-3" v-for="panel in panels" :key="panel.title">
        <router-link :to="panel.route"
          class="btn btn-outline-success w-100 py-4 shadow-sm rounded-3 d-flex flex-column align-items-center">
          <i :class="panel.icon" class="mb-2" style="font-size: 2rem;"></i>
          <span class="fs-4 fw-bold">{{ panel.title }}</span>
        </router-link>
      </div>
    </div>
    <div class="my-5">
      <hr>
    </div>
    <CompAbout />
  </div>
</template>

<script>

import CompAbout from '@/components/CompAbout.vue';

import about from '@/services/about';
import displayLanguages from '@/services/display-languages';

export default {
  name: 'HomeView',
  components: {
    CompAbout
  },
  data: () => {
    return {
      lang: 'en',
      langSet: displayLanguages.langSet,
      about: about,
      panels: []
    }
  },
  mounted() {
    this.lang = this.$route.query.lang || 'en';
    this.rebuildPanels();
  },
  watch: {
    '$route.query.lang'(newLang) {
      this.lang = newLang || 'en';
      this.rebuildPanels();
    }
  },
  methods: {
    rebuildPanels() {
      this.panels = [
        {
          title: this.langSet[this.lang].learnAlphabets.consonants || '_CONSONANTS_',
          route: `/alphabets/consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.vowels || '_VOWELS_',
          route: `/alphabets/vowel?lang=${this.lang}`,
          icon: 'bi bi-book-half'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_',
          route: `/alphabets/compound-consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half'
        }
      ]
    }
  }
}
</script>
