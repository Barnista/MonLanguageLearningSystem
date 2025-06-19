<template>
    <div class="keyboard-modal">
        <div class="modal fade" id="keyboardModal" aria-hidden="true" aria-labelledby="keyboardModalLabel"
            tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="keyboardModalLabel"><i class="bi bi-keyboard"></i> Virtual Keyboard</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <KeyboardSetComp class="my-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';
import KeyboardSetComp from './KeyboardSetComp.vue';

export default {
    name: 'KeyboardModal',
    components: {
        KeyboardSetComp
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
    }
}
</script>

<style scoped></style>