<template>
    <div class="compound-consonant-table container">
        <h2>Compound Consonants</h2>
        <p>Compound consonants are formed by combining two consonants. They are used to create specific sounds in the
            Mon language. There are 11 compound consonants including:</p>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Consonant</th>
                    <th>Compound symbol</th>
                    <th>Example</th>
                    <th>Pronunciation</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in compoundConsonants" :key="index">
                    <td class="fs-5">{{ index + 1 }}</td>
                    <td class="fw-bold fs-4">{{ item.consonant }}</td>
                    <td class="fw-bold fs-4">{{ item.compound }}</td>
                    <td class="fs-5">{{ item.example }}</td>
                    <td class="fs-5">/{{ item.exampleIPA }}/</td>
                </tr>
            </tbody>
        </table>

        <div v-for="(compound, index) in compoundConsonants" :key="index" class="mt-4">
            <h3 class="text-start">
                {{ index + 1 }}. {{ compound.consonant }} → {{ compound.compound }}
                <button class="ms-2 btn btn-outline-secondary"> 🔊 /{{ compound.ipa || 'N/A' }}/ </button>
            </h3>
            <div class="row">
                <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                    <span class="fw-bold fs-5">{{ compound.compoundWith.length }} consonants</span> can be compound with
                    {{ compound.compound }} including:
                    <span class="fw-bold fs-5">{{ compound.compoundWith.join(', ') }}</span>.
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                    <select v-model="compound.selected"
                        class="form-select text-success w-full fs-5 fw-bold text-center">
                        <option value="" selected>try consonant</option>
                        <option v-for="item in compound.compoundWith" :key="item" :value="item">
                            {{ item }}{{ compound.compound }}
                        </option>
                    </select>
                </div>
            </div>

            <table class="my-2">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                    </tr>
                    <tr v-for="(item, index) in alphabets2" :key="index">
                        <td v-for="(vowel, cIndex) in item.vowels" :key="cIndex">
                            <div>
                                <span class="fs-3 fw-bold">{{ compound.selected }}{{ compound.compound }}{{
                                    vowel.letter }}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompCompoundCosonantTable',
    data() {
        return {
            compoundConsonants: [
                {
                    consonant: 'ၚ',
                    ipa: 'ŋɛ̤ˀ',
                    compound: '္ၚ',
                    example: 'က + -္ၚ + = က္ၚ',
                    exampleIPA: 'kəŋɑ̆',
                    compoundWith: ['က', 'တ', 'ဒ', 'ပ', 'ဗ', 'မ', 'လ', 'သ', 'အ'],
                    selected: 'က'
                },
                {
                    consonant: 'ည',
                    ipa: 'ɲɑ̆',
                    compound: '္ည',
                    example: 'က + -္ည + = က္ည',
                    exampleIPA: 'kəɲɑ̆',
                    compoundWith: ['က', 'ဂ', 'ဒ', 'ပ'],
                    selected: 'က'
                },
                {
                    consonant: 'ဍ',
                    ipa: 'ɗɑ̆',
                    compound: '္ဍ',
                    example: 'က + -္ဍ + = က္ဍ',
                    exampleIPA: 'kəɗɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'သ'],
                    selected: 'က'
                },
                {
                    consonant: 'န',
                    ipa: 'nɑ̆',
                    compound: 'ၞ',
                    example: 'က + -ၞ + = ကၞ',
                    exampleIPA: 'kənɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'မ',
                    ipa: 'mɑ̆',
                    compound: 'ၟ',
                    example: 'က + -ၟ + = ကၟ',
                    exampleIPA: 'kəmɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'ယ',
                    ipa: 'jɑ̆',
                    compound: 'ျ',
                    example: 'က + -ျ + = ကျ',
                    exampleIPA: 'kyɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'ရ',
                    ipa: 'rɑ̆',
                    compound: 'ြ',
                    example: 'က + -ြ + = ကြ',
                    exampleIPA: 'krɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'လ',
                    ipa: 'lɑ̆',
                    compound: 'ၠ',
                    example: 'က + -ၠ + = ကၠ',
                    exampleIPA: 'klɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'ဝ',
                    ipa: 'wɑ̆',
                    compound: 'ွ',
                    example: 'က + -ွ + = ကွ',
                    exampleIPA: 'kwɑ̆',
                    compoundWith: ['က', 'ခ', 'စ', 'ပ', 'ဖ', 'တ', 'ထ', 'ဒ', 'ပ', 'ဖ', 'ဗ', 'မ', 'သ', 'လ'],
                    selected: 'က'
                },
                {
                    consonant: 'ၜ',
                    ipa: 'pɑ̆',
                    compound: '္ၜ',
                    example: 'က + -္ၜ = က္ၜ',
                    exampleIPA: 'kəpɑ̆',
                    compoundWith: ['က', 'စ', 'တ', 'ထ', 'ဗ'],
                    selected: 'က'
                },
                {
                    consonant: 'ဟ',
                    ipa: 'hɑ̆',
                    compound: 'ှ',
                    example: 'ည + -ှ = ညှ',
                    exampleIPA: 'hnɑ̆',
                    compoundWith: ['ည', 'ဏ', 'မ', 'န', 'ယ', 'ရ', 'လ', 'ဝ'],
                    selected: 'ည'
                }
            ],
            alphabets2: [
                {
                    row: '1',
                    type: 'consonant diacritic',
                    vowels: [
                        { column: '1', letter: '', letter2: '', ipaCL: 'aˀ', ipaBT: 'ɛ̀ˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column1_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column1_BT.mp3'), example: '' },
                        {
                            column: '2',
                            letter: 'ာ', letter2: 'ါ',
                            ipaCL: 'a', ipaBT: 'ɛ̀a',
                            sound: require('@/assets/sounds/alphabets/vowelRow1Column2_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column2_BT.mp3'),
                            example: '',
                            exception: {
                                id: 'exception-1',
                                text: '"ါ" is used after certain consonants including:',
                                consonants1: ['ခ', 'ဂ', 'ဇ', 'ဎ'],
                                consonants2: ['ဒ', 'ပ', 'ဝ', 'ၜ']
                            }
                        },
                        { column: '3', letter: 'ိ', letter2: '', ipaCL: 'ɔeˀ', ipaBT: 'ìˀ', ipaCL2: 'ɔɪ', sound: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column3_CL2.mp3'), example: '' },
                        { column: '4', letter: 'ဳ', letter2: '', ipaCL: 'i', ipaBT: 'ì', ipaCL2: 'aɪ', sound: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'), example: '' },
                        { column: '5', letter: 'ု', letter2: '', ipaCL: 'aoˀ', ipaBT: 'ùˀ', ipaCL2: 'ùˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column5_CL2.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column5_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column5_CL.mp3'), example: '' },
                        { column: '6', letter: 'ူ', letter2: '', ipaCL: 'ao', ipaBT: 'ù', ipaCL2: 'ùˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column6_CL2.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column6_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column6_CL.mp3'), example: '' }
                    ]
                },
                {
                    row: '2',
                    type: 'consonant diacritic',
                    vowels: [
                        { column: '1', letter: 'ေ', letter2: '', ipaCL: 'e', ipaBT: 'è', sound: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'), example: '' },
                        { column: '2', letter: 'ဲ', letter2: '', ipaCL: 'oa', ipaBT: 'òa', sound: require('@/assets/sounds/alphabets/vowelRow2Column2_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column2_BT.mp3'), example: '' },
                        {
                            column: '3',
                            letter: 'ော', letter2: 'ေါ',
                            ipaCL: 'ao', ipaBT: 'ɜ̀',
                            sound: require('@/assets/sounds/alphabets/vowelRow2Column3_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column3_BT.mp3'),
                            example: '',
                            exception: {
                                id: 'exception-2',
                                text: '"ေါ" is used after certain consonants including:',
                                consonants1: ['ခ', 'ဂ', 'ဇ', 'ဎ'],
                                consonants2: ['ဒ', 'ပ', 'ဝ', 'ၜ']
                            }
                        },
                        { column: '4', letter: 'ဴ', letter2: '', ipaCL: 'ao', ipaBT: 'ɛ̀a', sound: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'), example: '' },
                        { column: '5', letter: 'ံ', letter2: '', ipaCL: 'ɔˀ', ipaBT: 'òˀ', sound: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'), example: '' },
                        { column: '6', letter: 'း', letter2: '', ipaCL: 'ah', ipaBT: 'ɛ̀h', sound: require('@/assets/sounds/alphabets/vowelRow2Column6_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column6_BT.mp3'), example: '' }
                    ]
                },
            ]
        };
    }


};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background: #f5f5f5;
}
</style>