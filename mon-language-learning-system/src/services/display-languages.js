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
            learnAlphabets: {
                alphabets: 'Alphabets',
                title: 'Learn Alphabets',
                consonants: 'Consonants',
                vowels: 'Vowels',
                compoundConsonants: 'Compound Consonants',
                finalConsonants: 'Final Consonants',
                numerals: 'Numerals',
                punctuations: 'Punctuations'
            },
            keyboard: {
                title: 'Keyboard',
                fullTitle: 'Virtual Keyboard'
            },
            menu: {
                copy: 'copy',
                copied: 'copied'
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
            learnAlphabets: {
                alphabets: 'อักษรมอญ',
                title: 'เรียนอักษรมอญ',
                consonants: 'พยัญชนะ',
                vowels: 'สระ',
                compoundConsonants: 'พยัญชนะควบ',
                finalConsonants: 'ตัวสะกด',
                numerals: 'ตัวเลข',
                punctuations: 'เครื่องหมายวรรคตอน'
            },
            keyboard: {
                title: 'คีย์บอร์ด',
                fullTitle: 'คีย์บอร์ดจำลอง'
            },
            menu: {
                copy: 'คัดลอก',
                copied: 'คัดลอกแล้ว'
            }
        }
    }
}