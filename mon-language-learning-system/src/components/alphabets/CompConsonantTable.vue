<template>
    <div class="consonent-table container">
        <h2>Consonants</h2>
        <p class="text-muted">The Mon alphabet contains 35 consonants (including a zero consonant), as follows:</p>

        <div class="mt-4 d-flex">
            <div style="width: 24px; height: 24px;" class="bg-secondary"></div>
            <span style="margin-left: 8px;">= zero consonants </span>
            <div class="ms-2">
                <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                <span> = clear consonants</span>
            </div>
            <div class="ms-2">
                <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                <span> = breathy consonants</span>
            </div>
        </div>
        <table class="my-2">
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="bg-light"></td>
                    <td class="bg-light">column 1</td>
                    <td class="bg-light">column 2</td>
                    <td class="bg-light">column 3</td>
                    <td class="bg-light">column 4</td>
                    <td class="bg-light">column 5</td>
                </tr>
                <tr v-for="(item, index) in alphabets" :key="index">
                    <td :class="item.row === 'none' ? 'bg-secondary' : 'bg-light'">
                        <span>{{ index < 5 ? `row ${index + 1}` : '-' }}</span>
                    </td>
                    <td v-for="(consonant, cIndex) in item.consonants" :key="cIndex">
                        <div>
                            <span class="fs-3 fw-bold">{{ consonant.letter }}</span>
                            <span v-if="consonant.tone == 'clear'" class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            <span v-if="consonant.tone == 'breathy'" class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                        </div>
                        <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                            @click="pronouceConsonant(consonant)">
                            🔊 {{ consonant.pronunciation || 'N/A' }}
                        </button>
                        <button v-if="copiedIndex == index && copiedCIndex == cIndex"
                            class="mt-2 ms-2 btn btn-sm btn-light py-0 px-1 disabled">
                            ✅ copied
                        </button>
                        <button v-else class="mt-2 ms-2 btn btn-sm btn-outline-secondary py-0 px-1"
                            @click="copyToClipboard(consonant.letter, index, cIndex)">
                            📋 copy
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Note: Some letters may not have a pronunciation or example.</p>
    </div>
</template>

<script>
export default {
    name: 'CompConsonantTable',
    data() {
        return {
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            alphabets: [
                {
                    row: '1',
                    consonants: [
                        { column: '1', letter: 'က', tone: 'clear', pronunciation: 'kaˀ', sound: require('@/assets/sounds/alphabets/row1Column1.mp3'), example: 'ကလေး (child)' },
                        { column: '2', letter: 'ခ', tone: 'clear', pronunciation: 'kʰaˀ', sound: require('@/assets/sounds/alphabets/row1Column2.mp3'), example: 'ခေါင်း (head)' },
                        { column: '3', letter: 'ဂ', tone: 'breathy', pronunciation: 'kɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row1Column3.mp3'), example: 'ဂျာ (jar)' },
                        { column: '4', letter: 'ဃ', tone: 'breathy', pronunciation: 'kʰɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row1Column4.mp3'), example: 'ဃာ (gha)' },
                        { column: '5', letter: 'ၚ', tone: 'breathy', pronunciation: 'ŋɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row1Column5.mp3'), example: 'ငါး (fish)' }
                    ]
                },
                {
                    row: '2',
                    consonants: [
                        { column: '1', letter: 'စ', tone: 'clear', pronunciation: 'caˀ', sound: require('@/assets/sounds/alphabets/row2Column1.mp3'), example: 'စကား (word)' },
                        { column: '2', letter: 'ဆ', tone: 'clear', pronunciation: 'cʰaˀ', sound: require('@/assets/sounds/alphabets/row2Column2.mp3'), example: 'ဆေး (medicine)' },
                        { column: '3', letter: 'ဇ', tone: 'breathy', pronunciation: 'cɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row2Column3.mp3'), example: 'ဇာတ် (story)' },
                        { column: '4', letter: 'ၛ', tone: 'breathy', pronunciation: 'cʰɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row2Column4.mp3'), example: 'ဈေး (market)' },
                        { column: '5', letter: 'ည', tone: 'breathy', pronunciation: 'ɲɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row2Column5.mp3'), example: 'ညီ (brother)' }
                    ]
                },
                {
                    row: '3',
                    consonants: [
                        { column: '1', letter: 'ဋ', tone: 'clear', pronunciation: 'taˀ', sound: require('@/assets/sounds/alphabets/row3Column1.mp3'), example: 'ဋီ (tī)' },
                        { column: '2', letter: 'ဌ', tone: 'clear', pronunciation: 'tʰaˀ', sound: require('@/assets/sounds/alphabets/row3Column2.mp3'), example: 'ဌာန (department)' },
                        { column: '3', letter: 'ဍ', tone: 'clear', pronunciation: 'ɗaˀ', sound: require('@/assets/sounds/alphabets/row3Column3.mp3'), example: 'ဍာ (dā)' },
                        { column: '4', letter: 'ဎ', tone: 'breathy', pronunciation: 'tʰɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row3Column4.mp3'), example: 'ဎာ (dhā)' },
                        { column: '5', letter: 'ဏ', tone: 'clear', pronunciation: 'naˀ', sound: require('@/assets/sounds/alphabets/row3Column5.mp3'), example: 'ဏီ (ni)' }
                    ]
                },
                {
                    row: '4',
                    consonants: [
                        { column: '1', letter: 'တ', tone: 'clear', pronunciation: 'taˀ', sound: require('@/assets/sounds/alphabets/row4Column1.mp3'), example: 'တောင် (mountain)' },
                        { column: '2', letter: 'ထ', tone: 'clear', pronunciation: 'tʰaˀ', sound: require('@/assets/sounds/alphabets/row4Column2.mp3'), example: 'ထမင်း (rice)' },
                        { column: '3', letter: 'ဒ', tone: 'breathy', pronunciation: 'tɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row4Column3.mp3'), example: 'ဒေါ် (aunt)' },
                        { column: '4', letter: 'ဓ', tone: 'breathy', pronunciation: 'tʰɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row4Column4.mp3'), example: 'ဓါတ် (element)' },
                        { column: '5', letter: 'န', tone: 'breathy', pronunciation: 'nɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row4Column5.mp3'), example: 'နွား (cow)' }
                    ]
                },
                {
                    row: '5',
                    consonants: [
                        { column: '1', letter: 'ပ', tone: 'clear', pronunciation: 'paˀ', sound: require('@/assets/sounds/alphabets/row5Column1.mp3'), example: 'ပန်း (flower)' },
                        { column: '2', letter: 'ဖ', tone: 'clear', pronunciation: 'pʰaˀ', sound: require('@/assets/sounds/alphabets/row5Column2.mp3'), example: 'ဖုန်း (phone)' },
                        { column: '3', letter: 'ဗ', tone: 'breathy', pronunciation: 'pɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row5Column3.mp3'), example: 'ဗိုလ် (general)' },
                        { column: '4', letter: 'ဘ', tone: 'breathy', pronunciation: 'pʰɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row5Column4.mp3'), example: 'ဘုရား (Buddha)' },
                        { column: '5', letter: 'မ', tone: 'breathy', pronunciation: 'mɛ̤ˀ', sound: require('@/assets/sounds/alphabets/row5Column5.mp3'), example: 'မိသားစု (family)' }
                    ]
                },
                {
                    row: 'none',
                    consonants: [
                        { column: '1', letter: 'ယ', tone: 'breathy', pronunciation: 'jɛ̤ˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn1.mp3'), example: 'ယာဉ် (vehicle)' },
                        { column: '2', letter: 'ရ', tone: 'breathy', pronunciation: 'rɛ̤ˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn2.mp3'), example: 'ရေ (water)' },
                        { column: '3', letter: 'လ', tone: 'breathy', pronunciation: 'lɛ̤ˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn3.mp3'), example: 'လမ်း (road)' },
                        { column: '4', letter: 'ဝ', tone: 'breathy', pronunciation: 'wɛ̤ˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn4.mp3'), example: 'ဝါး (bamboo)' },
                        { column: '5', letter: 'သ', tone: 'clear', pronunciation: 'saˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn5.mp3'), example: 'သစ်သား (wood)' }
                    ]
                },
                {
                    row: 'none',
                    consonants: [
                        { column: '6', letter: 'ဟ', tone: 'clear', pronunciation: 'haˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn6.mp3'), example: 'ဟင်း (dish)' },
                        { column: '7', letter: 'ဠ', tone: 'clear', pronunciation: 'laˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn7.mp3'), example: 'ဠိ (lī)' },
                        { column: '8', letter: 'ၜ', tone: 'clear', pronunciation: 'ɓaˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn8.mp3'), example: '' },
                        { column: '9', letter: 'အ', tone: 'clear', pronunciation: 'ʔaˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn9.mp3'), example: 'အိမ် (house)' },
                        { column: '10', letter: 'ၝ', tone: 'breathy', pronunciation: 'ɓɛ̤ˀ', sound: require('@/assets/sounds/alphabets/rowNoneColumn10.mp3'), example: '' }
                    ]
                }
                // Add more letters as needed
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
        pronouceConsonant(consonant) {
            console.log(`Pronunciation: ${consonant.pronunciation}`);
            const audio = new Audio(consonant.sound);
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