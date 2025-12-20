<template>
    <div class="comp-speaker-monk-pronoun-table">
        <h4>{{ langSet[lang || 'en'].pronounView.thirdPerson }}</h4>
        <p v-html="langSet[lang || 'en'].pronounView.thirdPersonRoyalDescription">
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
                    <td class="bg-speaker-to-monarch fw-bold">{{ langSet[lang || 'en'].pronounView.speakerToMonarch }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounRoyal.speakerToMonarch.singular.thirdPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounRoyal.speakerToMonarch.plural.thirdPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                </tr>
                <tr>
                    <td class="bg-monarch-to-speaker fw-bold">{{ langSet[lang || 'en'].pronounView.monarchToSpeaker }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounRoyal.monarchToSpeaker.singular.thirdPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounRoyal.monarchToSpeaker.plural.thirdPerson"
                            :lang="lang" :lang-set="langSet" />
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
        pronounRoyal: dbPronouns.pronouns.royal,
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

.bg-speaker-to-monarch{
    background-color: lightpink;
}

.bg-monarch-to-speaker{
    background-color: lightgreen;
}
</style>