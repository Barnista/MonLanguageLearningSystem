<template>
    <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

import layout_english from "simple-keyboard-layouts/build/layouts/english";
import layout_thai from "simple-keyboard-layouts/build/layouts/thai";
import layout_burmese from "simple-keyboard-layouts/build/layouts/burmese";

export default {
    name: "SimpleKeyboard",
    props: {
        keyboardClass: {
            default: "simple-keyboard",
            type: String
        },
        input: {
            type: String
        }
    },
    data: () => ({
        keyboard: null,
        selectedLang: null,
        selectedLayout: null,
        layouts: {
            mon: {
                layout: {
                    'default': [
                        'ၝ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀ - = {bksp}',
                        '{tab} ဆ တ န မ အ ပ က ၚ သ စ ဟ ဩ ၑ',
                        '{lock} ေ ျ ိ ် ါ ဴ ြ ု ူ း \' {enter}',
                        '{shift} ဖ ထ ခ လ ဘ ည ာ ယ ၜ ။ {shift}',
                        '.com @ {space}'
                    ],
                    'shift': [
                        'ဎ ဍ ဏ္ဍ ဋ ိဲ % ဵ ရ ဂ ( ) _ + {bksp}',
                        '{tab} ၛ ဝ ဣ ၟ ဳ ၠ ဥ ၎ ဿ ဏ ဨ အဴ ဋ္ဌ',
                        '{lock} ဗ ှ ီ ္ ွ ံ ဲ ဒ ဓ : " {enter}',
                        '{shift} ဇ ဌ ဃ ဠ ၐ ဉ ÷ ၞ / ၊ {shift}',
                        '.com @ {space}'
                    ]
                }
            },
            english: layout_english,
            thai: layout_thai,
            burmese: layout_burmese
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
            if (button === "{shift}" || button === "{lock}") this.handleShift();
        },
        handleShift() {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";

            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        }
    },
    watch: {
        input(input) {
            this.keyboard.setInput(input);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
