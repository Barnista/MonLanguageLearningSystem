<template>
  <div class="home container">
    <div class="text-center my-5">
      <h1 class="display-4 fw-bold mb-3">Welcome to {{ about.appName }}</h1>
      <p class="lead mb-4">
        Explore the Mon language, learn alphabets, and practice your skills.<br>
        Start your journey by selecting a section below.
      </p>
      <!--<img src="@/assets/mon-script-banner.png" alt="Mon Script Banner" class="img-fluid rounded shadow-sm mb-4" style="max-width: 400px;">-->
    </div>
    <div class="row my-4">
      <h2 class="text-dark mb-4">Learn Alphabets (အက္ခရ်မန်)</h2>
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

import about from '@/models/about';

export default {
  name: 'HomeView',
  components: {
    CompAbout
  },
  data: () => {
    return {
      about: about,
      panels: [
        {
          title: 'Consonants',
          route: '/alphabets/consonant',
          icon: 'bi bi-book-half'
        },
        {
          title: 'Vowels',
          route: '/alphabets/vowel',
          icon: 'bi bi-book-half'
        },
        {
          title: 'Compound Consonants',
          route: '/alphabets/compound-consonant',
          icon: 'bi bi-book-half'
        }
      ]
    }
  },
}
</script>
