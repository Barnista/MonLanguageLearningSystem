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
                Explore the Mon language, learn alphabets, sentence structures, and practice your skills.`,
                description2: `Start your journey today 📖✨`,
            },
            consonantView: {
                description: 'The Mon alphabet contains <strong>35 consonants</strong> (including a zero consonants), as follows:',
                zeroConsonants: 'zero consonants',
                clearConsonants: 'clear consonants',
                breathyConsonants: 'breathy consonants',
                row: 'row',
                column: 'consonant',
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
                description: 'Final consonants are used at the end of syllables to indicate the closing sound. They play an important role in pronunciation and meaning. There are <strong>10 final consonant groups</strong> including:',
                group: 'Group',
                groupDescription1: 'can be used before adding the final consonant',
                groupDescription2: 'including:',
                groupDescription3: 'Final Consonants',
                groupDescription4: 'as part of the same group including:',
                exception: 'Exception:',
                exception10: 'When <strong>-အ်</strong> was written in a form of <strong>-ံ</strong> may cause confusion with the other final consonant <strong>-မ်</strong>. It depends on the context and meaning of the sentence. However, in modern Mon language usage, it is common to write the full form of the final consonant, which is <strong>-အ်</strong> instead of <strong>-ံ</strong> to avoid confusion.'
            },
            doubleConsonantView: {
                description: 'In the Mon language, double consonants are two consonants overlapping each other. The purpose is to make writing concise and space-efficient. Double consonants are divided into <strong>2 types</strong>: ',
                titleType1: 'Direct typography <strong>(Mon-style)</strong>',
                titleType2: 'Pali-Sanskrit typography <strong>(Pali-Sanskrit-style)</strong>',
                descriptionType1: 'It is a typography with simple rules. The reading is to pronounce both consonants, the main and the overlapped consonants, by <strong>reading from top to bottom</strong>, for example: ',
                descriptionType2: 'It is a typography with legacy rules derived from Pali-Sansakrit scripts. The main consonant will turn into the final consonant for the consonant positioned at the start. The consonant that is <strong>overlapped</strong> will be pronounced on its own or combined with the following vowel and/or final consonant.',
                descriptionTable2: 'Please open section Consonants below and try to remember the context that: <strong>Mon consonants are divided into 5 rows, each row has 5 consonants and the remaining 10 are the zero-consonants, totaling 35 characters</strong>.',
                ruleType21: 'Each row is divided into 2 types of consonants:',
                ruleType22: '<strong>The 1st - 3rd - 5th consonants</strong> of every row are classified as final consonants. Can overlap the 2nd - 4th consonant or overlap itself (except ၚ and ဍ)',
                ruleType23: '<strong>The 2nd - 4th consonants</strong> of every row are classified as overlapped consonants. Cannot overlap the 1st - 3rd - 5th consonant and cannot overlap itself.',
                ruleTitle2: 'Overlapping rules',
                ruleNo21: 'The <strong>1st</strong> consonant can overlap on the <strong>2nd</strong> consonant and can overlap itself (within the same row)',
                ruleNo22: 'The <strong>3rd</strong> consonant can overlap on the <strong>4th</strong> consonant and can overlap itself (within the same row)',
                ruleNo23: 'The <strong>5th</strong> consonant can overlap on all <strong>consonants</strong> and can overlap itself (within the same row)',
                titleTable2: 'Demonstration:',
                note: 'Note: ',
                noteType1: 'The 11 compound consonants are not considered double consonants.'
            },
            learnAlphabets: {
                getStart: 'Get Start',
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
                fullTitle: 'Virtual Keyboard',
                placeholder: 'Tap on the virtual keyboard to start',
                copyBtn: 'Copy text',
                copiedTxt: 'Copied to clipboard.',
                developedBy: 'Developed by',
                poweredBy: 'Powered by',
                designedBy: 'Mon keyboard layout designed by',
                howToUse: 'How to Use',
                gettingLost: 'Getting lost? see',
                switchToKeyboard: 'Switch to Keyboard'
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
                otherVowelsOrigin: 'Origin',
                doubleExample: 'Example',
                doubleFullWriting: 'Full Writing',
                translationThai: 'Translate<br>(Mon-Thai Dictionary)',
                rowAt: 'Row',
                columnAt: 'Consonant',
                doubleAt: 'Overlapped',
                itself: 'Itself',
                none: 'None'
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
                สำรวจภาษามอญ เรียนรู้ตัวอักษร โครงสร้างประโยค และฝึกฝนทักษะของคุณ`,
                description2: `เริ่มต้นด้วยตัวเองวันนี้ได้เลย 📖✨`,
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
                description: 'ตัวสะกดในภาษามอญนั้น <strong>มีแม่สะกดอยู่ 10 แม่</strong> คือตัวสะกดดังต่อไปนี้:',
                group: 'แม่',
                groupDescription1: 'สามารถประสมกับตัวสะกด',
                groupDescription2: 'ได้แก่:',
                groupDescription3: 'ตัวสะกดร่วม',
                groupDescription4: 'ที่เป็นสมาชิกได้แก่:',
                exception: 'ข้อยกเว้น:',
                exception10: '<strong>แม่เกาะ</strong> เมื่อลดรูปแล้วจะไปซ้ำกับ <strong>แม่กอม</strong> ในการอ่าน ขึ้นอยู่กับความเข้าใจและความหมายของบริบทของประโยคนั้นๆ แต่ในปัจจุบันผู้ใช้ภาษามอญนิยมเปลี่ยนจากการลดรูปเป็นการเขียนตัวสะกดเต็มรูป กล่าวคือใช้ <strong>-အ်</strong> แทน <strong>-ံ</strong> เพื่อหลีกเลี่ยงไม่ให้เกิดความสับสน.',
            },
            doubleConsonantView: {
                description: 'พยัญชนะซ้อนในภาษามอญ คือ พยัญชนะ 2 ตัวที่เขียนซ้อนทับกัน โดยมีวัตถุประสงค์เพื่อทำให้การเขียนมีความกระชับ สามารถใช้พื้นที่ในปริมาณจำกัดได้. พยัญชนะซ้อน แบ่งเป็น <strong>2 ประเภท</strong> ได้แก่:',
                titleType1: 'การซ้อนพยัญชนะแบบภาษามอญโดยตรง <strong>(ซ้อนแบบมอญ)</strong>',
                titleType2: 'การซ้อนพยัญชนะที่มาจากภาษาบาลี-สันสกฤต <strong>(ซ้อนแบบบาลี-สันสกฤต)</strong>',
                descriptionType1: 'เป็นการซ้อนแบบไม่มีกฎเกณฑ์กำกับ การอ่านนั้นให้<strong>ออกเสียงพยัญชนะทั้ง 2 ตัว ทั้งตัวหลักและตัวซ้อน</strong> โดยให้<strong>อ่านจากบนลงล่าง</strong> เช่น:',
                descriptionType2: 'เป็นการซ้อนที่มีกฎเกณฑ์ที่แน่นอน โดยพยัญชนะที่เป็น<strong>ตัวหลักจะเป็นตัวสะกด</strong>ให้กับพยัญชนะที่อยู่ข้างหน้า ส่วนพยัญชนะที่เป็น<strong>ตัวซ้อนจะออกเสียงตัวเอง</strong>หรือออกเสียงประสมกับสระและตัวสะกดที่อยู่ข้างหลัง.',
                descriptionTable2: 'ให้ผู้เรียนเปิดหน้าต่างตารางพยัญชนะมอญด้านล่าง แล้วทำความเข้าใจดังต่อไปนี้ว่า <strong>พยัญชนะมอญแบ่งออกเป็นวรรคได้ 5 วรรค แต่ละวรรมีพยัญชนะ 5 ตัว และอีก 10 ตัวเป็นเศษวรรค รวมเป็น 35 ตัว</strong>.',
                ruleType21: 'พยัญชนะที่จัดเป็นวรรคทั้ง 5 วรรค จะ<strong>แบ่งพยัญชนะเป็น 2 ประเภท</strong> คือ',
                ruleType22: '<strong>พยัญชนะตัวที่ 1 - 3 - 5</strong> ของทุกวรรค จัดเป็นพยัญชนะประเภทสะกด สามารถซ้อนพยัญชนะตัวที่ 2 - 4 หรือซ้อนตัวเองได้ (ยกเว้น ၚ กับ ဍ)',
                ruleType23: '<strong>พยัญชนะตัวที่ 2 - 4</strong> ของทุกวรรค จัดเป็นพยัญชนะประเภทซ้อน ไม่สามารถซ้อนพยัญชนะ 1 - 3 - 5 และไม่สามารถซ้อนตัวเองได้.',
                ruleTitle2: 'กฎเกณฑ์การซ้อน',
                ruleNo21: 'พยัญชนะ<strong>ตัวที่ 1</strong> ของวรรค<strong>ซ้อนอยู่บน</strong>พยัญชนะ<strong>ตัวที่ 2</strong> ของวรรค<strong>และซ้อนตัวเอง</strong>ได้',
                ruleNo22: 'พยัญชนะ<strong>ตัวที่ 3</strong> ของวรรค<strong>ซ้อนอยู่บน</strong>พยัญชนะ<strong>ตัวที่ 4</strong> ของวรรค<strong>และซ้อนตัวเอง</strong>ได้',
                ruleNo23: 'พยัญชนะ<strong>ตัวที่ 5</strong> ของวรรค<strong>ซ้อนอยู่บน</strong>พยัญชนะ<strong>ทุกตัว</strong>ของวรรค<strong>และซ้อนตัวเอง</strong>ได้',
                titleTable2: 'ตัวอย่างการซ้อนแต่ละวรรค',
                note: 'หมายเหตุ: ',
                noteType1: 'พยัญชนะควบแขวนทั้ง 11 ตัวนั้นไม่จัดเป็นพยัญชนะซ้อน'
            },
            learnAlphabets: {
                getStart: 'เริ่มต้นเรียน',
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
                fullTitle: 'คีย์บอร์ดจำลอง',
                placeholder: 'กดปุ่มใด ๆ บนคีย์บอร์ดที่ปรากฏ เพื่อเริ่มใช้งาน',
                copyBtn: 'คัดลอก',
                copiedTxt: 'คัดลอกข้อความแล้ว',
                developedBy: 'พัฒนาโดย',
                poweredBy: 'ขับเคลื่อนโดย',
                designedBy: 'คียบอร์ดอักษรมอญออกแบบโดย',
                howToUse: 'วิธีใช้งาน',
                gettingLost: 'ยังไม่เข้าใจวิธีใช้หรือไม่? เปิดดู',
                switchToKeyboard: 'สลับไปใช้คีย์บอร์ด'
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
                otherVowelsOrigin: 'ที่มาการประสม<br>ของสระ',
                doubleExample: 'ตัวอย่างคำ',
                doubleFullWriting: 'เขียนแบบไม่ซ้อน',
                translationThai: 'แปลจากพจนานุกรม<br>(มอญ-ไทย)',
                rowAt: 'วรรคที่',
                columnAt: 'พยัญชนะ<br>ตัวที่',
                doubleAt: 'ซ้อนตัวที่',
                itself: 'ตัวเอง',
                none: 'ไม่มี'
            }
        }
    }
}