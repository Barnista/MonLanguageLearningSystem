<template>
    <div class="comp-first-person-pronoun-table">
        <h4>{{ langSet[lang ?? 'en'].pronounView.thirdPersonPossessive }}</h4>
        <p v-html="langSet[lang ?? 'en'].pronounView.thirdPersonPossessiveDescription">
        </p>
        <table>
            <thead>
                <tr>
                    <th style="max-width: 120px;">
                        <i class="bi bi-chat-left-quote"></i>
                        {{ langSet[lang ?? 'en'].pronounView.context }}
                    </th>
                    <th>
                        <i class="bi bi-person"></i>
                        {{ langSet[lang ?? 'en'].pronounView.singular }}
                    </th>
                    <th>
                        <i class="bi bi-people"></i>
                        {{ langSet[lang ?? 'en'].pronounView.plural }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="bg-neutral">
                        {{ langSet[lang ?? 'en'].pronounView.neutral }}
                    </th>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="possessive.neutral.singular.thirdPerson" />
                    </td>
                    <td>
                         <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="possessive.neutral.plural.thirdPerson" />
                    </td>
                </tr>
            </tbody>
        </table>
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
        possessive: dbPronouns.pronouns.possessive,
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