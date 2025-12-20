<template>
    <div class="comp-first-person-pronoun-table">
        <p v-html="langSet[lang || 'en'].pronounView.distributivePronounDescription">
        </p>
        <table>
            <thead>
                <tr>
                    <th style="max-width: 120px;">
                        <i class="bi bi-chat-left-quote"></i>
                        {{ langSet[lang || 'en'].pronounView.context }}
                    </th>
                    <th>
                        <i class="bi bi-person"></i>
                        {{ langSet[lang || 'en'].pronounView.singular }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="bg-neutral">
                        {{ langSet[lang || 'en'].pronounView.neutral }}
                    </th>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet" :pronouns="distributive.neutral" col="12"
                            col-md="6" col-lg="4" />
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="mt-3">
            <h3>{{ langSet[lang || 'en'].menu.examples }}</h3>
            <ol class="list-group list-group-numbered shadow-sm">
                <li v-for="(item, index) in examples" :key="index"
                    class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div v-html="item.text" class="fs-5 fw-bold"></div>
                        <div class="mt-1"></div>
                        <div class="text-muted">
                            <small>IPA: /{{ item.ipa }}/</small>
                        </div>
                        <div class="text-muted">
                            <small>TH: /{{ item.th }}/</small>
                        </div>
                        <div class="mt-1"></div>
                        <div v-for="(translate, i2) in item.translates" :key="i2" class="fw-bold text-muted">
                            <small>{{ translate.lang }}: {{ translate.meaning }}</small>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import dbPronouns from '@/services/mon-library/grammars/db-pronouns';
import CompPronounCard2 from '../misc/CompPronounCard2.vue';

export default {
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    components: {
        CompPronounCard2
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        distributive: dbPronouns.pronouns.distributive,
        examples: dbPronouns.examples.distributive
    })
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background: #f5f5f5;
}

.bg-neutral {
    background-color: lightgreen;
}

.bg-formal {
    background-color: lightblue;
}

.bg-informal {
    background-color: lightpink;
}
</style>