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
                    <tr>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                        <td class="bg-light"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in vowels" :key="index">
                        <td v-for="(vowel, cIndex) in row" :key="cIndex">
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
                    <tr v-for="(row, index) in vowels" :key="index">
                        <td v-for="(vowel, cIndex) in row" :key="cIndex">
                            <div>
                                <span class="fs-3 fw-bold">{{ vowel.compound || '-' }}</span>
                                <span v-if="vowel.compound2" class="fw-bold text-muted"><br>(or {{ vowel.compound2
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
                                @click="copyToClipboard(vowel.compound, index, cIndex)">
                                📋 copy
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-for="(row, index) in vowels" :key="index">
                <div v-for="(vowel, cIndex) in row" :key="cIndex">
                    <div v-if="vowel.exception" class="mt-4">
                        <h4 class="text-start" :id="vowel.exception.id">
                            Exception #{{ cIndex }}: {{ vowel.compound }} → <span class="fw-bold">{{ vowel.compound2
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
                                        {{ consonant }} → <span class="fw-bold">{{ `${consonant}${vowel.compound2}`
                                            }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td v-for="(consonant, cIndex) in vowel.exception.consonants2" :key="cIndex"
                                        class="fs-4">
                                        {{ consonant }} → <span class="fw-bold">{{ `${consonant}${vowel.compound2}`
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

import monAlphabets from '@/models/mon-alphabets';

export default {
    name: 'CompVowelTable',
    data() {
        return {
            copiedIndex: null,
            copiedCIndex: null,
            copiedText: '',
            vowels: [
                monAlphabets.vowels.slice(0, 6),
                monAlphabets.vowels.slice(6, 12)
            ],
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
            const audio = new Audio(vowel.soundCL);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelCL2(vowel) {
            const audio = new Audio(vowel.soundCL2);
            audio.play().catch(err => {
                console.error('Error playing sound:', err);
            });
        },
        pronouceVowelBT(vowel) {
            const audio = new Audio(vowel.soundBT);
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