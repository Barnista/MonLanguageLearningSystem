<template>
    <div class="comp-text-analyst container">
        <div class="m-auto border rounded shadow" style="max-width: 800px;">
            <div class="bg-primary" style="height: 16px; border-top-left-radius: 4px; border-top-right-radius: 4px;"></div>
            <div class="py-4 px-4">
                <div class="mb-4">
                    <label for="monInput" class="form-label fw-bold h4">Enter a Mon Word:</label>
                    <div class="input-group">
                        <input id="monInput" v-model="text" @keyup.enter="analyseMonText(text)" type="text"
                            class="form-control form-control-lg" placeholder="Type Mon word here..." />
                        <button @click="analyseMonText(text)" type="submit" class="btn btn-primary btn-lg">
                            <i class="bi bi-arrow-return-right"></i>
                            Submit
                        </button>
                    </div>
                </div>
                <div>
                    <div class="mb-3 text-center">
                        <div class="fw-bold text-muted mb-2">Syllables ({{ syllables.length }}):</div>
                        <h1>
                            <span v-for="(letter, index) in syllables" :key="index">
                                <span href="#" class="h1 fw-bold text-primary">{{ letter }}</span>
                                <span v-if="index < (syllables.length - 1)" class="mx-1 text-muted">-</span>
                            </span>
                        </h1>
                        <div class="text-center">
                            <span class="fw-bold">IPA:</span>
                            <span class="fs-5 ms-2 text-muted">{{ ipa ? `/${ipa}/` : '/NaN/' }}</span>
                        </div>
                        <div class="text-center">
                            <span class="fw-bold">TH:</span>
                            <span class="fs-5 ms-2 text-muted">{{ th ? `/${th}/` : '/NaN/' }}</span>
                        </div>
                    </div>
                    <div class="text-muted">
                        <hr>
                        <span class="fw-bold">Deconstructed ({{ deconstructed.length }}):</span>
                        <span class="ms-2 text-muted">
                            {{ deconstructed }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import advancedAlphabets from '@/services/mon-library/alphabets/advanced-alphabets';

export default {
    name: 'CompTextAnalyst',
    data: () => {
        return {
            text: '',
            deconstructed: [],
            syllables: [],
            ipa: '',
            th: ''
        }
    },
    methods: {
        analyseMonText(text) {
            const result = advancedAlphabets.analyseText(text);
            this.syllables = result.syllables;
            this.deconstructed = result.deconstructs;
            this.ipa = result.ipa;
            this.th = result.th;
            console.log(result);
        },
        setText(text) {
            this.text = text;
            this.analyseMonText(text);
        }
    }
}
</script>