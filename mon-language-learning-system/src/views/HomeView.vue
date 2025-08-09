<template>
  <div class="home container">
    <div class="text-center mt-5 mb-4">
      <h1 class="fw-bold mb-2">{{ langSet[lang].homeView.welcome || '_WELCOME_TO_' }}</h1>
      <p class="lead text-secondary">
        <span>
          <Typewriter :words="descriptions" :loop="0" :delay-speed="3000" :delete-speed="80" :type-speed="60"
            :cursor="true" :cursor-blinking="true" :cursor-style="'|'" :cursor-color="'#aaaaaa'"
            :on-loop-done="onLoopDone" :on-delay="onDelay" :on-delete="onDelete" :on-type="onType" class="text" />
        </span>
      </p>
      <div class="d-flex justify-content-center align-items-center mt-4">
        <label class="text-muted" style="color: #ccc;">{{ langSet[lang || 'en'].homeView.displayLanguage }}: </label>
        <button class="ms-2 dropdown btn btn-outline-secondary shadow-sm">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img :src="langOptions[lang ? lang : 'en'].icon" width="24" height="auto">
            {{ langOptions[lang ? lang : 'en'].label }}
          </a>
          <ul class="dropdown-menu shadow">
            <li v-for="(lang, index) in langOptions" :key="index">
              <button class="dropdown-item" @click="onChangeLang(lang.id)">
                <img :src="lang.icon" width="24" height="auto">
                {{ lang.label }}
              </button>
            </li>
          </ul>
        </button>
      </div>
      <!--<img src="@/assets/mon-script-banner.png" alt="Mon Script Banner" class="img-fluid rounded shadow-sm mb-4" style="max-width: 400px;">-->
    </div>
    <CompMiniApps :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompLearnAlphabets :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompLearnGrammar :lang="lang" :panels2="panels2" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompOthers :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompOtherCommunities :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompRelatedContent :lang="lang" />
    <div class="mt-3 mb-5">
      <hr>
    </div>
    <CompJoinUs :lang="lang" />
    <CompDevMessage :lang="lang" class="mt-5" />
  </div>
</template>

<script>

import CompLearnAlphabets from '@/components/home/CompLearnAlphabets.vue';
import CompLearnGrammar from '@/components/home/CompLearnGrammar.vue';
import CompMiniApps from '@/components/home/CompMiniApps.vue';

import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';
import { Typewriter } from 'vue-simple-typewriter';
import CompOthers from '@/components/home/CompOthers.vue';
import CompOtherCommunities from '@/components/others/communities/CompOtherCommunities.vue';
import CompRelatedContent from '@/components/others/communities/CompRelatedContent.vue';
import CompJoinUs from '@/components/others/communities/CompJoinUs.vue';
import CompDevMessage from '@/components/others/abouts/CompDevMessage.vue';

export default {
  name: 'HomeView',
  components: {
    CompLearnAlphabets,
    CompLearnGrammar,
    CompOthers,
    Typewriter,
    CompMiniApps,
    CompOtherCommunities,
    CompRelatedContent,
    CompJoinUs,
    CompDevMessage
  },
  data: () => {
    return {
      lang: 'en',
      langSet: displayLanguages.langSet,
      langOptions: displayLanguages.options,
      about: about,
      panels: [],
      panels2: [],
      descriptions: []
    }
  },
  mounted() {
    this.lang = this.$route.query.lang || 'en';
    this.rebuildPanels();
    this.rebuildPanels2();
    this.rebuildDescriptions();
  },
  watch: {
    '$route.query.lang'(newLang) {
      this.lang = newLang || 'en';
      this.rebuildPanels();
      this.rebuildPanels2();
      this.rebuildDescriptions();
    }
  },
  methods: {
    onChangeLang(lang) {
      this.lang = lang;
      this.$router.replace({ query: { ...this.$route.query, lang } });
    },
    rebuildDescriptions() {
      this.descriptions = [];
      this.descriptions.push(this.langSet[this.lang].homeView.description);
      this.descriptions.push(this.langSet[this.lang].homeView.description2);
      this.descriptions.push(this.langSet[this.lang].homeView.description3);
    },
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
          title: this.langSet[this.lang].learnSentence.classifier || '_CLASSIFIER_',
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
