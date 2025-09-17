<template>
    <div class="comp-get-start">
        <div class="mt-5">
            <h2>{{ langSet[lang || 'en'].getStartView.title }}</h2>
            <hr>
            <p v-html="langSet[lang || 'en'].getStartView.getStartDescription1"></p>
            <p v-html="langSet[lang || 'en'].getStartView.getStartDescription2"></p>
            <p v-html="langSet[lang || 'en'].getStartView.getStartDescription3"></p>
            <div class="text-end">
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/68957e70-cbcc-8006-8ce2-3a18a939ebe1'" :lang="'en'"
                    class="me-2" />
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/68957f05-b48c-8006-9380-4ae725a54d9f'" :lang="'th'"
                    class="me-2" />
            </div>
        </div>

        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].getStartView.historyTitle }}</h3>
            <hr>
            <p v-html="langSet[lang || 'en'].getStartView.historyDescription1"></p>
            <p v-html="langSet[lang || 'en'].getStartView.historyDescription2"></p>
            <p v-html="langSet[lang || 'en'].getStartView.historyDescription3"></p>
            <div class="text-end">
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/689575d9-1d44-8006-9029-42727d86a28f'" :lang="'en'"
                    class="me-2" />
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/689577e2-04dc-8006-8dc6-bc484e724711'" :lang="'th'"
                    class="me-2" />
            </div>
        </div>

        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].wordCraft.title }}</h3>
            <hr>
            <CompWordCraft ref="compWordCraft" class="mt-4" :lang="lang" />
        </div>

        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].textAnalyser.title2 }}</h3>
            <hr>
            <p v-html="langSet[lang || 'en'].textAnalyser.description2"></p>
            <CompTextAnalyser ref="compTextAnalyser" class="mt-4" :lang="lang" />
        </div>

        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].getStartView.scriptTitle }}</h3>
            <hr>
            <ul>
                <li v-html="langSet[lang || 'en'].getStartView.scriptItem1"></li>
                <li v-html="langSet[lang || 'en'].getStartView.scriptItem2"></li>
            </ul>
            <div class="row mt-3">
                <!--<div class="col-12 col-lg-6 mb-2">
                    <img src="@/assets/imgs/howto/d2-wordcraft-concept.jpg"
                        alt="A digital illustration showing a word crafting interface for language learning. The main focus is a virtual workspace where Mon and English letters are arranged to form words. Instructional text explains how to drag and drop letters to build words in Mon. The background is clean and modern, creating an inviting and educational atmosphere."
                        class="w-100 h-auto border rounded shadow mb-3">
                </div>
                <div class="col-12 col-lg-6 mb-2">
                    <ol class="fw-bold">
                        <li>{{ langSet[lang || 'en'].learnAlphabets.consonants }}</li>
                        <li>{{ langSet[lang || 'en'].learnAlphabets.compoundConsonants }}</li>
                        <li>{{ langSet[lang || 'en'].learnAlphabets.vowels }}</li>
                        <li>{{ langSet[lang || 'en'].learnAlphabets.finalConsonants }}</li>
                    </ol>
                </div>-->
            </div>
            <div class="text-end">
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/689590b5-8088-8006-bf83-4cc8bd64a809'" :lang="'en'"
                    class="me-2" />
                <ButtonAskChatGPT :href="'https://chatgpt.com/share/689590ff-f160-8006-8ff0-63138d8f794c'" :lang="'th'"
                    class="me-2" />
            </div>
        </div>

        <div class="mt-5">
            <h3>{{ langSet[lang || 'en'].getStartView.comparisonTitle }}</h3>
            <hr>
            <table class="table">
                <thead class="table-dark text-center">
                    <tr>
                        <td>
                            English
                        </td>
                        <td>
                            Mon (မန်)
                        </td>
                        <td>
                            Vietnamese
                        </td>
                        <td>
                            Khmer (ខ្មែរ)
                        </td>
                        <td>
                            Thai (ไทย)
                        </td>
                        <td>
                            Burmese (မြန်မာ)
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <!--ZERO-->
                    <tr v-for="(row, index) in comparisons" :key="index" class="text-center"
                        :class="[(index % 2 == 1) ? 'table-success' : '']">
                        <td v-for="(col, cIndex) in row" :key="cIndex">
                            <strong>{{ col.text }}</strong><br>
                            <small class="text-muted">
                                {{ col.subText }}<br>
                                {{ col.subText2 }}
                            </small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="mt-5">
            <h4>{{ langSet[lang || 'en'].getStartView.funFactTitle }}</h4>
            <hr>
            <ul>
                <li v-html="langSet[lang || 'en'].getStartView.funFactItem1"></li>
                <li v-html="langSet[lang || 'en'].getStartView.funFactItem2"></li>
            </ul>
        </div>

        <div class="mt-5">
            <h4>{{ langSet[lang ?? 'en'].getStartView.fontsTitle }}</h4>
            <hr>
            <p v-html="langSet[lang ?? 'en'].getStartView.fontsDescription"></p>
            <ol>
                <li>
                    <span class="fw-bold">{{ langSet[lang ?? 'en'].getStartView.fontsOption1 }} ({{ langSet[lang ??
                        'en'].getStartView.recommended }}): </span>
                    <a href="https://mcf.org.mm/pyidaungsu-font" target="_blank">
                        https://mcf.org.mm/pyidaungsu-font
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </li>
                <li>
                    <span class="fw-bold">{{ langSet[lang ?? 'en'].getStartView.fontsOption2 }}: </span>
                    <a href="https://font.download/font/myanmar-text" target="_blank">
                        https://font.download/font/myanmar-text
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </li>
                <li>
                    <span class="fw-bold">{{ langSet[lang ?? 'en'].getStartView.fontsOption3 }}: </span>
                    <a href="https://font.download/font/padauk" target="_blank">
                        https://font.download/font/padauk
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </li>
            </ol>
        </div>

        <div class="mt-5">
            <h4>{{ langSet[lang || 'en'].getStartView.referenceTitle }}</h4>
            <hr>
            <ol>
                <li>Mon language. (2025, July 21). In <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank"
                        class="fw-bold text-success">Wikipedia</a>. <a href="https://en.wikipedia.org/wiki/Mon_language"
                        target="_blank">https://en.wikipedia.org/wiki/Mon_language</a>.</li>
                <li>ภาษามอญ. (2025, July 21). In <a
                        href="https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81"
                        target="_blank" class="fw-bold text-success">Wikipedia</a>. <a
                        href="https://th.wikipedia.org/wiki/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%8D"
                        target="_blank">https://th.wikipedia.org/wiki/ภาษามอญ</a>.</li>
                <li>Abugida. (2025, July 21). In <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank"
                        class="fw-bold text-success">Wikipedia</a>. <a href="https://en.wikipedia.org/wiki/Abugida"
                        target="_blank">https://en.wikipedia.org/wiki/Abugida</a>.</li>
                <li>พจนานุกรมมอญ-ไทย. (2025, Juืำ 9). In <a href="https://online.fliphtml5.com" target="_blank"
                        class="fw-bold text-success">FlipHTML5</a>. <a
                        href="https://online.fliphtml5.com/yjjtg/bkuu/?1747471532"
                        target="_blank">https://online.fliphtml5.com/yjjtg/bkuu/?1747471532</a>.</li>
                <li>ใบความรู้เรื่องคำยืมภาษามอญและชวา มลายูในภาษาไทย. (2025, August 8). In <a
                        href="https://www.dltv.ac.th/" target="_blank"
                        class="fw-bold text-success">มูลนิธิการศึกษาทางไกลผ่านดาวเทียม ในพระบรมราชูปถัมภ์</a>. <a
                        href="https://dltv.ac.th/utils/files/download/167719"
                        target="_blank">https://dltv.ac.th/utils/files/download/167719</a>.</li>
            </ol>
        </div>
        <hr>
    </div>
</template>

<script>

import advancedAlphabets from '@/services/mon-library/alphabets/alphabets-ai';
import CompTextAnalyser from '../mini-apps/CompTextAnalyser.vue';
import CompWordCraft from '../mini-apps/CompWordCraft.vue';
import ButtonAskChatGPT from '../misc/buttons/ButtonAskChatGPT.vue';
import displayLanguages from '@/services/display-languages/display-languages';

export default {
    name: 'CompGetStart',
    components: {
        CompTextAnalyser,
        CompWordCraft,
        ButtonAskChatGPT
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data: () => {
        return {
            langSet: displayLanguages.langSet,
            words: '',
            deconstructed: [],
            syllables: [],
            ipa: '',
            th: '',
            comparisons: [
                [
                    {
                        lang: "en",
                        text: "One",
                        subText: "(1)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "မွဲ",
                        subText: "/mòa/",
                        subText2: "/มัว/"
                    },
                    {
                        lang: "vn",
                        text: "một",
                        subText: "/โมด/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "មួយ។",
                        subText: "/muoy/",
                        subText2: "/มวย/"
                    },
                    {
                        lang: "th",
                        text: "หนึ่ง",
                        subText: "/H̄nụ̀ng/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "တစ်ခု",
                        subText: "/taithku/",
                        subText2: "/ตัจ-ขุ/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Two",
                        subText: "(2)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "ၜါ",
                        subText: "/ɓa/",
                        subText2: "/บา/"
                    },
                    {
                        lang: "vn",
                        text: "hai",
                        subText: "/ไฮ/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "ពីរ",
                        subText: "/pir/",
                        subText2: "/ปี/"
                    },
                    {
                        lang: "th",
                        text: "สอง",
                        subText: "/S̄xng/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "နှစ်ခု",
                        subText: "/taithku/",
                        subText2: "/ฮนัจ-คุ/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Three",
                        subText: "(3)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "ပိ",
                        subText: "/pɔɪ/",
                        subText2: "/ปอฺย/"
                    },
                    {
                        lang: "vn",
                        text: "ba",
                        subText: "/บา/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "បី",
                        subText: "/bei/",
                        subText2: "/ไบ/"
                    },
                    {
                        lang: "th",
                        text: "สาม",
                        subText: "/S̄ām/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "သုံး",
                        subText: "/sone/",
                        subText2: "/โซ/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Four",
                        subText: "(4)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "ပန်",
                        subText: "/pɒn/",
                        subText2: "/ปอน/"
                    },
                    {
                        lang: "vn",
                        text: "bốn",
                        subText: "/โบ๋น/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "បួន",
                        subText: "/buon/",
                        subText2: "/บุน/"
                    },
                    {
                        lang: "th",
                        text: "สี่",
                        subText: "/S̄ī̀/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "လေး",
                        subText: "/layy/",
                        subText2: "/เหล/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Five",
                        subText: "(5)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "မသုန်",
                        subText: "/mɛ̀ˀ-sùˀn/",
                        subText2: "/เมี่ยะ-ซุน/"
                    },
                    {
                        lang: "vn",
                        text: "năm",
                        subText: "/นัม/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "ប្រាំ",
                        subText: "/bram/",
                        subText2: "/ปรัม/"
                    },
                    {
                        lang: "th",
                        text: "ห้า",
                        subText: "/H̄̂ā/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "ငါး",
                        subText: "/ngarr/",
                        subText2: "/ง้า/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Father",
                        subText: "(👨)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "အပါ",
                        subText: "/ʔaˀ-pa/",
                        subText2: "/อะ-ปา/"
                    },
                    {
                        lang: "vn",
                        text: "bố",
                        subText: "/โบ๋/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "ឪពុក",
                        subText: "/aupouk/",
                        subText2: "/เอิ่วป๊วก/"
                    },
                    {
                        lang: "th",
                        text: "พ่อ",
                        subText: "/Ph̀x/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "အဖေ",
                        subText: "/a hpay/",
                        subText2: "/อะ-เพ/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Tiger",
                        subText: "(🐯)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "ကၠ",
                        subText: "/klaˀ/",
                        subText2: "/กละ/"
                    },
                    {
                        lang: "vn",
                        text: "con hổ",
                        subText: "/กอน-โฮ/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "ខ្លា",
                        subText: "/khla/",
                        subText2: "/ขแล/"
                    },
                    {
                        lang: "th",
                        text: "เสือ",
                        subText: "/S̄eụ̄x/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "ကျား",
                        subText: "/kyarr/",
                        subText2: "/จย้า/"
                    },
                ],
                [
                    {
                        lang: "en",
                        text: "Water",
                        subText: "(💧)",
                        subText2: ""
                    },
                    {
                        lang: "mon",
                        text: "ဍာ်",
                        subText: "/ɗak/",
                        subText2: "/ดาก/"
                    },
                    {
                        lang: "vn",
                        text: "Nước",
                        subText: "/เนิก/",
                        subText2: ""
                    },
                    {
                        lang: "km",
                        text: "ទឹក។",
                        subText: "/tuk/",
                        subText2: "/ตึก/"
                    },
                    {
                        lang: "th",
                        text: "น้ำ",
                        subText: "/N̂ả/",
                        subText2: ""
                    },
                    {
                        lang: "bm",
                        text: "ရေ",
                        subText: "/ray/",
                        subText2: "/เย/"
                    },
                ],
            ]
        }
    },
    mounted() {
        this.$refs.compTextAnalyser.setText('အစါဗ္တောန်လိက်');
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
    }
}
</script>