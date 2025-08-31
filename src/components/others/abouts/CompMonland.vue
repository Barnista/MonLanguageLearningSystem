<template>
    <div class="comp-monland">
        <h2>
            Project: Monland
        </h2>
        <h5 class="text-muted">Mon Civilization Archive thru' Virtual Nation State</h5>
        <div class="row mt-4">
            <div class="col-12 col-lg-8 col-xl-7 mb-3">
                <img src="@/assets/flags/ramanndesa.svg" alt="Flag of The New Rāmaññadesa designed by Barnista">
                <p class="text-center fw-bold mt-2">
                    Flag of Monland designed by Barnista, 31 Aug
                    2025.
                </p>
                <p>
                    Monland, also known as Rāmaññadesa (Rāmaññadesa / ဒေသရးမည / ရာမညဒေသ / ประเทศมอญ / รามัญประเทศ), is a
                    Burmese
                    and Mon word which means "country of the Ramans". This was because the Mons were previously called
                    Ramans. The term was coined by King Dhammazedi in 1479.
                </p>
                <div class="text-end">
                    <a class="btn btn-primary shadow-sm" href="https://en.wikipedia.org/wiki/R%C4%81ma%C3%B1%C3%B1adesa"
                        target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-box-arrow-up-right"></i>
                        <span class="ms-1">
                            Wikipedia
                        </span>
                    </a>
                    <a class="btn btn-dark shadow-sm ms-2"
                        href="https://chatgpt.com/share/68b349b4-5508-8006-8056-74481e139561" target="_blank"
                        rel="noopener noreferrer">
                        <i class="bi bi-openai"></i>
                        <span class="ms-1">
                            Ask ChatGPT
                        </span>
                    </a>
                </div>
                <div class="mt-4">
                    <ul>
                        <li>
                            <i class="bi bi-square-fill me-2" style="color: #c7ba20;"></i>
                            <span class="fw-bold">Yellow Color</span> represents:
                            <ol>
                                <li>
                                    Pure faith in Theravāda Buddhism.
                                </li>
                                <li>
                                    Beautiful scenery of the dusk sky of Monland.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <i class="bi bi-square-fill me-2" style="color: #139337;"></i>
                            <span class="fw-bold">Green Color</span> represents:
                            <ol>
                                <li>
                                    Hope, Peace, and Prosperity.
                                </li>
                                <li>
                                    Lush greenery, natural beauty, and land fertility of Monland.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <i class="bi bi-square-fill me-2" style="color: #c7ba20;"></i>
                            <i class="bi bi-square-fill me-2" style="color: #139337;"></i>
                            <span class="fw-bold">Yellow & Green</span> represents:
                            <ol>
                                <li>
                                    The Old Color of Hongsawadi Kingdom (1350-1539). The glorious era of the Mon
                                    civilization in Southeast Asia with its rich culture, art, literature, military, and administration.
                                </li>
                            </ol>
                        </li>
                        <hr>
                        <li>
                            <i class="bi bi-square-fill me-2" style="color: #ff0000;"></i>
                            <span class="fw-bold">Red Color</span> represents:
                            <ol>
                                <li>
                                    Unity, Justice, and Freedom.
                                </li>
                                <li>
                                    Bravery and courage of the Mon people.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <span class="fw-bold">Shield</span> represents:
                            <ol>
                                <li>
                                    Altruistic devotion to protect and preserve national sovereignty.
                                </li>
                                <li>
                                    Preservation, and innovation of the rich cultural heritage of the Mon people.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <span class="fw-bold">Hongsa (Mythical Creature)</span> represents:
                            <ol>
                                <li>
                                    Self-determination, Wisdom, Pride, and Noble-virtues.
                                </li>
                                <li>
                                    The cultural and historical significance of the Hongsa in Mon folklore and
                                    traditions.
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-5 mb-3">
                <div class="rounded border shadow-sm p-3 bg-light">
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
            </div>
        </div>
    </div>
</template>

<script>
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: "CompMonland",
    components: {

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
