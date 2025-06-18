<template>
    <div class="keyboard-comp">
        <div class="text-end">
            <span v-if="isCopied" class="text-success me-2">Copied to clipboard.</span>
            <button @click="copyText" class="btn btn-outline-success mb-2">
                <i class="bi bi-clipboard"></i> Copy text
            </button>
        </div>
        <input ref="inputText" class="form-control custom-input py-3 mb-2" type="text" v-model="input"
            @input="onInputChange" placeholder="Tap on the virtual keyboard to start">
        <SimpleKeyboardComp ref="simpleKeyboard" :keyboardClass="keyboardClass" :input="input" @onChange="onChange"
            @onKeyPress="onKeyPress" />
        <div class="text-center mt-2">
            <button v-for="(lang, index) in langs" :key="index"
                :class="['btn', 'me-2', selectedLangIndex === index ? 'btn-primary' : 'btn-outline-primary']"
                @click="selectedLang(lang, index)">
                <img :src="lang.flag" alt="" class="me-2" width="28" height="auto">
                {{ lang.label || lang.lang }}
            </button>
        </div>
        <p class="mt-4 text-center text-muted">
            <small>
                Created by <a href="https://github.com/Barnista/MonLanguageLearningSystem" target="_blank">Barnista</a>.
                Powered by <a href="https://github.com/hodgef/simple-keyboard" target="_blank">simple-keyboard</a>.
                <br>Mon keyboard layout designed by <a
                    href="https://github.com/keymanapp/keyboards/tree/master/release/m/mon_anonta"
                    target="_blank">Anonta Mon</a>.
            </small>
        </p>
    </div>
</template>

<script>
import SimpleKeyboardComp from './SimpleKeyboardComp.vue';
export default {
    name: 'KeyboardSetComp',
    components: {
        SimpleKeyboardComp
    },
    data: () => ({
        isCopied: false,
        input: "",
        langs: [
            {
                lang: 'mon',
                label: 'မန်',
                flag: require('@/assets/flags/mon.svg')
            },
            {
                lang: 'english',
                label: 'EN',
                flag: require('@/assets/flags/en_uk.svg')
            },
            {
                lang: 'thai',
                label: 'ไทย',
                flag: require('@/assets/flags/thai.svg')
            },
            {
                lang: 'burmese',
                label: 'မြန်မာ',
                flag: require('@/assets/flags/myanmar.svg')
            }
        ],
        selectedLangIndex: 0,
    }),
    methods: {
        copyText() {
            navigator.clipboard.writeText(this.input).then(() => {
                this.$refs.inputText.select();
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = false;
                }, 5000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        },
        selectedLang(lang, index) {
            this.selectedLangIndex = index;
            console.log("Selected Language:", lang);
            // Here you can add logic to change the keyboard layout based on the selected language
            this.$refs.simpleKeyboard.switchLang(lang.lang);
        },
        onChange(input) {
            this.input = input;
        },
        onKeyPress(button) {
            console.log("button", button);
        },
        onInputChange(input) {
            this.input = input.target.value;
        }
    }
};
</script>

<style scoped>
.custom-input {
    font-size: 1.2rem;
    font-weight: 500;
    height: 60px;
}
</style>