<template>
    <div class="comp-speaker-monk-pronoun-table">
        <h4>{{ langSet[lang ?? 'en'].pronounView.secondPerson }}</h4>
        <p v-html="langSet[lang ?? 'en'].pronounView.secondPersonReligiousDescription">
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
                    <td class="bg-speaker-to-monk fw-bold">{{ langSet[lang ?? 'en'].pronounView.speakerToMonk }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.speakerMonk.speakerToMonk.singular.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.speakerMonk.speakerToMonk.plural.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                </tr>
                <tr>
                    <td class="bg-monk-to-speaker fw-bold">{{ langSet[lang ?? 'en'].pronounView.monkToSpeaker }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.speakerMonk.monkToSpeaker.singular.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.speakerMonk.monkToSpeaker.plural.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                </tr>
                <tr>
                    <td class="bg-junior-to-senior fw-bold">{{ langSet[lang ?? 'en'].pronounView.juniorToSenior }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.monkMonk.juniorToSenior.singular.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.monkMonk.juniorToSenior.plural.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                </tr>
                 <tr>
                    <td class="bg-senior-to-junior fw-bold">{{ langSet[lang ?? 'en'].pronounView.seniorToJunior }}</td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.monkMonk.seniorToJunior.singular.secondPerson"
                            :lang="lang" :lang-set="langSet" />
                    </td>
                    <td>
                        <CompPronounCard2 :pronouns="pronounReligious.monkMonk.seniorToJunior.plural.secondPerson"
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
        pronounReligious: dbPronouns.pronouns.religious,
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

.bg-speaker-to-monk{
    background-color: lightblue;
}

.bg-monk-to-speaker{
    background-color: lightsalmon;
}

.bg-junior-to-senior{
    background-color: orange;
}

.bg-senior-to-junior{
    background-color: darkgoldenrod;
}
</style>