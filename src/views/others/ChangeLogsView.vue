<template>
  <div class="changelogs container">
    <CompFutureUpdates :lang="lang" class="mt-5" />
    <CompChangeLogs :lang="lang" class="mt-5" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useHead, useSeoMeta } from '@unhead/vue'
import seoLanguages from '@/services/display-languages/seo-languages';

import CompChangeLogs from '@/components/others/abouts/CompChangeLogs.vue';
import CompFutureUpdates from '@/components/others/abouts/CompFutureUpdates.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
  components: {
    CompChangeLogs,
    CompFutureUpdates
  },
  setup() {
    // Grab query params
    const route = useRoute();
    const lang = route.query.lang || 'eng';
    const langSEO = seoLanguages.langSEO[lang];
    useHead({
      htmlAttrs: { lang: langSEO["lang"] || 'en-US' },
      meta: langSEO["meta"]["default"],
      link: langSEO["link"]["default"]
    });
    useSeoMeta({
      ...langSEO["seoMeta"]["default"]
    });
  },
  data() {
    return {
      // Data properties can be added here if needed
      langSet: displayLanguages.langSet,
      lang: this.$route.query.lang || 'en'
    };
  },
  mounted() {
    logPageView(this.$options.name);
    // Any initialization logic can be added here
    this.lang = this.$route.query.lang || 'en';
  },
  methods: {
    // Methods for handling report issues can be added here
  },
  watch: {
    '$route.query.lang': function (newLang) {
      this.lang = newLang || 'en';
    }
  },
}

</script>
