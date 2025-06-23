<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="`/?lang=${lang}`">
                <img src="@/assets/logo.png" alt="Mon Language Logo" width="30" height="30"
                    class="d-inline-block align-text-top">
                {{ about.appName }}
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <router-link :to="`/?lang=${lang}`" :class="['nav-link', { active: $route.path === '/' }]">
                            <i class="bi bi-house"></i> {{ langSet[lang ? lang : 'en'].navbar.home }}
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-book-half"></i> {{ langSet[lang ? lang : 'en'].learnAlphabets.alphabets }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="`/alphabets/consonant?lang=${lang}`">{{
                                langSet[lang ? lang :
                                    'en'].learnAlphabets.consonants }}</router-link>
                            </li>
                            <li><router-link class="dropdown-item" :to="`/alphabets/vowel?lang=${lang}`">{{ langSet[lang
                                ? lang : 'en'].learnAlphabets.vowels }}</router-link></li>
                            <li><router-link class="dropdown-item" :to="`/alphabets/compound-consonant?lang=${lang}`">{{
                                langSet[lang ? lang :
                                    'en'].learnAlphabets.compoundConsonants }}</router-link></li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnAlphabets.doubleConsonants }}
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">{{
                                langSet[lang ? lang :
                                    'en'].learnAlphabets.numerals }}</router-link></li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">{{
                                langSet[lang ? lang :
                                    'en'].learnAlphabets.punctuations }}</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-chat-dots"></i> {{ langSet[lang ? lang : 'en'].learnSentence.sentence }}
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item disabled" to="#">
                                    {{ langSet[lang ? lang :
                                        'en'].learnSentence.noun }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#">
                                    {{ langSet[lang
                                        ? lang : 'en'].learnSentence.pronoun }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#">
                                    {{
                                        langSet[lang ? lang :
                                            'en'].learnSentence.verb }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnSentence.adjective }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnSentence.adverb }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnSentence.preposition }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnSentence.conjunction }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    {{ langSet[lang ? lang : 'en'].learnSentence.interjection }}
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">{{
                                langSet[lang ? lang :
                                    'en'].learnSentence.type }}</router-link></li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">{{
                                langSet[lang ? lang :
                                    'en'].learnSentence.tense }}</router-link></li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">{{
                                langSet[lang ? lang :
                                    'en'].learnSentence.syntax }}</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :to="`/keyboard?lang=${lang}`"
                            :class="['nav-link', { active: $route.path === '/keyboard' }]">
                            <i class="bi bi-keyboard"></i> {{ langSet[lang ? lang : 'en'].keyboard.title }}
                        </router-link>
                    </li>
                    <!--<li class="nav-item">
                        <router-link :to="`/about" :class="['nav-link', { active: $route.path === '/about' }]">
                            <i class="bi bi-info-circle"></i> About
                        </router-link>
                    </li>-->
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img :src="langOptions[lang ? lang : 'en'].icon" width="24" height="auto">
                                {{ langOptions[lang ? lang : 'en'].label }}
                            </a>
                            <ul class="dropdown-menu">
                                <li v-for="(lang, index) in langOptions" :key="index">
                                    <button class="dropdown-item" @click="$emit('onChangeLang', lang.id)">
                                        <img :src="lang.icon" width="24" height="auto">
                                        {{ lang.label }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import about from '@/services/about';
import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompNavbar',
    props: {
        lang: String
    },
    data: () => {
        return {
            about: about,
            langOptions: displayLanguages.options,
            langSet: displayLanguages.langSet
        }
    },
}

</script>