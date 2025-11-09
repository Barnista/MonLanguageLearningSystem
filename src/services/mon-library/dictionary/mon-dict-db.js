import { DB_TABLES_1 } from './table/table_1';
import { DB_TABLES_2 } from './table/table_2';
import { DB_TABLES_3 } from './table/table_3';
import { DB_TABLES_4 } from './table/table_4';
import { DB_TABLES_5 } from './table/table_5';
import { DB_QUERY_INSTANTS, DB_QUERY_PRESET, DB_TABLE } from './query';
import { DBEngine } from './engine';
import { DBLedger } from'./ledger';

export const MonDictDB = {
    startDB: async () => {
        //MonDictDB.testRun();
        const engine = await DBEngine.init();
        const db = DBEngine.createDB(
            engine,
            [
                DB_TABLES_1,
                DB_TABLES_2,
                DB_TABLES_3,
                DB_TABLES_4,
                DB_TABLES_5
            ],
            //DO NOT LOAD DATA RIGHT AWAY, IT'S GONNA CAUSE THE WEB TO SLOW DOWN
            []
        );

        // ASYNC LOADING DATA
        const result = await DBLedger.loadDataAsync(db);
        console.log('SQL Data loaded:', result);

        return db;
    },
    getPosCode(type) {
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
    getPosCodeTH(type) {
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
            const result = await db.exec(query);
            if (result[0]) {
                return result[0].values[0][0];
            }
        } else {
            return 0;
        }
    },
    //SEARCH WITH MON WORD
    async searchByWord(db, word, isLimit, limit, isFirstCharOnly, lang_code, includeAuthorIds, orderBy) {
        if (this.isReady(db) && word) {
            const query = DB_QUERY_INSTANTS.SELECT_WORD_WITH_LIMIT(word, isLimit, limit, isFirstCharOnly, lang_code, includeAuthorIds, orderBy);
            const result = await db.exec(query);
            let new_arr = [];
            if (result[0]) {
                const values = result[0].values;
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

                let map = {};

                let currentKey = null;
                let currentId = null;
                for (let i = 0; i < values.length; i++) {
                    const vals = values[i];
                    let key = i;
                    let id = vals[0];
                    if (currentId == id) {
                        key = currentKey;
                    } else {
                        currentKey = key;
                        currentId = id;
                    }
                    //assign id as index
                    if (map[key]) {
                        //keep assigning definitions
                        map[key]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    } else {
                        //new object with initial-definition
                        map[key] = {
                            'id': vals[0],
                            'word': vals[1],
                            'ipa': vals[2],
                            'th': vals[3],
                            'authorName': vals[4],
                            'authorId': vals[5],
                            'definitions': []
                        }

                        map[key]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    }
                }

                for (let k in map) {
                    new_arr.push(map[k])
                }
            }
            return new_arr;
        } else {
            return [];
        }
    },
    async searchByDefinition(db, word, isLimit, limit, isFirstCharOnly, lang_code, includeAuthorIds, orderBy) {
        if (this.isReady(db) && word) {
            const query = DB_QUERY_INSTANTS.SELECT_WORD_FROM_DEFINITION(word, isLimit, limit, isFirstCharOnly, lang_code, includeAuthorIds, orderBy);
            const result = await db.exec(query);
            let new_arr = [];
            if (result[0]) {
                const values = result[0].values;
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

                let map = {};

                let currentKey = null;
                let currentId = null;
                for (let i = 0; i < values.length; i++) {
                    const vals = values[i];
                    let key = i;
                    let id = vals[0];
                    if (currentId == id) {
                        key = currentKey;
                    } else {
                        currentKey = key;
                        currentId = id;
                    }
                    //assign id as index
                    if (map[key]) {
                        //keep assigning definitions
                        map[key]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    } else {
                        //new object with initial-definition
                        map[key] = {
                            'id': vals[0],
                            'word': vals[1],
                            'ipa': vals[2],
                            'th': vals[3],
                            'authorName': vals[4],
                            'authorId': vals[5],
                            'definitions': []
                        }

                        map[key]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    }
                }

                for (let k in map) {
                    new_arr.push(map[k])
                }
            }
            return new_arr;
        } else {
            return [];
        }
    }
}