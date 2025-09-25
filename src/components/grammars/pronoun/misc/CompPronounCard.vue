<template>
    <div class="bg-white text-dark rounded shadow-sm mb-1 text-start">
        <div v-if="gender == 'm'" class="fw-bold bg-primary text-light text-center px-1"
            style="border-top-left-radius: 4px; border-top-right-radius: 4px;">
            {{ langSet[lang ?? 'en'].pronounView.masculine }}
        </div>
        <div v-else class="fw-bold bg-danger text-light text-center px-1"
            style="border-top-left-radius: 4px; border-top-right-radius: 4px;">
            {{ langSet[lang ?? 'en'].pronounView.feminine }}
        </div>
        <div class="px-1 py-1">
            <ul class="list-group list-group-flush">
                <li v-for="(item, index) in pronouns" :key="index" class="list-group-item text-center">
                    <span class="fs-4">{{ item.word }}</span>
                    <br>
                    <small class="text-muted">/{{
                        item.ipa }}/
                        /{{ item.th }}/</small>
                    <br>
                    <small class="text-muted">meaning: {{ item.meaningEN }}</small>
                    <br>
                    <small class="text-muted">แปล: {{ item.meaningTH }}</small>
                    <div v-if="item.isSameAge">
                        <small class="text-danger">
                            {{ langSet[lang ?? 'en'].pronounView.sameAgeOnly }}
                        </small>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        gender: {
            type: String,
            default: 'm'
        },
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
        }
    }
}
</script>