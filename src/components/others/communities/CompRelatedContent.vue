<template>
    <div class="comp-related-content">
        <h3>{{ langSet[lang ? lang : 'en'].communityView.relatedContents || '_RELATED_CONTENTS_' }}</h3>
        <div class="row mt-3">
            <div v-for="(related, index) in relatedContents" :key="index" class="col-6 col-lg-4 col-xl-3 mb-3">
                <div class="card shadow h-100">
                    <a :href="related.link" target="_blank">
                        <img :src="require(`@/assets/related-contents/${related.alias}.jpg`)" class="card-img-top"
                            style="height: 12rem; object-fit: cover;">
                    </a>
                    <div class="card-body pb-2">
                        <h5 class="card-title"><a :href="related.link" target="_blank"
                                class="link-underline link-underline-opacity-0">{{ related.name }}</a></h5>
                        <p class="card-text text-secondary text-truncate">
                            {{ related.description }}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <span class="text-muted">
                            <i class="bi bi-feather"></i>
                            {{ related.author }}
                        </span>
                        <a :href="related.link" target="_blank" class="btn btn-primary">
                            <i class="bi bi-globe"></i>
                            <span class="ms-2">{{ langSet[lang ? lang : 'en'].communityView.explore }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import about from '@/services/abouts/about';
import displayLanguages from '@/services/display-languages/display-languages';


export default {
    name: "CompRelatedContent",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            relatedContents: about.relatedContents
        }
    }
}

</script>