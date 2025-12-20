<template>
    <div class="comp-learn-gammar">
        <div class="row my-4">
            <h3 class="text-dark mb-4">{{ langSet[lang].learnSentence.title || '_LEARN_ALPHABETS_' }} (ဝါကျမန်)</h3>
            <div class="col-12 col-md-12 mb-3">
                <router-link :to="{ path: '/grammars/pronoun', query: { lang } }"
                    :class="['btn', `btn-outline-light`, `bg-fabulous`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.pronoun || '_PRONOUNCE_' }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/noun', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.noun || '_NOUN_' }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/verb', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.verb || '_VERB_' }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/adjective', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.adjective || '_ADJECTIVE_' }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/adverb', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.adverb || '_ADVERB_' }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/preposition', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.preposition || '_PREPOSITION_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/conjunction', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.conjunction || '_CONJUNCTION_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/interjection', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.interjection || '_INTERJECTION_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/classifier', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-success`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-dots mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.classifier || '_CLASSIFIER_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/type', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-info`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-right-text mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.type || '_TYPE_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/tense', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-info`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-right-text mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.tense || '_TENSE_'
                        }}</span>
                </router-link>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <router-link :to="{ path: '/grammars/syntax', query: { lang } }"
                    :class="['disabled', 'btn', `btn-outline-info`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i class="bi bi-chat-right-text mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ langSet[this.lang].learnSentence.syntax || '_SYNTAX_'
                        }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompLearnGammar',
    props: {
        lang: {
            type: String,
            default: 'en'
        },
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet
        }
    },
    created() {
        this.panels2 = [
            {
                title: this.langSet[this.lang].learnSentence.noun || '_NOUN_',
                route: { path: '/alphabets/consonant', query: { lang: this.lang } },
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.pronoun || '_PRONOUNCE_',
                route: { path: '/alphabets/vowel', query: { lang: this.lang } },
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.verb || '_VERB_',
                route: { path: '/alphabets/compound-consonant', query: { lang: this.lang } },
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.adjective || '_ADJECTIVE_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.adverb || '_ADVERB_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.preposition || '_PREPOSITION_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.conjunction || '_CONJUNCTION_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.interjection || '_INTERJECTION_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.classifier || '_CLASSIFIER_',
                route: `#`,
                icon: 'bi bi-chat-dots',
                color: 'success',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.type || '_TYPE_',
                route: `#`,
                icon: 'bi bi-chat-right-text',
                color: 'info',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.tense || '_TENSE_',
                route: `#`,
                icon: 'bi bi-chat-right-text',
                color: 'info',
                disabled: true
            },
            {
                title: this.langSet[this.lang].learnSentence.syntax || '_SYNTAX_',
                route: `#`,
                icon: 'bi bi-chat-right-text',
                color: 'info',
                disabled: true
            },
        ]
    }
}
</script>