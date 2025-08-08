
import dbConsonants from "./db-consonants";
import dbCompoundConsonants from "./db-compound-consonants";
import dbVowels from "./db-vowels";
//import dbFinalConsonants from "./db-final-consonants";
import dbDoubleConsonants from "./db-double-consonants";
import dbFinalConsonants from "./db-final-consonants";
import alphabets from "./alphabets";
import dictionary from "../dictionary/dictionary";

export default {
    analyseText(text) {
        let chars = Array.from(text || '');
        //remove empty spaces first to avoid alg malfunction
        chars = chars.filter(n => n);

        let memories = [];
        let currentWord = '';
        let wordFinished = false;
        let index = 0;
        let length = chars.length;
        do {
            const i_prev = index - 1;
            const i_next = index + 1;

            let char_prev = chars[i_prev] || null;
            let char_current = chars[index];
            let char_next = chars[i_next] || null;

            //CLASSIFICATION (try in comprehend the type of each character)
            const isConsonant = dbConsonants.isConsonant(char_current);
            const isStandAloneVowel = dbVowels.isStandAloneVowel(char_current);
            const isCompoundVowel = dbVowels.isCompoundVowel(char_current);
            const isCompoundConsonant = dbCompoundConsonants.isCompoundConsonant(char_current);
            const isDoubleSymbol = dbDoubleConsonants.isDoubleSymbol(char_current);
            const isFinalSymbol = dbFinalConsonants.isFinalSymbol(char_current);
            const isFinal2Symbol = dbFinalConsonants.isFinal2Symbol(char_current);
            const doubleConsonant = dbDoubleConsonants.getByDoubled(char_current);

            if (isConsonant) {
                //A. check if this char is registered as a consonant
                if (i_prev >= 0 && i_next < length) {
                    //A-2 before register this consonant to the currentWord 
                    // we must try to analyse if this consonant is the last one in the currentWord
                    // if that's the case, we have to seperate it into a new word. 
                    // If not, we'll let it continue
                    // ----a. the prev char is a consonant (or vowel) and the next char is a vowel
                    // ----b. the next char must not be the final symbol 
                    // ----c. if the next char is a double symbol then further check if 
                    // ------c.1 it's not the PaliSansakrit double consonant

                    const prevIsConsonant = dbConsonants.isConsonant(char_prev);
                    const prevIsVowel = dbVowels.isCompoundVowel(char_prev);
                    const nextIsConsonant = dbConsonants.isConsonant(char_next);
                    const nextIsVowel = dbVowels.isCompoundVowel(char_next);
                    const nextIsCompound = dbCompoundConsonants.isCompoundConsonant(char_next);
                    const nextIsFinalSymbol = dbFinalConsonants.isFinalSymbol(char_next);
                    const nextIsDoubleSymbol = dbDoubleConsonants.isDoubleSymbol(char_next);
                    const char_next2 = chars[i_next + 1];
                    //const next2IsVowel = dbVowels.isCompoundVowel(char_next2);
                    //const next2IsFinalSymbol = dbFinalConsonants.isFinalSymbol(char_next2);
                    const next2IsPaliSansakrit = dbDoubleConsonants.isDoubleConsonant2(char_current, char_next2);
                    if ((prevIsConsonant || prevIsVowel) &&
                        (nextIsConsonant || nextIsVowel)
                    ) {
                        //there's some double consonants that disguise as a single consonant
                        //we have to check first before moving on
                        const currentDoubleConsonant = dbDoubleConsonants.getByDoubled(char_current);
                        if (currentDoubleConsonant) currentWord += currentDoubleConsonant.converts[0];

                        //completed
                        console.log('CLASSIFIED-A', char_current)
                        if (currentWord) memories.push(currentWord);
                        currentWord = '' + char_current;
                    } else if (nextIsDoubleSymbol && !next2IsPaliSansakrit) {
                        //in case we find the Direct double consonant
                        console.log('CLASSIFIED-B', char_current)
                        if (currentWord) memories.push(currentWord);
                        currentWord = '' + char_current;
                    } else if (!nextIsFinalSymbol && !nextIsDoubleSymbol && !next2IsPaliSansakrit && !nextIsCompound) {
                        //maybe the next char is vowel or consonant
                        console.log('CLASSIFIED-C', char_current)
                        if (currentWord) memories.push(currentWord);
                        currentWord = '' + char_current;
                    } else if (nextIsCompound) {
                        //maybe the next is a compound consonant 
                        //but do check first if it goes according to the rule

                        //there's some PaliSansakrit double consonants that disguise as a compound consonant
                        const currentDoubleConsonant2 = dbDoubleConsonants.getByPaliSansakrit2(char_current, char_next);
                        if (currentDoubleConsonant2) {
                            console.log('CLASSIFIED-D2', char_current)
                            currentWord += currentDoubleConsonant2.converts[0];
                            char_next = currentDoubleConsonant2.converts[1];

                            if (currentWord) memories.push(currentWord);

                            currentWord = '' + char_next;
                            wordFinished = true;
                            index++;
                        } else {
                            console.log('CLASSIFIED-D1', char_current)
                            if (currentWord) memories.push(currentWord);
                            currentWord = '' + char_current;
                        }
                    } else {
                        console.log('UNCLASSIFIED')
                        currentWord += char_current;
                    }
                } else {
                    //if it's the last
                    // finish a word
                    if (i_next >= length) {
                        console.log('CLASSIFIED-E', char_current)

                        //there's some double consonants that disguise as a single consonant
                        const currentDoubleConsonant = dbDoubleConsonants.getByDoubled(char_current);
                        if (currentDoubleConsonant) currentWord += currentDoubleConsonant.converts[0];

                        if (currentWord) memories.push(currentWord);
                        currentWord = '' + char_current;
                        wordFinished = true;
                    } else {
                        //this char is the first (or the last) char in a text
                        currentWord += char_current;
                    }
                }
            } else if (isStandAloneVowel) {
                //B. check if this char is registered as a stand alone vowel
                //immediately register the currentWord into memories
                //then start a new
                console.log('CUT-E', char_current)
                if (currentWord) memories.push(currentWord);
                currentWord = '' + char_current;
            } else if (isCompoundVowel) {
                //C. add it to the currentWord
                currentWord += char_current;
                //if it's the last
                // finish a word
                if (i_next >= length) {
                    wordFinished = true;
                }
            } else if (isCompoundConsonant) {
                //D. add it to the currentWord
                currentWord += char_current;

                //if it's the last
                // finish a word
                if (i_next >= length) {
                    wordFinished = true;
                }
            } else if (isDoubleSymbol) {
                //E. let's try to check if it's 
                // -----a. Compound consonant
                // -----b. PaliSansakrit double consonant
                // -----c. Direct double consonant
                const aIsCompoundConsonant = dbCompoundConsonants.isCompoundConsonant2(char_prev, char_next);
                const aIsPaliSansakrit = dbDoubleConsonants.isDoubleConsonant2(char_prev, char_next);

                if (aIsPaliSansakrit) {
                    console.log('CLASSIFIED-F', char_current, char_next);
                    //it's 2 words according to Pali-Sansakrit rule
                    currentWord += dbFinalConsonants.finalSymbol;
                    wordFinished = true;
                } else if (aIsCompoundConsonant) {
                    //move on to the next +2 index
                    currentWord += char_current + char_next;
                    index++;
                } else {
                    //it's 2 words according to Direct rule
                    wordFinished = true;
                }

            } else if (isFinalSymbol) {
                //F. the prev consonant is the final consonant, thus the current word is completed. 
                currentWord += char_current;

                //how ever there might be some exception if the next char is some kind of final2 symbol
                const nextBlendFinal = char_current + char_next;
                const prevBlendFinal = char_current + char_prev;
                const nextIsFinal2Symbol = dbFinalConsonants.isFinal2Symbol(nextBlendFinal);
                const prevIsFinal2Symbol = dbFinalConsonants.isFinal2Symbol(prevBlendFinal);
                const prevIsCompoundSymbol = dbCompoundConsonants.isCompoundConsonant(char_prev);
                if (!nextIsFinal2Symbol && !prevIsFinal2Symbol) wordFinished = true;
                if (prevIsCompoundSymbol) wordFinished = true;

            } else if (isFinal2Symbol) {
                //G. the current consonant is the final consonant that blends itself with some vowel
                currentWord += char_current;
            } else if (doubleConsonant) {
                //H. the current consonant is a special double consonant
                //this is a special case, we have to check if it's a PaliSansakrit double consonant
                //if so, we have to treat it as a single word
                console.log('DOUBLE-CONSONANT', char_current);
                currentWord += doubleConsonant.converts[0];
                if (currentWord) memories.push(currentWord);

                currentWord = '' + doubleConsonant.converts[1];
            }
            else {
                //maybe it was some spacing or punctuations, or untrained characters
                wordFinished = true;
                console.log('INVALID CHAR:', char_current);
            }

            //if one word is completed
            if (wordFinished) {
                if (currentWord) memories.push(currentWord);
                //reset currentWord & wordFinished
                currentWord = '';
                wordFinished = false;
            }

            //next index
            index++;
            console.log('(prev, current, next)', i_prev, index, i_next);
            console.log('(prev, current, next)', char_prev, char_current, char_next);
        } while (index < length);

        let analysed = [];
        let ipa = '';
        let th = '';
        for (let i = 0; i < memories.length; i++) {
            const word = memories[i];
            const craft = this.analyseSingleWord(word);
            analysed.push(craft);

            let n_ipa = craft.crafted.ipa;
            let n_th = craft.crafted.th;

            //I ASSUME IF THERE'S A 2nd WAY, AT LEAST PRONOUNCED IT THE 2nd WAY
            if (craft.crafted.ipa2) {
                //exception as 'ံ' does not refer to အ် anymore
                if (!craft.structure.vowel.includes('ံ')) {
                    n_ipa = craft.crafted.ipa2;
                }
            }
            if (craft.crafted.th2) {
                //exception as 'ံ' does not refer to အ် anymore
                if (!craft.structure.vowel.includes('ံ')) {
                    n_th = craft.crafted.th2;
                }
            }

            //exception if the vowel is a stand-alone vowel, always use the default ipa
            if (dbVowels.isStandAloneVowel(craft.structure.vowel)) {
                n_ipa = craft.crafted.ipa;
                n_th = craft.crafted.th;
            }

            ipa += n_ipa + ((i < memories.length - 1) ? '-' : '');
            th += n_th + ((i < memories.length - 1) ? '-' : '');
        }

        return {
            text: text,
            syllables: memories,
            analysed: analysed,
            ipa: ipa,
            th: th,
            deconstructs: chars,
            meanings: dictionary.searchByWord(text, true, 4, false),
        }
    },
    analyseSingleWord(word) {
        let chars = Array.from(word || '');
        //remove empty spaces first to avoid alg malfunction
        chars = chars.filter(n => n);

        let wordStructure = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        }
        let index = 0;
        let length = chars.length;

        do {
            //classify into 2 structural groups
            // 1. consonant & compound consonant
            // 2. vowels & final consonant

            const i_prev = index - 1;
            const i_next = index + 1;

            const char_prev = chars[i_prev] || null;
            const char_current = chars[index];
            const char_next = chars[i_next] || null;

            const consonant = dbConsonants.getByLetter(char_current);
            const compound = dbCompoundConsonants.getByCompound(char_current);
            const vowel = dbVowels.getByCompound(char_current);
            const standAloneVowel = dbVowels.getByLetter(char_current);
            const finalConsonant = dbFinalConsonants.getByLetter(char_current);
            const finalSymbol = dbFinalConsonants.isFinalSymbol(char_current);
            const final2Symbol = dbFinalConsonants.isFinal2Symbol(char_current);

            if (consonant) {
                if (i_prev >= 0 && i_next < length) {
                    const nextIsFinalSymbol = dbFinalConsonants.isFinalSymbol(char_next);
                    const prevIsDoubleSymbol = dbDoubleConsonants.isDoubleSymbol(char_prev);

                    if (prevIsDoubleSymbol) {
                        //it's the compound consonant
                        if (compound) wordStructure.compound = compound.letter;
                    } else if (nextIsFinalSymbol) {
                        //it's the final consonant
                        wordStructure.final = char_current + char_next;
                        index++;
                    }
                } else {
                    if (index == 0) {
                        //first char means it's reall a consonant
                        wordStructure.consonant = consonant.letter;
                    }
                    // if it's the last char, that means it's another incompleted word, just ignore it.
                }
            } else if (compound) {
                //some final consonant can disguise itself as a compound symbol
                const nextBlendFinal = char_current + char_next;
                const prevBlendFinal = char_current + char_prev;
                const nextIsFinal2Symbol = dbFinalConsonants.isFinal2Symbol(nextBlendFinal);
                const prevIsFinal2Symbol = dbFinalConsonants.isFinal2Symbol(prevBlendFinal);

                const nextBlendFinal2 = char_next + char_current;
                const prevBlendFinal2 = char_prev + char_current;
                const nextIsFinal2Symbol2 = dbFinalConsonants.isFinal2Symbol(nextBlendFinal2);
                const prevIsFinal2Symbol2 = dbFinalConsonants.isFinal2Symbol(prevBlendFinal2);

                console.log('prev, next', nextIsFinal2Symbol, prevIsFinal2Symbol);
                if (!nextIsFinal2Symbol && !prevIsFinal2Symbol && !nextIsFinal2Symbol2 && !prevIsFinal2Symbol2) {
                    wordStructure.compound = compound.compound;
                } else {
                    wordStructure.final = compound.letter;
                }

            } else if (standAloneVowel) {
                wordStructure.vowel = standAloneVowel.letter;

                //assing the next vowel into consonant and skip the next index
                const nextVowel = dbVowels.getByCompound(char_next);
                if (nextVowel) {
                    wordStructure.vowel += nextVowel.compound;
                    index++;
                }
            } else if (vowel) {
                //there might be multiple sub-vowels combined into one vowel
                wordStructure.vowel += vowel.compound;
            } else if (finalSymbol) {
                //some final consonants are so blended that it only show a symbol
                const prevVowel = dbVowels.getByCompound(char_prev);
                if (prevVowel) wordStructure.final = finalConsonant.final;
            } else if (final2Symbol) {
                // add it into vowel
                wordStructure.vowel += char_current;
            } else {
                console.log('invalid char');
            }

            index++;
        } while (index < length);

        const result = alphabets.craftWord2(
            wordStructure.consonant,
            wordStructure.compound,
            wordStructure.vowel,
            wordStructure.final
        );

        return {
            word: word,
            structure: wordStructure,
            crafted: result,
        }
    }
}