import { DB_TABLES_1 } from './tables/table_1';
import { DB_TABLES_2 } from './tables/table_2';
import { DB_TABLES_3 } from './tables/table_3';
import { DB_TABLES_4 } from './tables/table_4';
import { DB_TABLES_5 } from './tables/table_5';
import { DB_DATA_AUTHOR_1 } from './datas/author_1';
import { DB_DATA_CATEGORY_1 } from './datas/category_1';
import { DB_DATA_CATEGORYDETAIL_1 } from './datas/categorydetail_1';
import { DB_DATA_DEFINITION_1 } from './datas/definition_1';
import { DB_DATA_DEFINITION_2 } from './datas/definition_2';
import { DB_DATA_DEFINITION_3 } from './datas/definition_3';
import { DB_DATA_DEFINITION_4 } from './datas/definition_4';
import { DB_DATA_DEFINITION_5 } from './datas/definition_5';
import { DB_DATA_DEFINITION_6 } from './datas/definition_6';
import { DB_DATA_DEFINITION_7 } from './datas/definition_7';
import { DB_DATA_DEFINITION_8 } from './datas/definition_8';
import { DB_DATA_DEFINITION_9 } from './datas/definition_9';
import { DB_DATA_DEFINITION_10 } from './datas/definition_10';
import { DB_DATA_DEFINITION_11 } from './datas/definition_11';
import { DB_DATA_DEFINITION_12 } from './datas/definition_12';
import { DB_DATA_DEFINITION_13 } from './datas/definition_13';
import { DB_DATA_DEFINITION_14 } from './datas/definition_14';
import { DB_DATA_DEFINITION_15 } from './datas/definition_15';
import { DB_DATA_DEFINITION_16 } from './datas/definition_16';
import { DB_DATA_DEFINITION_17 } from './datas/definition_17';
import { DB_DATA_DEFINITION_18 } from './datas/definition_18';
import { DB_DATA_DEFINITION_19 } from './datas/definition_19';
import { DB_DATA_DEFINITION_20 } from './datas/definition_20';
import { DB_DATA_DEFINITION_21 } from './datas/definition_21';
import { DB_DATA_DEFINITION_22 } from './datas/definition_22';
import { DB_DATA_DEFINITION_23 } from './datas/definition_23';
import { DB_DATA_DEFINITION_24 } from './datas/definition_24';
import { DB_DATA_WORD_1 } from './datas/word_1';
import { DB_DATA_WORD_2 } from './datas/word_2';
import { DB_DATA_WORD_3 } from './datas/word_3';
import { DB_QUERY_INSTANTS, DB_QUERY_PRESET, DB_TABLE } from './query';
import initSqlJs from 'sql.js';

export const MonDictDB = {
    init: () => {
        return initSqlJs({
            locateFile: file => `https://sql.js.org/dist/${file}`
        })
    },
    testRun: (SqlJS) => {
        const db = new SqlJS.Database();
        const result = db.exec("select 'hello world'");
        console.log('Exec script:', result);

        // Run a query without reading the results
        db.run("CREATE TABLE test (col1, col2);");
        // Insert two rows: (1,111) and (2,222)
        db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 2, 222]);

        // Prepare a statement
        var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
        stmt.getAsObject({ $start: 1, $end: 1 }); // {col1:1, col2:111}

        // Bind new values
        stmt.bind({ $start: 1, $end: 2 });
        while (stmt.step()) { //
            var row = stmt.getAsObject();
            // [...] do something with the row of result
            console.log('Test Query:', row);
        }
    },
    createDB: (SqlJS, dbTables, dbDatas) => {
        const db = new SqlJS.Database();
        // Create database according to the design v1
        for (let i = 0; i < dbTables.length; i++) {
            const dbTable = dbTables[i];
            db.run(dbTable);
        }
        for (let i = 0; i < dbDatas.length; i++) {
            const dbData = dbDatas[i];
            db.run(dbData);
        }
        return db;
    },
    startDB: async () => {
        //MonDictDB.testRun();
        const engine = await MonDictDB.init();
        const db = MonDictDB.createDB(
            engine,
            [
                DB_TABLES_1,
                DB_TABLES_2,
                DB_TABLES_3,
                DB_TABLES_4,
                DB_TABLES_5
            ],
            [
                DB_DATA_AUTHOR_1,
                DB_DATA_CATEGORY_1,
                DB_DATA_CATEGORYDETAIL_1,
                DB_DATA_DEFINITION_1,
                DB_DATA_DEFINITION_2,
                DB_DATA_DEFINITION_3,
                DB_DATA_DEFINITION_4,
                DB_DATA_DEFINITION_5,
                DB_DATA_DEFINITION_6,
                DB_DATA_DEFINITION_7,
                DB_DATA_DEFINITION_8,
                DB_DATA_DEFINITION_9,
                DB_DATA_DEFINITION_10,
                DB_DATA_DEFINITION_11,
                DB_DATA_DEFINITION_12,
                DB_DATA_DEFINITION_13,
                DB_DATA_DEFINITION_14,
                DB_DATA_DEFINITION_15,
                DB_DATA_DEFINITION_16,
                DB_DATA_DEFINITION_17,
                DB_DATA_DEFINITION_18,
                DB_DATA_DEFINITION_19,
                DB_DATA_DEFINITION_20,
                DB_DATA_DEFINITION_21,
                DB_DATA_DEFINITION_22,
                DB_DATA_DEFINITION_23,
                DB_DATA_DEFINITION_24,
                DB_DATA_WORD_1,
                DB_DATA_WORD_2,
                DB_DATA_WORD_3
            ]
        );

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
    async searchByWord(db, word, isLimit, limit, isFirstCharOnly, lang_code) {
        if (this.isReady(db)) {
            const query = DB_QUERY_INSTANTS.SELECT_WORD_WITH_LIMIT(word, isLimit, limit, isFirstCharOnly, lang_code);
            const result = await db.exec(query);
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

                for (let i = 0; i < values.length; i++) {
                    const vals = values[i];
                    //assign id as index
                    if (map[vals[0]]) {
                        //keep assigning definitions
                        map[vals[0]]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    } else {
                        //new object with initial-definition
                        map[vals[0]] = {
                            'id': vals[0],
                            'word': vals[1],
                            'ipa': vals[2],
                            'th': vals[3],
                            'authorName': vals[4],
                            'authorId': vals[5],
                            'definitions': []
                        }

                        map[vals[0]]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    }
                }

                let new_arr = [];
                for (let k in map) {
                    new_arr.push(map[k])
                }

                return new_arr;
            }
        } else {
            return [];
        }
    },
    async searchByDefinition(db, word, isLimit, limit, isFirstCharOnly, lang_code) {
        if (this.isReady(db)) {
            const query = DB_QUERY_INSTANTS.SELECT_WORD_FROM_DEFINITION(word, isLimit, limit, isFirstCharOnly, lang_code);
            const result = await db.exec(query);
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

                for (let i = 0; i < values.length; i++) {
                    const vals = values[i];
                    //assign id as index
                    if (map[vals[0]]) {
                        //keep assigning definitions
                        map[vals[0]]['definitions'].push({
                            'definition': vals[6],
                            'pos_code': vals[7],
                            'authorDefName': vals[8],
                            'authorDefId': vals[9]
                        })
                    } else {
                        //new object with initial-definition
                        map[vals[0]] = {
                            'id': vals[0],
                            'word': vals[1],
                            'ipa': vals[2],
                            'th': vals[3],
                            'authorName': vals[4],
                            'authorId': vals[5],
                            'definitions': [
                                {
                                    'definition': vals[6],
                                    'pos_code': vals[7],
                                    'authorDefName': vals[8],
                                    'authorDefId': vals[9]
                                }
                            ]
                        }
                    }
                }

                let new_arr = [];
                for (let k in map) {
                    new_arr.push(map[k])
                }

                return new_arr;
            }
        } else {
            return [];
        }
    }
}