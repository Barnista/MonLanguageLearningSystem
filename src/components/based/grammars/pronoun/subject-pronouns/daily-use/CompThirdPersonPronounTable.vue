<template>
    <div class="comp-first-person-pronoun-table">
        <h4>{{ langSet[lang || 'en'].pronounView.thirdPerson }}</h4>
        <p v-html="langSet[lang || 'en'].pronounView.thirdPersonDescription">
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
                    <th>
                        <i class="bi bi-people"></i>
                        {{ langSet[lang || 'en'].pronounView.plural }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="bg-neutral">
                        {{ langSet[lang || 'en'].pronounView.neutral }}
                    </th>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.neutral.singular.thirdPerson" />
                    </td>
                    <td>
                         <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.neutral.plural.thirdPerson" />
                    </td>
                </tr>
                <tr>
                    <th class="bg-formal">
                        {{ langSet[lang || 'en'].pronounView.formal }}
                    </th>
                    <td>
                         <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.formal.singular.thirdPerson" />
                    </td>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.formal.plural.thirdPerson" />
                    </td>
                </tr>
                <tr>
                    <th class="bg-informal">
                        {{ langSet[lang || 'en'].pronounView.informal }}
                    </th>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.informal.singular.thirdPerson" />
                    </td>
                    <td>
                        <CompPronounCard2 :lang="lang" :lang-set="langSet"
                                :pronouns="pronounDailyUse.informal.plural.thirdPerson" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import dbPronouns from '@/services/mon-library/grammars/db-pronouns';
import CompPronounCard2 from '../../misc/CompPronounCard2.vue';

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
        pronounDailyUse: dbPronouns.pronouns.dailyUse,
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