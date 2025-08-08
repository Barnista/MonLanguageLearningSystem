import dbDict1 from './db-dict-1.json';
import dbDict2 from './db-dict-2.json';
import dbDict3 from './db-dict-3.json';
import dbDict4 from './db-dict-4.json';
import dbDict5 from './db-dict-5.json';
import dbDict6 from './db-dict-6.json';

export default {
    //RIGHT NOW, ONLY MON-THAI translation
    db: [
        ...dbDict1,
        ...dbDict2,
        ...dbDict3,
        ...dbDict4,
        ...dbDict5,
        ...dbDict6
    ],
    testDB() {
        console.log('DB:', this.db ?? 'NOT FOUND')
    },
    getTranslateType(type) {
        //Check what type of translation means
        switch (type) {
            case 'n':
                return 'Noun';
            case 'pron':
                return 'Pronoun';
            case 'v':
                return 'Verb';
            case 'adj':
                return 'Adjective';
            case 'adv':
                return 'Adverb';
            case 'prep':
                return 'Preposition';
            case 'conj':
                return 'Conjunction';
            case 'interj':
                return 'Interjection';
            case 'clf':
                return 'Classifier';
            default:
                return 'NaN';
        }
    },
    getTranslateTypeTH(type) {
        switch (type) {
            case 'n':
                return 'นาม';
            case 'pron':
                return 'สรรพนาม';
            case 'v':
                return 'กริยา';
            case 'adj':
                return 'คุณศัพท์';
            case 'adv':
                return 'วิเศษณ์';
            case 'prep':
                return 'บุพบท';
            case 'conj':
                return 'สันธาน';
            case 'interj':
                return 'อุทาน';
            case 'clf':
                return 'ลักษณนาม';
            default:
                return 'NaN';
        }
    },
    count(){
        return this.db.length;
    },
    //SEARCH WITH MON WORD
    searchByWord(word, isLimit, limit, isFirstCharOnly) {
        let result = [];

        //if user really search for something then proceed the search alg
        if (word) {
            //search by matching if val.word includes anything from word
            if (!isFirstCharOnly) result = this.db.filter(val =>
                val.word.includes(word)
            );

            if (isFirstCharOnly) result = this.db.filter(val =>
                val.word.startsWith(word)
            );

            //also limit search results to 5 items
            if (isLimit) result = result.slice(0, limit);
        }

        return result;
    },
    //SEARCH WITH THAI WORD
    searchByTranslateTH(word, isLimit, limit, isFirstCharOnly) {
        let result = [];

        //if user really search for something then proceed the search alg
        if (word) {
            //search by matching if val.word includes anything from word
            if (!isFirstCharOnly) result = this.db.filter(val =>
                val.translates.some(t => t.th.includes(word))
            );

            if (isFirstCharOnly) result = this.db.filter(val =>
                val.translates.some(t => t.th.startsWith(word))
            );

            //also limit search results to 5 items
            if (isLimit) result = result.slice(0, limit);
        }

        return result;
    }
}