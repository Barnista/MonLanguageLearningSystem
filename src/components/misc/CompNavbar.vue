<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :class="[($route.path !== '/') ? 'text-muted': '']" :to="`/?lang=${lang}`">
                <img src="@/assets/logo.png" alt="Mon Language Logo" width="30" height="30"
                    class="d-inline-block align-text-top">
                {{ about.appName }}
                <span class="ms-1 text-muted fs-6 d-none d-md-inline">v{{ about.appVersion }}</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavLabel">{{ about.appName }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <!--<li class="nav-item">
                            <router-link :to="`/?lang=${lang}`" :class="['nav-link', { active: $route.path === '/' }]">
                                <i class="bi bi-house"></i> {{ langSet[lang ? lang : 'en'].navbar.home }}
                            </router-link>
                        </li>-->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-book-half"></i> {{ langSet[lang ? lang : 'en'].learnAlphabets.alphabets
                                }}
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" :to="`/alphabets?lang=${lang}`">{{
                                    langSet[lang ? lang :
                                        'en'].learnAlphabets.getStart }}</router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link class="dropdown-item" :to="`/alphabets/consonant?lang=${lang}`">{{
                                    langSet[lang ? lang :
                                        'en'].learnAlphabets.consonants }}</router-link>
                                </li>
                                <li><router-link class="dropdown-item" :to="`/alphabets/vowel?lang=${lang}`">{{
                                    langSet[lang
                                        ? lang : 'en'].learnAlphabets.vowels }}</router-link></li>
                                <li><router-link class="dropdown-item"
                                        :to="`/alphabets/compound-consonant?lang=${lang}`">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.compoundConsonants }}</router-link></li>
                                <li>
                                    <router-link class="dropdown-item" :to="`/alphabets/final-consonant?lang=${lang}`">
                                        {{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" :to="`/alphabets/double-consonant?lang=${lang}`">
                                        {{ langSet[lang ? lang : 'en'].learnAlphabets.doubleConsonants }}
                                    </router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.numerals }}</router-link></li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
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
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.adjective }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.adverb }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.preposition }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.conjunction }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.interjection }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang ? lang : 'en'].learnSentence.classifier }}
                                    </router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnSentence.type }}</router-link></li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnSentence.tense }}</router-link></li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnSentence.syntax }}</router-link></li>
                            </ul>
                        </li>
                        <!-- APPS MENU -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-grid"></i> {{ langSet[lang ? lang : 'en'].apps.title }}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="`/apps/text-analyser?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/apps/text-analyser' }]">
                                        <i class="bi bi-robot"></i> {{ langSet[lang ? lang : 'en'].apps.textAnalyser }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/apps/word-craft?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/apps/word-craft' }]">
                                        <i class="bi bi bi-bricks"></i> {{ langSet[lang ? lang : 'en'].apps.wordCraft }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/apps/dictionary?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/apps/dictionary' }]">
                                        <i class="bi bi bi-translate"></i> {{ langSet[lang ? lang :
                                            'en'].apps.dictionary }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/keyboard?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/keyboard' }]">
                                        <i class="bi bi-keyboard"></i> {{ langSet[lang ? lang : 'en'].keyboard.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- OTHERS MENU -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-info-circle"></i> {{ langSet[lang ? lang : 'en'].navbar.others }}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="`/report-issues?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/report-issues' }]">
                                        <i class="bi bi-flag"></i> {{ langSet[lang ? lang : 'en'].navbar.report }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/community?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/community' }]">
                                        <i class="bi bi-wechat"></i> {{ langSet[lang ? lang :
                                            'en'].navbar.community }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/abouts?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/abouts' }]">
                                        <i class="bi bi-info-circle"></i> {{ langSet[lang ? lang : 'en'].navbar.abouts
                                        }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/about-dev?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/about-dev' }]">
                                        <i class="bi bi-people"></i> {{ langSet[lang ? lang : 'en'].navbar.dev }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="`/changelogs?lang=${lang}`"
                                        :class="['dropdown-item', { active: $route.path === '/changelogs' }]">
                                        <i class="bi bi-journal-text"></i> {{ langSet[lang ? lang :
                                            'en'].aboutView.changeLogs }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
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
            <!--<div class="collapse navbar-collapse" id="navbarNav">
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
                            <li><router-link class="dropdown-item" :to="`/alphabets?lang=${lang}`">{{
                                langSet[lang ? lang :
                                    'en'].learnAlphabets.getStart }}</router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
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
                                <router-link class="dropdown-item" :to="`/alphabets/final-consonant?lang=${lang}`">
                                    {{ langSet[lang ? lang : 'en'].learnAlphabets.finalConsonants }}
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="`/alphabets/double-consonant?lang=${lang}`">
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
            </div>-->
        </div>
    </nav>
</template>

<script>

import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';

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