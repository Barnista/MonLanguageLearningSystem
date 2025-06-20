<template>
    <div id="compound-consonant-table" class="compound-consonant-table">
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
                <tr v-for="(item, index) in compounds" :key="index">
                    <td class="fs-5">{{ index + 1 }}</td>
                    <td class="fw-bold fs-4">{{ item.letter }}</td>
                    <td class="fw-bold fs-4">{{ item.compound }}</td>
                    <td class="fs-5">{{ item.example }}</td>
                    <td class="fs-5">/{{ item.exampleIPA }}/</td>
                </tr>
            </tbody>
        </table>

        <div v-for="(compound, index) in compounds" :key="index" class="mt-4">
            <h3 class="text-start">
                {{ index + 1 }}. {{ compound.letter }} → {{ compound.compound }}
                <button class="ms-2 btn btn-outline-secondary"> 🔊 /{{ compound.ipa || 'N/A' }}/ </button>
            </h3>
            <div class="row">
                <div class="col-12 col-md-8 col-lg-9 col-xl-10 text-start mb-3">
                    <span class="fw-bold fs-5">{{ compound.compoundWith.length }} consonants</span> can be compound with
                    <span class="fw-bold fs-5">{{ compound.compound }}</span> including:
                    <span class="fw-bold fs-5">{{ compound.compoundWith.join(', ') }}</span>.
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-end mb-3">
                    <select v-model="compound.selected"
                        class="form-select text-success w-full fs-5 fw-bold text-center">
                        <option value="" selected>try consonant</option>
                        <option v-for="item in compound.compoundWith" :key="item" :value="item">
                            {{ item }}{{ compound.compound }} ({{ isBreathyConsonant(item) ? 'BT' : 'CL' }})
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
                    <tr v-for="(row, index) in vowels" :key="index">
                        <td v-for="(vowel, cIndex) in row" :key="cIndex">
                            <div>
                                <span class="fs-3 fw-bold">
                                    {{ compound.selected }}{{ compound.compound }}{{ vowel.compound }}
                                </span>
                            </div>
                            <div class="mt-2">
                                <span class="text-muted">
                                    /{{ craftWord(compound.selected, compound.compound, vowel.compound).ipa || 'N/A' }}/
                                </span>
                                <br>
                                <span v-if="craftWord(compound.selected, compound.compound, vowel.compound).ipa2"
                                    class="text-muted">
                                    /{{ craftWord(compound.selected, compound.compound, vowel.compound).ipa2 || 'N/A'
                                    }}/
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import monAlphabets from '@/models/mon-alphabets';

export default {
    name: 'CompCompoundConsonantTable',
    data() {
        return {
            compounds: monAlphabets.getAllCompoundConsonants(),
            vowels: [
                monAlphabets.vowels.slice(0, 6), // Row 1
                monAlphabets.vowels.slice(6, 12), // Row 2
            ],
        };
    },
    methods: {
        isBreathyConsonant(letter) {
            return monAlphabets.isBreathyConsonant(letter);
        },
        craftWord(consonant, compound, vowel) {
            return monAlphabets.craftWord(consonant, compound, vowel, null);
        }
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