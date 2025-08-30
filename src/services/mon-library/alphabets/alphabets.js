// This file defines the Mon language alphabets, including consonants, vowels, numbers, and punctuation.
// It also includes methods to retrieve specific consonants and check their tones.

import dbRules from "./db-rules";
import dbConsonants from "./db-consonants";
import dbVowels from "./db-vowels";
import dbCompoundConsonants from "./db-compound-consonants";
import dbFinalConsonants from "./db-final-consonants";
import dbDoubleConsonants from "./db-double-consonants";

export default {
    consonants: dbConsonants.getAll(),
    vowels: dbVowels.getAll(),
    otherVowels: dbVowels.getAllOtherVowels(),
    compoundConsonants: dbCompoundConsonants.getAll(),
    finalConsonants: dbFinalConsonants.getAllGroups(),
    rules: dbRules.getAll(),

    isBreathyConsonant(letter) {
        return dbRules.isBreathyConsonant(letter);
    },
    isClearConsonant(letter) {
        return dbRules.isClearConsonant(letter);
    },
    getConsonantByPosition(row, column) {
        return dbConsonants.getByPosition(row, column);
    },
    getDoubleExampleDirect() {
        return dbDoubleConsonants.getExampleDirect();
    },
    getDoubleExamplePaliSansakrit() {
        return dbDoubleConsonants.getExamplePaliSansakrit();
    },
    craftWord2(consonant, compound, vowel, finalConsonant) {
        let ipa = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let ipa2 = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let th = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let th2 = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let word = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };
        let word2 = {
            consonant: '',
            compound: '',
            vowel: '',
            final: '',
        };

        // If no consonant is provided, we use the default consonant
        let currentConsonant = consonant ? dbConsonants.getByLetter(consonant) : dbConsonants.getByLetter('အ');

        // check if the consonant is breathy or clear
        let isBreathy = dbRules.isBreathyConsonant(currentConsonant.letter);
        let cl_bt = isBreathy ? 'bt' : 'cl';

        // if no vowel is provided, we use the default vowel
        // sometimes there's a stand alone vowel
        let currentVowel = vowel ? (
            dbVowels.getByCompound(vowel) ?? dbVowels.getByLetter(vowel) ?? this.vowels[0]
        ) : this.vowels[0];

        // check if a certain vowel has to change its form if it meets with some consonants
        let blendVowelRule = dbRules.findBlendVowel(currentVowel.compound, currentConsonant.letter);
        let vowelCompound = blendVowelRule
            ? blendVowelRule.replace
            : currentVowel.compound;

        // analyse like how you see braskets stacking upon each others and you have to layer them out one by one from top to bottom

        // starting with with compound consonant and consonant (which is the most important layer)
        let compoundConsonantData = compound ? dbCompoundConsonants.getByCompound(compound) : null;
        if (compoundConsonantData) {
            // if compound consonant is provided, append it to the word

            // append the compound consonant to the word
            word.consonant = currentConsonant.letter;
            word.compound = compoundConsonantData.compound;

            word2.consonant = currentConsonant.letter;
            word2.compound = compoundConsonantData.compound;


            // check if the compound consonant has a blend sound with a certain consonant according to the rules
            let blendCompound = dbRules.findBlendCompound(compound, currentConsonant.letter);
            if (blendCompound) {
                // ถ้าหากเป็นควบแท้
                // if the compound consonant is a blend, we append the compound consonant to the word
                // and append the IPA for the compound consonant

                if (blendCompound.isReversed) {
                    //ถ้าควบด้วย ဟ (ฮ)
                    // if the blend compound is reversed, start with the compound consonant ipa then the current consonant ipa
                    const a = currentConsonant;
                    const b = compoundConsonantData;
                    currentConsonant = b;
                    compoundConsonantData = a;
                    // also change the vowel IPA from BT to CL regardless
                    isBreathy = false;
                }

                //IPA and Thai Phonetics
                ipa.consonant = currentConsonant.compoundIPA;
                ipa.compound = compoundConsonantData.compoundIPA;
                //รวมพยัญชนะกับพยัญชนะควบใน th.consonant เพื่อให้มีการประสมกับสระได้ถูกต้อง
                th.consonant = currentConsonant.compoundTH + compoundConsonantData.compoundTH;
                th.compound = '';

                //IPA2 amd Thai Phonetics 2
                ipa2.consonant = currentConsonant.compoundIPA;
                ipa2.compound = compoundConsonantData.compoundIPA;
                //รวมพยัญชนะกับพยัญชนะควบใน th2.consonant เพื่อให้มีการประสมกับสระได้ถูกต้อง
                th2.consonant = currentConsonant.compoundTH + compoundConsonantData.compoundTH;
                th2.compound = '';
            } else {
                // ถ้าหากไม่ใช่ควบแท้
                // if not a blend, we just append the consonant

                // and append the IPA-TH for the compound consonant
                ipa.consonant = currentConsonant.ipa;
                ipa.compound = compoundConsonantData.compoundIPA;
                th.consonant = currentConsonant.th;
                th.compound = compoundConsonantData.compoundTH;

                ipa2.consonant = currentConsonant.ipa;
                ipa2.compound = compoundConsonantData.compoundIPA;
                th2.consonant = currentConsonant.th;
                th2.compound = compoundConsonantData.compoundTH;
            }
        } else {
            // if no compound consonant is provided, we just append the consonant
            word.consonant = currentConsonant.letter ?? '';
            word2.consonant = currentConsonant.letter ?? '';

            ipa.consonant = currentConsonant.compoundIPA ?? '';
            th.consonant = currentConsonant.compoundTH ?? 'อ';

            ipa2.consonant = currentConsonant.compoundIPA ?? '';
            th2.consonant = currentConsonant.compoundTH ?? 'อ';
        }

        // then final consonant and vowel
        let finalConsonantData = dbFinalConsonants.getByLetter(finalConsonant);
        let finalConsonantGroup = dbFinalConsonants.getGroupByLetter(finalConsonant);
        if (finalConsonantData && finalConsonantGroup) {
            //try to analyse with vowels according to rules of finalWith and also with blendFinals.
            let allowedVowel = finalConsonantGroup.finalWith.find(vowel => currentVowel.compound === vowel.vowel || currentVowel.compound2 === vowel.vowel);

            // if final consonant is compatible with the current vowel
            if (allowedVowel) {
                // check if there's any blen rules for final consonant and vowel
                let blendFinal = dbRules.findBlendFinal(finalConsonantData.final);

                if (blendFinal) {
                    // if there's a blend rule, replace the vowel with the blend rule
                    // use the current vowel's compound or compound2 based on whether it's breathy or clear

                    let replaceVowel = blendFinal.vowels.find(v => v.vowel === vowelCompound);
                    if (replaceVowel) {
                        // if replace vowel found, use the replaceVowel instead of final consonant and vowel in word2
                        word2.vowel = replaceVowel.replace;
                    }
                }
                // anyway, we can append the final consonant and vowel to the word
                word.vowel = vowelCompound;
                word.final = finalConsonantData.final;

                // append the IPA-TH for final consonant and vowel
                ipa.vowel = (isBreathy ? allowedVowel.ipaBT : allowedVowel.ipaCL);
                ipa.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                th.vowel = (isBreathy ? allowedVowel.thBT : allowedVowel.thCL);
                th.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalTH : '');

                if (isBreathy && allowedVowel.ipaBT2) {
                    ipa2.vowel = allowedVowel.ipaBT2;
                    ipa2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                    th2.vowel = allowedVowel.thBT2;
                    th2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalTH : '');
                }
                if (!isBreathy && allowedVowel.ipaCL2) {
                    ipa2.vowel = allowedVowel.ipaCL2;
                    ipa2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalIPA : '');
                    th2.vowel = allowedVowel.thCL2;
                    th2.final = (!finalConsonantGroup.isSilent ? finalConsonantData.finalTH : '');
                }
            } else {
                // reject final consonant and skip to the next layer which is vowel
                word.vowel = vowelCompound;
                ipa.vowel = (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
                th.vowel = (isBreathy ? currentVowel.thBT : currentVowel.thCL);

                if (isBreathy && currentVowel.ipaBT2) {
                    ipa2.vowel = currentVowel.ipaBT2;
                    th2.vowel = currentVowel.thBT2;
                }
                if (!isBreathy && currentVowel.ipaCL2) {
                    ipa2.vowel = currentVowel.ipaCL2;
                    th2.vowel = currentVowel.thCL2;
                }
            }
        } else {
            // if no final consonant data, we then skip to the next layer which is vowel
            word.vowel = vowelCompound;
            ipa.vowel = (isBreathy ? currentVowel.ipaBT : currentVowel.ipaCL);
            th.vowel = (isBreathy ? currentVowel.thBT : currentVowel.thCL);

            if (isBreathy && currentVowel.ipaBT2) {
                ipa2.vowel = currentVowel.ipaBT2;
                th2.vowel = currentVowel.thBT2;
            }
            if (!isBreathy && currentVowel.ipaCL2) {
                ipa2.vowel = currentVowel.ipaCL2;
                th2.vowel = currentVowel.thCL2;
            }
        }

        //replace th.vowel and th2.vowel if there will be a final consonant to lead with; analyse according to the rule blendTHs
        if (th.vowel && th.final) {
            const blendTH = dbRules.findBlendTH(th.vowel);
            if (blendTH) th.vowel = blendTH.replace;
        }
        if (th2.vowel && th2.final) {
            const blendTH = dbRules.findBlendTH(th2.vowel);
            if (blendTH) th2.vowel = blendTH.replace;
        }

        //store processed information
        const resultWord = word.consonant + word.compound + word.vowel + word.final;
        const resultWord2 = (word2.vowel ? word2.consonant + word2.compound + word2.vowel + word2.final : '');
        const resultIPA = ipa.consonant + ipa.compound + ipa.vowel + ipa.final;
        const resultIPA2 = (ipa2.vowel ? ipa2.consonant + ipa2.compound + ipa2.vowel + ipa2.final : '');
        const resultTH = (th.compound ? th.consonant + (th.vowel.replace('-', th.compound)) + th.final : (th.vowel.replace('-', th.consonant)) + th.final)
        const resultTH2 = (th2.vowel ? (th2.compound ? th.consonant + (th2.vowel.replace('-', th2.compound)) + th2.final : (th2.vowel.replace('-', th2.consonant)) + th2.final) : '')

        //return feasible data
        return {
            word: resultWord,
            word2: resultWord2,
            cl_bt: cl_bt,
            ipa: resultIPA,
            ipa2: resultIPA2,
            th: resultTH,
            th2: resultTH2
        }
    },
}