<template>
    <div class="comp-monland">
        <h2>
            Project 2026: Mon Renaissance
        </h2>
        <h5 class="text-muted">Mon Civilization Archive thru' Virtual Nation State</h5>
        <div class="row mt-4">
            <h6 class="text-muted">Updated at: 18 November 2025</h6>
            <div class="col-12 col-lg-7 col-xl-8 mb-3">
                <img src="@/assets/flags/ramanndesa.svg" alt="Flag of The New Rāmaññadesa designed by Barnista">
                <p class="text-center fw-bold mt-2">
                    Flag of Mon Renaissance designed by Barnista, 31 Aug
                    2025.
                </p>
                <div class="mt-4">
                    <CompMonlandFlag />
                </div>
            </div>
            <div class="col-12 col-lg-5 col-xl-4 mb-3">
                <div class="rounded border shadow-sm p-3 bg-light mb-4">
                    <h4 class="fw-bold mb-3">
                        Download flags
                    </h4>
                    <div class="mb-3">
                        <a :href="require('@/assets/flags/ramanndesa.svg')" download>
                            <i class="bi bi-download"></i> Download SVG
                        </a>
                    </div>
                    <div class="mb-3">
                        <a :href="require('@/assets/flags/ramanndesa512.png')" download>
                            <i class="bi bi-download"></i> Download PNG (730x512)
                        </a>
                    </div>
                    <div class="mb-3">
                        <a :href="require('@/assets/flags/ramanndesa256.png')" download>
                            <i class="bi bi-download"></i> Download PNG (365x256)
                        </a>
                    </div>
                    <div class="mb-3">
                        <a :href="require('@/assets/flags/ramanndesa128.png')" download>
                            <i class="bi bi-download"></i> Download PNG (182x128)
                        </a>
                    </div>
                    <div class="mb-3">
                        <a :href="require('@/assets/flags/ramanndesa64.png')" download>
                            <i class="bi bi-download"></i> Download PNG (91x64)
                        </a>
                    </div>
                    <div class="mb-4">
                        <a :href="require('@/assets/flags/ramanndesa32.png')" download>
                            <i class="bi bi-download"></i> Download PNG (45x32)
                        </a>
                    </div>
                    <hr>
                    <div class="fw-bold">
                        Designed and defined by Barnista, 31 Aug 2025.
                    </div>
                </div>
                <CompMonlandMeetings class="mt-5" />
            </div>
        </div>
        <div class="mt-4">
            <div class="text-center">
                <hr>
                <blockquote>
                    <span class="fst-italic fs-3">"Ol' Mon Spirit, witness out decay, and from it let us be born
                        anew"</span>
                    <br>
                    <span class="fw-bold fs-5">Rebirth • Redefine • Reimagine</span>
                </blockquote>
                <hr>
            </div>
            <div class="mt-4">
                <CompMonlandTimeline />
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';
import CompMonlandTimeline from './CompMonlandTimeline.vue';
import CompMonlandFlag from './CompMonlandFlag.vue';
import CompMonlandMeetings from './CompMonlandMeetings.vue';

export default {
    name: "CompMonland",
    components: {
        CompMonlandTimeline,
        CompMonlandFlag,
        CompMonlandMeetings
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet
        }
    }
}

</script>

<style></style>
