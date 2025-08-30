<template>
    <div class="comp-about">
        <div class="text-center">
            <img src="@/assets/logo.png" class="me-3 mb-2" width="auto" height="256" :alt="about.appName2 + ' Logo'" />
            <h1>{{ about.appName2 }}</h1>
        </div>
        <div class="=mt-5">
            <h3 class="mt-4">{{ langSet[lang || 'en'].aboutView.title }}</h3>
            <hr>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription1" class="mt-3"></p>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription2"></p>
            <p v-html="langSet[lang || 'en'].aboutView.aboutDescription3"></p>
        </div>
        <CompDevMessage :lang="lang" class="mt-5"/>
    </div>
</template>

<script>
import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';
import CompDevMessage from './CompDevMessage.vue';

export default {
    name: "CompAbout",
    components: {
        CompDevMessage
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            about: about,
            langSet: displayLanguages.langSet
        }
    }
}

</script>
