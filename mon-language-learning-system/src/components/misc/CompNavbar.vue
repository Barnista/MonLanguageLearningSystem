<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/#">
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
                        <router-link to="/" :class="['nav-link', { active: $route.path === '/' }]">
                            <i class="bi bi-house"></i> Home
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-book-half"></i> Alphabets
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/alphabets/consonant">Consonants</router-link>
                            </li>
                            <li><router-link class="dropdown-item" to="/alphabets/vowel">Vowels</router-link></li>
                            <li><router-link class="dropdown-item" to="/alphabets/compound-consonant">Compound
                                    Consonants</router-link></li>
                            <li>
                                <router-link class="dropdown-item disabled" to="#" tabindex="-1" aria-disabled="true">
                                    Final Consonants
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                    aria-disabled="true">Numerals</router-link></li>
                            <li><router-link class="dropdown-item disabled" to="#" tabindex="-1"
                                    aria-disabled="true">Punctuations</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/keyboard" :class="['nav-link', { active: $route.path === '/keyboard' }]">
                            <i class="bi bi-keyboard"></i> Keyboard
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" :class="['nav-link', { active: $route.path === '/about' }]">
                            <i class="bi bi-info-circle"></i> About
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
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