<template>
    <div class="comp-join-us">
        <h3>{{ langSet[lang ? lang : 'en'].communityView.joinUs || '_JOIN_US' }}</h3>
        <div class="row mt-3">
            <div v-for="(community, index) in ourCommunities" :key="index" class="col-6 col-lg-4 col-xl-3 mb-3">
                <div class="card shadow h-100">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a :href="community.link" target="_blank" class="link-underline link-underline-opacity-0"
                                :style="{ color: stylePlatformColor(community.platform) }">
                                <i v-if="community.platform === 'facebook'" class="bi bi-facebook"></i>
                                <i v-if="community.platform === 'twitter'" class="bi bi-twitter-x"></i>
                                <i v-if="community.platform === 'discord'" class="bi bi-discord"></i>
                                <i v-if="community.platform === 'telegram'" class="bi bi-telegram"></i>
                                <i v-if="community.platform === 'youtube'" class="bi bi-youtube"></i>
                                <i v-if="community.platform === 'twitch'" class="bi bi-twitch"></i>
                                {{ community.name }}
                            </a>
                        </h5>
                        <p class="card-text text-secondary text-truncate">
                            {{ community.description }}
                        </p>
                    </div>
                    <div class="card-footer text-end">
                        <a :href="community.link" target="_blank" class="btn btn-light text-light"
                            :style="{ backgroundColor: stylePlatformColor(community.platform) }">
                            <span>{{ langSet[lang ? lang : 'en'].communityView.joinUs }}</span>
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
    name: "CompJoinUs",
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            ourCommunities: about.ourCommunities,
        }
    },
    methods: {
        stylePlatformColor(platform) {
            switch (platform) {
                case 'twitter':
                    return 'black'
                case 'facebook':
                    return 'royalblue'
                case 'twitch':
                    return 'DarkViolet'
                case 'youtube':
                    return 'red'
                case 'discord':
                    return 'slateblue'
                case 'telegram':
                    return 'deepskyblue'
                default:
                    return ''
            }
        }
    }
}
</script>