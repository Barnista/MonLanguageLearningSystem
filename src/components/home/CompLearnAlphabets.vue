<template>
    <div id="comp-learn-alphabets">
        <h3 class="text-dark mb-4">{{ langSet[lang].learnAlphabets.title || '_LEARN_ALPHABETS_' }} (အက္ခရ်မန်)</h3>
        <div class="row">
            <div class="col-md-12 col-lg-6 mb-3">
            <router-link :to="{ path: '/alphabets', query: { lang } }"
                    :class="['btn', `btn-light bg-fabulous`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <i class="fs-1 bi bi-play-btn" style="font-size: 2rem;"></i>
                <span class="fs-4 fw-bold">{{ langSet[lang].learnAlphabets.getStart || '_GET_START_' }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="row">
                    <div class="col-6 mb-3">
                <router-link :to="{ path: '/alphabets/consonant', query: { lang } }"
                            :class="['btn', `btn-outline-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <i class="bi bi-book-half mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[lang].learnAlphabets.consonants || '_CONSONANTS_' }} (35)</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6 mb-3">
                <router-link :to="{ path: '/alphabets/vowel', query: { lang } }"
                            :class="['btn', `btn-outline-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <i class="bi bi-book-half mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[lang].learnAlphabets.vowels || '_VOWELS_' }} (12)</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6 mb-3">
                <router-link :to="{ path: '/alphabets/compound-consonant', query: { lang } }"
                            :class="['btn', `btn-outline-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <i class="bi bi-book-half mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[lang].learnAlphabets.compoundConsonants || '_COMPOUND_CONSONANTS_' }} (11)</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6 mb-3">
                <router-link :to="{ path: '/alphabets/final-consonant', query: { lang } }"
                            :class="['btn', `btn-outline-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <i class="bi bi-book-half mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[lang].learnAlphabets.finalConsonants || '_FINAL_CONSONANTS_' }} (10)</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-12 mb-3">
                <router-link :to="{ path: '/alphabets/double-consonant', query: { lang } }"
                            :class="['btn', `btn-outline-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <i class="bi bi-book-half mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[lang].learnAlphabets.doubleConsonants || '_DOUBLE_CONSONANTS_' }} (2)</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6 mb-3">
                        <button
                            :class="['btn', `btn-outline-info`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']"
                            disabled>
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                <i class="bi bi-hash mb-2" style="font-size: 2rem;"></i>
                                <span class="fs-5 fw-bold">{{ this.langSet[this.lang].learnAlphabets.punctuations ||
                                    '_PUNCTUATIONS_' }}</span>
                            </div>
                        </button>
                    </div>
                    <div class="col-6 mb-3">
                        <button
                            :class="['btn', `btn-outline-info`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']"
                            disabled>
                            <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                <i class="bi bi-123 mb-2" style="font-size: 2rem;"></i>
                                <span class="fs-5 fw-bold">{{ this.langSet[this.lang].learnAlphabets.numerals ||
                                    '_NUMERALS_'
                                }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompLearnAlphabets',
    props: {
        lang: String,
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
        }
    }
}
</script>