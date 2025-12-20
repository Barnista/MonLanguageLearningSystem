<template>
    <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
    name: "NumpadKeyboard",
    props: {
        keyboardClass: {
            default: "simple-keyboard",
            type: String
        },
        input: {
            type: String
        },
    },
    data: () => ({
        keyboard: null,
        selectedLang: null,
        selectedLayout: null,
        layouts: {
            mon: {
                layout: {
                    'default': [
                        '၁ ၂ ၃',
                        '၄ ၅ ၆',
                        '၇ ၈ ၉',
                        '{shift} ၀ {bksp}'
                    ],
                    'shift': [
                        '( √ ^',
                        ') ÷ ×',
                        '= - +',
                        '{shift2} . {bksp}'
                    ],
                },
                display: {
                    '{bksp}': '<span class="text-danger">⌫</span>',
                    '{shift}': '<span class="text-primary"><i class="bi bi-calculator"></i></span>',
                    '{shift2}': '<span class="text-primary"><i class="bi bi-calculator"></i></span>',
                },
                buttonTheme: [
                    {
                        class: "math-symbol",
                        buttons: "± √ ^ : ÷ × = - + ."
                    },
                ]
            }
        }
    }),
    mounted() {
        this.keyboard = new Keyboard(this.keyboardClass, {
            onChange: this.onChange,
            onKeyPress: this.onKeyPress,
            ...this.layouts.mon,
        });
    },
    methods: {
        switchLang(lang) {
            this.keyboard.setOptions({
                ...this.layouts[lang] || this.layouts.mon,
            });
        },
        onChange(input) {
            this.$emit("onChange", input);
        },
        onKeyPress(button) {
            this.$emit("onKeyPress", button);

            /**
             * If you want to handle the shift and caps lock buttons
             */
            if (button === "{shift}") this.handleShift();
            if (button === "{shift2}") this.handleShift();
        },
        handleShift() {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";

            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        },
    },
    watch: {
        input(input) {
            this.keyboard.setInput(input);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.math-symbol {
    font-size: larger;
}
</style>
