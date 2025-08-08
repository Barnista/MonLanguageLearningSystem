<template>
    <a :href="href" target="_blank"
        class="btn btn-dark shadow-sm">
        <i class="bi bi-openai"></i>
        {{ langSet[lang || 'en'].menu.askChatGPT }}
    </a>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: "ButtonAskChatGPT",
    props: {
        href: {
            type: String,
            default: '#'
        },
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => ({
        langSet: displayLanguages.langSet
    })
}
</script>