<template>
    <div class="alphabet-table container">
        <h2>The Mon Alphabet Table</h2>
        <p class="text-muted">This table displays the Mon consonants along with their pronunciations and examples.</p>


        <div class="mt-4 d-flex">
            <div style="width: 24px; height: 24px;" class="bg-secondary"></div>
            <span style="margin-left: 8px;">= none row-column </span>
            <div class="ms-2">
                <span class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">LT</span>
                <span> = light tone</span>
            </div>
            <div class="ms-2">
                <span class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">HV</span>
                <span> = heavy tone</span>
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
                            <span v-if="consonant.tone == 'light'" class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">LT</span>
                            <span v-if="consonant.tone == 'heavy'" class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">HV</span>
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
    name: 'CompAlphabetTable',
    data() {
        return {
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            alphabets: [
                {
                    row: '1',
                    consonants: [
                        { column: '1', letter: 'က', tone: 'light', pronunciation: 'ka', sound: require('@/assets/sounds/alphabets/row1Column1.mp3'), example: 'ကလေး (child)' },
                        { column: '2', letter: 'ခ', tone: 'light', pronunciation: 'kha', sound: require('@/assets/sounds/alphabets/row1Column2.mp3'), example: 'ခေါင်း (head)' },
                        { column: '3', letter: 'ဂ', tone: 'heavy', pronunciation: 'gai/gea', sound: require('@/assets/sounds/alphabets/row1Column3.mp3'), example: 'ဂျာ (jar)' },
                        { column: '4', letter: 'ဃ', tone: 'heavy', pronunciation: 'khai/khea', sound: require('@/assets/sounds/alphabets/row1Column4.mp3'), example: 'ဃာ (gha)' },
                        { column: '5', letter: 'င', tone: 'heavy', pronunciation: 'nga', sound: require('@/assets/sounds/alphabets/row1Column5.mp3'), example: 'ငါး (fish)' }
                    ]
                },
                {
                    row: '2',
                    consonants: [
                        { column: '1', letter: 'စ', tone: 'light', pronunciation: 'zha', sound: require('@/assets/sounds/alphabets/row2Column1.mp3'), example: 'စကား (word)' },
                        { column: '2', letter: 'ဆ', tone: 'light', pronunciation: 'sha', sound: require('@/assets/sounds/alphabets/row2Column2.mp3'), example: 'ဆေး (medicine)' },
                        { column: '3', letter: 'ဇ', tone: 'heavy', pronunciation: 'zai/zhea', sound: require('@/assets/sounds/alphabets/row2Column3.mp3'), example: 'ဇာတ် (story)' },
                        { column: '4', letter: 'ဈ', tone: 'heavy', pronunciation: 'chai/chea', sound: require('@/assets/sounds/alphabets/row2Column4.mp3'), example: 'ဈေး (market)' },
                        { column: '5', letter: 'ည', tone: 'heavy', pronunciation: 'nyai/nyea', sound: require('@/assets/sounds/alphabets/row2Column5.mp3'), example: 'ညီ (brother)' }
                    ]
                },
                {
                    row: '3',
                    consonants: [
                        { column: '1', letter: 'ဋ', tone: 'light', pronunciation: 'ta', sound: require('@/assets/sounds/alphabets/row3Column1.mp3'), example: 'ဋီ (tī)' },
                        { column: '2', letter: 'ဌ', tone: 'light', pronunciation: 'hta', sound: require('@/assets/sounds/alphabets/row3Column2.mp3'), example: 'ဌာန (department)' },
                        { column: '3', letter: 'ဍ', tone: 'light', pronunciation: 'da', sound: require('@/assets/sounds/alphabets/row3Column3.mp3'), example: 'ဍာ (dā)' },
                        { column: '4', letter: 'ဎ', tone: 'heavy', pronunciation: 'thai/thea', sound: require('@/assets/sounds/alphabets/row3Column4.mp3'), example: 'ဎာ (dhā)' },
                        { column: '5', letter: 'ဏ', tone: 'light', pronunciation: 'na', sound: require('@/assets/sounds/alphabets/row3Column5.mp3'), example: 'ဏီ (ni)' }
                    ]
                },
                {
                    row: '4',
                    consonants: [
                        { column: '1', letter: 'တ', tone: 'light', pronunciation: 'ta', sound: require('@/assets/sounds/alphabets/row4Column1.mp3'), example: 'တောင် (mountain)' },
                        { column: '2', letter: 'ထ', tone: 'light', pronunciation: 'hta', sound: require('@/assets/sounds/alphabets/row4Column2.mp3'), example: 'ထမင်း (rice)' },
                        { column: '3', letter: 'ဒ', tone: 'heavy', pronunciation: 'dai/dea', sound: require('@/assets/sounds/alphabets/row4Column3.mp3'), example: 'ဒေါ် (aunt)' },
                        { column: '4', letter: 'ဓ', tone: 'heavy', pronunciation: 'dhai/dhea', sound: require('@/assets/sounds/alphabets/row4Column4.mp3'), example: 'ဓါတ် (element)' },
                        { column: '5', letter: 'န', tone: 'heavy', pronunciation: 'nai/nea', sound: require('@/assets/sounds/alphabets/row4Column5.mp3'), example: 'နွား (cow)' }
                    ]
                },
                {
                    row: '5',
                    consonants: [
                        { column: '1', letter: 'ပ', tone: 'light', pronunciation: 'pa', sound: require('@/assets/sounds/alphabets/row5Column1.mp3'), example: 'ပန်း (flower)' },
                        { column: '2', letter: 'ဖ', tone: 'light', pronunciation: 'pha', sound: require('@/assets/sounds/alphabets/row5Column2.mp3'), example: 'ဖုန်း (phone)' },
                        { column: '3', letter: 'ဗ', tone: 'heavy', pronunciation: 'bai/bea', sound: require('@/assets/sounds/alphabets/row5Column3.mp3'), example: 'ဗိုလ် (general)' },
                        { column: '4', letter: 'ဘ', tone: 'heavy', pronunciation: 'pai/pea', sound: require('@/assets/sounds/alphabets/row5Column4.mp3'), example: 'ဘုရား (Buddha)' },
                        { column: '5', letter: 'မ', tone: 'heavy', pronunciation: 'mai/mea', sound: require('@/assets/sounds/alphabets/row5Column5.mp3'), example: 'မိသားစု (family)' }
                    ]
                },
                {
                    row: 'none',
                    consonants: [
                        { column: '1', letter: 'ယ', tone: 'heavy', pronunciation: 'yai/yea', sound: require('@/assets/sounds/alphabets/rowNoneColumn1.mp3'), example: 'ယာဉ် (vehicle)' },
                        { column: '2', letter: 'ရ', tone: 'heavy', pronunciation: 'rai/rea', sound: require('@/assets/sounds/alphabets/rowNoneColumn2.mp3'), example: 'ရေ (water)' },
                        { column: '3', letter: 'လ', tone: 'heavy', pronunciation: 'lai/lea', sound: require('@/assets/sounds/alphabets/rowNoneColumn3.mp3'), example: 'လမ်း (road)' },
                        { column: '4', letter: 'ဝ', tone: 'heavy', pronunciation: 'wai/wea', sound: require('@/assets/sounds/alphabets/rowNoneColumn4.mp3'), example: 'ဝါး (bamboo)' },
                        { column: '5', letter: 'သ', tone: 'light', pronunciation: 'thza', sound: require('@/assets/sounds/alphabets/rowNoneColumn5.mp3'), example: 'သစ်သား (wood)' }
                    ]
                },
                {
                    row: 'none',
                    consonants: [
                        { column: '6', letter: 'ဟ', tone: 'light', pronunciation: 'ha', sound: require('@/assets/sounds/alphabets/rowNoneColumn6.mp3'), example: 'ဟင်း (dish)' },
                        { column: '7', letter: 'ဠ', tone: 'light', pronunciation: 'la', sound: require('@/assets/sounds/alphabets/rowNoneColumn7.mp3'), example: 'ဠိ (lī)' },
                        { column: '8', letter: 'ၜ', tone: 'light', pronunciation: 'ba', sound: require('@/assets/sounds/alphabets/rowNoneColumn8.mp3'), example: '' },
                        { column: '9', letter: 'အ', tone: 'light', pronunciation: 'aa', sound: require('@/assets/sounds/alphabets/rowNoneColumn9.mp3'), example: 'အိမ် (house)' },
                        { column: '10', letter: 'ၝ', tone: 'heavy', pronunciation: 'bai/bea', sound: require('@/assets/sounds/alphabets/rowNoneColumn10.mp3'), example: '' }
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