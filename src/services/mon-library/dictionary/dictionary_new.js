import { DB_QUERY_INSTANTS, DB_QUERY_PRESET, DB_TABLE } from "./query";

export default {
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
    isReady(db) {
        if (!db) {
            console.log('DB IS NOT READY');
        }
        return db
    },
    async count(db) {
        if (this.isReady(db)) {
            const query = DB_QUERY_PRESET.SELECT_COUNT(DB_TABLE.Word);
            const result = await this.db.exec(query);
            if (result[0]) {
                console.log('Result', result[0]);
                return result[0];
            }
        } else {
            return 0;
        }
    },
    //SEARCH WITH MON WORD
    async searchByWord(db, word, isLimit, limit, isFirstCharOnly, lang_code) {
        if (this.isReady(db)) {
            const query = DB_QUERY_INSTANTS.SELECT_WORD_WITH_LIMIT(word, isLimit, limit, isFirstCharOnly, lang_code);
            const result = await db.exec(query);
            if (result[0]) {
                console.log('Result', result[0]);
                /*
                    [
                        {
                            id,
                            word,
                            ipa,
                            th,
                            authorName,
                            authorId,
                            definition,
                            pos_code,
                            authorDefName,
                            authorDefId     
                        }
                    ]
                */

                return result[0];
            }
        } else {
            return [];
        }
    },
}