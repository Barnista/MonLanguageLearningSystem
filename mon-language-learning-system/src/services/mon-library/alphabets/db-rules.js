export default {
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
        ],
        // กฎที่ระบุว่าสระในการสร้างสัทอักษรไทยตัวใด เมื่อเจอกับตัวสะกดจะต้องเปลี่ยนรูป
        blendTHs: [
            {
                vowel: '-ะ',
                replace: '-ั'
            },
            {
                vowel: 'เ-อ',
                replace: 'เ-ิ'
            },
            {
                vowel: 'เ-่อ',
                replace: 'เ-ิ่'
            },
            {
                vowel: 'โ-่ะ',
                replace: '-่'
            },
        ]
    },
    getAll() {
        return this.rules;
    },
    isBreathyConsonant(letter) {
        return this.rules.tones.breathy.includes(letter);
    },
    isClearConsonant(letter) {
        return this.rules.tones.clear.includes(letter);
    },
    findBlendVowel(vowelCompound, consonant) {
        return this.rules.blendVowels.find(rule =>
            rule.vowel === vowelCompound &&
            rule.consonants.includes(consonant)
        );
    },
    findBlendCompound(compound, consonant){
        return this.rules.blendCompounds.find(c => 
            c.compound === compound &&
            c.letters.includes(consonant)
        );
    },
    findBlendFinal(final){
        return this.rules.blendFinals.find(blend => blend.final === final || blend.final2 === final);
    },
    findBlendTH(vowel){
        return this.rules.blendTHs.find(rule => rule.vowel === vowel);
    }
}