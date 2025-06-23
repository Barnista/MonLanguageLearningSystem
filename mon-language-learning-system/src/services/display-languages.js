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
                description: 'The Mon alphabet contains 35 consonants (including a zero consonants), as follows:',
                zeroConsonants: 'zero consonants',
                clearConsonants: 'clear consonants',
                breathyConsonants: 'breathy consonants',
                row: 'row',
                column: 'column',
                note: 'Note: Some letters may not have a pronunciation or example.'
            },
            vowelView: {
                description: 'This table displays the Mon vowels along with their pronunciations and examples.',
                vowelType1Title: 'Syllable-initial letter',
                vowelType1Description: '12 letters with 12 sounds. These letters are used at the beginning of syllables.',
                vowelType2Title: 'Consonant diacritic',
                vowelType2Description: '11 letters with 12 sounds. These letters are used after consonants to form syllables.',
                vowelType2CL: 'value after clear consonants',
                vowelType2BT: 'value after breathy consonants',
                exceptionDescription: 'is used after certain consonants including:'
            },
            compoundConsonantView: {
                description: 'Compound consonants are formed by combining two consonants. They are used to create specific sounds in the Mon language. There are 11 compound consonants including:',
                compoundDescription1: 'can be compound with',
                compoundDescription2: 'including:'
            },
            learnAlphabets: {
                alphabets: 'Alphabets',
                title: 'Learn Alphabets',
                consonants: 'Consonants',
                vowels: 'Vowels',
                compoundConsonants: 'Compound Consonants',
                finalConsonants: 'Final Consonants',
                doubleConsonants: 'Double Consonants',
                numerals: 'Numerals',
                punctuations: 'Punctuations'
            },
            keyboard: {
                title: 'Keyboard',
                fullTitle: 'Virtual Keyboard'
            },
            menu: {
                copy: 'copy',
                copied: 'copied',
                or: 'or',
                seeException: 'see exception',
                exception: 'Exception',
                tryConsonant: 'try consonant'
            },
            table: {
                no: 'No.',
                compoundConsonant: 'Consonant',
                compoundSymbol: 'Compound symbol',
                compoundExample: 'Example',
                pronounciation: 'Pronunciation<br>(IPA)',
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
                description: 'พยัญชนะมอญมีทั้งหมด 35 ตัว แบ่งเป็นวรรคได้ 5 วรรค วรรคละ 5 ตัว ที่เหลืออีก 10 ตัวเป็นเศษวรรค ดังนี้:',
                zeroConsonants: 'เศษวรรค',
                clearConsonants: 'อโฆษะ (เสียงเบา)',
                breathyConsonants: 'โฆษะ (เสียงหนัก)',
                row: 'วรรค',
                column: 'ตัวที่',
                note: 'หมายเหตุ: ตัวอักษรบางตัวอาจไม่มีการออกเสียงหรือตัวอย่าง'
            },
            vowelView: {
                description: 'สระในภาษามอญมี 2 ประเภท ได้แก่ อักษรสระ (สระสำเร็จ) และ ลักาณะสระ (สระประสม) ดังที่แสดงบนตารางพร้อมคำอ่านและตัวอย่าง ต่อไปนี้',
                vowelType1Title: 'อักษรสระ (สระสำเร็จ)',
                vowelType1Description: 'มี 12 รูป 12 เสียง เป็นสระที่นำมาใช้ได้เลยดังนี้.',
                vowelType2Title: 'ลักาณะสระ (สระประสม)',
                vowelType2Description: 'มี 11 รูป 12 เสียง เป็นสระที่นำมาประสมกับพยัญชนะ มีรูปสระดังนี้.',
                vowelType2CL: 'เมื่อประสมกับพยัญชนะอโฆษะ',
                vowelType2BT: 'เมื่อประสมกับพยัญชนะโฆษะ',
                exceptionDescription: 'เป็นสระที่ต้องเปลี่ยนรูป เพื่อไม่ให้เกิดความสับสนเมื่อประสมกับพยัญชนะดังต่อไปนี้:'
            },
            compoundConsonantView: {
                description: 'พยัญชนะควบแขวน จะต้องเปลี่ยนรูปไปจากเดิม เมื่อควบแขวนกับพยัญชนะยืน ดังนี้:',
                compoundDescription1: 'สามารถควบกับลักษณะลดรูป',
                compoundDescription2: 'ได้แก่พยัญชนะ:'
            },
            learnAlphabets: {
                alphabets: 'อักษรมอญ',
                title: 'เรียนอักษรมอญ',
                consonants: 'พยัญชนะ',
                vowels: 'สระ',
                compoundConsonants: 'พยัญชนะควบ',
                finalConsonants: 'ตัวสะกด',
                doubleConsonants: 'พยัญชนะซ้อน',
                numerals: 'ตัวเลข',
                punctuations: 'เครื่องหมายวรรคตอน'
            },
            keyboard: {
                title: 'คีย์บอร์ด',
                fullTitle: 'คีย์บอร์ดจำลอง'
            },
            menu: {
                copy: 'คัดลอก',
                copied: 'คัดลอกแล้ว',
                or: 'หรือ',
                seeException: 'ดูข้อยกเว้น',
                exception: 'ข้อยกเว้น',
                tryConsonant: 'โปรดเลือก'
            },
            table: {
                no: 'ลำดับ',
                compoundConsonant: 'พยัญชนะควบ',
                compoundSymbol: 'ลักษณะลดรูป',
                compoundExample: 'ตัวอย่างการควบ',
                pronounciation: 'การสะกดคำ<br>(สัทธอักษรสากล)',
            }
        }
    }
}