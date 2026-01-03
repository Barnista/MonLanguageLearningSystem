<template>
    <div class="keyboard-modal">
        <div class="modal fade" id="hexWorldModal" aria-hidden="true" aria-labelledby="keyboardModalLabel"
            tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="keyboardModalLabel">
                            <strong v-if="regionData.capital">⭐</strong>
                            <strong v-if="regionData.historical">🛕</strong>
                            {{ regionData.name2 }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-3 py-md-4">
                        <div class="row">
                            <div class="col-12 col-md-6 mb-3">
                                <img :src="regionData.thumbnail" class="img-fluid rounded mb-3 mb-md-0"
                                    alt="Hex World Sample">
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                                <div>
                                    <span class="fs-4">
                                        <strong>Name: </strong> {{ regionData.name2 }}
                                    </span>
                                    <br>
                                    <strong>Region Code:</strong> {{ regionData.code }}
                                    <br>
                                    <strong>Region: </strong> {{ regionData.name }}
                                    <hr>
                                    <span class="fs-5">
                                        <strong>Registered Population: </strong> {{
                                            regionData.population.toLocaleString() }} 👪
                                    </span>
                                    <br v-if="regionData.capital">
                                    <span v-if="regionData.capital">Major Community ⭐</span>
                                    <br>
                                    <span v-if="regionData.historical">Historically Significant 🛕</span>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <h4 class="mt-4 text-center">Gross-domestic Participation (GDP)</h4>
                                <div class="stats">
                                    <div class="d-flex justify-content-around text-center">
                                        <div class="flex-fill pt-2 currency">
                                            <h5 class="mb-0">Coins</h5>
                                            <p class="fs-4 fw-bold text-primary mb-0"><i class="bi bi-coin"></i> {{
                                                (1398500
                                                    || 0).toLocaleString() }}</p>
                                        </div>
                                        <div class="flex-fill pt-2 currency">
                                            <h5 class="mb-0">Gems</h5>
                                            <p class="fs-4 fw-bold text-primary mb-0"><i class="bi bi-gem"></i> {{
                                                (4500 || 0).toLocaleString() }}</p>
                                        </div>
                                        <div class="flex-fill pt-2 currency">
                                            <h5 class="mb-0">Quests</h5>
                                            <p class="fs-4 fw-bold text-success mb-0"><i
                                                    class="bi bi-calendar-check"></i> {{
                                                        (233
                                                            || 0).toLocaleString() }}</p>
                                        </div>
                                        <div class="flex-fill pt-2">
                                            <h5 class="mb-0">Events</h5>
                                            <p class="fs-4 fw-bold text-success mb-0"><i class="bi bi-dice-5"></i> {{
                                                (80
                                                    || 0).toLocaleString() }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'HexWorldModal',
    components: {

    },
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            isHowto: false,
            regionData: {
                code: "TH-RBR-PT",
                name: "Photharam, Ratchaburi",
                name2: "มอญโพธาราม",
                capital: true,
                historical: true,
                population: 13468
            }
        }
    },
    emits: ['close'],
    methods: {
        show(data) {
            console.log("HexWorldModal show:", data);
            this.regionData = data;
            this.$nextTick(() => {
                const modal = new Modal(document.getElementById('hexWorldModal'));
                modal.show();
            });
        },
        close() {
            this.$emit('close');
            const modal = Modal.getInstance(document.getElementById('hexWorldModal'));
            if (modal) {
                modal.hide();
            }
        },
        showHowTo() {
            this.isHowto = true;
        },
        showKeyboard() {
            this.isHowto = false;
        }
    }
}
</script>

<style scoped>
.stats {
    border-top: 1px solid #dee2e6;
    margin-top: 8px;
}

.currency {
    border-right: 1px solid #dee2e6;
}
</style>