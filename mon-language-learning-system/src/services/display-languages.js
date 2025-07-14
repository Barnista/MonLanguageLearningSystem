export default {
    options: {
        en: {
            id: 'en',
            label: 'English',
            icon: require('@/assets/flags/en_uk.svg')
        },
        th: {
            id: 'th',
            label: 'ไทย',
            icon: require('@/assets/flags/thai.svg')
        }
    },
    langSet: {
        en: {
            id: 'en',
            navbar: {
                home: 'Home',
            },
            homeView: {
                welcome: `Welcome to`,
                description: `
                Explore the Mon language, learn alphabets, and practice your skills.<br>
                Start your journey by selecting a section below.
                `,
            },
            consonantView: {
                description: 'The Mon alphabet contains <strong>35 consonants</strong> (including a zero consonants), as follows:',
                zeroConsonants: 'zero consonants',
                clearConsonants: 'clear consonants',
                breathyConsonants: 'breathy consonants',
                row: 'row',
                column: 'column',
                note: 'Note: Some letters may not have a pronunciation or example.'
            },
            vowelView: {
                description: 'This table displays the Mon vowels along with their pronunciations and examples.',
                description2: 'Some vowels when combined with some final consonants may create an entire different pronounciation or it is just for simplified writing. Learners should take note before learning on section "Final Consonants": ',
                vowelType1Title: 'Syllable-initial letter',
                vowelType1Description: '<strong>12 letters with 12 sounds.</strong> These letters are used at the beginning of syllables.',
                vowelType2Title: 'Consonant diacritic',
                vowelType2Description: '<strong>11 letters with 12 sounds.</strong> These letters are used after consonants to form syllables.',
                vowelType2CL: 'value after clear consonants',
                vowelType2BT: 'value after breathy consonants',
                exceptionDescription: 'is used after certain <strong>consonants</strong> including:',
                exceptionDescription2: 'is used if it is followed by certain <strong>final consonants</strong> including:'
            },
            compoundConsonantView: {
                description: 'Compound consonants are formed by combining two consonants. They are used to create specific sounds in the Mon language. There are 11 compound consonants including:',
                compoundDescription1: 'can be compound with',
                compoundDescription2: 'including:'
            },
            finalConsonantView: {
                description: 'Final consonants are used at the end of syllables to indicate the closing sound. They play an important role in pronunciation and meaning. There are 10 final consonants including:',
                group: 'Group',
                groupDescription1: 'can be used before adding the final consonant',
                groupDescription2: 'including:',
                groupDescription3: 'Final Consonants',
                groupDescription4: 'as part of the same group including:',
                exception: 'Exception:',
                exception10: 'When <strong>-အ်</strong> was written in a form of <strong>-ံ</strong> may cause confusion with the other final consonant <strong>-မ်</strong>. It depends on the context and meaning of the sentence. However, in modern Mon language usage, it is common to write the full form of the final consonant, which is <strong>-အ်</strong> instead of <strong>-ံ</strong> to avoid confusion.'
            },
            learnAlphabets: {
                alphabets: 'Alphabets',
                title: 'Learn Alphabets',
                consonants: 'Consonants',
                vowels: 'Vowels',
                otherVowels: 'Other Vowels',
                compoundConsonants: 'Compound Consonants',
                finalConsonants: 'Final Consonants',
                doubleConsonants: 'Double Consonants',
                numerals: 'Numerals',
                punctuations: 'Punctuations'
            },
            learnSentence: {
                sentence: 'Sentence',
                title: 'Learn Sentence & Structure',

                speechClassification: 'Speech Classification',
                noun: 'Noun',
                pronoun: 'Pronoun',
                verb: 'Verb',
                adjective: 'Adjective',
                adverb: 'Adverb',
                preposition: 'Preposition',
                conjunction: 'Conjunction',
                interjection: 'Interjection',

                type: 'Type',
                tense: 'Tense',
                syntax: 'Syntax'
            },
            keyboard: {
                title: 'Keyboard',
                fullTitle: 'Virtual Keyboard'
            },
            menu: {
                listen: 'listen',
                copy: 'copy',
                copied: 'copied',
                or: 'or',
                seeException: 'see exception',
                exception: 'Exception',
                tryConsonant: 'try consonant',
                tryFinalConsonant: 'try final consonant'
            },
            table: {
                no: 'No.',
                compoundConsonant: 'Consonant',
                compoundSymbol: 'Compound symbol',
                compoundExample: 'Example',
                pronounciation: 'Pronunciation<br>(IPA)',
                pronounciationThai: 'Pronunciation<br>(TH)',
                finalConsonant: 'Group',
                finalSymbol: 'Final Consonants',
                finalExample: 'Example',
                other: 'Other',
                otherVowels: 'Vowels',
                otherVowelsOrigin: 'Origin'
            }
        },
        th: {
            id: 'th',
            navbar: {
                home: 'หน้าหลัก',
            },
            homeView: {
                welcome: `ยินดีต้อนรับสู่`,
                description: `
                สำรวจภาษามอญ เรียนรู้ตัวอักษร และฝึกฝนทักษะของคุณ<br>
                เริ่มต้นการเดินทางของคุณโดยเลือกหมวดหมู่ด้านล่าง
                `,
            },
            consonantView: {
                description: 'พยัญชนะมอญมีทั้งหมด <strong>35 ตัว</strong> แบ่งเป็นวรรคได้ <strong>5 วรรค วรรคละ 5 ตัว</strong> ที่เหลืออีก 10 ตัวเป็นเศษวรรค ดังนี้:',
                zeroConsonants: 'เศษวรรค',
                clearConsonants: 'อโฆษะ (เสียงเบา)',
                breathyConsonants: 'โฆษะ (เสียงหนัก)',
                row: 'วรรค',
                column: 'ตัวที่',
                note: 'หมายเหตุ: ตัวอักษรบางตัวอาจไม่มีการออกเสียงหรือตัวอย่าง'
            },
            vowelView: {
                description: 'สระในภาษามอญมี 2 ประเภท ได้แก่ อักษรสระ (สระสำเร็จ) และ ลักาณะสระ (สระประสม) ดังที่แสดงบนตารางพร้อมคำอ่านและตัวอย่าง ต่อไปนี้',
                description2: 'สระบางตัวเมื่อมีการประสมกับตัวสะกดแล้ว อาจจะทำให้เกิดเป็นสระเสียงใหม่ หรือเพื่อแค่ให้การเขียนดูสละสลวยขึ้น ซึ่งผู้เรียนควรทำความเข้าใจก่อนที่จะเรียนในบทเรียน "ตัวสะกด" มีดังนี้:',
                vowelType1Title: 'อักษรสระ (สระสำเร็จ)',
                vowelType1Description: 'มี <strong>12 รูป 12 เสียง</strong> เป็นสระที่นำมาใช้ได้เลยดังนี้.',
                vowelType2Title: 'ลักาณะสระ (สระประสม)',
                vowelType2Description: 'มี <strong>11 รูป 12 เสียง</strong> เป็นสระที่นำมาประสมกับพยัญชนะ มีรูปสระดังนี้.',
                vowelType2CL: 'เมื่อประสมกับพยัญชนะอโฆษะ',
                vowelType2BT: 'เมื่อประสมกับพยัญชนะโฆษะ',
                exceptionDescription: 'เป็นสระที่ต้องเปลี่ยนรูป เพื่อไม่ให้เกิดความสับสนเมื่อประสมกับ<strong>พยัญชนะ</strong>ดังต่อไปนี้:',
                exceptionDescription2: 'เป็นสระที่ต้องเปลี่ยนรูป เมื่อต้องมี<strong>ตัวสะกด</strong>ตามหลังดังต่อไปนี้:'
            },
            compoundConsonantView: {
                description: 'พยัญชนะควบแขวน จะต้องเปลี่ยนรูปไปจากเดิม เมื่อควบแขวนกับพยัญชนะยืน ดังนี้:',
                compoundDescription1: 'สามารถควบกับลักษณะลดรูป',
                compoundDescription2: 'ได้แก่พยัญชนะ:'
            },
            finalConsonantView: {
                description: 'ตัวสะกดในภาษามอญนั้น มีแม่สะกดอยู่ 10 แม่ คือตัวสะกดดังต่อไปนี้:',
                group: 'แม่',
                groupDescription1: 'สามารถประสมกับตัวสะกด',
                groupDescription2: 'ได้แก่:',
                groupDescription3: 'ตัวสะกดร่วม',
                groupDescription4: 'ที่เป็นสมาชิกได้แก่:',
                exception: 'ข้อยกเว้น:',
                exception10: '<strong>แม่เกาะ</strong> เมื่อลดรูปแล้วจะไปซ้ำกับ <strong>แม่กอม</strong> ในการอ่าน ขึ้นอยู่กับความเข้าใจและความหมายของบริบทของประโยคนั้นๆ แต่ในปัจจุบันผู้ใช้ภาษามอญนิยมเปลี่ยนจากการลดรูปเป็นการเขียนตัวสะกดเต็มรูป กล่าวคือใช้ <strong>-အ်</strong> แทน <strong>-ံ</strong> เพื่อหลีกเลี่ยงไม่ให้เกิดความสับสน.', 
            },
            learnAlphabets: {
                alphabets: 'อักษรมอญ',
                title: 'เรียนอักษรมอญ',
                consonants: 'พยัญชนะ',
                vowels: 'สระ',
                otherVowels: 'สระอื่นๆ',
                compoundConsonants: 'พยัญชนะควบ',
                finalConsonants: 'ตัวสะกด',
                doubleConsonants: 'พยัญชนะซ้อน',
                numerals: 'ตัวเลข',
                punctuations: 'เครื่องหมายวรรคตอน'
            },
            learnSentence: {
                sentence: 'ประโยคมอญ',
                title: 'เรียนโครงสร้างประโยค',

                speechClassification: 'วจีภาค',
                noun: 'คำนาม',
                pronoun: 'คำสรรพนาม',
                verb: 'คำกริยา',
                adjective: 'คำวิเศษณ์',
                adverb: 'คำกริยาวิเศษณ์',
                preposition: 'คำบุพบท',
                conjunction: 'คำสันธาน',
                interjection: 'คำอุทาน',

                type: 'ชนิดประโยค',
                tense: 'รูปกาลประโยค',
                syntax: 'วากยสัมพันธ์'
            },
            keyboard: {
                title: 'คีย์บอร์ด',
                fullTitle: 'คีย์บอร์ดจำลอง'
            },
            menu: {
                listen: 'ฟัง',
                copy: 'คัดลอก',
                copied: 'คัดลอกแล้ว',
                or: 'หรือ',
                seeException: 'ดูข้อยกเว้น',
                exception: 'ข้อยกเว้น',
                tryConsonant: 'โปรดเลือก',
                tryFinalConsonant: 'โปรดเลือก'
            },
            table: {
                no: 'ลำดับ',
                compoundConsonant: 'พยัญชนะควบ',
                compoundSymbol: 'ลักษณะลดรูป',
                compoundExample: 'ตัวอย่างการควบ',
                pronounciation: 'การสะกดคำ<br>(สัทอักษรสากล)',
                pronounciationThai: 'การสะกดคำ<br>(อักษรไทย)',
                finalConsonant: 'แม่สะกด',
                finalSymbol: 'รูปตัวสะกด',
                finalExample: 'ตัวอย่างการประสม',
                other: 'อื่นๆ',
                otherVowels: 'รูปสระ',
                otherVowelsOrigin: 'ที่มาการประสม<br>ของสระ'
            }
        }
    }
}