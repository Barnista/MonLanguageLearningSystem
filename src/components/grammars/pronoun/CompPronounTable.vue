<template>
    <div class="comp-pronoun-table">
        <h2>{{ langSet[lang ?? 'en'].pronounView.title }}</h2>
        <p v-html="langSet[lang ?? 'en'].pronounView.description">
        </p>
        <p v-html="langSet[lang ?? 'en'].pronounView.description2">
        </p>
        <div class="accordion mt-4" :id="`subjectPronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`subjectPronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseSubjectPronoun`" aria-expanded="false"
                        aria-controls="collapseSubjectPronoun">
                        <h3>
                            <i class="bi bi-person"></i>
                            {{ langSet[lang ?? 'en'].pronounView.subjectPronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseSubjectPronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#subjectPronoun`">
                    <div class="accordion-body">
                        <CompFirstPersonPronounTable :lang="lang" class="mt-3" />
                        <hr>
                        <CompSecondPersonPronounTable :lang="lang" class="mt-3" />
                        <hr>
                        <CompThirdPersonPronounTable :lang="lang" class="mt-3" />
                        <hr>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`possessivePronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`possessivePronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapsePossessivePronoun`" aria-expanded="false"
                        aria-controls="collapsePossessivePronoun">
                        <h3>
                            <i class="bi bi-person-square"></i>
                            {{ langSet[lang ?? 'en'].pronounView.possessivePronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapsePossessivePronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#possessivePronoun`">
                    <div class="accordion-body">
                        <CompFirstPersonPossessiveTable :lang="lang" class="mt-3" />
                        <hr>
                        <CompSecondPersonPossessiveTable :lang="lang" class="mt-3" />
                        <hr>
                        <CompThirdPersonPossessiveTable :lang="lang" class="mt-3" />
                        <hr>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`interrogativePronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`interrogativePronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseInterrogativePronoun`" aria-expanded="false"
                        aria-controls="collapseInterrogativePronoun">
                        <h3>
                            <i class="bi bi-question-square"></i>
                            {{ langSet[lang ?? 'en'].pronounView.interrogativePronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseInterrogativePronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#interrogativePronoun`">
                    <div class="accordion-body">
                        <CompInterrogativePronounTable :lang="lang" class="mt-3" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`definitePronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`definitePronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseDefinitePronoun`" aria-expanded="false"
                        aria-controls="collapseDefinitePronoun">
                        <h3>
                            <i class="bi bi-plus-square"></i>
                            {{ langSet[lang ?? 'en'].pronounView.definitePronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseDefinitePronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#definitePronoun`">
                    <div class="accordion-body">
                        <CompDefinitePronounTable :lang="lang" class="mt-3" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`indefinitePronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`indefinitePronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseIndefinitePronoun`" aria-expanded="false"
                        aria-controls="collapseIndefinitePronoun">
                        <h3>
                            <i class="bi bi-plus-square-dotted"></i>
                            {{ langSet[lang ?? 'en'].pronounView.indefinitePronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseIndefinitePronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#indefinitePronoun`">
                    <div class="accordion-body">
                        <CompIndefinitePronounTable :lang="lang" class="mt-3" />
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`distributivePronoun`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`distributivePronoun`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseDistributivePronoun`" aria-expanded="false"
                        aria-controls="collapseDistributivePronoun">
                        <h3>
                            <i class="bi bi-ui-radios-grid"></i>
                            {{ langSet[lang ?? 'en'].pronounView.distributivePronouns }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseDistributivePronoun`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#distributivePronoun`">
                    <div class="accordion-body">
                        <CompDistributivePronounTable :lang="lang" class="mt-3" />
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <h2 class="mt-5">{{ langSet[lang ?? 'en'].pronounView.otherPronouns }}</h2>
        <div class="accordion mt-4" :id="`subjectPronoun2`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`subjectPronoun2`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseSubjectPronoun2`" aria-expanded="false"
                        aria-controls="collapseSubjectPronoun2">
                        <h3>
                            <img class="d-inline" src="@/assets/imgs/icons/monk.png" width="24" height="24">
                            {{ langSet[lang ?? 'en'].pronounView.subjectPronouns2 }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseSubjectPronoun2`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#subjectPronoun2`">
                    <div class="accordion-body">
                        <CompFirstPersonReligious :lang="lang" class="mt-3" />
                        <hr>
                        <CompSecondPersonReligious :lang="lang" class="mt-3" />
                        <hr>
                        <CompThirdPersonReligious :lang="lang" class="mt-3" />
                        <hr>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="accordion mt-4" :id="`subjectPronoun3`">
            <div class="accordion-item">
                <h3 class="accordion-header" :id="`subjectPronoun3`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseSubjectPronoun3`" aria-expanded="false"
                        aria-controls="collapseSubjectPronoun3">
                        <h3>
                            <img class="d-inline" src="@/assets/imgs/icons/king.png" width="24" height="24">
                            {{ langSet[lang ?? 'en'].pronounView.subjectPronouns3 }}
                        </h3>
                    </button>
                </h3>
                <div :id="`collapseSubjectPronoun3`" class="accordion-collapse collapse" aria-labelledby=""
                    :data-bs-parent="`#subjectPronoun3`">
                    <div class="accordion-body">
                        <CompFirstPersonRoyal :lang="lang" class="mt-3" />
                        <hr>
                        <CompSecondPersonRoyal :lang="lang" class="mt-3" />
                        <hr>
                        <CompThirdPersonRoyal :lang="lang" class="mt-3" />
                        <hr>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import dbPronouns from '@/services/mon-library/grammars/db-pronouns';
import CompFirstPersonPronounTable from './subject-pronouns/daily-use/CompFirstPersonPronounTable.vue';
import CompSecondPersonPronounTable from './subject-pronouns/daily-use/CompSecondPersonPronounTable.vue';
import CompThirdPersonPronounTable from './subject-pronouns/daily-use/CompThirdPersonPronounTable.vue';
import CompFirstPersonReligious from './subject-pronouns/religious-use/CompFirstPersonReligious.vue';
import CompSecondPersonReligious from './subject-pronouns/religious-use/CompSecondPersonReligious.vue';
import CompThirdPersonReligious from './subject-pronouns/religious-use/CompThirdPersonReligious.vue';
import CompFirstPersonRoyal from './subject-pronouns/royal-use/CompFirstPersonRoyal.vue';
import CompSecondPersonRoyal from './subject-pronouns/royal-use/CompSecondPersonRoyal.vue';
import CompThirdPersonRoyal from './subject-pronouns/royal-use/CompThirdPersonRoyal.vue';
import CompFirstPersonPossessiveTable from './possessive-pronouns/CompFirstPersonPossessiveTable.vue';
import CompSecondPersonPossessiveTable from './possessive-pronouns/CompSecondPersonPossessiveTable.vue';
import CompThirdPersonPossessiveTable from './possessive-pronouns/CompThirdPersonPossessiveTable.vue';
import CompInterrogativePronounTable from './interrogative-pronouns/CompInterrogativePronounTable.vue';
import CompDefinitePronounTable from './definite-pronouns/CompDefinitePronounTable.vue';
import CompIndefinitePronounTable from './indefinite-pronouns/CompIndefinitePronounTable.vue';
import CompDistributivePronounTable from './distributive-pronouns/CompDistributivePronounTable.vue';

export default {
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    components: {
        CompFirstPersonPronounTable,
        CompSecondPersonPronounTable,
        CompThirdPersonPronounTable,
        CompFirstPersonReligious,
        CompSecondPersonReligious,
        CompThirdPersonReligious,
        CompFirstPersonRoyal,
        CompSecondPersonRoyal,
        CompThirdPersonRoyal,
        CompFirstPersonPossessiveTable,
        CompSecondPersonPossessiveTable,
        CompThirdPersonPossessiveTable,
        CompInterrogativePronounTable,
        CompDefinitePronounTable,
        CompIndefinitePronounTable,
        CompDistributivePronounTable
    },
    data: () => ({
        langSet: displayLanguages.langSet,
        pronounDailyUse: dbPronouns.pronouns.dailyUse,
    }),
    created() {
        //console.log('text', this.lang);
    }
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
</style>