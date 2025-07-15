<template>
    <div class="comp-learn-gammar">
        <div class="row my-4">
            <h3 class="text-dark mb-4">{{ langSet[lang].learnSentence.title || '_LEARN_ALPHABETS_' }} (ဝါကျမန်)</h3>
            <div class="col-6 col-md-4 mb-3" v-for="panel in panels2" :key="panel.title">
                <router-link v-if="!panel.disabled" :to="panel.route"
                    :class="['btn', `btn-outline-${panel.color}`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <i :class="panel.icon" class="mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ panel.title }}</span>
                </router-link>
                <button v-else
                    :class="['btn', `btn-outline-${panel.color}`, 'w-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']"
                    disabled>
                    <i :class="panel.icon" class="mb-2" style="font-size: 2rem;"></i>
                    <span class="fs-5 fw-bold">{{ panel.title }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages';

export default {
    name: 'CompLearnGammar',
    props: {
        lang: String,
        panels2: Array
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet
        }
    }
}
</script>