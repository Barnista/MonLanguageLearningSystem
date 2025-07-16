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
            ipaCL: 'ùˀ',
            ipaCL2: 'aò',
            ipaBT: 'ùˀ',
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
            thBT: '-ม',
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
    getAll(){
        return this.vowels;
    },
    getAllOtherVowels(){
        return this.otherVowels;
    },
    getByCompound(compound) {
        return this.vowels.find(vowel => vowel.compound === compound) ||
            this.vowels.find(vowel => vowel.compound2 === compound) ||
            this.otherVowels.find(vowel => vowel.compound === compound) ||
            this.otherVowels.find(vowel => vowel.compound2 === compound);
    },
}