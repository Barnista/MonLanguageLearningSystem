// This file defines the Mon language alphabets, including consonants, vowels, numbers, and punctuation.
// It also includes methods to retrieve specific consonants and check their tones.

export default {
    consonants: [
        {
            rows: [
                {
                    letter: 'က',
                    tone: 'clear',
                    ipa: 'kaˀ',
                    sound: require('@/assets/sounds/alphabets/row1Column1.mp3'),
                    compoundIPA: 'k',
                    final: 'က်',
                    final2: '်',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ံ', 'ို']
                },
                {
                    letter: 'ခ',
                    tone: 'clear',
                    ipa: 'kʰaˀ',
                    sound: require('@/assets/sounds/alphabets/row1Column2.mp3'),
                    compoundIPA: 'kʰ',
                },
                {
                    letter: 'ဂ',
                    tone: 'breathy',
                    ipa: 'kɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row1Column3.mp3'),
                    compoundIPA: 'k',
                },
                {
                    letter: 'ဃ',
                    tone: 'breathy',
                    ipa: 'kʰɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row1Column4.mp3'),
                    compoundIPA: 'kʰ',
                },
                {
                    letter: 'ၚ',
                    tone: 'breathy',
                    ipa: 'ŋɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row1Column5.mp3'),
                    compoundIPA: 'ŋ',
                    compound: '္ၚ',
                    example: 'က + -္ၚ + = က္ၚ',
                    exampleIPA: 'kəŋɑ̆',
                    compoundWith: ['က', 'တ', 'ဒ', 'ပ', 'ဗ', 'မ', 'လ', 'သ', 'အ'],
                    selected: 'က',
                    final: 'င်',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ံ', 'ို']
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'စ',
                    tone: 'clear',
                    ipa: 'caˀ',
                    sound: require('@/assets/sounds/alphabets/row2Column1.mp3'),
                    compoundIPA: 'c',
                },
                {
                    letter: 'ဆ',
                    tone: 'clear',
                    ipa: 'cʰaˀ',
                    sound: require('@/assets/sounds/alphabets/row2Column2.mp3'),
                    compoundIPA: 'cʰ',
                },
                {
                    letter: 'ဇ',
                    tone: 'breathy',
                    ipa: 'cɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row2Column3.mp3'),
                    compoundIPA: 'c',
                },
                {
                    letter: 'ၛ',
                    tone: 'breathy',
                    ipa: 'cʰɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row2Column4.mp3'),
                    compoundIPA: 'cʰ',
                },
                {
                    letter: 'ည',
                    letter2: 'ဥ',
                    tone: 'breathy',
                    ipa: 'ɲɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row2Column5.mp3'),
                    compoundIPA: 'ɲ',
                    compound: '္ည',
                    example: 'က + -္ည + = က္ည',
                    exampleIPA: 'kəɲɑ̆',
                    compoundWith: ['က', 'ဂ', 'ဒ', 'ပ'],
                    selected: 'က'
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'ဋ',
                    tone: 'clear',
                    ipa: 'taˀ',
                    sound: require('@/assets/sounds/alphabets/row3Column1.mp3'),
                    compoundIPA: 't',
                },
                {
                    letter: 'ဌ',
                    tone: 'clear',
                    ipa: 'tʰaˀ',
                    sound: require('@/assets/sounds/alphabets/row3Column2.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဍ',
                    tone: 'clear',
                    ipa: 'ɗaˀ',
                    sound: require('@/assets/sounds/alphabets/row3Column3.mp3'),
                    compoundIPA: 'ɗ',
                    compound: '္ဍ',
                    example: 'က + -္ဍ + = က္ဍ',
                    exampleIPA: 'kəɗɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'သ'],
                    selected: 'က'
                },
                {
                    letter: 'ဎ',
                    tone: 'breathy',
                    ipa: 'tʰɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row3Column4.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဏ',
                    tone: 'clear',
                    ipa: 'naˀ',
                    sound: require('@/assets/sounds/alphabets/row3Column5.mp3'),
                    compoundIPA: 'n',
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'တ',
                    tone: 'clear',
                    ipa: 'taˀ',
                    sound: require('@/assets/sounds/alphabets/row4Column1.mp3'),
                    compoundIPA: 't',
                    final: 'တ်',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'ထ',
                    tone: 'clear',
                    ipa: 'tʰaˀ',
                    sound: require('@/assets/sounds/alphabets/row4Column2.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဒ',
                    tone: 'breathy',
                    ipa: 'tɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row4Column3.mp3'),
                    compoundIPA: 't',
                },
                {
                    letter: 'ဓ',
                    tone: 'breathy',
                    ipa: 'tʰɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row4Column4.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'န',
                    tone: 'breathy',
                    ipa: 'nɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row4Column5.mp3'),
                    compoundIPA: 'n',
                    compound: 'ၞ',
                    example: 'က + -ၞ + = ကၞ',
                    exampleIPA: 'kənɑ̆',
                    compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
                    selected: 'က',
                    final: 'န်',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ို']
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'ပ',
                    tone: 'clear',
                    ipa: 'paˀ',
                    sound: require('@/assets/sounds/alphabets/row5Column1.mp3'),
                    compoundIPA: 'p',
                    final: 'ပ်',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'ဖ',
                    tone: 'clear',
                    ipa: 'pʰaˀ',
                    sound: require('@/assets/sounds/alphabets/row5Column2.mp3'),
                    compoundIPA: 'pʰ',
                },
                {
                    letter: 'ဗ',
                    tone: 'breathy',
                    ipa: 'pɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row5Column3.mp3'),
                    compoundIPA: 'p',
                },
                {
                    letter: 'ဘ',
                    tone: 'breathy',
                    ipa: 'pʰɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row5Column4.mp3'),
                    compoundIPA: 'pʰ',
                },
                {
                    letter: 'မ',
                    tone: 'breathy',
                    ipa: 'mɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/row5Column5.mp3'),
                    compoundIPA: 'm',
                    compound: 'ၟ',
                    example: 'က + -ၟ + = ကၟ',
                    exampleIPA: 'kəmɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က',
                    final: 'မ်',
                    final2: 'ံ',
                    final3: 'ီ',
                    finalWith: ['', 'ာ', 'ိ', 'ု', 'ေ', 'ော', 'ို']
                }
            ]
        },
        {
            type: 'none',
            rows: [
                {
                    letter: 'ယ',
                    tone: 'breathy',
                    ipa: 'jɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn1.mp3'),
                    compoundIPA: 'j',
                    compound: 'ျ',
                    example: 'က + -ျ + = ကျ',
                    exampleIPA: 'kyɑ̆',
                    compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
                    selected: 'က',
                    final: 'ယ်',
                    final2: 'ဲ',
                    finalWith: ['', 'ာ', 'ု', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'ရ',
                    tone: 'breathy',
                    ipa: 'rɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn2.mp3'),
                    compoundIPA: 'r',
                    compound: 'ြ',
                    example: 'က + -ြ + = ကြ',
                    exampleIPA: 'krɑ̆',
                    compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
                    selected: 'က'
                },
                {
                    letter: 'လ',
                    tone: 'breathy',
                    ipa: 'lɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn3.mp3'),
                    compoundIPA: 'l',
                    compound: 'ၠ',
                    example: 'က + -ၠ + = ကၠ',
                    exampleIPA: 'klɑ̆',
                    compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
                    selected: 'က'
                },
                {
                    letter: 'ဝ',
                    tone: 'breathy',
                    ipa: 'wɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn4.mp3'),
                    compoundIPA: 'w',
                    compound: 'ွ',
                    example: 'က + -ွ + = ကွ',
                    exampleIPA: 'kwɑ̆',
                    compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
                    selected: 'က',
                    final: 'ဝ်',
                    final2: 'ဵ',
                    finalWith: ['', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'သ',
                    tone: 'clear',
                    ipa: 'saˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn5.mp3'),
                    compoundIPA: 's',
                }
            ]
        },
        {
            type: 'none',
            rows: [
                {
                    letter: 'ဟ',
                    tone: 'clear',
                    ipa: 'haˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn6.mp3'),
                    compoundIPA: 'h',
                    compound: 'ှ',
                    example: 'ည + -ှ = ညှ',
                    exampleIPA: 'hnɑ̆',
                    compoundWith: ['ည', 'ဏ', 'မ', 'န', 'ယ', 'ရ', 'လ', 'ဝ'],
                    selected: 'ည',
                    final: 'ဟ်',
                    final2: '်ှ',
                    finalWith: ['', 'ိ', 'ု', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'ဠ',
                    tone: 'clear',
                    ipa: 'laˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn7.mp3'),
                    compoundIPA: 'l',
                },
                {
                    letter: 'ၜ',
                    tone: 'clear',
                    ipa: 'ɓaˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn8.mp3'),
                    compoundIPA: 'ɓ',
                    compound: '္ၜ',
                    example: 'က + -္ၜ = က္ၜ',
                    exampleIPA: 'kəpɑ̆',
                    compoundWith: ['က', 'စ', 'တ', 'ထ', 'ဗ'],
                    selected: 'က'
                },
                {
                    letter: 'အ',
                    tone: 'clear',
                    ipa: 'ʔaˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn9.mp3'),
                    compoundIPA: 'ʔ',
                    final: 'အ်',
                    final2: 'ံ',
                    finalWith: ['', 'ေ', 'ော', 'ို']
                },
                {
                    letter: 'ၝ',
                    tone: 'breathy',
                    ipa: 'ɓɛ̤ˀ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn10.mp3'),
                    compoundIPA: 'ɓ',
                },
            ]
        }
        // Add more consonants as needed
    ],
    vowels: [
        {
            letter: 'အ',
            compound: '',
            ipaCL: 'aˀ',
            ipaBT: 'ɛ̀ˀ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အာ',
            compound: 'ာ',
            compound2: 'ါ',
            ipaCL: 'a',
            ipaBT: 'ɛ̀a',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column2_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column2_BT.mp3'),
            example: '',
            exception: {
                id: 'vowel-exception-1',
                dependsOnFinal: false,
                consonants: ['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ']
            }
        },
        {
            letter: 'ဣ',
            compound: 'ိ',
            ipaCL: 'ɔeˀ',
            ipaBT: 'ìˀ',
            ipaCL2: 'ɔɪ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column3_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဣဳ',
            compound: 'ဳ',
            ipaCL: 'i',
            ipaBT: 'ì',
            ipaCL2: 'aɪ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥ',
            compound: 'ု',
            ipaCL: 'ùˀ',
            ipaBT: 'ùˀ',
            ipaCL2: 'aò',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column5_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column5_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥူ',
            compound: 'ူ',
            ipaCL: 'ao',
            ipaBT: 'ù',
            ipaCL2: 'ùˀ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column6_CL2.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column6_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column6_CL.mp3'),
            example: ''
        },
        {
            letter: 'ဨ',
            compound: 'ေ',
            ipaCL: 'e',
            ipaBT: 'è',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အဲ',
            compound: 'ဲ',
            ipaCL: 'oa',
            ipaBT: 'òa',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column2_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column2_BT.mp3'),
            example: ''
        },
        {
            letter: 'ဩ',
            compound: 'ော',
            compound2: 'ေါ',
            ipaCL: 'ao',
            ipaBT: 'əʊ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column3_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column3_BT.mp3'),
            example: '',
            exception: {
                id: 'vowel-exception-2',
                dependsOnFinal: false,
                consonants: ['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ']
            }
        },
        {
            letter: 'အဴ‌‍‍',
            compound: 'ဴ',
            ipaCL: 'ao',
            ipaBT: 'ɛ̀a',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'),
            example: ''
        },
        {
            letter: 'အံ',
            compound: 'ံ',
            ipaCL: 'ɔˀ',
            ipaBT: 'òˀ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'),
            example: ''
        },
        {
            letter: 'အး',
            compound: 'း',
            ipaCL: 'ah',
            ipaBT: 'ɛ̀h',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column6_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column6_BT.mp3'),
            example: '',
        }
    ],
    otherVowels: [
        {
            letter: 'ို',
            compound: 'ို',
            ipaCL: 'ɒ',
            ipaBT: 'ə̤',
            ipaBT2: 'a̤',
            thCL: 'อาฺ',
            thBT: 'อ่าฺ',
            thBT2: 'อ่าฺ',
            origin: 'ိ + ု = ို',
        },
        {
            letter: 'ာံ',
            compound: 'ာံ',
            ipaCL: 'am',
            ipaBT: 'èm',
            thCL: 'อาม',
            thBT: 'เอ่ม',
            origin: 'ာ + မ် = ာံ',
        },
        {
            letter: 'ုံ',
            compound: 'ုံ',
            ipaCL: 'um',
            ipaBT: 'ùm',
            thCL: 'อุม',
            thBT: 'อุ่ม',
            origin: 'ု + မ် = ုံ'
        },
        {
            letter: 'ေံ',
            compound: 'ေံ',
            ipaCL: 'em', // sound of မ်
            ipaCL2: 'eˀ', //sound of အ်
            ipaCL3: 'eh', //sound of အ်
            ipaBT: 'èm', //sound of မ်
            ipaBT2: 'èˀ', //sounf of အ်
            thCL: 'เอม',
            thCL2: 'เอะ',
            thCL3: 'เอะ',
            thBT: 'เอ่ม',
            thBT2: 'เอ่ะ',
            origin: 'ေ + မ် = ေံ <br>  ေ + အ် = ေံ'
        },
        {
            letter: 'ောံ',
            compound: 'ောံ',
            ipaCL: 'om', // sound of မ်
            ipaCL2: 'ò', //sound of အ်
            ipaBT: 'òm', //sound of မ်
            ipaBT2: 'òˀ', //sounf of အ်
            thCL: 'โอม',
            thCL2: 'โอะ',
            thBT: 'โอ่ม',
            thBT2: 'โอ่ะ',
            origin: 'ော + မ် = ောံ <br> ေါ + မ် = ေံါ'
        },
        {
            letter: 'ီ',
            compound: 'ီ',
            ipaCL: 'ɛm',
            ipaBT: 'ìm',
            thCL: 'อิม',
            thBT: 'อิ่ม',
            origin: 'ိ + မ် = ီ'
        },
        {
            letter: 'ီု',
            compound: 'ီု',
            ipaCL: 'ɒm',
            ipaBT: 'ɜ̀m',
            thCL: 'ออฺม',
            thBT: 'เอิ่ม',
            origin: 'ိ + ု + မ် = ီု'
        },
        {
            letter: 'ာဲ',
            compound: 'ာဲ',
            compound2: 'ဲါ',
            ipaCL: 'ai',
            ipaBT: 'ə̤i',
            thCL: 'อาย',
            thBT: 'อ่าย',
            origin: 'ာ + ယ် = ာဲ <br> ါ + ယ် = ဲါ'
        },
        {
            letter: 'ုဲ',
            compound: 'ုဲ',
            ipaCL: 'ui',
            ipaBT: 'ùi',
            thCL: 'อุย',
            thBT: 'อุ่ย',
            origin: 'ု + ယ် = ုဲ'
        },
        {
            letter: 'ေဲ',
            compound: 'ေဲ',
            ipaCL: 'ea',
            ipaBT: 'ɛ̀a',
            thCL: 'เอีย',
            thBT: 'เอี่ย',
            origin: 'ေ + ယ် = ေဲ'
        },
        {
            letter: 'ောဲ',
            compound: 'ောဲ',
            compound2: 'ေဲါ',
            ipaCL: 'ua',
            ipaBT: 'ùa',
            thCL: 'อัว',
            thBT: 'อั่ว',
            origin: 'ော + ယ် = ောဲ <br> ေါ + ယ် = ေဲါ'
        },
        {
            letter: 'ိုဲ',
            compound: 'ိုဲ',
            ipaCL: 'ɤj',
            ipaCL2: 'oj',
            ipaBT: 'əj',
            thCL: 'เอย',
            thCL2: 'โอย',
            thBT: 'เอ่ย',
            origin: 'ိ + ု + ယ် = ိုဲ'
        },
        {
            letter: 'ဵု',
            compound: 'ဵု',
            ipaCL: 'ɒ',
            ipaBT: 'ɜ̀',
            thCL: 'ออฺ',
            thBT: 'เอ่อ',
            origin: 'ိ + ု + ဝ် = ဵု'
        }
    ],
    finalConsonants: [
        {
            group: 'က',
            thGroup: 'กัก',
            members: [
                { consonant: 'က', final: 'က်', final2: '်', finalIPA: 'k' },
                { consonant: 'ခ', final: 'ခ်', finalIPA: 'kʰ' },
                { consonant: 'ဂ', final: 'ဂ်', finalIPA: 'k' },
                { consonant: 'ဃ', final: 'ဃ်', finalIPA: 'kʰ' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'aˀ',
                    ipaBT: 'ɛ̀ˀ',
                    ipaBT2: 'ɛˀ',
                    thCL: 'อะ',
                    thBT: 'เอี่ย',
                    thBT2: 'แอ่',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'a̤',
                    thCL: 'อา',
                    thBT: 'อ่า',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɤ',
                    ipaBT: 'ɤˀ',
                    thCL: 'เออ',
                    thBT: 'เอ่อ',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ɤ',
                    ipaBT: 'ɤˀ',
                    thCL: 'เออ',
                    thBT: 'เอ่อ',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'ɛ̀',
                    ipaCL2: 'ɒ',
                    ipaBT: 'ɛ̀ˀ',
                    thCL: 'เอีย',
                    thCL2: 'ออฺ',
                    thBT: 'เอี่ย',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ံ',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɒˀ',
                    thCL: 'ออ',
                    thBT: 'อ่อ',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ə̤',
                    thCL: 'อาฺ',
                    thBT: 'อ่าฺ'
                }
            ]
        },
        {
            group: 'ၚ',
            thGroup: 'กัง',
            members: [
                { consonant: 'ၚ', final: 'င်', finalIPA: 'ŋ' },
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'aˀ',
                    ipaBT: 'ɛˀ',
                    thCL: 'อะ',
                    thBT: 'แอ่',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'a̤',
                    thCL: 'อา',
                    thBT: 'อ่า',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɤ',
                    ipaBT: 'ɤˀ',
                    thCL: 'เออ',
                    thBT: 'เอ่อ',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ɤ',
                    ipaBT: 'ɤˀ',
                    thCL: 'เออ',
                    thBT: 'เอ่อ',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'ɛ̀',
                    ipaCL2: 'ɒ',
                    ipaBT: 'ɛ̀ˀ',
                    ipaBT2: 'ɒˀ',
                    thCL: 'เอีย',
                    thCL2: 'ออฺ',
                    thBT: 'เอี่ย',
                    thBT2: 'อ่อ',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ံ',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɒˀ',
                    thCL: 'ออ',
                    thBT: 'อ่อ',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ə̤',
                    thCL: 'อาฺ',
                    thBT: 'อ่าฺ'
                }
            ]
        },
        {
            group: 'တ',
            thGroup: 'กอด',
            members: [
                { consonant: 'တ', final: 'တ်', finalIPA: 't' },
                { consonant: 'စ', final: 'စ်', finalIPA: 'c' },
                { consonant: 'ဇ', final: 'ဇ်', finalIPA: 'c' },
                { consonant: 'ဋ', final: 'ဋ်', finalIPA: 't' },
                { consonant: 'ဌ', final: 'ဌ်', finalIPA: 'tʰ' },
                { consonant: 'ထ', final: 'ထ်', finalIPA: 'tʰ' },
                { consonant: 'ဒ', final: 'ဒ်', finalIPA: 't' },
                { consonant: 'ဓ', final: 'ဓ်', finalIPA: 'tʰ' },
                { consonant: 'သ', final: 'သ်', finalIPA: 's' },
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒ',
                    ipaBT: 'ò',
                    thCL: 'ออ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'a̤',
                    thCL: 'อา',
                    thBT: 'อ่า',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɔeˀ',
                    ipaBT: 'ìˀ',
                    thCL: 'อิ',
                    thBT: 'อิ่',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùˀ',
                    ipaBT: 'ùˀ',
                    thCL: 'อุ',
                    thBT: 'อุ่',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'e',
                    ipaBT: 'è',
                    thCL: 'เอ',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺ',
                    thBT: 'เอ่อ'
                }
            ]
        },
        {
            group: 'န',
            thGroup: 'กอน',
            members: [
                { consonant: 'န', final: 'န်', finalIPA: 'n' },
                { consonant: 'ည', final: 'ည်', finalIPA: 'ɲ' },
                { consonant: 'ဏ', final: 'ဏ်', finalIPA: 'n' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒ',
                    ipaBT: 'ò',
                    thCL: 'ออ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'a̤',
                    thCL: 'อา',
                    thBT: 'อ่า',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɔeˀ',
                    ipaBT: 'ìˀ',
                    thCL: 'อิ',
                    thBT: 'อิ่',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùˀ',
                    ipaBT: 'ùˀ',
                    thCL: 'อุ',
                    thBT: 'อุ่',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'e',
                    ipaBT: 'è',
                    thCL: 'เอ',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺ',
                    thBT: 'เอ่อ'
                }
            ]
        },
        {
            group: 'ပ',
            thGroup: 'กอบ',
            members: [
                { consonant: 'ပ', final: 'ပ်', finalIPA: 'p' },
                { consonant: 'ဗ', final: 'ဗ်', finalIPA: 'p' },
                { consonant: 'ဘ', final: 'ဘ်', finalIPA: 'pʰ' },
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒ',
                    ipaBT: 'ò',
                    thCL: 'ออ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'è',
                    thCL: 'อา',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɔeˀ',
                    ipaBT: 'ìˀ',
                    thCL: 'อิ',
                    thBT: 'อิ่',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùˀ',
                    ipaBT: 'ùˀ',
                    thCL: 'อุ',
                    thBT: 'อุ่',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'e',
                    ipaBT: 'è',
                    thCL: 'เอ',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺ',
                    thBT: 'เอ่อ'
                }
            ]
        },
        {
            group: 'မ',
            thGroup: 'กอม',
            members: [
                { consonant: 'မ', final: 'မ်', final2: 'ံ', final3: 'ီ', finalIPA: 'm' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒ',
                    ipaBT: 'ò',
                    thCL: 'ออ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'a',
                    ipaBT: 'è',
                    thCL: 'อา',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɔeˀ',
                    ipaBT: 'ìˀ',
                    thCL: 'อิ',
                    thBT: 'อิ่',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùˀ',
                    ipaBT: 'ùˀ',
                    thCL: 'อุ',
                    thBT: 'อุ่',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'e',
                    ipaBT: 'è',
                    thCL: 'เอ',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺ',
                    thBT: 'เอ่อ'
                }
            ]
        },
        {
            group: 'ယ',
            thGroup: 'กอย',
            members: [
                { consonant: 'ယ', final: 'ယ်', final2: 'ဲ', finalIPA: 'j' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'oa',
                    ipaBT: 'òa',
                    thCL: 'อัว',
                    thBT: 'อั่ว',
                },
                {
                    vowel: 'ာ',
                    ipaCL: 'ai',
                    ipaBT: 'a̤i',
                    thCL: 'อาย',
                    thBT: 'อ่าย',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùi',
                    ipaBT: 'ùiˀ',
                    thCL: 'อุย',
                    thBT: 'อุ่ย',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'ea',
                    ipaBT: 'ɛ̀a',
                    thCL: 'เอีย',
                    thBT: 'เอี่ย',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'oa',
                    ipaBT: 'òa',
                    thCL: 'อัว',
                    thBT: 'อั่ว',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɤi',
                    ipaCL2: 'oi',
                    ipaBT: 'ɤiˀ',
                    thCL: 'เอย',
                    thCL2: 'โอย',
                    thBT: 'เอ่ย'
                }
            ],
            isSilent: true
        },
        {
            group: 'ဝ',
            thGroup: 'กอ',
            members: [
                { consonant: 'ဝ', final: 'ဝ်', final2: 'ဵ', finalIPA: 'w' },
                { consonant: 'လ', final: 'လ်', finalIPA: 'l' },
                { consonant: 'ရ', final: 'ရ်', finalIPA: 'r' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒ',
                    ipaBT: 'ò',
                    thCL: 'ออ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'e',
                    ipaBT: 'è',
                    thCL: 'เอ',
                    thBT: 'เอ่',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'o',
                    ipaBT: 'ò',
                    thCL: 'โอ',
                    thBT: 'โอ่',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺ',
                    thBT: 'เอ่อ'
                }
            ],
            isSilent: true
        },
        {
            group: 'ဟ',
            thGroup: 'กอฮ',
            members: [
                { consonant: 'ဟ', final: 'ဟ်', final2: '်ှ', finalIPA: 'h' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒh',
                    ipaBT: 'òh',
                    thCL: 'ออฮ',
                    thBT: 'โอ่ฮ',
                },
                {
                    vowel: 'ိ',
                    ipaCL: 'ɔeˀh',
                    ipaBT: 'ìˀh',
                    thCL: 'อิฮ',
                    thBT: 'อิ่ฮ',
                },
                {
                    vowel: 'ု',
                    ipaCL: 'ùh',
                    ipaBT: 'ùˀh',
                    thCL: 'อุฮ',
                    thBT: 'อุ่ฮ',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'eh',
                    ipaBT: 'èˀh',
                    thCL: 'เอฮ',
                    thBT: 'เอ่ฮ',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'oh',
                    ipaBT: 'òh',
                    thCL: 'โอฮ',
                    thBT: 'โอ่ฮ',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒh',
                    ipaBT: 'ɤˀh',
                    thCL: 'ออฺฮ',
                    thBT: 'เอ่อฮ'
                }
            ],
            isSilent: true
        },
        {
            group: 'အ',
            thGroup: 'เกาะ',
            members: [
                { consonant: 'အ', final: 'အ်', final2: 'ံ', finalIPA: 'ʔ' }
            ],
            finalWith: [
                {
                    vowel: '',
                    ipaCL: 'ɒˀ',
                    ipaBT: 'òˀ',
                    thCL: 'เอาะ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ေ',
                    ipaCL: 'eˀ',
                    ipaBT: 'èˀ',
                    thCL: 'เอะ',
                    thBT: 'เอ่ะ',
                },
                {
                    vowel: 'ော',
                    ipaCL: 'oˀ',
                    ipaBT: 'òˀ',
                    thCL: 'โอะ',
                    thBT: 'โอ่ะ',
                },
                {
                    vowel: 'ို',
                    ipaCL: 'ɒ',
                    ipaBT: 'ɤˀ',
                    thCL: 'ออฺอ',
                    thBT: 'เอ่อะ'
                }
            ],
            isSilent: true
        }
    ],
    numbers: [
        {
            number: 0,
            letter: '၀',
            ipa: 'zə',
            //sound: require('@/assets/sounds/numbers/number0.mp3'),
            example: '၀ + က = ၀က',
            exampleIPA: 'zəkɑ̆'
        },
        {
            number: 1,
            letter: '၁',
            ipa: 'tʰə',
            //sound: require('@/assets/sounds/numbers/number1.mp3'),
            example: '၁ + က = ၁က',
            exampleIPA: 'tʰəkɑ̆'
        },
        {
            number: 2,
            letter: '၂',
            ipa: 'nɛ̤ˀ',
            //sound: require('@/assets/sounds/numbers/number2.mp3'),
            example: '၂ + က = ၂က',
            exampleIPA: 'nɛ̤ˀkɑ̆'
        },
        {
            number: 3,
            letter: '၃',
            ipa: 'sə',
            //sound: require('@/assets/sounds/numbers/number3.mp3'),
            example: '၃ + က = ၃က',
            exampleIPA: 'səkɑ̆'
        },
        {
            number: 4,
            letter: '၄',
            ipa: 'lɛ̤ˀ',
            //sound: require('@/assets/sounds/numbers/number4.mp3'),
            example: '၄ + က = ၄က',
            exampleIPA: 'lɛ̤ˀkɑ̆'
        },
        {
            number: 5,
            letter: '၅',
            ipa: 'ŋə',
            //sound: require('@/assets/sounds/numbers/number5.mp3'),
            example: '၅ + က = ၅က',
            exampleIPA: 'ŋəkɑ̆'
        },
        {
            number: 6,
            letter: '၆',
            ipa: 'ʃə',
            //sound: require('@/assets/sounds/numbers/number6.mp3'),
            example: '၆ + က = ၆က',
            exampleIPA: 'ʃəkɑ̆'
        },
        {
            number: 7,
            letter: '၇',
            ipa: 'ɲə',
            //sound: require('@/assets/sounds/numbers/number7.mp3'),
            example: '၇ + က = ၇က',
            exampleIPA: 'ɲəkɑ̆'
        },
        {
            number: 8,
            letter: '၈',
            ipa: 'ʔə',
            //sound: require('@/assets/sounds/numbers/number8.mp3'),
            example: '၈ + က = ၈က',
            exampleIPA: 'ʔəkɑ̆'
        },
        {
            number: 9,
            letter: '၉',
            ipa: 'kə',
            //sound: require('@/assets/sounds/numbers/number9.mp3'),
            example: '၉ + က = ၉က',
            exampleIPA: 'kəkɑ̆'
        },
        {
            number: 10,
            letter: '၁၀',
            ipa: 'tʰə zə',
            //sound: require('@/assets/sounds/numbers/number10.mp3'),
            example: '၁၀ + က = ၁၀က',
            exampleIPA: 'tʰəzəkɑ̆'
        },
    ],
    punctuation: [
        {
            letter: '၊',
            ipa: 'pɔŋ',
            //sound: require('@/assets/sounds/punctuation/comma.mp3'),
            example: 'က၊ က = က၊ က',
            exampleIPA: 'kɑ̆ pɔŋ kɑ̆'
        },
        {
            letter: '။',
            ipa: 'pɔŋ pɔŋ',
            //sound: require('@/assets/sounds/punctuation/fullstop.mp3'),
            example: 'က။ က = က။ က',
            exampleIPA: 'kɑ̆ pɔŋ pɔŋ kɑ̆'
        },
        {
            letter: '၊။',
            ipa: 'pɔŋ pɔŋ pɔŋ',
            //sound: require('@/assets/sounds/punctuation/commaFullstop.mp3'),
            example: 'က၊။ က = က၊။ က',
            exampleIPA: 'kɑ̆ pɔŋ pɔŋ pɔŋ kɑ̆'
        }
    ],
    rules: {
        tones: {
            clear: [
                'က', 'ခ', 'စ', 'ဆ', 'ဋ', 'ဌ', 'ဍ', 'ဏ', 'တ', 'ထ', 'ပ', 'ဖ', 'သ', 'ဟ', 'ဠ', 'ၜ', 'အ'
            ],
            breathy: [
                'ဂ', 'ဃ', 'ၚ', 'ဇ', 'ၛ', 'ည', 'ဎ', 'ဒ', 'ဓ', 'န', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'ဝ', 'ၝ'
            ],
        },
        // กฎที่ระบุว่าตัวควบใดกับพยัญชนะใด จะออกเสียงแบบควบแท้
        blendCompounds: [
            {
                compound: 'ျ',
                letters: ['က', 'ခ', 'ဂ', 'ဇ', 'ပ', 'ဖ', 'ဗ'],
            },
            {
                compound: 'ြ',
                letters: ['က', 'ခ', 'ဂ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ'],
            },
            {
                compound: 'ၠ',
                letters: ['က', 'ခ', 'ဂ', 'ပ', 'ဖ', 'ဗ'],
            },
            {
                compound: 'ွ',
                letters: ['က', 'ခ', 'ဂ', 'ဇ', 'ဘ'],
            },
            {
                compound: 'ှ',
                isReversed: true,
                letters: ['ည', 'ဏ', 'မ', 'န', 'ယ', 'ရ', 'လ', 'ဝ'],
            }
        ],
        // กฎที่ระบุว่าตัวสะกดใดกับสระใดจะมีการเขียนแบบลดรูป
        blendFinals: [
            {
                final: 'က်',
                final2: '်',
                vowels: [
                    {
                        vowel: 'ာ',
                        replace: 'ာ်'
                    },
                    {
                        vowel: 'ော',
                        replace: 'ော်'
                    },
                    {
                        vowel: 'ါ',
                        replace: 'ါ်'
                    },
                    {
                        vowel: 'ေါ',
                        replace: 'ေါ်'
                    },
                ]
            },
            {
                final: 'မ်',
                final2: 'ံ',
                vowels: [
                    {
                        vowel: '',
                        replace: 'ံ'
                    },
                    {
                        vowel: 'ာ',
                        replace: 'ာံ'
                    },
                    {
                        vowel: 'ါ',
                        replace: 'ံါ'
                    },
                    {
                        vowel: 'ိ',
                        replace: 'ီ'
                    },
                    {
                        vowel: 'ု',
                        replace: 'ုံ'
                    },
                    {
                        vowel: 'ေ',
                        replace: 'ေံ'
                    },
                    {
                        vowel: 'ော',
                        replace: 'ောံ'
                    },
                    {
                        vowel: 'ေါ',
                        replace: 'ေံါ'
                    },
                    {
                        vowel: 'ို',
                        replace: 'ီု'
                    }
                ]
            },
            {
                final: 'ယ်',
                final2: 'ဲ',
                vowels: [
                    {
                        vowel: '',
                        replace: 'ဲ'
                    },
                    {
                        vowel: 'ာ',
                        replace: 'ာဲ'
                    },
                    {
                        vowel: 'ါ',
                        replace: 'ဲါ'
                    },
                    {
                        vowel: 'ု',
                        replace: 'ုဲ'
                    },
                    {
                        vowel: 'ေ',
                        replace: 'ေဲ'
                    },
                    {
                        vowel: 'ော',
                        replace: 'ောဲ'
                    },
                    {
                        vowel: 'ေါ',
                        replace: 'ေဲါ'
                    },
                    {
                        vowel: 'ို',
                        replace: 'ိုဲ'
                    }
                ]
            },
            {
                final: 'ဝ်',
                final2: 'ဵု',
                vowels: [
                    {
                        vowel: 'ို',
                        replace: 'ဵု'
                    }
                ],
            },
            {
                final: 'ဟ်',
                final2: '်ှ',
                vowels: [
                    {
                        vowel: '',
                        replace: '်ှ'
                    },
                    {
                        vowel: 'ေ',
                        replace: '်ှေ'
                    },
                    {
                        vowel: 'ော',
                        replace: '်ှော'
                    },
                    {
                        vowel: 'ေါ',
                        replace: '်ှော'
                    }
                ]
            },
            {
                final: 'အ်',
                final2: 'ံ',
                vowels: [
                    {
                        vowel: '',
                        replace: 'ံ'
                    },
                    {
                        vowel: 'ေ',
                        replace: 'ေံ'
                    },
                    {
                        vowel: 'ော',
                        replace: 'ောံ'
                    },
                    {
                        vowel: 'ေါ',
                        replace: 'ေံါ'
                    },
                ],
                isLegacy: true
            }
        ]
    },
    getAllCompoundConsonants() {
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.compound)
        );
    },
    getConsonantByLetter(letter) {
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.letter === letter)
        )[0];
    },
    getConsonantByCompound(compound) {
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.compound === compound)
        )[0];
    },
    getConsonantByFinal(final) {
        return this.finalConsonants.flatMap(group =>
            group.members.filter(member => member.final === final)
        )[0];
    },
    getVowelByCompound(compound) {
        return this.vowels.find(vowel => vowel.compound === compound) ||
            this.vowels.find(vowel => vowel.compound2 === compound) ||
            this.otherVowels.find(vowel => vowel.compound === compound) ||
            this.otherVowels.find(vowel => vowel.compound2 === compound);
    },
    getAllFinalConsonantGroups() {
        return this.finalConsonants;
    },
    getFinalConsonantByLetter(letter) {
        return this.finalConsonants.flatMap(group =>
            [].concat(
                group.members.filter(member => member.consonant === letter),
                group.members.filter(member => member.final === letter),
                group.members.filter(member => member.final2 === letter)
            )
        )[0];
    },
    getFinalConsonantGroupByLetter(letter) {
        return this.finalConsonants.find(group =>
            group.members.some(member => member.consonant === letter) ||
            group.members.some(member => member.final === letter) ||
            group.members.some(member => member.final2 === letter)
        );
    },
    isBreathyConsonant(letter) {
        return this.rules.tones.breathy.includes(letter);
    },
    isClearConsonant(letter) {
        return this.rules.tones.clear.includes(letter);
    },
    craftWord(consonant, compound, vowel, finalConsonant) {
        let ipa = '', ipa2 = '';
        let cl_bt = '';
        let defaultVowel = this.vowels[0];

        let word = '';
        // If no consonant is provided, we use the default consonant
        if (consonant) {
            word += consonant;
            let consonantData = this.getConsonantByLetter(consonant);
            if (consonantData) {
                this.isClearConsonant(consonant) ? cl_bt = 'cl' : cl_bt = 'bt';
                ipa += consonantData.compoundIPA || consonantData.ipa;
                ipa2 = ipa;
            }
        }

        // If no compound is provided, we use the default compound
        if (compound) {
            word += compound;
            let compoundData = this.getConsonantByCompound(compound);
            let blendCompound = this.rules.blendCompounds.find(c => c.compound === compound);

            if (blendCompound) {
                if (!blendCompound.letters.includes(consonant)) {
                    // If the consonant is not part of the blend compound, we use the default vowel
                    ipa += (this.isBreathyConsonant(consonant) ? defaultVowel.ipaBT : defaultVowel.ipaCL);
                    // Append the IPA for the compound consonant
                    ipa += compoundData.compoundIPA;
                } else {
                    if (blendCompound.isReversed) {
                        ipa = compoundData.compoundIPA + ipa;
                    } else {
                        // Append the IPA for the compound consonant
                        ipa += compoundData.compoundIPA;
                    }
                }
            } else {
                ipa += (this.isBreathyConsonant(consonant) ? defaultVowel.ipaBT : defaultVowel.ipaCL);
                // Append the IPA for the compound consonant
                ipa += compoundData.compoundIPA;
            }

            // assign ipa2 as the same as ipa
            ipa2 = ipa;
        }

        // If no vowel is provided, use the default vowel
        if (vowel) {
            let allVowels = [].concat(this.vowels).concat(this.otherVowels);
            var vowelData = allVowels.find(v => v.compound === vowel || v.compound2 === vowel);

            if (vowelData) {
                if (vowelData.exception) {
                    if (vowelData.exception.consonants && vowelData.exception.consonants.includes(consonant)) {
                        word += vowelData.compound2;
                    } else if (vowelData.exception.finals && vowelData.exception.finals.includes(finalConsonant)) {
                        word += vowelData.compound2;
                    } else {
                        word += vowelData.compound;
                    }
                } else {
                    word += vowelData.compound;
                }
                if (compound) {
                    let blendCompound = this.rules.blendCompounds.find(c => c.compound === compound);
                    if (blendCompound && blendCompound.isReversed) {
                        ipa += vowelData.ipaCL;
                        ipa2 = ipa;
                    } else {
                        if (this.isClearConsonant(consonant)) {
                            ipa += vowelData.ipaCL;
                            if (vowelData.ipaCL2) {
                                ipa2 += vowelData.ipaCL2;
                            } else {
                                ipa2 = ipa;
                            }
                        } else {
                            ipa += vowelData.ipaBT;
                            ipa2 = ipa;
                        }
                    }
                } else {
                    if (this.isClearConsonant(consonant)) {
                        ipa += vowelData.ipaCL;
                        if (vowelData.ipaCL2) {
                            ipa2 += vowelData.ipaCL2;
                        } else {
                            ipa2 = ipa;
                        }
                    } else {
                        ipa += vowelData.ipaBT;
                        ipa2 = ipa;
                    }
                }
            } else {
                console.log('VOWEL NOT FOUND:', vowel);
            }
        } else {
            word += defaultVowel.compound;

            if (compound) {
                let blendCompound = this.rules.blendCompounds.find(c => c.compound === compound);
                if (blendCompound && blendCompound.isReversed) {
                    ipa += defaultVowel.ipaCL;
                    ipa2 = ipa;
                } else {
                    if (this.isClearConsonant(consonant)) {
                        ipa += defaultVowel.ipaCL;
                        if (defaultVowel.ipaCL2) {
                            ipa2 += defaultVowel.ipaCL2;
                        } else {
                            ipa2 = ipa;
                        }
                    } else {
                        ipa += defaultVowel.ipaBT;
                        ipa2 = ipa;
                    }
                }
            } else {
                if (this.isClearConsonant(consonant)) {
                    ipa += defaultVowel.ipaCL;
                    if (defaultVowel.ipaCL2) {
                        ipa2 += defaultVowel.ipaCL2;
                    } else {
                        ipa2 = ipa;
                    }
                } else {
                    ipa += defaultVowel.ipaBT;
                    ipa2 = ipa;
                }
            }
        }

        // If a final consonant is provided, append it to the word and IPA
        if (finalConsonant) {
            word += finalConsonant;
            let finalConsonantData = this.getConsonantByFinal(finalConsonant);
            if (finalConsonantData) {
                ipa += finalConsonantData.compoundIPA || finalConsonantData.ipa;
                ipa2 += finalConsonantData.compoundIPA || finalConsonantData.ipa;
            }
        }

        if (ipa2 == ipa) ipa2 = null;
        return {
            word: word,
            cl_bt: cl_bt,
            ipa: ipa,
            ipa2: ipa2
        };
    },
    craftWord2(consonant, compound, vowel, finalConsonant) {
        let ipa = '', ipa2 = '';
        let word = '', word2 = '';

        // If no consonant is provided, we use the default consonant
        let currentConsonant = consonant ? (this.getConsonantByLetter(consonant) ?? this.consonants[0].rows[0].letter) : this.consonants[0].rows[0].letter;

        // check if the consonant is breathy or clear
        let isBreathy = this.isBreathyConsonant(currentConsonant.letter);
        let cl_bt = isBreathy ? 'bt' : 'cl';

        // if no vowel is provided, we use the default vowel
        let currentVowel = vowel ? (this.getVowelByCompound(vowel) ?? this.vowels[0]) : this.vowels[0];
        let vowelCompound = isBreathy ? (currentVowel.compound2 ?? currentVowel.compound) : currentVowel.compound;

        // analyse like how you see braskets stacking upon each others and you have to layer them out one by one from top to bottom

        // starting with final consonant and vowel,...

        // find finalConsonant data but not yet assign any value to word or ipa
        let finalConsonantData = this.getFinalConsonantByLetter(finalConsonant);
        let finalConsonantGroup = this.getFinalConsonantGroupByLetter(finalConsonant);

        if (finalConsonantData && finalConsonantGroup) {
            //try to analyse with vowels according to rules of finalWith and also with blendFinals.
            let allowedVowel = finalConsonantGroup.finalWith.find(vowel => currentVowel.compound === vowel.vowel || currentVowel.compound2 === vowel.vowel);

            // if final consonant is compatible with the current vowel
            if (allowedVowel) {
                // check if there's any blen rules for final consonant and vowel
                let blendFinal = this.rules.blendFinals.find(blend => blend.final === finalConsonantData.final || blend.final2 === finalConsonantData.final);

                if (blendFinal) {
                    // if there's a blend rule, replace the vowel with the blend rule
                    // use the current vowel's compound or compound2 based on whether it's breathy or clear

                    let replaceVowel = blendFinal.vowels.find(v => v.vowel === vowelCompound);
                    if (replaceVowel) {
                        // if replace vowel found, use the replaceVowel instead of final consonant and vowel in word2
                        word2 = word2 + replaceVowel.replace;
                    }
                }
                // anyway, we can append the final consonant and vowel to the word
                word = word + vowelCompound + finalConsonantData.final;

                // append the IPA for final consonant and vowel
                ipa = ipa + (isBreathy ? allowedVowel.ipaBT : allowedVowel.ipaCL) + (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                if (isBreathy && allowedVowel.ipaBT2) {
                    ipa2 = ipa2 + allowedVowel.ipaBT2 + (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                }
                if (!isBreathy && allowedVowel.ipaCL2) {
                    ipa2 = ipa2 + allowedVowel.ipaCL2 + (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                }
            } else {
                // reject final consonant and skip to the next layer which is vowel
                word = word + vowelCompound;
                ipa = ipa + (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
                if (isBreathy && currentVowel.ipaBT2) {
                    ipa2 = ipa2 + currentVowel.ipaBT2;
                }
                if (!isBreathy && currentVowel.ipaCL2) {
                    ipa2 = ipa2 + currentVowel.ipaCL2;
                }
            }
        } else {
            // if no final consonant data, we then skip to the next layer which is vowel
            word = word + vowelCompound;
            ipa = ipa + (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
            if (isBreathy && currentVowel.ipaBT2) {
                ipa2 = ipa2 + currentVowel.ipaBT2;
            }
            if (!isBreathy && currentVowel.ipaCL2) {
                ipa2 = ipa2 + currentVowel.ipaCL2;
            }
        }

        // then continue with compound consonant and consonant (which is the most important layer)
        let compoundConsonantData = compound ? this.getConsonantByCompound(compound) : null;
        if (compoundConsonantData) {
            // if compound consonant is provided, append it to the word

            // append the compound consonant to the word
            word = currentConsonant.letter + compoundConsonantData.compound + word;
            if (word2) word2 = currentConsonant.letter + compoundConsonantData.compound + word2;

            // check if the compound consonant has a blend sound with a certain consonant according to the rules
            let blendCompound = this.rules.blendCompounds.find(c => c.compound === compound);
            let isBlend = blendCompound?.letters.includes(currentConsonant.letter);
            if (isBlend) {
                // ถ้าหากเป็นควบแท้
                // if the compound consonant is a blend, we append the compound consonant to the word
                // and append the IPA for the compound consonant
                if (blendCompound.isReversed) {
                    // if the blend compound is reversed, start with the compound consonant ipa then the current consonant ipa
                    ipa = compoundConsonantData.compoundIPA + currentConsonant.compoundIPA + ipa;
                    if (ipa2) ipa2 = compoundConsonantData.compoundIPA + currentConsonant.compoundIPA + ipa2;
                } else {
                    ipa = currentConsonant.compoundIPA + compoundConsonantData.compoundIPA + ipa;
                    if (ipa2) ipa2 = currentConsonant.compoundIPA + compoundConsonantData.compoundIPA + ipa2;
                }
            } else {
                // ถ้าหากไม่ใช่ควบแท้
                // if not a blend, we just append the consonant
                // and append the IPA for the compound consonant
                ipa = currentConsonant.ipa + compoundConsonantData.compoundIPA + ipa;
                if (ipa2) ipa2 = currentConsonant.ipa + compoundConsonantData.compoundIPA + ipa2;
            }
        } else {
            // if no compound consonant is provided, we just append the consonant
            word = currentConsonant.letter + word;
            if (word2) word2 = currentConsonant.letter + word2;

            ipa = currentConsonant.compoundIPA + ipa;
            if (ipa2) ipa2 = currentConsonant.compoundIPA + ipa2;
        }

        //return feasible data
        return {
            word: word,
            word2: word2,
            cl_bt: cl_bt,
            ipa: ipa,
            ipa2: ipa2
        }
    }
}