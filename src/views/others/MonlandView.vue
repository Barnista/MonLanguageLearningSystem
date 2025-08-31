<template>
  <div class="about container">
    <div v-if="!unlocked" class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card pb-1 shadow">
          <div class="card-body">
            <h5 class="card-title mb-3">Enter password to unlock the secret.</h5>
            <p class="card-text text-muted mb-3">Do not insert empty spaces.</p>
            <div>
              <div class="mb-3">
                <div class="input-group mt-4">
                  <button v-if="!isKeyboardShown" @click="showKeyboard()"
                    class="btn btn-outline-light bg-fabulous btn-lg">
                    <i class="bi bi-keyboard"></i>
                  </button>
                  <button v-else @click="hideKeyboard()" class="btn btn-outline-light bg-fabulous btn-lg">
                    <i class="bi bi-chevron-bar-up"></i>
                  </button>
                  <input id="monInput" v-model="password" @keyup.enter="unlock(password)" type="text"
                    class="form-control form-control-lg" placeholder="Enter password here..." />
                </div>
                <div class="accordion-item">
                  <div :id="`collapseKeyboard`" class="accordion-collapse collapse"
                    aria-labelledby="headingConsonantTable2" :data-bs-parent="`#accordionKeyboard2`">
                    <div class="accordion-body">
                      <CompSimpleKeyboard v-if="windowWidth > 800" ref="mobileKeyboard" :input="text"
                        @onChange="onChange" @onKeyPress="onKeyPress" />
                      <CompMobileKeyboard v-if="windowWidth <= 800" ref="mobileKeyboard" :input="text"
                        @onChange="onChange" @onKeyPress="onKeyPress" />
                    </div>
                  </div>
                </div>
                <div class="text-center text-success mt-1">
                  <small>
                    Hint: A Mon phrase that resonates every Mon person.
                  </small>
                </div>
              </div>
              <button @click="unlock(password)" class="btn btn-primary w-100">Login</button>
            </div>
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

import CompMobileKeyboard from '@/components/keyboard/CompMobileKeyboard.vue';
import CompSimpleKeyboard from '@/components/keyboard/CompSimpleKeyboard.vue';
import CompMonland from '@/components/others/abouts/CompMonland.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import { logPageView } from '@/services/firebase/app';
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.min';

export default {
  components: {
    CompMonland,
    CompSimpleKeyboard,
    CompMobileKeyboard
  },
  data() {
    return {
      // Data properties can be added here if needed
      langSet: displayLanguages.langSet,
      lang: this.$route.query.lang || 'en',
      password: '',
      unlocked: false,
      error: false,
      isKeyboardShown: false,
      collapseKeyboard: null,
    };
  },
  created() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  mounted() {
    logPageView('MonlandView');
    // Any initialization logic can be added here
    this.lang = this.$route.query.lang || 'en';

    this.collapseKeyboard = new Collapse('#collapseKeyboard', {
      toggle: false
    });
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
    },
    showKeyboard() {
      this.isKeyboardShown = true;
      this.collapseKeyboard.show();
    },
    hideKeyboard() {
      this.isKeyboardShown = false;
      this.collapseKeyboard.hide();
    },
    onChange(input) {
      this.password = input;
    },
    onKeyPress(button) {
      console.log("button", button);
      if (button === '{enter}') {
        this.unlock(this.password);
      }
    },
  },
  watch: {
    '$route.query.lang': function (newLang) {
      this.lang = newLang || 'en';
    }
  },
}

</script>
