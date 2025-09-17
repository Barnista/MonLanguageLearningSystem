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
                        'တ န မ အ ပ က ၚ {bksp}',
                        'ေ ျ ိ ် ါ ဴ ြ ု ူ',
                        'ာ း ဗ ၛ ဆ ဟ ရ ၞ ှ',
                        '{shift} ဖ ထ ခ လ ဘ ည ယ',
                        '{lock} ဍ {space} ၊ {enter}'
                    ],
                    'shift': [
                        'ဝ ဣ ဒ ဓ ဂ ဥ ၎ {bksp}',
                        'ီ ္ ွ ံ ဲ ၟ ဳ ၠ ဵ',
                        'ဌ ဎ ၝ ဨ စ သ ဏ င ၚ်္',
                        '{shift} ဇ ဌ ဃ ဠ ၜ ဉ ဋ',
                        '{lock} ဩ ဿ {space} ။ {enter}'
                    ],
                    'lock': [
                        '၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀ {bksp}',
                        '1 2 3 4 5 6 7 8 9 0',
                        '$ @ # % & _ = | \\ ,',
                        '" [ ( ) ] + - * / .',
                        '{tab} {space} ? ! {enter}'
                    ],
                },
                display: {
                    '{bksp}': '<span class="text-danger">⌫</span>',
                    '{enter}': '<span class="text-primary">⏎ <small class="d-inline d-md-none">Enter</small><span class="d-none d-md-inline">Enter</span></span>',
                    '{shift}': '<span class="text-secondary">⇧ <small class="d-inline d-md-none">Shift</small><span class="d-none d-md-inline">Shift</span></span>',
                    '{lock}': '<span class="fw-bold text-success">၁၂၃</span>',
                    '{tab}': '<span class="fw-bold text-success">ကခ</span>',
                    '{space}': '<span class="text-muted"><small class="d-inline d-md-none">Mon - Anonta</small><span class="d-none d-md-inline">Mon - Mon Anonta</span></span>'
                },
                buttonTheme: [
                    {
                        class: "mon-text",
                        buttons: "ဆ တ န မ အ ပ က ၚ သ စ"
                    },
                    {
                        class: "mon-text",
                        buttons: 'ေ ျ ိ ် ါ ဴ ြ ု ူ း ာ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဖ ထ ခ လ ဘ ည ယ ဟ'
                    },
                    {
                        class: "mon-text",
                        buttons: '{tab} {lock} ဍ ရ ၊ ၞ'
                    },
                    {
                        class: "mon-text",
                        buttons: "၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀"
                    },
                    {
                        class: "mon-text",
                        buttons: "ၛ ဝ ဣ ဒ ဓ ဂ ဥ ၎ ဿ ဏ"
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဗ ှ ီ ္ ွ ံ ဲ ၟ ဳ ၠ ဵ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဇ ဌ ဃ ဠ ၜ ဉ ဋ ဨ'
                    },
                    {
                        class: "mon-text",
                        buttons: 'ဩ င ။ ၚ်္'
                    },
                ]
            },
            /* mon: {
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
                        '{shift} ဇ ဌ ဃ ဠ ၐ ဉ ÷ ၞ င ၊ {shift}',
                        '.com @ {space}'
                    ]
                }
            }, */
            english: {
                ...layout_english, display: {
                    '{bksp}': 'BACKSPACE',
                    '{enter}': 'ENTER',
                    '{shift}': 'SHIFT',
                    '{lock}': 'CAPS',
                    '{tab}': 'TAB',
                    '{space}': 'SPACE'
                }
            },
            thai: {
                ...layout_thai, display: {
                    '{bksp}': 'BACKSPACE',
                    '{enter}': 'ENTER',
                    '{shift}': 'SHIFT',
                    '{lock}': 'CAPS',
                    '{tab}': 'TAB',
                    '{space}': 'SPACE'
                }
            },
            burmese: {
                ...layout_burmese, display: {
                    '{bksp}': 'BACKSPACE',
                    '{enter}': 'ENTER',
                    '{shift}': 'SHIFT',
                    '{lock}': 'CAPS',
                    '{tab}': 'TAB',
                    '{space}': 'SPACE'
                }
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
            if (button === "{lock}") this.handleLock();
            if (button === "{tab}") this.handleTab();
        },
        handleShift() {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";

            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        },
        handleLock() {
            let currentLayout = this.keyboard.options.layoutName;
            let lockToggle = currentLayout === "default" ? "lock" : "default";

            this.keyboard.setOptions({
                layoutName: lockToggle
            });
        },
        handleTab() {
            let currentLayout = this.keyboard.options.layoutName;
            let tabToggle = currentLayout === "default" ? "tab" : "default";

            this.keyboard.setOptions({
                layoutName: tabToggle
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
<style scoped></style>
