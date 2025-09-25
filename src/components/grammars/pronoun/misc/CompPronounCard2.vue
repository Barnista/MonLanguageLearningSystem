<template>
    <div class="row">
        <div v-for="(item, index) in pronouns" :key="index" :class="[`col-${col} col-md-${colMd} col-lg-${colLg}`]"
            class="mb-1">
            <div class="bg-white text-dark rounded border shadow-sm mb-1 text-start">
                <div v-if="item.gender == 'masculine'" class="fw-bold bg-primary text-light text-center px-1"
                    style="border-top-left-radius: 4px; border-top-right-radius: 4px;">
                    {{ langSet[lang ?? 'en'].pronounView.masculine }}
                </div>
                <div v-if="item.gender == 'feminine'" class="fw-bold bg-danger text-light text-center px-1"
                    style="border-top-left-radius: 4px; border-top-right-radius: 4px;">
                    {{ langSet[lang ?? 'en'].pronounView.feminine }}
                </div>
                <div v-if="item.gender == 'neuter'" class="fw-bold bg-success text-light text-center px-1"
                    style="border-top-left-radius: 4px; border-top-right-radius: 4px;">
                    {{ langSet[lang ?? 'en'].pronounView.neuter }}
                </div>
                <div class="px-1 pt-2 py-1 text-center">
                    <span class="fs-4">{{ item.word }}</span>
                    <br>
                    <small class="text-muted">/{{
                        item.ipa }}/</small>
                    <br>
                    <small class="text-muted">/{{ item.th }}/</small>
                    <br>
                    <small class="fw-bold text-muted">meaning: {{ item.meaningEN }}</small>
                    <br>
                    <small class="fw-bold text-muted">แปล: {{ item.meaningTH }}</small>
                    <div v-if="item.isSameAge">
                        <small class="text-danger">
                            {{ langSet[lang ?? 'en'].pronounView.sameAgeOnly }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pronouns: {
            type: Array,
            default: () => ([])
        },
        lang: {
            type: String,
            default: 'en'
        },
        langSet: {
            type: Object
        },
        col: {
            type: Number,
            default: 12
        },
        colMd: {
            type: Number,
            default: 12
        },
        colLg: {
            type: Number,
            default: 6
        }
    }
}
</script>