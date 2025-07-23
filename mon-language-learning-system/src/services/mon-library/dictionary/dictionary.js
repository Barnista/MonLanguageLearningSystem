import dbDict from './db-dict.json';

export default {
    //RIGHT NOW, ONLY MON-THAI translation
    db: dbDict,
    testDB() {
        console.log('DB:', dbDict ?? 'NOT FOUND')
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
                return 'กริยาวิเศษณ์';
            case 'adv':
                return 'วิเศษณ์';
            case 'prep':
                return 'บุพบท';
            case 'conj':
                return 'สันธาน';
            case 'interj':
                return 'อุทาน';
            default:
                return 'NaN';
        }
    },
    searchByWord(word, isLimit, limit, isFirstCharOnly) {
        let result = [];

        //if user really search for something then proceed the search alg
        if (word) {
            //search my matching if val.word includes anything from word
            if(!isFirstCharOnly) result = this.db.filter(val =>
                val.word.includes(word)
            );

            if(isFirstCharOnly) result = this.db.filter(val =>
                val.word.startsWith(word)
            );

            //also limit search results to 5 items
            if(isLimit) result = result.slice(0, limit);
        }

        return result;
    }
}