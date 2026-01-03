<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :class="[($route.path !== '/') ? 'text-muted' : '']"
                :to="{ path: '/', query: { lang } }">
                <img src="@/assets/logo2.svg" alt="Mon Language Logo" width="30" height="30"
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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-book-half"></i> {{ langSet[lang || 'en'].navbar.learnMon
                                }}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" :to="{ path: '/alphabets', query: { lang } }">
                                        <i class="bi bi-book-half"></i>
                                        {{ langSet[lang ? lang :
                                            'en'].learnAlphabets.alphabets
                                        }} ({{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.getStart }})
                                    </router-link>
                                </li>
                                <li><router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/consonant', query: { lang } }">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.consonants }}</router-link>
                                </li>
                                <li><router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/vowel', query: { lang } }">{{
                                            langSet[lang
                                                ? lang : 'en'].learnAlphabets.vowels }}</router-link></li>
                                <li><router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/compound-consonant', query: { lang } }">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.compoundConsonants }}</router-link></li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/final-consonant', query: { lang } }">
                                        {{ langSet[lang || 'en'].learnAlphabets.finalConsonants }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/double-consonant', query: { lang } }">
                                        {{ langSet[lang || 'en'].learnAlphabets.doubleConsonants }}
                                    </router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><router-link class="dropdown-item"
                                        :to="{ path: '/alphabets/numerals', query: { lang } }" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.numerals }}</router-link></li>
                                <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">{{
                                            langSet[lang ? lang :
                                                'en'].learnAlphabets.punctuations }}</router-link></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <router-link class="dropdown-item" :to="{ path: '/grammars', query: { lang } }">
                                        <i class="bi bi-chat-dots"></i>
                                        {{ langSet[lang || 'en'].learnSentence.sentence }} ({{ langSet[lang ? lang
                                            : 'en'].learnSentence.getStart }})
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#">
                                        {{ langSet[lang ? lang :
                                            'en'].learnSentence.noun }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item"
                                        :to="{ path: '/grammars/pronoun', query: { lang } }">
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
                                        {{ langSet[lang || 'en'].learnSentence.adjective }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang || 'en'].learnSentence.adverb }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang || 'en'].learnSentence.preposition }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang || 'en'].learnSentence.conjunction }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang || 'en'].learnSentence.interjection }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                        aria-disabled="true">
                                        {{ langSet[lang || 'en'].learnSentence.classifier }}
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
                                <i class="bi bi-grid"></i> {{ langSet[lang || 'en'].apps.title }}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="{ path: '/apps/text-analyser', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/apps/text-analyser' }]">
                                        <i class="bi bi-robot"></i> {{ langSet[lang || 'en'].apps.textAnalyser }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/apps/word-craft', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/apps/word-craft' }]">
                                        <i class="bi bi bi-bricks"></i> {{ langSet[lang || 'en'].apps.wordCraft }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/apps/dictionary', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/apps/dictionary' }]">
                                        <i class="bi bi bi-translate"></i> {{ langSet[lang ? lang :
                                            'en'].apps.dictionary }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/keyboard', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/keyboard' }]">
                                        <i class="bi bi-keyboard"></i> {{ langSet[lang || 'en'].keyboard.title }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/apps/num-converter', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/apps/num-converter' }]">
                                        <i class="bi bi-regex"></i> {{ langSet[lang || 'en'].apps.numConverter }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- OTHERS MENU -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-info-circle"></i> {{ langSet[lang || 'en'].navbar.others }}
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="{ path: '/report-issues', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/report-issues' }]">
                                        <i class="bi bi-flag"></i> {{ langSet[lang || 'en'].navbar.report }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/community', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/community' }]">
                                        <i class="bi bi-wechat"></i> {{ langSet[lang ? lang :
                                            'en'].navbar.community }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/abouts', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/abouts' }]">
                                        <i class="bi bi-info-circle"></i> {{ langSet[lang || 'en'].navbar.abouts
                                        }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/about-dev', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/about-dev' }]">
                                        <i class="bi bi-people"></i> {{ langSet[lang || 'en'].navbar.dev }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/change-logs', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/change-logs' }]">
                                        <i class="bi bi-journal-text"></i> {{ langSet[lang ? lang :
                                            'en'].aboutView.changeLogs }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/for-developers', query: { lang } }"
                                        :class="['dropdown-item', { active: $route.path === '/for-developers' }]">
                                        <i class="bi bi-code-slash"></i> APIs & Open-sources
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- LANGUAGE SELECTOR -->
                        <li class="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img :src="langOptions[lang || 'en'].icon" width="24" height="auto">
                                    {{ langOptions[lang || 'en'].label }}
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

                        <!-- AUTH BUTTONS -->
                        <li class="nav-item">
                            <router-link v-if="!currentUser" :to="{ path: '/login', query: { lang } }"
                                :class="['nav-link', { active: $route.path === '/login' }, 'text-warning']">
                                <i class="bi bi-person-circle"></i>
                                Renaissance
                            </router-link>
                            <router-link v-else :to="{ path: '/dashboard', query: { lang } }"
                                :class="['nav-link', { active: $route.path === '/dashboard' }]">
                                <img v-if="currentUser.photoURL" :src="getAvatarById(currentUser.photoURL).src" alt="User Avatar" width="24" height="24"
                                    class="rounded-circle me-1" :class="[{circleActive: $route.path === '/dashboard'}]">
                                My Dashboard
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import { avatarFullPack, getAvatarById } from '@/assets/data/avatars/avatars';
import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompNavbar',
    props: {
        lang: {
            type: String,
            required: false,
            default: 'en',
        },
        currentUser: {
            type: Object,
            required: false,
            default: null,
        },
    },
    data: () => {
        return {
            about: about,
            langOptions: displayLanguages.options,
            langSet: displayLanguages.langSet,
            avatars: avatarFullPack,
            getAvatarById: getAvatarById
        }
    }
}

</script>