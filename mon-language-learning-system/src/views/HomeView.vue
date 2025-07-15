<template>
  <div class="home container">
    <div class="text-center my-5">
      <h1 class="fw-bold mb-3">{{ langSet[lang].homeView.welcome || '_WELCOME_TO_' }} {{ about.appName }}</h1>
      <p class="lead mb-4">
        <span v-html="langSet[lang].homeView.description || '_DESCRIPTION_'"></span>
      </p>
      <!--<img src="@/assets/mon-script-banner.png" alt="Mon Script Banner" class="img-fluid rounded shadow-sm mb-4" style="max-width: 400px;">-->
    </div>
    <CompLearnAlphabets :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompLearnGrammar :lang="lang" :panels2="panels2" />
    <div class="my-5">
      <hr>
    </div>
    <CompAbout />
  </div>
</template>

<script>

import CompAbout from '@/components/CompAbout.vue';
import CompLearnAlphabets from '@/components/home/CompLearnAlphabets.vue';
import CompLearnGrammar from '@/components/home/CompLearnGrammar.vue';

import about from '@/services/about';
import displayLanguages from '@/services/display-languages';

export default {
  name: 'HomeView',
  components: {
    CompAbout,
    CompLearnAlphabets,
    CompLearnGrammar
  },
  data: () => {
    return {
      lang: 'en',
      langSet: displayLanguages.langSet,
      about: about,
      panels: [],
      panels2: []
    }
  },
  mounted() {
    this.lang = this.$route.query.lang || 'en';
    this.rebuildPanels();
    this.rebuildPanels2();
  },
  watch: {
    '$route.query.lang'(newLang) {
      this.lang = newLang || 'en';
      this.rebuildPanels();
      this.rebuildPanels2();
    }
  },
  methods: {
    rebuildPanels() {
      this.panels = [
        {
          title: this.langSet[this.lang].learnAlphabets.consonants || '_CONSONANTS_',
          route: `/alphabets/consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half',
          color: 'success'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.vowels || '_VOWELS_',
          route: `/alphabets/vowel?lang=${this.lang}`,
          icon: 'bi bi-book-half',
          color: 'success'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_',
          route: `/alphabets/compound-consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half',
          color: 'success'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.finalConsonants || '_FINAL CONSONANTS_',
          route: `/alphabets/final-consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half',
          color: 'success'
        },
        {
          title: this.langSet[this.lang].learnAlphabets.doubleConsonants || '_DOUBLE CONSONANTS_',
          route: `/alphabets/double-consonant?lang=${this.lang}`,
          icon: 'bi bi-book-half',
          color: 'success',
        },
        {
          title: this.langSet[this.lang].learnAlphabets.numerals || '_NUMERALS_',
          route: `#`,
          icon: 'bi bi-123',
          color: 'info',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnAlphabets.punctuations || '_PUNCTUATIONS_',
          route: `#`,
          icon: 'bi bi-hash',
          color: 'info',
          disabled: true
        },
      ]
    },
    rebuildPanels2() {
      this.panels2 = [
        {
          title: this.langSet[this.lang].learnSentence.noun || '_NOUN_',
          route: `/alphabets/consonant?lang=${this.lang}`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.pronoun || '_PRONOUNCE_',
          route: `/alphabets/vowel?lang=${this.lang}`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.verb || '_VERB_',
          route: `/alphabets/compound-consonant?lang=${this.lang}`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.adjective || '_ADJECTIVE_',
          route: `#`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.adverb || '_ADVERB_',
          route: `#`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.preposition || '_PREPOSITION_',
          route: `#`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.conjunction || '_CONJUNCTION_',
          route: `#`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.interjection || '_INTERJECTION_',
          route: `#`,
          icon: 'bi bi-chat-dots',
          color: 'success',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.type || '_TYPE_',
          route: `#`,
          icon: 'bi bi-chat-right-text',
          color: 'info',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.tense || '_TENSE_',
          route: `#`,
          icon: 'bi bi-chat-right-text',
          color: 'info',
          disabled: true
        },
        {
          title: this.langSet[this.lang].learnSentence.syntax || '_SYNTAX_',
          route: `#`,
          icon: 'bi bi-chat-right-text',
          color: 'info',
          disabled: true
        },
      ]
    }
  }
}
</script>
