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
                        'ၝ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀ - = {bksp}',
                        '{tab} ဆ တ န မ အ ပ က ၚ သ စ ဟ ဩ ၑ',
                        '{lock} ေ ျ ိ ် ါ ဴ ြ ု ူ း \' {enter}',
                        '{shift} ဖ ထ ခ လ ဘ ည ာ ယ ၜ ။ {shift}',
                        '.com @ {space}'
                    ],
                    'shift': [
                        'ဎ ဍ ၚ်္ ဋ ိဲ % ဵ ရ ဂ ( ) _ + {bksp}',
                        '{tab} ၛ ဝ ဣ ၟ ဳ ၠ ဥ ၎ ဿ ဏ ဨ အဴ ဋ္ဌ',
                        '{lock} ဗ ှ ီ ္ ွ ံ ဲ ဒ ဓ : " {enter}',
                        '{shift} ဇ ဌ ဃ ဠ ၐ ဉ ÷ ၞ ၊ {shift}',
                        '.com @ {space}'
                    ]
                },
                display: {
                    '{bksp}': '<span class="text-danger">⌫ Back</span>',
                    '{enter}': '<span class="text-primary">⏎ <small class="d-inline d-md-none">Enter</small><span class="d-none d-md-inline">Enter</span></span>',
                    '{shift}': '<span class="text-secondary">⇧ <small class="d-inline d-md-none">Shift</small><span class="d-none d-md-inline">Shift</span></span>',
                    '{lock}': '<span class="text-success">Tab</span>',
                    '{tab}': '<span class="text-success">Caps</span>',
                    '{space}': '<span class="text-muted"><small class="d-inline d-md-none">Mon - Anonta</small><span class="d-none d-md-inline">Mon - Mon Anonta</span></span>'
                },
                buttonTheme: [
                    {
                        class: "mon-text",
                        buttons: "ၝ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀"
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဆ တ န မ အ ပ က ၚ သ စ ဟ ဩ ၑ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ေ ျ ိ ် ါ ဴ ြ ု ူ း'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဖ ထ ခ လ ဘ ည ာ ယ ၜ ။'
                    },
                    {
                        class: "mon-text",
                        buttons: "ဎ ဍ ၚ်္ ဋ ိဲ % ဵ ရ ဂ"
                    },
                    {
                        class: "mon-text",
                        buttons: "ၛ ဝ ဣ ဒ ဓ ဂ ဥ ၎ ဿ ဏ"
                    },
                    {
                        class: "mon-text",
                        buttons: 'ၛ ဝ ဣ ၟ ဳ ၠ ဥ ၎ ဿ ဏ ဨ အဴ ဋ္ဌ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဗ ှ ီ ္ ွ ံ ဲ ဒ ဓ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဇ ဌ ဃ ဠ ၐ ဉ ÷ ၞ င ၊'
                    },
                ]
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
