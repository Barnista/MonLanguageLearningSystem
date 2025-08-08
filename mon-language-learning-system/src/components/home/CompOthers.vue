<template>
    <div id="comp-others">
        <h3 class="text-dark mb-4">{{ langSet[lang ? lang : 'en'].navbar.others || '_TITLE_' }} (တၞဟ်ခြာ)</h3>
        <div class="row">
            <div class="col-6 col-xl-3 mb-3">
                <router-link :to="`/report-issues?lang=${this.lang}`"
                    :class="['btn', `btn-warning`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-flag" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].navbar.report || '_REPORT_' }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-xl-3 mb-3">
                <router-link :to="`/community?lang=${this.lang}`"
                    :class="['btn', `btn-success`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-wechat" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].navbar.community || '_COMMUNITY_' }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-xl-3 mb-3">
                <router-link :to="`/abouts?lang=${this.lang}`"
                    :class="['btn', `btn-danger`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-info-circle" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].navbar.abouts || '_ABOUTS_' }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-6 col-xl-3 mb-3">
                <router-link :to="`/about-dev?lang=${this.lang}`"
                    :class="['btn', `btn-primary`, 'w-100', 'h-100', 'py-4', 'shadow-sm', 'rounded-3', 'd-flex', 'flex-column', 'align-items-center']">
                    <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                        <i class="fs-1 bi bi-people" style="font-size: 2rem;"></i>
                        <span class="fs-5 fw-bold">{{ langSet[lang ? lang : 'en'].navbar.dev || '_DEVS_' }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompOthers',
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