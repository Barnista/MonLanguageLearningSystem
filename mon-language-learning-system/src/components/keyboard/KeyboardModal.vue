<template>
    <div class="keyboard-modal">
        <div class="modal fade" id="keyboardModal" aria-hidden="true" aria-labelledby="keyboardModalLabel"
            tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="keyboardModalLabel">
                            <i class="bi bi-keyboard"></i>
                            {{ langSet[lang ? lang : 'en'].keyboard.fullTitle || 'Virtual Keyboard' }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-4">
                        <KeyboardSetComp :class="[!isHowto ? '': 'd-none']" :lang="lang ? lang : 'en'" />
                        <CompKeyboardGuide :class="[isHowto ? '': 'd-none']" :lang="lang ? lang : 'en'" />
                    </div>
                    <div class="modal-footer">
                        <div v-if="!isHowto">
                            <span class="text-muted me-1">{{ langSet[lang ? lang : 'en'].keyboard.gettingLost }}</span>
                            <button class="btn btn-sm btn-outline-primary" @click="showHowTo">
                                <i class="bi bi-info-circle"></i>
                                {{ langSet[lang ? lang : 'en'].keyboard.howToUse }}
                            </button>
                        </div>
                         <div v-if="isHowto">
                            <button class="btn btn-outline-light bg-fabulous" @click="showKeyboard">
                                <i class="bi bi-keyboard"></i>
                                {{ langSet[lang ? lang : 'en'].keyboard.switchToKeyboard }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';
import KeyboardSetComp from './CompKeyboardSet.vue';
import displayLanguages from '@/services/display-languages/display-languages';
import CompKeyboardGuide from './CompKeyboardGuide.vue';

export default {
    name: 'KeyboardModal',
    components: {
        KeyboardSetComp,
        CompKeyboardGuide
    },
    props: {
        lang: String
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            isHowto: false
        }
    },
    emits: ['close'],
    methods: {
        show() {
            this.$nextTick(() => {
                const modal = new Modal(document.getElementById('keyboardModal'));
                modal.show();
            });
        },
        close() {
            this.$emit('close');
            const modal = Modal.getInstance(document.getElementById('keyboardModal'));
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

<style scoped></style>