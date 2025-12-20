<template>
    <div class="comp-other-communities">
        <h3>{{ langSet[lang || 'en'].communityView.otherCommunities || '_OTHER_COMMUNITIES' }}</h3>
        <div class="row mt-3">
            <div v-for="(community, index) in communities" :key="index" class="col-6 col-lg-4 col-xl-3 mb-3">
                <div class="card shadow h-100">
                    <a :href="community.link" target="_blank">
                        <img :src="require(`@/assets/communities/${community.alias}.jpg`)" class="card-img-top"
                            style="height: 12rem; object-fit: cover;">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title"><a :href="community.link" target="_blank"
                                class="link-underline link-underline-opacity-0">{{ community.name }}</a></h5>
                        <p class="card-text text-secondary text-truncate">
                            {{ community.description }}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <img v-if="community.country == 'mon'" src="@/assets/flags/mon.svg" class="d-none d-md-inline" width="auto" height="32">
                        <img v-if="community.country == 'thai'" src="@/assets/flags/thai.svg" class="d-none d-md-inline" width="auto" height="32">
                        <img v-if="community.country == 'en_us'" src="@/assets/flags/en_us.svg" class="d-none d-md-inline" width="auto" height="32">
                        <a :href="community.link" target="_blank" class="btn btn-primary">
                            <i v-if="community.platform === 'facebook'" class="bi bi-facebook"></i>
                            <i v-if="community.platform === 'x'" class="bi bi-twitter-x"></i>
                            <i v-if="community.platform === 'discord'" class="bi bi-discord"></i>
                            <i v-if="community.platform === 'telegram'" class="bi bi-telegram"></i>
                            <i v-if="community.platform === 'web'" class="bi bi-globe"></i>
                            <span class="ms-2">{{ langSet[lang || 'en'].communityView.joinUs }}</span>
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
    name: "CompOtherCommunities",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            communities: about.communities,
        }
    }
}
</script>