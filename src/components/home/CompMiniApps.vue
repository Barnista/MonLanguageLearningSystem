<template>
    <div id="comp-mini-apps">
        <h3 class="text-dark mb-4">{{ langSet[lang ? lang : 'en'].apps.title || '_TITLE_' }} (အေပ်ပလဳဂေရှေန်)</h3>
        <div class="row">
            <div class="col-6 col-lg-3 mb-3">
                <router-link :to="`/apps/text-analyser?lang=${this.lang}`"
                    :class="['btn', `btn-primary`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-robot" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].apps.textAnalyser || '_TEXT_ANALYSER_'
                        }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-lg-3 mb-3">
                <router-link :to="`/keyboard?lang=${this.lang}`"
                    :class="['btn', `btn-secondary`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-keyboard" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].keyboard.title || '_KEYBOARD_'
                        }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-lg-3 mb-3">
                <router-link :to="`/apps/word-craft?lang=${this.lang}`"
                    :class="['btn', `btn-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-bricks" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].apps.wordCraft || '_WORD_CRAFT_'
                        }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-lg-3 mb-3">
                <router-link :to="`/apps/dictionary?lang=${this.lang}`"
                    :class="['btn', `btn-danger`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-translate" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].apps.dictionary || '_DICTIONARY_'
                        }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompMiniApps',
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet
        }
    }
}
</script>