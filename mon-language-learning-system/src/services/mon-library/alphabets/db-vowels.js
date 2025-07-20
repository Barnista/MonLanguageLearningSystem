export default {
    vowels: [
        {
            letter: 'အ',
            compound: '',
            ipaCL: 'aˀ',
            ipaBT: 'ɛ̀ˀ',
            thCL: '-ะ',
            thBT: 'เ-ี่ยะ',
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
            thCL: '-า',
            thBT: 'เ-ีย',
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
            thCL: '-ิ',
            thCL2: '-อฺย',
            thBT: '-ิ่',
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
            thCL: '-ี',
            thCL2: '-อย',
            thBT: '-ี่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥ',
            compound: 'ု',
            ipaCL: 'u',
            ipaCL2: 'aò',
            ipaBT: 'uˀ',
            thCL: '-ุ',
            thCL2: 'เ-่า',
            thBT: '-ุ่',
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
            thCL: '-ู',
            thCL2: '-าว',
            thBT: '-ู่',
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
            thCL: 'เ-',
            thBT: 'เ-่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အဲ',
            compound: 'ဲ',
            ipaCL: 'oa',
            ipaBT: 'òa',
            thCL: '-ัว',
            thBT: '-ั่ว',
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
            thCL: 'เ-า',
            thBT: 'โ-ว',
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
            thCL: '-าว',
            thBT: 'เ-ีย',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'),
            example: ''
        },
        {
            letter: 'အံ',
            compound: 'ံ',
            ipaCL: 'ɔmˀ',
            ipaBT: 'òmˀ',
            thCL: '-อฺม',
            thBT: '-่ม',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'),
            example: ''
        },
        {
            letter: 'အး',
            compound: 'း',
            ipaCL: 'ah',
            ipaBT: 'ɛ̀h',
            thCL: '-ะฮ',
            thBT: 'เ-ี่ยฮ',
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
            thCL: '-าฺ',
            thBT: '-่าฺ',
            thBT2: '-่าฺ',
            origin: 'ိ + ု = ို',
        },
        {
            letter: 'ာံ',
            compound: 'ာံ',
            ipaCL: 'am',
            ipaBT: 'èm',
            thCL: '-าม',
            thBT: 'เ-่ม',
            origin: 'ာ + မ် = ာံ',
        },
        {
            letter: 'ုံ',
            compound: 'ုံ',
            ipaCL: 'um',
            ipaBT: 'ùm',
            thCL: '-ุม',
            thBT: '-ุ่ม',
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
            thCL: 'เ-ม',
            thCL2: 'เ-ะ',
            thCL3: 'เ-ะ',
            thBT: 'เ-่ม',
            thBT2: 'เ-่ะ',
            origin: 'ေ + မ် = ေံ <br>  ေ + အ် = ေံ'
        },
        {
            letter: 'ောံ',
            compound: 'ောံ',
            ipaCL: 'om', // sound of မ်
            ipaCL2: 'ò', //sound of အ်
            ipaBT: 'òm', //sound of မ်
            ipaBT2: 'òˀ', //sounf of အ်
            thCL: 'โ-ม',
            thCL2: 'โ-ะ',
            thBT: 'โ-่ม',
            thBT2: 'โ-่ะ',
            origin: 'ော + မ် = ောံ <br> ေါ + မ် = ေံါ'
        },
        {
            letter: 'ီ',
            compound: 'ီ',
            ipaCL: 'ɔeˀm',
            ipaBT: 'ìˀm',
            thCL: '-ิม',
            thBT: '-ิ่ม',
            origin: 'ိ + မ် = ီ'
        },
        {
            letter: 'ီု',
            compound: 'ီု',
            ipaCL: 'ɒm',
            ipaBT: 'ɤˀm',
            thCL: '-อฺม',
            thBT: 'เ-ิ่ม',
            origin: 'ိ + ု + မ် = ီု'
        },
        {
            letter: 'ာဲ',
            compound: 'ာဲ',
            compound2: 'ဲါ',
            ipaCL: 'ai',
            ipaBT: 'a̤i',
            thCL: '-าย',
            thBT: '-่าย',
            origin: 'ာ + ယ် = ာဲ <br> ါ + ယ် = ဲါ'
        },
        {
            letter: 'ုဲ',
            compound: 'ုဲ',
            ipaCL: 'ui',
            ipaBT: 'ùi',
            thCL: '-ุย',
            thBT: '-ุ่ย',
            origin: 'ု + ယ် = ုဲ'
        },
        {
            letter: 'ေဲ',
            compound: 'ေဲ',
            ipaCL: 'ea',
            ipaBT: 'ɛ̀a',
            thCL: 'เ-ีย',
            thBT: 'เ-ี่ย',
            origin: 'ေ + ယ် = ေဲ'
        },
        {
            letter: 'ောဲ',
            compound: 'ောဲ',
            compound2: 'ေဲါ',
            ipaCL: 'oa',
            ipaBT: 'òa',
            thCL: '-ัว',
            thBT: '-ั่ว',
            origin: 'ော + ယ် = ောဲ <br> ေါ + ယ် = ေဲါ'
        },
        {
            letter: 'ိုဲ',
            compound: 'ိုဲ',
            ipaCL: 'ɤi',
            ipaCL2: 'oi',
            ipaBT: 'ɤiˀ',
            thCL: 'เ-ย',
            thCL2: 'โ-ย',
            thBT: 'เ-่ย',
            origin: 'ိ + ု + ယ် = ိုဲ'
        },
        {
            letter: 'ဵု',
            compound: 'ဵု',
            ipaCL: 'ɒw',
            ipaBT: 'ɤˀw',
            thCL: '-อฺว',
            thBT: 'เ-ิ่ว',
            origin: 'ိ + ု + ဝ် = ဵု'
        }
    ],
    getAll() {
        return this.vowels;
    },
    getAllOtherVowels() {
        return this.otherVowels;
    },
    getByLetter(letter) {
        return this.vowels.find(vowel => vowel.letter === letter) ||
            this.otherVowels.find(vowel => vowel.letter === letter);
    },
    getByCompound(compound) {
        return this.vowels.find(vowel => vowel.compound === compound) ||
            this.vowels.find(vowel => vowel.compound2 === compound) ||
            this.otherVowels.find(vowel => vowel.compound === compound) ||
            this.otherVowels.find(vowel => vowel.compound2 === compound);
    },
    isStandAloneVowel(letter) {
        const vowel = this.getByLetter(letter);
        return vowel ? true : false;
    },
    isCompoundVowel(compound) {
        const vowel = this.getByCompound(compound);
        return vowel ? true : false;
    }
}