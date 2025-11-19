<template>
    <div class="comp-devs">
        <!-- Key Contributor -->
        <div class="mt-5">
            <h2>
                <i class="bi bi-people"></i>
                {{ langSet[lang ? lang : 'en'].aboutDevView.contributors || '_Contributors_' }}
            </h2>
            <hr>
            <p class="text-dark">
                {{ langSet[lang ? lang : 'en'].aboutDevView.contributorsDescription || '_ContributorsDescription_' }}
            </p>
            <ul class="">
                <li v-for="(contributor, index) in contributors" :key="index" class="py-1 fs-6">
                    <span>
                        <img v-if="contributor.country == 'mon'" src="@/assets/flags/mon.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="contributor.country == 'thai'" src="@/assets/flags/thai.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="contributor.country == 'us'" src="@/assets/flags/en_us.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="contributor.country == 'ramanndesa'" src="@/assets/flags/ramanndesa-2.svg" width="20"
                            height="auto" class="me-2">
                        <strong>{{ contributor.name }}</strong>
                        <a v-if="contributor.link" :href="contributor.link" target="_blank" class="ms-2">
                            <i class="bi bi-box-arrow-up-right"></i> {{ langSet[lang ? lang : 'en'].aboutDevView.visit
                                || '_Visit_' }}
                        </a>
                    </span>
                    <br>
                    <span class="text-success fs-6">{{ contributor.role
                        }}</span>
                    <ul v-if="contributor.members" class="">
                        <li v-for="(subCon, subIndex) in contributor.members" :key="subIndex" class="py-1 fs-6">
                            <span>
                                <img v-if="subCon.country == 'mon'" src="@/assets/flags/mon.svg" width="20"
                                    height="auto" class="me-2">
                                <img v-if="subCon.country == 'thai'" src="@/assets/flags/thai.svg" width="20"
                                    height="auto" class="me-2">
                                <img v-if="subCon.country == 'us'" src="@/assets/flags/en_us.svg" width="20"
                                    height="auto" class="me-2">
                                <img v-if="subCon.country == 'ramanndesa'" src="@/assets/flags/ramanndesa-2.svg"
                                    width="20" height="auto" class="me-2">
                                <strong>{{ subCon.name }}</strong>
                                <a v-if="subCon.link" :href="subCon.link" target="_blank" class="ms-2">
                                    <i class="bi bi-box-arrow-up-right"></i> {{ langSet[lang ? lang :
                                        'en'].aboutDevView.visit
                                        || '_Visit_' }}
                                </a>
                            </span>
                            <br>
                            <span class="text-success fs-6">{{ subCon.role
                                }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="alert alert-info shadow-sm" role="alert">
                <i class="bi bi-flower3"></i>
                {{ langSet[lang ? lang : 'en'].aboutDevView.contributorsDescription2 || '_ContributorsDescription2_' }}
                <ul class="mt-2">
                    <li>
                        <a href="https://github.com/Barnista/MonLanguageLearningSystem" target="_blank">
                            <i class="bi bi-github"></i> Barnista/MonLanguageLearningSystem
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-5">
            <h3>
                <i class="bi bi-award"></i>
                {{ langSet[lang ? lang : 'en'].aboutDevView.honorableMentions || '_HonorableMentions_' }}
            </h3>
            <hr>
            <ul class="">
                <li v-for="(mention, index) in honorableMentions" :key="index" class="py-1 fs-6">
                    <span>
                        <img v-if="mention.country == 'mon'" src="@/assets/flags/mon.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="mention.country == 'thai'" src="@/assets/flags/thai.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="mention.country == 'us'" src="@/assets/flags/en_us.svg" width="20" height="auto"
                            class="me-2">
                        <img v-if="mention.country == 'ramanndesa'" src="@/assets/flags/ramanndesa-2.svg" width="20"
                            height="auto" class="me-2">
                        <strong>{{ mention.name }}</strong>
                        <a v-if="mention.link" :href="mention.link" target="_blank" class="ms-2">
                            <i class="bi bi-box-arrow-up-right"></i> {{ langSet[lang ? lang :
                                'en'].aboutDevView.visit
                                || '_Visit_' }}
                        </a>
                    </span>
                    <br>
                    <span class="text-success fs-6">{{ mention.role }}</span>
                </li>
            </ul>
        </div>

        <div class="mt-5">
            <h3>
                <i class="bi bi-mortarboard"></i>
                {{ langSet[lang ? lang : 'en'].aboutDevView.references || '_References_' }}
            </h3>
            <hr>
            <ul class="">
                <li v-for="(referee, index) in references" :key="index" class="py-1 fs-6">
                    <span class="fw-bold">{{ referee.name }}</span>. ({{ referee.date }}). In {{ referee.site }}. <a
                        :href="referee.link" target="_blank">{{ referee.link }}</a>.
                </li>
            </ul>
        </div>

        <div class="mt-5">
            <h3>
                <i class="bi bi-code-slash"></i>
                {{ langSet[lang ? lang : 'en'].aboutDevView.technicals || '_Technicals_' }}
            </h3>
            <hr>
            <div class="row">
                <div class="col-12 col-lg-6 mb-3">
                    <div class="rounded border shadow-sm p-4">
                        <h5>{{ langSet[lang ? lang : 'en'].aboutDevView.frontEnd || '_FrontEnd_' }}</h5>
                        <ul>
                            <li v-for="(tool, index) in technicals" :key="index" class="py-1 fs-6">
                                <strong>{{ tool.name }}</strong>
                                <a :href="tool.link" target="_blank" class="ms-2">
                                    <i class="bi bi-box-arrow-up-right"></i> {{ langSet[lang ? lang :
                                        'en'].aboutDevView.visit ||
                                        '_Visit_' }}
                                </a>
                                <span class="text-success fs-6"> - {{ tool.role }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mb-3">
                    <div class="rounded border shadow-sm p-4 mb-3">
                        <h5>{{ langSet[lang ? lang : 'en'].aboutDevView.backEnd || '_BackEnd_' }}</h5>
                        <ul>
                            <li v-for="(tool, index) in technicals2" :key="index" class="py-1 fs-6">
                                <strong>{{ tool.name }}</strong>
                                <a :href="tool.link" target="_blank" class="ms-2">
                                    <i class="bi bi-box-arrow-up-right"></i> {{ langSet[lang ? lang :
                                        'en'].aboutDevView.visit ||
                                        '_Visit_' }}
                                </a>
                                <span class="text-success fs-6"> - {{ tool.role }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="rounded border shadow-sm p-4 mb-3">
                        <h5>{{ langSet[lang ? lang : 'en'].aboutDevView.design || '_Design_' }}</h5>
                        <p v-html="langSet[lang ? lang : 'en'].aboutDevView.designDescription" class="text-secondary">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import about from '@/services/abouts/about';

export default {
    name: "CompDevs",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            contributors: about.contributors,
            honorableMentions: about.honorableMentions,
            references: about.references,
            technicals: about.technicalsFrontEnd,
            technicals2: about.technicalsBackEnd
        }
    }
}

</script>
