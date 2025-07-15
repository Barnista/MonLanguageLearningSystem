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
                    th: 'กะ',
                    thLetter: 'ก',
                    sound: require('@/assets/sounds/alphabets/row1Column1.mp3'),
                    compoundIPA: 'k',
                },
                {
                    letter: 'ခ',
                    tone: 'clear',
                    ipa: 'kʰaˀ',
                    th: 'ขะ',
                    thLetter: 'ข',
                    sound: require('@/assets/sounds/alphabets/row1Column2.mp3'),
                    compoundIPA: 'kʰ',
                },
                {
                    letter: 'ဂ',
                    tone: 'breathy',
                    ipa: 'kɛ̤ˀ',
                    th: 'เกี่ยะ',
                    thLetter: 'ค',
                    sound: require('@/assets/sounds/alphabets/row1Column3.mp3'),
                    compoundIPA: 'k',
                },
                {
                    letter: 'ဃ',
                    tone: 'breathy',
                    ipa: 'kʰɛ̤ˀ',
                    th: 'เคี่ยะ',
                    thLetter: 'ฆ',
                    sound: require('@/assets/sounds/alphabets/row1Column4.mp3'),
                    compoundIPA: 'kʰ',
                },
                {
                    letter: 'ၚ',
                    tone: 'breathy',
                    ipa: 'ŋɛ̤ˀ',
                    th: 'เงี่ยะ',
                    thLetter: 'ง',
                    sound: require('@/assets/sounds/alphabets/row1Column5.mp3'),
                    compoundIPA: 'ŋ',
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'စ',
                    tone: 'clear',
                    ipa: 'caˀ',
                    th: 'จะ',
                    thLetter: 'จ',
                    sound: require('@/assets/sounds/alphabets/row2Column1.mp3'),
                    compoundIPA: 'c',
                },
                {
                    letter: 'ဆ',
                    tone: 'clear',
                    ipa: 'cʰaˀ',
                    th: 'ชะ',
                    thLetter: 'ฉ',
                    sound: require('@/assets/sounds/alphabets/row2Column2.mp3'),
                    compoundIPA: 'cʰ',
                },
                {
                    letter: 'ဇ',
                    tone: 'breathy',
                    ipa: 'cɛ̤ˀ',
                    th: 'เจียะ',
                    thLetter: 'ช',
                    sound: require('@/assets/sounds/alphabets/row2Column3.mp3'),
                    compoundIPA: 'c',
                },
                {
                    letter: 'ၛ',
                    tone: 'breathy',
                    ipa: 'cʰɛ̤ˀ',
                    th: 'เชี่ยะ',
                    thLetter: 'ณ',
                    sound: require('@/assets/sounds/alphabets/row2Column4.mp3'),
                    compoundIPA: 'cʰ',
                },
                {
                    letter: 'ည',
                    letter2: 'ဥ',
                    tone: 'breathy',
                    ipa: 'ɲɛ̤ˀ',
                    th: 'เญียะ',
                    thLetter: 'ญ',
                    sound: require('@/assets/sounds/alphabets/row2Column5.mp3'),
                    compoundIPA: 'ɲ',
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'ဋ',
                    tone: 'clear',
                    ipa: 'taˀ',
                    th: 'ตะ',
                    thLetter: 'ฏ',
                    sound: require('@/assets/sounds/alphabets/row3Column1.mp3'),
                    compoundIPA: 't',
                },
                {
                    letter: 'ဌ',
                    tone: 'clear',
                    ipa: 'tʰaˀ',
                    th: 'ทะ',
                    thLetter: 'ฐ',
                    sound: require('@/assets/sounds/alphabets/row3Column2.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဍ',
                    tone: 'clear',
                    ipa: 'ɗaˀ',
                    th: 'ดะ',
                    thLetter: 'ฑ',
                    sound: require('@/assets/sounds/alphabets/row3Column3.mp3'),
                    compoundIPA: 'ɗ',
                },
                {
                    letter: 'ဎ',
                    tone: 'breathy',
                    ipa: 'tʰɛ̤ˀ',
                    th: 'เที่ยะ',
                    thLetter: 'ฒ',
                    sound: require('@/assets/sounds/alphabets/row3Column4.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဏ',
                    tone: 'clear',
                    ipa: 'naˀ',
                    th: 'นะ',
                    thLetter: 'ณ',
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
                    th: 'ตะ',
                    thLetter: 'ต',
                    sound: require('@/assets/sounds/alphabets/row4Column1.mp3'),
                    compoundIPA: 't',
                },
                {
                    letter: 'ထ',
                    tone: 'clear',
                    ipa: 'tʰaˀ',
                    th: 'ทะ',
                    thLetter: 'ถ',
                    sound: require('@/assets/sounds/alphabets/row4Column2.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'ဒ',
                    tone: 'breathy',
                    ipa: 'tɛ̤ˀ',
                    th: 'เตี่ยะ',
                    thLetter: 'ท',
                    sound: require('@/assets/sounds/alphabets/row4Column3.mp3'),
                    compoundIPA: 't',
                },
                {
                    letter: 'ဓ',
                    tone: 'breathy',
                    ipa: 'tʰɛ̤ˀ',
                    th: 'เทียะ',
                    thLetter: 'ธ',
                    sound: require('@/assets/sounds/alphabets/row4Column4.mp3'),
                    compoundIPA: 'tʰ',
                },
                {
                    letter: 'န',
                    tone: 'breathy',
                    ipa: 'nɛ̤ˀ',
                    th: 'เนียะ',
                    thLetter: 'น',
                    sound: require('@/assets/sounds/alphabets/row4Column5.mp3'),
                    compoundIPA: 'n',
                }
            ]
        },
        {
            rows: [
                {
                    letter: 'ပ',
                    tone: 'clear',
                    ipa: 'paˀ',
                    th: 'ปะ',
                    thLetter: 'ป',
                    sound: require('@/assets/sounds/alphabets/row5Column1.mp3'),
                    compoundIPA: 'p',
                },
                {
                    letter: 'ဖ',
                    tone: 'clear',
                    ipa: 'pʰaˀ',
                    th: 'พะ',
                    thLetter: 'ผ',
                    sound: require('@/assets/sounds/alphabets/row5Column2.mp3'),
                    compoundIPA: 'pʰ',
                },
                {
                    letter: 'ဗ',
                    tone: 'breathy',
                    ipa: 'pɛ̤ˀ',
                    th: 'เปี่ยะ',
                    thLetter: 'พ',
                    sound: require('@/assets/sounds/alphabets/row5Column3.mp3'),
                    compoundIPA: 'p',
                },
                {
                    letter: 'ဘ',
                    tone: 'breathy',
                    ipa: 'pʰɛ̤ˀ',
                    th: 'เพียะ',
                    thLetter: 'ภ',
                    sound: require('@/assets/sounds/alphabets/row5Column4.mp3'),
                    compoundIPA: 'pʰ',
                },
                {
                    letter: 'မ',
                    tone: 'breathy',
                    ipa: 'mɛ̤ˀ',
                    th: 'เมียะ',
                    thLetter: 'ม',
                    sound: require('@/assets/sounds/alphabets/row5Column5.mp3'),
                    compoundIPA: 'm',
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
                    th: 'เยียะ',
                    thLetter: 'ย',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn1.mp3'),
                    compoundIPA: 'j',
                },
                {
                    letter: 'ရ',
                    tone: 'breathy',
                    ipa: 'rɛ̤ˀ',
                    th: 'เรียะ',
                    thLetter: 'ร',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn2.mp3'),
                    compoundIPA: 'r',
                },
                {
                    letter: 'လ',
                    tone: 'breathy',
                    ipa: 'lɛ̤ˀ',
                    th: 'เลียะ',
                    thLetter: 'ล',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn3.mp3'),
                    compoundIPA: 'l',
                },
                {
                    letter: 'ဝ',
                    tone: 'breathy',
                    ipa: 'wɛ̤ˀ',
                    th: 'เวียะ',
                    thLetter: 'ว',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn4.mp3'),
                    compoundIPA: 'w',
                },
                {
                    letter: 'သ',
                    tone: 'clear',
                    ipa: 'saˀ',
                    th: 'ซะ',
                    thLetter: 'ซ',
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
                    th: 'ฮะ',
                    thLetter: 'ฮ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn6.mp3'),
                    compoundIPA: 'h',
                },
                {
                    letter: 'ဠ',
                    tone: 'clear',
                    ipa: 'laˀ',
                    th: 'ละ',
                    thLetter: 'ฬ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn7.mp3'),
                    compoundIPA: 'l',
                },
                {
                    letter: 'ၜ',
                    tone: 'clear',
                    ipa: 'ɓaˀ',
                    th: 'บะ',
                    thLetter: 'บ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn8.mp3'),
                    compoundIPA: 'ɓ',
                },
                {
                    letter: 'အ',
                    tone: 'clear',
                    ipa: 'ʔaˀ',
                    th: 'อะ',
                    thLetter: 'อ',
                    sound: require('@/assets/sounds/alphabets/rowNoneColumn9.mp3'),
                    compoundIPA: 'ʔ',
                },
                {
                    letter: 'ၝ',
                    tone: 'breathy',
                    ipa: 'ɓɛ̤ˀ',
                    th: 'เบียะ',
                    thLetter: '-',
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
            thCL: 'อะ',
            thBT: 'เอี่ยะ',
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
            thCL: 'อา',
            thBT: 'เอีย',
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
            ipaCL2: 'ɔɪ',
            ipaBT: 'ìˀ',
            thCL: 'อิ',
            thCL2: 'ออฺย',
            thBT: 'อิ่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column3_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဣဳ',
            compound: 'ဳ',
            ipaCL: 'i',
            ipaCL2: 'aɪ',
            ipaBT: 'ì',
            thCL: 'อี',
            thCL2: 'ออย',
            thBT: 'อี่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥ',
            compound: 'ု',
            ipaCL: 'ùˀ',
            ipaCL2: 'aò',
            ipaBT: 'ùˀ',
            thCL: 'อุ',
            thCL2: 'เอ่า',
            thBT: 'อุ่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column5_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column5_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥူ',
            compound: 'ူ',
            ipaCL: 'ùˀ',
            ipaCL2: 'ao',
            ipaBT: 'ù',
            thCL: 'อู',
            thCL2: 'อาว',
            thBT: 'อู่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column6_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column6_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column6_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဨ',
            compound: 'ေ',
            ipaCL: 'e',
            ipaBT: 'è',
            thCL: 'เอ',
            thBT: 'เอ่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အဲ',
            compound: 'ဲ',
            ipaCL: 'oa',
            ipaBT: 'òa',
            thCL: 'อัว',
            thBT: 'อั่ว',
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
            thCL: 'เอา',
            thBT: 'โอว',
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
            thCL: 'อาว',
            thBT: 'เอีย',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'),
            example: ''
        },
        {
            letter: 'အံ',
            compound: 'ံ',
            ipaCL: 'ɔmˀ',
            ipaBT: 'òmˀ',
            thCL: 'ออฺม',
            thBT: 'อม',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'),
            example: ''
        },
        {
            letter: 'အး',
            compound: 'း',
            ipaCL: 'ah',
            ipaBT: 'ɛ̀h',
            thCL: 'อะฮ',
            thBT: 'เอี่ยฮ',
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
    compoundConsonants: [
        {
            letter: 'ၚ',
            tone: 'breathy',
            ipa: 'ŋɛ̤ˀ',
            th: 'เงี่ยะ',
            thLetter: 'ง',
            sound: require('@/assets/sounds/alphabets/row1Column5.mp3'),
            compoundIPA: 'ŋ',
            compound: '္ၚ',
            example: 'က + -္ၚ + = က္ၚ',
            exampleIPA: 'kaˀŋaˀ',
            exampleTH: 'กะงะ',
            compoundWith: ['က', 'တ', 'ဒ', 'ပ', 'ဗ', 'မ', 'လ', 'သ', 'အ'],
            selected: 'က',
        },
        {
            letter: 'ည',
            letter2: 'ဥ',
            tone: 'breathy',
            ipa: 'ɲɛ̤ˀ',
            th: 'เญียะ',
            thLetter: 'ญ',
            sound: require('@/assets/sounds/alphabets/row2Column5.mp3'),
            compoundIPA: 'ɲ',
            compound: '္ည',
            example: 'က + -္ည + = က္ည',
            exampleIPA: 'kaˀɲaˀ',
            exampleTH: 'กะญะ',
            compoundWith: ['က', 'ဂ', 'ဒ', 'ပ'],
            selected: 'က'
        },
        {
            letter: 'ဍ',
            tone: 'clear',
            ipa: 'ɗaˀ',
            th: 'ดะ',
            thLetter: 'ฑ',
            sound: require('@/assets/sounds/alphabets/row3Column3.mp3'),
            compoundIPA: 'ɗ',
            compound: '္ဍ',
            example: 'က + -္ဍ + = က္ဍ',
            exampleIPA: 'kaˀɗaˀ',
            exampleTH: 'กะดะ',
            compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'သ'],
            selected: 'က'
        },
        {
            letter: 'န',
            tone: 'breathy',
            ipa: 'nɛ̤ˀ',
            th: 'เนียะ',
            thLetter: 'น',
            sound: require('@/assets/sounds/alphabets/row4Column5.mp3'),
            compoundIPA: 'n',
            compound: 'ၞ',
            example: 'က + -ၞ + = ကၞ',
            exampleIPA: 'kaˀnaˀ',
            exampleTH: 'กะนะ',
            compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
            selected: 'က',
        },
        {
            letter: 'မ',
            tone: 'breathy',
            ipa: 'mɛ̤ˀ',
            th: 'เมียะ',
            thLetter: 'ม',
            sound: require('@/assets/sounds/alphabets/row5Column5.mp3'),
            compoundIPA: 'm',
            compound: 'ၟ',
            example: 'က + -ၟ + = ကၟ',
            exampleIPA: 'kaˀmaˀ',
            exampleTH: 'กะมะ',
            compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
            selected: 'က',
        },
        {
            letter: 'ယ',
            tone: 'breathy',
            ipa: 'jɛ̤ˀ',
            th: 'เยียะ',
            thLetter: 'ย',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn1.mp3'),
            compoundIPA: 'j',
            compound: 'ျ',
            example: 'က + -ျ + = ကျ',
            exampleIPA: 'kjaˀ',
            exampleTH: 'กยะ',
            compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
            selected: 'က',
        },
        {
            letter: 'ရ',
            tone: 'breathy',
            ipa: 'rɛ̤ˀ',
            th: 'เรียะ',
            thLetter: 'ร',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn2.mp3'),
            compoundIPA: 'r',
            compound: 'ြ',
            example: 'က + -ြ + = ကြ',
            exampleIPA: 'kraˀ',
            exampleTH: 'กระ',
            compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
            selected: 'က'
        },
        {
            letter: 'လ',
            tone: 'breathy',
            ipa: 'lɛ̤ˀ',
            th: 'เลียะ',
            thLetter: 'ล',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn3.mp3'),
            compoundIPA: 'l',
            compound: 'ၠ',
            example: 'က + -ၠ + = ကၠ',
            exampleIPA: 'klaˀ',
            exampleTH: 'กละ',
            compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
            selected: 'က'
        },
        {
            letter: 'ဝ',
            tone: 'breathy',
            ipa: 'wɛ̤ˀ',
            th: 'เวียะ',
            thLetter: 'ว',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn4.mp3'),
            compoundIPA: 'w',
            compound: 'ွ',
            example: 'က + -ွ + = ကွ',
            exampleIPA: 'kwaˀ',
            exampleTH: 'กวะ',
            compoundWith: ['က', 'ခ', 'ဂ', 'စ', 'ဆ', 'ဇ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ'],
            selected: 'က',
        },
        {
            letter: 'ဟ',
            tone: 'clear',
            ipa: 'haˀ',
            th: 'ฮะ',
            thLetter: 'ฮ',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn6.mp3'),
            compoundIPA: 'h',
            compound: 'ှ',
            example: 'ည + -ှ = ညှ',
            exampleIPA: 'hɲaˀ',
            exampleTH: 'ฮญะ',
            compoundWith: ['ည', 'ဏ', 'မ', 'န', 'ယ', 'ရ', 'လ', 'ဝ'],
            selected: 'ည',
        },
        {
            letter: 'ၜ',
            tone: 'clear',
            ipa: 'ɓaˀ',
            th: 'บะ',
            thLetter: 'บ',
            sound: require('@/assets/sounds/alphabets/rowNoneColumn8.mp3'),
            compoundIPA: 'ɓ',
            compound: '္ၜ',
            example: 'က + -္ၜ = က္ၜ',
            exampleIPA: 'kaˀɓaˀ',
            exampleTH: 'กะบะ',
            compoundWith: ['က', 'စ', 'တ', 'ထ', 'ဗ'],
            selected: 'က'
        },
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
            thGroup: 'กอว',
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
            //isSilent: true
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
        // กฎที่ระบุว่าตสระใดเมื่อเจอกับพยัญชนะใดจะต้องเปลี่ยนรูป
        blendVowels: [
            {
                vowel: 'ာ',
                replace: 'ါ',
                consonants: ['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ']
            },
            {
                vowel: 'ါ',
                replace: 'ာ',
                // consonants not in the first object (['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ'])
                consonants: [
                    'က', 'စ', 'ဆ', 'ဋ', 'ဌ', 'ဍ', 'ဏ', 'တ', 'ထ', 'ဓ', 'န', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'သ', 'ဟ', 'ဠ', 'ၛ', 'ည', 'ၝ', 'အ'
                ]
            },
            {
                vowel: 'ော',
                replace: 'ေါ',
                consonants: ['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ']
            },
            {
                vowel: 'ေါ',
                replace: 'ော',
                // consonants not in the third object (['ခ', 'ဂ', 'ဇ', 'ဎ', 'ဒ', 'ပ', 'ဝ', 'ၜ'])
                consonants: [
                    'က', 'စ', 'ဆ', 'ဋ', 'ဌ', 'ဍ', 'ဏ', 'တ', 'ထ', 'ဓ', 'န', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'သ', 'ဟ', 'ဠ', 'ၛ', 'ည', 'ၝ', 'အ'
                ]
            },
        ],
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
        return this.compoundConsonants;
    },
    getConsonantByPosition(row, column){
        let r = (isNaN(row) ? this.consonants.length-1 : row);
        let c = (isNaN(column) ? 0 : column);
        return this.consonants[r].rows[c];
    },
    getConsonantByLetter(letter) {
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.letter === letter)
        )[0];
    },
    getConsonantByCompound(compound) {
        return this.compoundConsonants.find(row => row.compound === compound);
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
    //OBSOLETE: Use cradtWord2 instead
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
        let ipa = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let ipa2 = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let word = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let word2 = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };

        // If no consonant is provided, we use the default consonant
        let currentConsonant = consonant ? (this.getConsonantByLetter(consonant) ?? this.consonants[0].rows[0].letter) : this.consonants[0].rows[0].letter;

        // check if the consonant is breathy or clear
        let isBreathy = this.isBreathyConsonant(currentConsonant.letter);
        let cl_bt = isBreathy ? 'bt' : 'cl';

        // if no vowel is provided, we use the default vowel
        let currentVowel = vowel ? (this.getVowelByCompound(vowel) ?? this.vowels[0]) : this.vowels[0];
        let blendVowelRule = this.rules.blendVowels.find(rule =>
            rule.vowel === currentVowel.compound &&
            rule.consonants.includes(currentConsonant.letter)
        );
        let vowelCompound = blendVowelRule
            ? blendVowelRule.replace
            : currentVowel.compound;

        // analyse like how you see braskets stacking upon each others and you have to layer them out one by one from top to bottom

        // starting with with compound consonant and consonant (which is the most important layer)
        let compoundConsonantData = compound ? this.getConsonantByCompound(compound) : null;
        if (compoundConsonantData) {
            // if compound consonant is provided, append it to the word

            // append the compound consonant to the word
            word.consonant = currentConsonant.letter;
            word.compound = compoundConsonantData.compound;

            word2.consonant = currentConsonant.letter;
            word2.compound = compoundConsonantData.compound;


            // check if the compound consonant has a blend sound with a certain consonant according to the rules
            let blendCompound = this.rules.blendCompounds.find(c => c.compound === compound);
            let isBlend = blendCompound?.letters.includes(currentConsonant.letter);
            if (isBlend) {
                // ถ้าหากเป็นควบแท้
                // if the compound consonant is a blend, we append the compound consonant to the word
                // and append the IPA for the compound consonant

                if (blendCompound.isReversed) {
                    //ถ้าควบด้วย ဟ (ฮ)
                    // if the blend compound is reversed, start with the compound consonant ipa then the current consonant ipa
                    const a = currentConsonant;
                    const b = compoundConsonantData;
                    currentConsonant = b;
                    compoundConsonantData = a;
                    // also change the vowel IPA from BT to CL regardless
                    isBreathy = false;
                }

                ipa.consonant = currentConsonant.compoundIPA;
                ipa.compound = compoundConsonantData.compoundIPA;

                ipa2.consonant = currentConsonant.compoundIPA;
                ipa2.compound = compoundConsonantData.compoundIPA;
            } else {
                // ถ้าหากไม่ใช่ควบแท้
                // if not a blend, we just append the consonant
                // and append the IPA for the compound consonant
                ipa.consonant = currentConsonant.ipa;
                ipa.compound = compoundConsonantData.compoundIPA;

                ipa2.consonant = currentConsonant.ipa;
                ipa2.compound = compoundConsonantData.compoundIPA;
            }
        } else {
            // if no compound consonant is provided, we just append the consonant
            word.consonant = currentConsonant.letter;
            word2.consonant = currentConsonant.letter;

            ipa.consonant = currentConsonant.compoundIPA;
            ipa2.consonant = currentConsonant.compoundIPA;
        }

        // then final consonant and vowel
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
                        word2.vowel = replaceVowel.replace;
                    }
                }
                // anyway, we can append the final consonant and vowel to the word
                word.vowel = vowelCompound;
                word.final = finalConsonantData.final;

                // append the IPA for final consonant and vowel
                ipa.vowel = (isBreathy ? allowedVowel.ipaBT : allowedVowel.ipaCL);
                ipa.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                if (isBreathy && allowedVowel.ipaBT2) {
                    ipa2.vowel = allowedVowel.ipaBT2;
                    ipa2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                }
                if (!isBreathy && allowedVowel.ipaCL2) {
                    ipa2.vowel = allowedVowel.ipaCL2;
                    ipa2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                }
            } else {
                // reject final consonant and skip to the next layer which is vowel
                word.vowel = vowelCompound;
                ipa.vowel = (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
                if (isBreathy && currentVowel.ipaBT2) {
                    ipa2.vowel = currentVowel.ipaBT2;
                }
                if (!isBreathy && currentVowel.ipaCL2) {
                    ipa2.vowel = currentVowel.ipaCL2;
                }
            }
        } else {
            // if no final consonant data, we then skip to the next layer which is vowel
            word.vowel = vowelCompound;
            ipa.vowel = (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
            if (isBreathy && currentVowel.ipaBT2) {
                ipa2.vowel = currentVowel.ipaBT2;
            }
            if (!isBreathy && currentVowel.ipaCL2) {
                ipa2.vowel = currentVowel.ipaCL2;
            }
        }

        //return feasible data
        return {
            word: word.consonant + word.compound + word.vowel + word.final,
            word2: (word2.vowel ? word2.consonant + word2.compound + word2.vowel + word2.final : ''),
            cl_bt: cl_bt,
            ipa: ipa.consonant + ipa.compound + ipa.vowel + ipa.final,
            ipa2: (ipa2.vowel ? ipa2.consonant + ipa2.compound + ipa2.vowel + ipa2.final : '')
        }
    }
}