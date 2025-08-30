<template>
    <div class="comp-community">
        <h3 class="text-dark mb-4">{{ langSet[lang ? lang : 'en'].communityView.title || '_Title_' }}</h3>
        <hr>
        <p class="text-dark">
            {{ langSet[lang ? lang : 'en'].communityView.description || '_Description_' }}
        </p>
        <p class="text-dark">
            {{ langSet[lang ? lang : 'en'].communityView.description2 || '_Description2_' }}
        </p>
                
        <CompJoinUs :lang="lang" class="mt-5" />

        <CompOtherCommunities :lang="lang" class="mt-5" />

        <CompRelatedContent :lang="lang" class="mt-5" />
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import CompRelatedContent from './CompRelatedContent.vue';
import CompOtherCommunities from './CompOtherCommunities.vue';
import CompJoinUs from './CompJoinUs.vue';


export default {
    name: "CompCommunity",
    components: {
        CompRelatedContent,
        CompOtherCommunities,
        CompJoinUs
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
        }
    },
    methods: {
        
    }
}

</script>
