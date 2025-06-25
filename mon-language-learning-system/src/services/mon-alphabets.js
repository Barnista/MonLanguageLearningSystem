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
                    final2: 'ှ',
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
            ipaCL2: 'aoˀ',
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
            compound2: 'ို',
            ipaCL: 'ah',
            ipaBT: 'ɛ̀h',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column6_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column6_BT.mp3'),
            example: '',
            exception: {
                id: 'vowel-exception-5',
                dependsOnFinal: true,
                finals: ['က်', 'င်', 'တ်', 'န်', 'ပ်', 'မ်', 'ယ်', 'ဝ်', 'ဟ်', 'အ်']
            }
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
        blendFinals: [
            {
                final: 'က်',
                final2: '်',
                vowels: ['ာ', 'ော']
            },
            {
                final: 'မ်',
                final2: '',
                vowels: ['', 'ာ', 'ု', 'ေ', 'ော']
            },
            {
                final: 'မ်',
                final2: 'ီ',
                vowels: ['ိ'],
                isReplaceable: true,
            },
            {
                final: 'မ်',
                final2: 'ီ',
                vowels: ['ီု'],
                isReplaceable: true,
            },
            {
                final: 'ယ်',
                final2: 'ဲ',
                vowels: ['', 'ာ', 'ု', 'ေ', 'ော', 'ို']
            },
            {
                final: 'ဝ်',
                final2: 'ဵု',
                vowels: ['ို'],
                isReplaceable: true
            },
            {
                final: 'ဟ်',
                final2: '်ှ',
                vowels: ['', 'ေ', 'ော']
            },
            {
                final: 'အ်',
                final2: 'ံ',
                vowels: ['', 'ေ', 'ော'],
                isLegacy: true
            }
        ]
    },
    getAllCompoundConsonants() {
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.compound)
        );
    },
    getAllFinalConsonants(){
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.final)
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
        return this.consonants.flatMap(consonant =>
            consonant.rows.filter(row => row.final === final)
        )[0];
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
        if (consonant) {
            word += consonant;
            let consonantData = this.getConsonantByLetter(consonant);
            if (consonantData) {
                this.isClearConsonant(consonant) ? cl_bt = 'cl' : cl_bt = 'bt';
                ipa += consonantData.compoundIPA || consonantData.ipa;
                ipa2 = ipa;
            }
        }

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
            let vowelData = this.vowels.find(v => v.compound === vowel);
            if (!vowelData) this.vowels.find(v => v.compound2 === vowel);
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
    }
}