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
                <tr v-for="(item, index) in consonants" :key="index">
                    <td :class="item.row === 'none' ? 'bg-secondary' : 'bg-light'">
                        <span>{{ index < 5 ? `row ${index + 1}` : '-' }}</span>
                    </td>
                    <td v-for="(consonant, cIndex) in item.rows" :key="cIndex">
                        <div>
                            <span class="fs-3 fw-bold">{{ consonant.letter }}</span>
                            <span v-if="consonant.tone == 'clear'"
                                class="ms-2 badge rounded-pill text-bg-light text-primary fw-bold">CL</span>
                            <span v-if="consonant.tone == 'breathy'"
                                class="ms-2 badge rounded-pill text-bg-light text-danger fw-bold">BT</span>
                        </div>
                        <button class="mt-2 btn btn-sm btn-outline-success py-0 px-1"
                            @click="pronouceConsonant(consonant)">
                            🔊 {{ consonant.ipa || 'N/A' }}
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
import monAlphabets from '@/models/mon-alphabets';

export default {
    name: 'CompConsonantTable',
    data() {
        return {
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            consonants: monAlphabets.consonants,
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
            console.log(`Pronunciation: ${consonant.ipa}`);
            const audio = new Audio(consonant.sound);
            audio.play().catch(err => {
                console.error('Error playing sound: ', err);
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