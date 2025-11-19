export default {
    vowels: [
        {
            letter: 'အ',
            compound: '',
            ipaCL: 'ʔa',
            ipaBT: 'ʔɛˑa',
            thCL: '-ะ',
            thBT: 'แ-ฺ.',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အာ',
            compound: 'ာ',
            compound2: 'ါ',
            ipaCL: 'ʔaː',
            ipaBT: 'ʔɛaː',
            thCL: '-า',
            thBT: 'แ-ฺ—า',
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
            ipaCL: 'ʔɒi',
            ipaCL2: 'ʔɒi',
            ipaBT: 'ʔì',
            thCL: '-็อฺย',
            thCL2: '-็อฺย',
            thBT: '-ิ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column3_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဣဳ',
            compound: 'ဳ',
            ipaCL: 'ʔɒːi',
            ipaCL2: 'ʔɒːi',
            ipaBT: 'ʔìː',
            thCL: '-อฺย',
            thCL2: '-อฺย',
            thBT: '-ี่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥ',
            compound: 'ု',
            ipaCL: 'ʔau',
            ipaCL2: 'ʔau',
            ipaBT: 'ʔù',
            thCL: 'เ-็า',
            thCL2: 'เ-็า',
            thBT: '-ุ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column5_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column5_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဥူ',
            compound: 'ူ',
            ipaCL: 'ʔaːu',
            ipaCL2: 'ʔaːu',
            ipaBT: 'ʔùː',
            thCL: 'เ-า',
            thCL2: 'เ-า',
            thBT: '-ู่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow1Column6_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow1Column6_BT.mp3'),
            soundCL2: require('@/assets/sounds/alphabets/vowelRow1Column6_CL2.mp3'),
            example: ''
        },
        {
            letter: 'ဨ',
            compound: 'ေ',
            ipaCL: 'ʔeː',
            ipaBT: 'ʔèː',
            thCL: 'เ-',
            thBT: 'เ-่',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'),
            example: ''
        },
        {
            letter: 'အဲ',
            compound: 'ဲ',
            ipaCL: 'ʔuːa',
            ipaBT: 'ʔuːà',
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
            ipaCL: 'ʔaːu',
            ipaBT: 'ʔəː',
            thCL: 'เ-า',
            thBT: 'เ-่อ',
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
            ipaCL: 'ʔaːw',
            ipaBT: 'ʔɛaː',
            thCL: '-าว',
            thBT: 'แ-็—า',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'),
            example: ''
        },
        {
            letter: 'အံ',
            compound: 'ံ',
            ipaCL: 'ʔɔm',
            ipaBT: 'ʔɔ̀m',
            thCL: '-อม',
            thBT: '-่อม',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'),
            example: ''
        },
        {
            letter: 'အး',
            compound: 'း',
            ipaCL: 'ʔah',
            ipaBT: 'ʔɛh',
            thCL: '-ะฮ',
            thBT: 'แ-ฺฮ',
            soundCL: require('@/assets/sounds/alphabets/vowelRow2Column6_CL.mp3'),
            soundBT: require('@/assets/sounds/alphabets/vowelRow2Column6_BT.mp3'),
            example: '',
        }
    ],
    otherVowels: [
        {
            letter: 'ို',
            compound: 'ို',
            ipaCL: 'ʔɒ',
            ipaBT: 'ʔə̀',
            thCL: 'เ-าฺะ',
            thBT: 'เ-อะ',
            origin: 'ိ + ု = ို',
        },
        {
            letter: 'ာံ',
            compound: 'ာံ',
            ipaCL: 'ʔaːm',
            ipaBT: 'ʔàːm',
            thCL: '-าม',
            thBT: '-่าม',
            origin: 'ာ + မ် = ာံ',
        },
        {
            letter: 'ုံ',
            compound: 'ုံ',
            ipaCL: 'ʔum',
            ipaBT: 'ʔùm',
            thCL: '-ุม',
            thBT: '-ุ่ม',
            origin: 'ု + မ် = ုံ'
        },
        {
            letter: 'ေံ',
            compound: 'ေံ',
            ipaCL: 'ʔeːm',
            ipaBT: 'ʔèːm',
            thCL: 'เ-ม',
            thBT: 'เ-่ม',
            origin: 'ေ + မ် = ေံ <br>  ေ + အ် = ေံ'
        },
        {
            letter: 'ောံ',
            compound: 'ောံ',
            ipaCL: 'ʔoːm',
            ipaBT: 'ʔòːm',
            thCL: 'โ-ม',
            thBT: 'โ-่ม',
            origin: 'ော + မ် = ောံ <br> ေါ + မ် = ေံါ'
        },
        {
            letter: 'ီ',
            compound: 'ီ',
            ipaCL: 'ʔim',
            ipaBT: 'ʔìm',
            thCL: '-ิม',
            thBT: '-ิ่ม',
            origin: 'ိ + မ် = ီ'
        },
        {
            letter: 'ီု',
            compound: 'ီု',
            ipaCL: 'ʔɒːm',
            ipaBT: 'ʔə̀ːm',
            thCL: '-าฺม',
            thBT: 'เ-ิ่ม',
            origin: 'ိ + ု + မ် = ီု'
        },
        {
            letter: 'ာဲ',
            compound: 'ာဲ',
            compound2: 'ဲါ',
            ipaCL: 'ʔaːj',
            ipaBT: 'ʔàːj',
            thCL: '-าย',
            thBT: '-่าย',
            origin: 'ာ + ယ် = ာဲ <br> ါ + ယ် = ဲါ'
        },
        {
            letter: 'ုဲ',
            compound: 'ုဲ',
            ipaCL: 'ʔuj',
            ipaBT: 'ʔùj',
            thCL: '-ุย',
            thBT: '-ุ่ย',
            origin: 'ု + ယ် = ုဲ'
        },
        {
            letter: 'ေဲ',
            compound: 'ေဲ',
            ipaCL: 'ʔiːa',
            ipaBT: 'ʔiːà',
            thCL: 'เ-ีย',
            thBT: 'เ-ี่ย',
            origin: 'ေ + ယ် = ေဲ'
        },
        {
            letter: 'ောဲ',
            compound: 'ောဲ',
            compound2: 'ေဲါ',
            ipaCL: 'ʔuːa',
            ipaBT: 'ʔuːà',
            thCL: '-ัว',
            thBT: '-ั่ว',
            origin: 'ော + ယ် = ောဲ <br> ေါ + ယ် = ေဲါ'
        },
        {
            letter: 'ိုဲ',
            compound: 'ိုဲ',
            ipaCL: 'ʔəːj',
            ipaBT: 'ʔə̀ːj',
            thCL: 'เ-ย',
            thBT: 'เ-่ย',
            origin: 'ိ + ု + ယ် = ိုဲ'
        },
        {
            letter: 'ဵု',
            compound: 'ဵု',
            ipaCL: 'ʔɒː',
            ipaBT: 'ʔə̀ː',
            thCL: '-ฺอ',
            thBT: 'เ-่อ',
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
        return this.vowels.find(vowel => vowel.letter === letter);
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
    },
    plots() {
        return this.vowels;
        // This is used for plotting the vowels in the UI
        /*return this.vowels
            //.filter(vowel => !vowel.letter.includes('အ'))
            .map(vowel => {
                return {
                    letter: vowel.letter,
                    compound: vowel.compound,
                    ipaCL: vowel.ipaCL,
                    ipaBT: vowel.ipaBT,
                    thCL: vowel.thCL,
                    thBT: vowel.thBT,
                    soundCL: vowel.soundCL,
                    soundBT: vowel.soundBT,
                    example: vowel.example
                };
            });
            */
    }
}