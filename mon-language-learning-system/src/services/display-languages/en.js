export default {
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
    },
    textAnalyser: {
        header: 'Enter a Mon Word',
        placeholder: 'Type Mon words here...',
        submitBtn: 'Submit',
        syllables: 'Syllables',
        deconstructed: 'Deconstructed',
        aiBy: 'Mon Alphabets AI by'
    }
}