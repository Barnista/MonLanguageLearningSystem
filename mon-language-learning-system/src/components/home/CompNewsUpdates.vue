<template>
    <div id="comp-news-updates">
        <h3 class="text-dark mb-4">News & Updates</h3>
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=61579073919826"
                    data-tabs="timeline" data-width="325" data-height="600" data-small-header="true"
                    data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"
                    :class="['w-100']">
                    <blockquote cite="https://www.facebook.com/profile.php?id=61579073919826"
                        class="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/profile.php?id=61579073919826">The Mon Language မန် -
                            Updates</a>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompNewsUpdates',
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