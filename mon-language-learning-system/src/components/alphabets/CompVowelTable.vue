<template>
    <div class="vowel-table container">
        <h2>Vowels</h2>
        <p class="text-muted">This table displays the Mon vowels along with their pronunciations and examples.</p>
        <div class="mt-4">
            <h3 class="text-start">1. Syllable-initial letter</h3>
            <p class="text-start text-muted">12 letters with 12 sounds. These letters are used at the beginning of
                syllables.</p>
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
                    <tr v-for="(item, index) in alphabets" :key="index">
                        <td v-for="(vowel, cIndex) in item.vowels" :key="cIndex">
                            <div>
                                <span class="fs-3 fw-bold">{{ vowel.letter }}</span>
                            </div>
                            <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL(vowel)">
                                🔊 {{ `/${vowel.ipaCL}/` || 'N/A' }}
                            </button>
                            <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                                class="mt-2 ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                                ✅ copied
                            </button>
                            <button v-else class="mt-2 ms-2 btn btn-sm btn-outline-secondary py-0 px-1"
                                @click="copyToClipboard(vowel.letter, index, cIndex)">
                                📋 copy
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-4">
            <h3 class="text-start">2. Consonant diacritic</h3>
            <p class="text-start text-muted">11 letters with 12 sounds. These letters are used after consonants to form
                syllables.</p>
            <div class="d-flex">
                <div class="">
                    <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                    <span> = value after clear consonants</span>
                </div>
                <div class="ms-2">
                    <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                    <span> = value after breathy consonants</span>
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
                                <span class="fs-3 fw-bold">{{ vowel.letter }}</span>
                                <span v-if="vowel.letter2" class="fw-bold text-muted"><br>(or {{ vowel.letter2
                                    }})<br><small><a :href="`#${vowel.exception.id}`">(see
                                            exceptions)</a></small></span>
                            </div>
                            <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL(vowel)">
                                🔊 {{ `/${vowel.ipaCL}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </button>
                            <button v-if="vowel.ipaCL2" class="mt-2 ms-1 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelCL2(vowel)">
                                🔊 {{ `/${vowel.ipaCL2}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            </button>
                            <button class="mt-2 ms-1 btn btn-sm btn-outline-success py-0 px-1"
                                @click="pronouceVowelBT(vowel)">
                                🔊 {{ `/${vowel.ipaBT}/` || 'N/A' }} <span
                                    class="badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                            </button>
                            <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                                class="mt-2 ms-1 btn btn-sm btn-light py-0 px-1 disabled">
                                ✅ copied
                            </button>
                            <button v-else class="mt-2 ms-1 btn btn-sm btn-outline-secondary py-0 px-1"
                                @click="copyToClipboard(vowel.letter, index, cIndex)">
                                📋 copy
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-for="(item, index) in alphabets2" :key="index">
                <div v-for="(vowel, cIndex) in item.vowels" :key="cIndex">
                    <div v-if="vowel.exception" class="mt-4">
                        <h4 class="text-start" :id="vowel.exception.id">
                            Exception #{{ cIndex }}: {{ vowel.letter }} → <span class="fw-bold">{{ vowel.letter2
                                }}</span>
                        </h4>
                        <p class="text-start text-muted">
                            {{ vowel.exception.text }}
                        </p>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td v-for="(consonant, cIndex) in vowel.exception.consonants1" :key="cIndex"
                                        class="fs-4">
                                        {{ consonant }} → <span class="fw-bold">{{ `${consonant}${vowel.letter2}`
                                            }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td v-for="(consonant, cIndex) in vowel.exception.consonants2" :key="cIndex"
                                        class="fs-4">
                                        {{ consonant }} → <span class="fw-bold">{{ `${consonant}${vowel.letter2}`
                                            }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompVowelTable',
    data() {
        return {
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            alphabets: [
                {
                    row: '1',
                    type: 'syllable-initial letter',
                    vowels: [
                        { column: '1', letter: 'အ', ipaCL: 'aˀ', ipaBT: 'ɛ̀ˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column1_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column1_BT.mp3'), example: '' },
                        { column: '2', letter: 'အာ', ipaCL: 'a', ipaBT: 'ɛ̀a', sound: require('@/assets/sounds/alphabets/vowelRow1Column2_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column2_BT.mp3'), example: '' },
                        { column: '3', letter: 'ဣ', ipaCL: 'ɔeˀ', ipaBT: 'ìˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'), example: '' },
                        { column: '4', letter: 'ဣဳ', ipaCL: 'i', ipaBT: 'ì', sound: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'), example: '' },
                        { column: '5', letter: 'ဥ', ipaCL: 'ùˀ', ipaBT: 'ùˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column5_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column5_BT.mp3'), example: '' },
                        { column: '6', letter: 'ဥူ', ipaCL: 'ù', ipaBT: 'ù', sound: require('@/assets/sounds/alphabets/vowelRow1Column6_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column6_BT.mp3'), example: '' }
                    ]
                },
                {
                    row: '2',
                    type: 'syllable-initial letter',
                    vowels: [
                        { column: '1', letter: 'ဨ', ipaCL: 'e', ipaBT: 'è', sound: require('@/assets/sounds/alphabets/vowelRow2Column1_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column1_BT.mp3'), example: '' },
                        { column: '2', letter: 'အဲ', ipaCL: 'oa', ipaBT: 'òa', sound: require('@/assets/sounds/alphabets/vowelRow2Column2_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column2_BT.mp3'), example: '' },
                        { column: '3', letter: 'ဩ', ipaCL: 'ao', ipaBT: 'ɜ̀', sound: require('@/assets/sounds/alphabets/vowelRow2Column3_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column3_BT.mp3'), example: '' },
                        { column: '4', letter: 'အဴ‌‍‍', ipaCL: 'ao', ipaBT: 'ɛ̀a', sound: require('@/assets/sounds/alphabets/vowelRow2Column4_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column4_BT.mp3'), example: '' },
                        { column: '5', letter: 'အံ‌‍‍', ipaCL: 'ɔˀ', ipaBT: 'òˀ', sound: require('@/assets/sounds/alphabets/vowelRow2Column5_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column5_BT.mp3'), example: '' },
                        { column: '6', letter: 'အး', ipaCL: 'ah', ipaBT: 'ɛ̀h', sound: require('@/assets/sounds/alphabets/vowelRow2Column6_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow2Column6_BT.mp3'), example: '' }
                    ]
                },
            ],
            alphabets2: [
                {
                    row: '1',
                    type: 'consonant diacritic',
                    vowels: [
                        { column: '1', letter: '-', letter2: '', ipaCL: 'aˀ', ipaBT: 'ɛ̀ˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column1_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column1_BT.mp3'), example: '' },
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
                        { column: '3', letter: 'ိ', letter2: '', ipaCL: 'ɔeˀ', ipaBT: 'ìˀ', ipaCL2: 'ɔeˀ', sound: require('@/assets/sounds/alphabets/vowelRow1Column3_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column3_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column3_CL2.mp3'), example: '' },
                        { column: '4', letter: 'ဳ', letter2: '', ipaCL: 'i', ipaBT: 'ì', ipaCL2: 'i', sound: require('@/assets/sounds/alphabets/vowelRow1Column4_CL.mp3'), sound2: require('@/assets/sounds/alphabets/vowelRow1Column4_BT.mp3'), sound3: require('@/assets/sounds/alphabets/vowelRow1Column4_CL2.mp3'), example: '' },
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
        }
    },
    methods: {
        copyToClipboard(text, index, cIndex) {
            this.copiedIndex = index;
            this.copiedCIndex = cIndex;
            this.copiedText = text;
            navigator.clipboard.writeText(text).then(() => {
                //alert('Copied to clipboard: ' + text);
                setTimeout(() => {
                    this.copiedBtnIndex = null;
                    this.copiedText = '';
                }, 2000); // Clear after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        },
        pronouceVowelCL(vowel) {
            const audio = new Audio(vowel.sound);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelCL2(vowel) {
            const audio = new Audio(vowel.sound3);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelBT(vowel) {
            const audio = new Audio(vowel.sound2);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        }
    }
}
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