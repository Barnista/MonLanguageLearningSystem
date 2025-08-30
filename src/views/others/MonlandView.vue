<template>
  <div class="about container">
    <div v-if="!unlocked" class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card pb-1 shadow">
          <div class="card-body">
            <h5 class="card-title mb-3">Enter password to unlock the secret.</h5>
            <p class="card-text text-muted mb-3">Do not insert empty spaces.</p>
            <form @submit.prevent="unlock(password)">
              <div class="mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="Password" required />
                <div class="text-center text-success mt-1">
                  <small>
                    Hint: A Mon phrase that resonates every Mon person.
                  </small>
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <div class="text-center text-danger fw-bold mt-2" v-if="error">
                  <small>
                    ERROR: WRONG PASSWORD!!!
                  </small>
                </div>
          </div>
        </div>
      </div>
    </div>
    <CompMonland v-if="unlocked" :lang="lang" class="mt-5" />
  </div>
</template>

<script>

import CompMonland from '@/components/others/abouts/CompMonland.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';

export default {
  components: {
    CompMonland
  },
  data() {
    return {
      // Data properties can be added here if needed
      langSet: displayLanguages.langSet,
      lang: this.$route.query.lang || 'en',
      unlocked: false,
      error: false
    };
  },
  mounted() {
    logPageView('MonlandView');
    // Any initialization logic can be added here
    this.lang = this.$route.query.lang || 'en';
  },
  methods: {
    // Methods for handling report issues can be added here
    unlock(password) {
      if (password === 'စိုတ်မန်စိုတ်မွဲ') {
        this.unlocked = true;
        this.error = false;
      } else {
        this.error = true;
      }
    }
  },
  watch: {
    '$route.query.lang': function (newLang) {
      this.lang = newLang || 'en';
    }
  },
}

</script>
