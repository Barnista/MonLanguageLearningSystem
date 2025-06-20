<template>
  <div class="about mt-4">
    <div class="container my-5">
      <h1 class="text-center">About {{ about.appName2 }}</h1>
      <p class="mt-3">
        This system is designed to help users learn the Mon language through interactive lessons, exercises, and
        resources.
      </p>
      <p>
        The platform includes features such as a virtual keyboard for typing in Mon, alphabet tables, and various
        learning tools.
      </p>
      <p>
        Developed by Barnista, this project aims to promote the Mon language and culture, making it accessible to a
        wider audience.
      </p>
      <p>
        For more information, you can visit the <a href="https://github.com/Barnista/MonLanguageLearningSystem" target="_blank" rel="noopener noreferrer">GitHub
          repository</a>.
      </p>

      <div class="mt-5">
        <h3>Many Thanks To</h3>
        <p>
          Telegram:
          <a class="fw-bold" href="https://t.me/mot_tip_ebook" target="_blank" rel="noopener noreferrer">
            မတ်ဒိဗ် E book
          </a>
        </p>
        <p>
          Special Advisers: <strong>Min Salad</strong>, <strong>Rosa Mon</strong>
        </p>
      </div>

      <div class="mt-5">
        <h3>References</h3>
        <p>
          The Mon Alphabets:
          <a href="https://en.wikipedia.org/wiki/Mon_alphabet" target="_blank" rel="noopener noreferrer">
            https://en.wikipedia.org/wiki/Mon_alphabet
          </a>
        </p>
        <p>
          คู่มือการเรียนรู้ภาษามอญ:
          <a href="http://www.monlibrary.com/" target="_blank" rel="noopener noreferrer">
            http://www.monlibrary.com
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import about from '@/models/about';

export default {
  data: () => {
    return {
      about: about
    }
  }
}

</script>
