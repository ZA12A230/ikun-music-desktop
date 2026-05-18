/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/list/index.ts
var list_namespaceObject = {};
__webpack_require__.r(list_namespaceObject);
__webpack_require__.d(list_namespaceObject, {
  checkListExistMusic: () => (checkListExistMusic),
  createUserLists: () => (createUserLists),
  getAllUserList: () => (getAllUserList),
  getListMusics: () => (getListMusics),
  getMusicExistListIds: () => (getMusicExistListIds),
  listDataOverwrite: () => (listDataOverwrite),
  musicOverwrite: () => (musicOverwrite),
  musicsAdd: () => (musicsAdd),
  musicsClear: () => (musicsClear),
  musicsMove: () => (musicsMove),
  musicsPositionUpdate: () => (musicsPositionUpdate),
  musicsRemove: () => (musicsRemove),
  musicsUpdate: () => (musicsUpdate),
  removeUserLists: () => (removeUserLists),
  updateUserLists: () => (list_updateUserLists),
  updateUserListsPosition: () => (updateUserListsPosition)
});

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/lyric/index.ts
var lyric_namespaceObject = {};
__webpack_require__.r(lyric_namespaceObject);
__webpack_require__.d(lyric_namespaceObject, {
  editedLyricAdd: () => (editedLyricAdd),
  editedLyricClear: () => (editedLyricClear),
  editedLyricCount: () => (editedLyricCount),
  editedLyricRemove: () => (editedLyricRemove),
  editedLyricUpdate: () => (editedLyricUpdate),
  editedLyricUpdateAddAndUpdate: () => (editedLyricUpdateAddAndUpdate),
  getEditedLyric: () => (getEditedLyric),
  getPlayerLyric: () => (getPlayerLyric),
  getRawLyric: () => (getRawLyric),
  rawLyricAdd: () => (rawLyricAdd),
  rawLyricClear: () => (rawLyricClear),
  rawLyricCount: () => (rawLyricCount),
  rawLyricRemove: () => (rawLyricRemove),
  rawLyricUpdate: () => (rawLyricUpdate)
});

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/music_url/index.ts
var music_url_namespaceObject = {};
__webpack_require__.r(music_url_namespaceObject);
__webpack_require__.d(music_url_namespaceObject, {
  getMusicUrl: () => (getMusicUrl),
  musicUrlClear: () => (musicUrlClear),
  musicUrlCount: () => (musicUrlCount),
  musicUrlRemove: () => (musicUrlRemove),
  musicUrlSave: () => (musicUrlSave)
});

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/music_other_source/index.ts
var music_other_source_namespaceObject = {};
__webpack_require__.r(music_other_source_namespaceObject);
__webpack_require__.d(music_other_source_namespaceObject, {
  getMusicInfoOtherSource: () => (getMusicInfoOtherSource),
  musicInfoOtherSourceAdd: () => (musicInfoOtherSourceAdd),
  musicInfoOtherSourceClear: () => (musicInfoOtherSourceClear),
  musicInfoOtherSourceCount: () => (musicInfoOtherSourceCount),
  musicInfoOtherSourceRemove: () => (musicInfoOtherSourceRemove)
});

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/download/index.ts
var download_namespaceObject = {};
__webpack_require__.r(download_namespaceObject);
__webpack_require__.d(download_namespaceObject, {
  downloadInfoClear: () => (downloadInfoClear),
  downloadInfoRemove: () => (downloadInfoRemove),
  downloadInfoSave: () => (downloadInfoSave),
  downloadInfoUpdate: () => (downloadInfoUpdate),
  getDownloadList: () => (getDownloadList)
});

// NAMESPACE OBJECT: ./src/main/worker/dbService/modules/dislike_list/index.ts
var dislike_list_namespaceObject = {};
__webpack_require__.r(dislike_list_namespaceObject);
__webpack_require__.d(dislike_list_namespaceObject, {
  dislikeInfoAdd: () => (dislikeInfoAdd),
  dislikeInfoOverwrite: () => (dislikeInfoOverwrite),
  getDislikeListInfo: () => (getDislikeListInfo)
});

;// external "better-sqlite3"
const external_better_sqlite3_namespaceObject = require("better-sqlite3");
var external_better_sqlite3_default = /*#__PURE__*/__webpack_require__.n(external_better_sqlite3_namespaceObject);
;// external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// ./src/main/worker/dbService/tables.ts
// export const sql = `
//   CREATE TABLE "db_info" (
//     "id" INTEGER NOT NULL UNIQUE,
//     "field_name" TEXT,
//     "field_value" TEXT,
//     PRIMARY KEY("id" AUTOINCREMENT)
//   );
const tables = new Map();
tables.set('db_info', `
  CREATE TABLE "db_info" (
    "id" INTEGER NOT NULL UNIQUE,
    "field_name" TEXT,
    "field_value" TEXT,
    PRIMARY KEY("id" AUTOINCREMENT)
  );
`);
tables.set('my_list', `
  CREATE TABLE "my_list" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "source" TEXT,
    "sourceListId" TEXT,
    "position" INTEGER NOT NULL,
    "locationUpdateTime" INTEGER,
    PRIMARY KEY("id")
  );
`);
tables.set('my_list_music_info', `
  CREATE TABLE "my_list_music_info" (
    "id" TEXT NOT NULL,
    "listId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "singer" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "interval" TEXT,
    "meta" TEXT NOT NULL,
    UNIQUE("id","listId")
  );
`);
tables.set('index_my_list_music_info', `
  CREATE INDEX "index_my_list_music_info" ON "my_list_music_info" (
    "id",
    "listId"
  );
`);
tables.set('my_list_music_info_order', `
  CREATE TABLE "my_list_music_info_order" (
    "listId" TEXT NOT NULL,
    "musicInfoId" TEXT NOT NULL,
    "order" INTEGER NOT NULL
  );
`);
tables.set('index_my_list_music_info_order', `
  CREATE INDEX "index_my_list_music_info_order" ON "my_list_music_info_order" (
    "listId",
    "musicInfoId"
  );
`);
tables.set('music_info_other_source', `
  CREATE TABLE "music_info_other_source" (
    "source_id" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "singer" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    UNIQUE("source_id","id")
  );
`);
tables.set('index_music_info_other_source', `
  CREATE INDEX "index_music_info_other_source" ON "music_info_other_source" (
    "source_id",
    "id"
  );
`);
tables.set('lyric', `
  -- TODO  "meta" TEXT NOT NULL,
  CREATE TABLE "lyric" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL
  );
`);
tables.set('music_url', `
  CREATE TABLE "music_url" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL
  );
`);
tables.set('download_list', `
  CREATE TABLE "download_list" (
    "id" TEXT NOT NULL,
    "isComplate" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "statusText" TEXT NOT NULL,
    "progress_downloaded" INTEGER NOT NULL,
    "progress_total" INTEGER NOT NULL,
    "url" TEXT,
    "quality" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "musicInfo" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    PRIMARY KEY("id")
  );
`);
tables.set('dislike_list', `
  CREATE TABLE "dislike_list" (
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "meta" TEXT
  );
`);
/* harmony default export */ const dbService_tables = (tables);
const DB_VERSION = '2';

;// ./src/main/worker/dbService/verifyDB.ts

const rxp = /\n|\s|;|--.+/g;
/* harmony default export */ const verifyDB = ((db) => {
    const result = db
        .prepare('SELECT type,name,tbl_name,sql FROM "main".sqlite_master WHERE sql NOT NULL;')
        .all();
    const dbTableMap = new Map();
    for (const info of result)
        dbTableMap.set(info.name, info.sql.replace(rxp, ''));
    return Array.from(dbService_tables.entries()).every(([name, sql]) => {
        const dbSql = dbTableMap.get(name);
        // if (!(dbSql && dbSql == sql.replace(rxp, ''))) {
        //   console.log('dbSql：', dbSql, '\nsql：', sql.replace(rxp, ''))
        // }
        // return true
        return dbSql && dbSql == sql.replace(rxp, '');
    });
    // console.log(dbTableMap)
    // for (const [name, sql] of tables.entries()) {
    //   const dbSql = dbTableMap.get(name)
    //   if (dbSql) {
    //     if (dbSql == sql.replace(rxp, '')) continue
    //     console.log(dbSql)
    //     console.log(sql.replace(rxp, ''))
    //   } else {
    //     console.log(name)
    //   }
    // }
    // if (result.every((info) => { tables.includes() }))
});

;// ./src/main/worker/dbService/migrate.ts

// const migrateV1 = (db: Database.Database) => {
//   const sql = `
//     DROP TABLE "main"."download_list";
//     CREATE TABLE "download_list" (
//       "id" TEXT NOT NULL,
//       "isComplate" INTEGER NOT NULL,
//       "status" TEXT NOT NULL,
//       "statusText" TEXT NOT NULL,
//       "progress_downloaded" INTEGER NOT NULL,
//       "progress_total" INTEGER NOT NULL,
//       "url" TEXT,
//       "quality" TEXT NOT NULL,
//       "ext" TEXT NOT NULL,
//       "fileName" TEXT NOT NULL,
//       "filePath" TEXT NOT NULL,
//       "musicInfo" TEXT NOT NULL,
//       "position" INTEGER NOT NULL,
//       PRIMARY KEY("id")
//     );
//   `
//   db.exec(sql)
//   db.prepare('UPDATE "main"."db_info" SET "field_value"=@value WHERE "field_name"=@name').run({ name: 'version', value: '2' })
// }
const migrateV1 = (db) => {
    // 修复 v2.4.0 的默认数据库版本号不对的问题
    const existsTable = db
        .prepare("SELECT name FROM \"main\".sqlite_master WHERE type='table' AND name='dislike_list';")
        .get();
    if (!existsTable) {
        const sql = dbService_tables.get('dislike_list');
        db.exec(sql);
    }
};
/* harmony default export */ const migrate = ((db) => {
    // PRAGMA user_version = x
    // console.log(db.prepare('PRAGMA user_version').get().user_version)
    // https://github.com/WiseLibs/better-sqlite3/issues/668#issuecomment-1145285728
    const version = db
        .prepare('SELECT "field_value" FROM "main"."db_info" WHERE "field_name" = ?')
        .get('version').field_value;
    switch (version) {
        case '1':
            migrateV1(db);
            db.prepare('UPDATE "main"."db_info" SET "field_value"=@value WHERE "field_name"=@name').run({
                name: 'version',
                value: DB_VERSION,
            });
            break;
    }
});

;// ./src/main/worker/dbService/db.ts





let db;
const initTables = (db) => {
    db.exec(`
    ${Array.from(dbService_tables.values()).join('\n')}
    INSERT INTO "main"."db_info" ("field_name", "field_value") VALUES ('version', '${DB_VERSION}');
  `);
};
// 打开、初始化数据库
const init = (lxDataPath) => {
    const databasePath = external_path_default().join(lxDataPath, 'lx.data.db');
    const nativeBinding = external_path_default().join(__dirname, '../node_modules/better-sqlite3/build/Release/better_sqlite3.node');
    let dbFileExists = true;
    try {
        db = new (external_better_sqlite3_default())(databasePath, {
            fileMustExist: true,
            nativeBinding,
            // verbose: process.env.NODE_ENV !== 'production' ? console.log : undefined,
        });
    }
    catch (error) {
        console.log(error);
        db = new (external_better_sqlite3_default())(databasePath, {
            nativeBinding,
            // verbose: process.env.NODE_ENV !== 'production' ? console.log : undefined,
        });
        initTables(db);
        dbFileExists = false;
    }
    db.pragma('journal_mode = WAL');
    if (dbFileExists)
        migrate(db);
    // https://www.sqlite.org/pragma.html#pragma_optimize
    if (dbFileExists)
        db.exec('PRAGMA optimize;');
    if (!verifyDB(db)) {
        db.close();
        return null;
    }
    // https://www.sqlite.org/lang_vacuum.html
    // db.exec('VACUUM "main"')
    process.on('exit', () => db.close());
    console.log('db inited');
    // require('./test')
    return dbFileExists;
};
// 获取数据库实例
const getDB = () => db;

;// external "node:worker_threads"
const external_node_worker_threads_namespaceObject = require("node:worker_threads");
var external_node_worker_threads_default = /*#__PURE__*/__webpack_require__.n(external_node_worker_threads_namespaceObject);
;// ./node_modules/comlink/dist/esm/comlink.mjs
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function createProxy(ep, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    return requestResponseMessage(ep, {
                        type: "RELEASE" /* RELEASE */,
                        path: path.map((p) => p.toString()),
                    }).then(() => {
                        closeEndPoint(ep);
                        isProxyReleased = true;
                    });
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: "ENDPOINT" /* ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context),
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map

;// ./node_modules/comlink/dist/esm/node-adapter.mjs
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nodeEndpoint(nep) {
    const listeners = new WeakMap();
    return {
        postMessage: nep.postMessage.bind(nep),
        addEventListener: (_, eh) => {
            const l = (data) => {
                if ("handleEvent" in eh) {
                    eh.handleEvent({ data });
                }
                else {
                    eh({ data });
                }
            };
            nep.on("message", l);
            listeners.set(eh, l);
        },
        removeEventListener: (_, eh) => {
            const l = listeners.get(eh);
            if (!l) {
                return;
            }
            nep.off("message", l);
            listeners.delete(eh);
        },
        start: nep.start && nep.start.bind(nep),
    };
}

/* harmony default export */ const node_adapter = (nodeEndpoint);
//# sourceMappingURL=node-adapter.mjs.map

;// ./src/main/worker/utils/worker.ts



const exposeWorker = (obj) => {
    if ((external_node_worker_threads_default()).parentPort == null)
        return;
    expose(obj, node_adapter((external_node_worker_threads_default()).parentPort));
};

;// ./src/common/constants.ts
const URL_SCHEME_RXP = /^lxmusic:\/\//;
const SPLIT_CHAR = {
    DISLIKE_NAME: '@',
    DISLIKE_NAME_ALIAS: '#',
};
const STORE_NAMES = {
    APP_SETTINGS: 'config_v2',
    DATA: 'data',
    SYNC: 'sync',
    HOTKEY: 'hot_key',
    USER_API: 'user_api',
    LRC_RAW: 'lyrics',
    LRC_EDITED: 'lyrics_edited',
    THEME: 'theme',
    SOUND_EFFECT: 'sound_effect',
};
const APP_EVENT_NAMES = {
    winMainName: 'win_main',
    winLyricName: 'win_lyric',
    trayName: 'tray',
};
const LIST_IDS = {
    DEFAULT: 'default',
    LOVE: 'love',
    TEMP: 'temp',
    DOWNLOAD: 'download',
    PLAY_LATER: null,
};
const DATA_KEYS = {
    viewPrevState: 'viewPrevState',
    playInfo: 'playInfo',
    searchHistoryList: 'searchHistoryList',
    listScrollPosition: 'listScrollPosition',
    listPrevSelectId: 'listPrevSelectId',
    listUpdateInfo: 'listUpdateInfo',
    ignoreVersion: 'ignoreVersion',
    leaderboardSetting: 'leaderboardSetting',
    songListSetting: 'songListSetting',
    searchSetting: 'searchSetting',
    lastStartInfo: 'lastStartInfo',
};
const DEFAULT_SETTING = {
    leaderboard: {
        source: 'kw',
        boardId: 'kw__16',
    },
    songList: {
        source: 'kw',
        sortId: 'new',
        tagId: '',
    },
    search: {
        temp_source: 'kw',
        source: 'all',
        type: 'music',
    },
    viewPrevState: {
        url: '/search',
        query: {},
    },
};
const DOWNLOAD_STATUS = {
    RUN: 'run',
    WAITING: 'waiting',
    PAUSE: 'pause',
    ERROR: 'error',
    COMPLETED: 'completed',
};
const QUALITYS = (/* unused pure expression or super */ null && ([
    'master',
    'atmos_plus',
    'atmos',
    'hires',
    'flac',
    '320k',
    '192k',
    '128k',
]));
const TRAY_AUTO_ID = (/* unused pure expression or super */ null && (-1));

;// ./src/common/utils/common.ts
// 非业务工具方法
/**
 * 获取两个数之间的随机整数，大于等于min，小于max
 * @param {*} min
 * @param {*} max
 */
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const sizeFormate = (size) => {
    // https://gist.github.com/thomseddon/3511330
    if (!size)
        return '0 B';
    let units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let number = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / Math.pow(1024, Math.floor(number))).toFixed(2)} ${units[number]}`;
};
/**
 * 将字符串、时间戳等格式转成时间对象
 * @param date 时间
 * @returns 时间对象或空字符串
 */
const toDateObj = (date) => {
    // console.log(date)
    if (!date)
        return '';
    switch (typeof date) {
        case 'string':
            if (!date.includes('T'))
                date = date.split('.')[0].replace(/-/g, '/');
        case 'number':
            date = new Date(date);
        case 'object':
            break;
        default:
            return '';
    }
    return date;
};
const numFix = (n) => (n < 10 ? `0${n}` : n.toString());
/**
 * 时间格式化
 * @param _date 时间
 * @param format Y-M-D h:m:s Y年 M月 D日 h时 m分 s秒
 */
const dateFormat = (_date, format = 'Y-M-D h:m:s') => {
    // console.log(date)
    const date = toDateObj(_date);
    if (!date)
        return '';
    return format
        .replace('Y', date.getFullYear().toString())
        .replace('M', numFix(date.getMonth() + 1))
        .replace('D', numFix(date.getDate()))
        .replace('h', numFix(date.getHours()))
        .replace('m', numFix(date.getMinutes()))
        .replace('s', numFix(date.getSeconds()));
};
const formatPlayTime = (time) => {
    let m = Math.trunc(time / 60);
    let s = Math.trunc(time % 60);
    return m == 0 && s == 0 ? '--/--' : numFix(m) + ':' + numFix(s);
};
const formatPlayTime2 = (time) => {
    let m = Math.trunc(time / 60);
    let s = Math.trunc(time % 60);
    return numFix(m) + ':' + numFix(s);
};
const isUrl = (path) => /https?:\/\//.test(path);
// 解析URL参数为对象
const parseUrlParams = (str) => {
    const params = {};
    if (typeof str !== 'string')
        return params;
    const paramsArr = str.split('&');
    for (const param of paramsArr) {
        let [key, value] = param.split('=');
        params[key] = value;
    }
    return params;
};
/**
 * 生成节流函数
 * @param fn 回调
 * @param delay 延迟
 * @returns
 */
function throttle(fn, delay = 100) {
    let timer = null;
    let _args;
    return (...args) => {
        _args = args;
        if (timer)
            return;
        timer = setTimeout(() => {
            timer = null;
            void fn(..._args);
        }, delay);
    };
}
/**
 * 生成防抖函数
 * @param fn 回调
 * @param delay 延迟
 * @returns
 */
function debounce(fn, delay = 100) {
    let timer = null;
    let _args;
    return (...args) => {
        _args = args;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            void fn(..._args);
        }, delay);
    };
}
const fileNameRxp = /[\\/:*?#"<>|]/g;
const filterFileName = (name) => name.replace(fileNameRxp, '');
// https://blog.csdn.net/xcxy2015/article/details/77164126#comments
/**
 *
 * @param a
 * @param b
 */
const similar = (a, b) => {
    if (!a || !b)
        return 0;
    if (a.length > b.length) {
        // 保证 a <= b
        let t = b;
        b = a;
        a = t;
    }
    let al = a.length;
    let bl = b.length;
    let mp = []; // 一个表
    let i, j, ai, lt, tmp; // ai：字符串a的第i个字符。 lt：左上角的值。 tmp：暂存新的值。
    for (i = 0; i <= bl; i++)
        mp[i] = i;
    for (i = 1; i <= al; i++) {
        ai = a.charAt(i - 1);
        lt = mp[0];
        mp[0] = mp[0] + 1;
        for (j = 1; j <= bl; j++) {
            tmp = Math.min(mp[j] + 1, mp[j - 1] + 1, lt + (ai == b.charAt(j - 1) ? 0 : 1));
            lt = mp[j];
            mp[j] = tmp;
        }
    }
    return 1 - mp[bl] / bl;
};
/**
 * 排序字符串
 * @param arr
 * @param data
 */
const sortInsert = (arr, data) => {
    let key = data.num;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.trunc((left + right) / 2);
        if (key == arr[middle].num) {
            left = middle;
            break;
        }
        else if (key < arr[middle].num) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    while (left > 0) {
        if (arr[left - 1].num != key)
            break;
        left--;
    }
    arr.splice(left, 0, data);
};
const encodePath = (path) => {
    return encodeURI(path.replaceAll('\\', '/'));
};
const arrPush = (list, newList) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.push(...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
const arrUnshift = (list, newList) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.splice(i * 1000, 0, ...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
const arrPushByPosition = (list, newList, position) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.splice(position + i * 1000, 0, ...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
// https://stackoverflow.com/a/2450976
const arrShuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

;// ./src/main/worker/dbService/modules/list/statements.ts

/**
 * 创建列表查询语句
 * @returns 查询语句
 */
const createListQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "id", "name", "source", "sourceListId", "position", "locationUpdateTime"
    FROM "main"."my_list"
    `);
};
/**
 * 创建列表插入语句
 * @returns 插入语句
 */
const createListInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."my_list" ("id", "name", "source", "sourceListId", "position", "locationUpdateTime")
    VALUES (@id, @name, @source, @sourceListId, @position, @locationUpdateTime)`);
};
/**
 * 创建列表清空语句
 * @returns 清空语句
 */
const createListClearStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list"');
};
/**
 * 创建列表删除语句
 * @returns 删除语句
 */
const createListDeleteStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list" WHERE "id"=?');
};
/**
 * 创建列表更新语句
 * @returns 更新语句
 */
const createListUpdateStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."my_list"
    SET "name"=@name, "source"=@source, "sourceListId"=@sourceListId, "locationUpdateTime"=@locationUpdateTime
    WHERE "id"=@id`);
};
/**
 * 创建音乐信息查询语句
 * @returns 查询语句
 */
const createMusicInfoQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT mInfo."id", mInfo."name", mInfo."singer", mInfo."source", mInfo."interval", mInfo."meta"
    FROM my_list_music_info mInfo
    LEFT JOIN my_list_music_info_order O
    ON mInfo.id=O.musicInfoId AND O.listId=@listId
    WHERE mInfo.listId=@listId
    ORDER BY O."order" ASC
    `);
};
/**
 * 创建音乐信息插入语句
 * @returns 插入语句
 */
const createMusicInfoInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."my_list_music_info" ("id", "listId", "name", "singer", "source", "interval", "meta")
    VALUES (@id, @listId, @name, @singer, @source, @interval, @meta)`);
};
/**
 * 创建音乐信息更新语句
 * @returns 更新语句
 */
const createMusicInfoUpdateStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."my_list_music_info"
    SET "name"=@name, "singer"=@singer, "source"=@source, "interval"=@interval, "meta"=@meta
    WHERE "id"=@id AND "listId"=@listId`);
};
/**
 * 创建清空音乐信息语句
 * @returns 删除语句
 */
const createMusicInfoClearStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info"');
};
/**
 * 创建根据列表id批量删除音乐信息语句
 * @returns 删除语句
 */
const createMusicInfoDeleteByListIdStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info" WHERE "listId"=?');
};
/**
 * 创建根据列表Id与音乐id批量删除音乐信息语句
 * @returns 删除语句
 */
const createMusicInfoDeleteStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info" WHERE "id"=@id AND "listId"=@listId');
};
/**
 * 创建根据列表Id与音乐id查询音乐信息语句
 * @returns 删除语句
 */
const createMusicInfoByListAndMusicInfoIdQueryStatement = () => {
    const db = getDB();
    return db.prepare(`SELECT "id", "name", "singer", "source", "interval", "meta"
    FROM "main"."my_list_music_info"
    WHERE "id"=@musicInfoId
    AND "listId"=@listId`);
};
/**
 * 创建根据音乐id查询音乐信息语句
 * @returns 删除语句
 */
const createMusicInfoByMusicInfoIdQueryStatement = () => {
    const db = getDB();
    return db.prepare(`SELECT "id", "name", "singer", "source", "interval", "meta", "listId"
    FROM "main"."my_list_music_info"
    WHERE "id"=?`);
};
/**
 * 创建音乐信息排序插入语句
 * @returns 插入语句
 */
const createMusicInfoOrderInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."my_list_music_info_order" ("listId", "musicInfoId", "order")
    VALUES (@listId, @musicInfoId, @order)`);
};
/**
 * 创建清空音乐排序语句
 * @returns 删除语句
 */
const createMusicInfoOrderClearStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info_order"');
};
/**
 * 创建根据列表id删除音乐排序语句
 * @returns 删除语句
 */
const createMusicInfoOrderDeleteByListIdStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info_order" WHERE "listId"=?');
};
/**
 * 创建根据列表Id与音乐id删除音乐排序语句
 * @returns 删除语句
 */
const createMusicInfoOrderDeleteStatement = () => {
    const db = getDB();
    return db.prepare('DELETE FROM "main"."my_list_music_info_order" WHERE "musicInfoId"=@id AND "listId"=@listId');
};

;// ./src/main/worker/dbService/modules/list/dbHelper.ts


const idFixRxp = /\.0$/;
/**
 * 获取用户列表
 * @returns
 */
const queryAllUserList = () => {
    const list = createListQueryStatement().all();
    for (const info of list) {
        // 兼容v2.3.0之前版本插入数字类型的ID导致其意外在末尾追加 .0 的问题
        if (info.sourceListId?.endsWith?.('.0')) {
            info.sourceListId = info.sourceListId.replace(idFixRxp, '');
        }
    }
    return list;
};
/**
 * 批量插入用户列表
 * @param lists 列表
 * @param isClear 是否清空列表
 */
const insertUserLists = (lists, isClear = false) => {
    const db = getDB();
    const listClearStatement = createListClearStatement();
    const listInsertStatement = createListInsertStatement();
    db.transaction((lists) => {
        if (isClear)
            listClearStatement.run();
        for (const list of lists) {
            listInsertStatement.run({
                id: list.id,
                name: list.name,
                source: list.source,
                sourceListId: list.sourceListId,
                locationUpdateTime: list.locationUpdateTime,
                position: list.position,
            });
        }
    })(lists);
};
/**
 * 批量删除用户列表及列表内歌曲
 * @param listIds 列表id
 */
const deleteUserLists = (listIds) => {
    const db = getDB();
    const listDeleteStatement = createListDeleteStatement();
    const musicInfoDeleteByListIdStatement = createMusicInfoDeleteByListIdStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    db.transaction((listIds) => {
        for (const id of listIds) {
            listDeleteStatement.run(id);
            musicInfoDeleteByListIdStatement.run(id);
            musicInfoOrderDeleteByListIdStatement.run(id);
        }
    })(listIds);
};
/**
 * 批量更新用户列表
 * @param lists 列表
 */
const updateUserLists = (lists) => {
    const db = getDB();
    const listUpdateStatement = createListUpdateStatement();
    db.transaction((lists) => {
        for (const list of lists)
            listUpdateStatement.run(list);
    })(lists);
};
/**
 * 批量添加歌曲
 * @param list
 */
const insertMusicInfoList = (list) => {
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    const db = getDB();
    db.transaction((musics) => {
        for (const music of musics) {
            musicInfoInsertStatement.run(music);
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
    })(list);
};
/**
 * 批量添加歌曲并刷新排序
 * @param list 新增歌曲
 * @param listId 列表Id
 * @param listAll 原始列表歌曲，列表去重后
 */
const insertMusicInfoListAndRefreshOrder = (list, listId, listAll) => {
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    const db = getDB();
    db.transaction((list, listId, listAll) => {
        musicInfoOrderDeleteByListIdStatement.run(listId);
        for (const music of list) {
            musicInfoInsertStatement.run(music);
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
        for (const music of listAll) {
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
    })(list, listId, listAll);
};
/**
 * 批量更新歌曲
 * @param list
 */
const updateMusicInfos = (list) => {
    const musicInfoUpdateStatement = createMusicInfoUpdateStatement();
    const db = getDB();
    db.transaction((musics) => {
        for (const music of musics) {
            musicInfoUpdateStatement.run(music);
        }
    })(list);
};
/**
 * 获取列表内的歌曲
 * @param listId 列表Id
 * @returns 列表歌曲
 */
const queryMusicInfoByListId = (listId) => {
    const musicInfoQueryStatement = createMusicInfoQueryStatement();
    return musicInfoQueryStatement.all({ listId });
};
/**
 * 批量移动歌曲
 * @param fromId 源列表Id
 * @param ids 要移动的歌曲
 * @param musicInfos 音乐信息
 */
const moveMusicInfo = (fromId, ids, musicInfos) => {
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    const musicInfoDeleteStatement = createMusicInfoDeleteStatement();
    const musicInfoOrderDeleteStatement = createMusicInfoOrderDeleteStatement();
    // const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement()
    const db = getDB();
    db.transaction((fromId, ids, musicInfos) => {
        // musicInfoOrderDeleteByListIdStatement.run(fromId)
        for (const id of ids) {
            musicInfoDeleteStatement.run({ listId: fromId, id });
            musicInfoOrderDeleteStatement.run({ listId: fromId, id });
        }
        for (const music of musicInfos) {
            musicInfoInsertStatement.run(music);
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
    })(fromId, ids, musicInfos);
};
/**
 * 批量移动歌曲并刷新排序
 * @param fromId 源列表Id
 * @param ids 要移动的歌曲id，原始选择的歌曲
 * @param musicInfos 要移动的歌曲，目标列表去重后
 * @param toListAll 目标列表歌曲
 */
const moveMusicInfoAndRefreshOrder = (fromId, ids, toId, musicInfos, toListAll) => {
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoDeleteStatement = createMusicInfoDeleteStatement();
    const musicInfoOrderDeleteStatement = createMusicInfoOrderDeleteStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    const db = getDB();
    db.transaction((fromId, ids, musicInfos, toListAll) => {
        for (const id of ids) {
            musicInfoDeleteStatement.run({ listId: fromId, id });
            musicInfoOrderDeleteStatement.run({ listId: fromId, id });
        }
        musicInfoOrderDeleteByListIdStatement.run(toId);
        for (const music of musicInfos) {
            musicInfoInsertStatement.run(music);
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
        for (const music of toListAll) {
            musicInfoOrderInsertStatement.run({
                listId: music.listId,
                musicInfoId: music.id,
                order: music.order,
            });
        }
    })(fromId, ids, musicInfos, toListAll);
};
/**
 * 批量移除列表内音乐
 * @param listId 列表id
 * @param ids 音乐id
 */
const removeMusicInfos = (listId, ids) => {
    const musicInfoDeleteStatement = createMusicInfoDeleteStatement();
    const musicInfoOrderDeleteStatement = createMusicInfoOrderDeleteStatement();
    const db = getDB();
    db.transaction((listId, ids) => {
        for (const id of ids) {
            musicInfoDeleteStatement.run({ listId, id });
            musicInfoOrderDeleteStatement.run({ listId, id });
        }
    })(listId, ids);
};
/**
 * 清空列表内歌曲
 * @param listId 列表id
 */
const removeMusicInfoByListId = (ids) => {
    const db = getDB();
    const musicInfoDeleteByListIdStatement = createMusicInfoDeleteByListIdStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    db.transaction((ids) => {
        for (const id of ids) {
            musicInfoDeleteByListIdStatement.run(id);
            musicInfoOrderDeleteByListIdStatement.run(id);
        }
    })(ids);
};
/**
 * 创建根据列表Id与音乐id查询音乐信息
 * @param listId 列表id
 * @param musicInfoId 音乐id
 * @returns
 */
const queryMusicInfoByListIdAndMusicInfoId = (listId, musicInfoId) => {
    const musicInfoByListAndMusicInfoIdQueryStatement = createMusicInfoByListAndMusicInfoIdQueryStatement();
    return musicInfoByListAndMusicInfoIdQueryStatement.get({
        listId,
        musicInfoId,
    });
};
/**
 * 创建根据音乐id查询所有列表的音乐信息
 * @param id 音乐id
 * @returns
 */
const queryMusicInfoByMusicInfoId = (id) => {
    const musicInfoByMusicInfoIdQueryStatement = createMusicInfoByMusicInfoIdQueryStatement();
    return musicInfoByMusicInfoIdQueryStatement.all(id);
};
/**
 * 批量更新歌曲位置
 * @param listId 列表id
 * @param musicInfoOrders 音乐顺序
 */
const updateMusicInfoOrder = (listId, musicInfoOrders) => {
    const db = getDB();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    db.transaction((listId, musicInfoOrders) => {
        musicInfoOrderDeleteByListIdStatement.run(listId);
        for (const orderInfo of musicInfoOrders)
            musicInfoOrderInsertStatement.run(orderInfo);
    })(listId, musicInfoOrders);
};
/**
 * 覆盖列表内的歌曲
 * @param listId 列表id
 * @param musicInfos 歌曲列表
 */
const overwriteMusicInfo = (listId, musicInfos) => {
    const db = getDB();
    const musicInfoDeleteByListIdStatement = createMusicInfoDeleteByListIdStatement();
    const musicInfoOrderDeleteByListIdStatement = createMusicInfoOrderDeleteByListIdStatement();
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    db.transaction((listId, musicInfos) => {
        musicInfoDeleteByListIdStatement.run(listId);
        musicInfoOrderDeleteByListIdStatement.run(listId);
        for (const musicInfo of musicInfos) {
            musicInfoInsertStatement.run(musicInfo);
            musicInfoOrderInsertStatement.run({
                listId: musicInfo.listId,
                musicInfoId: musicInfo.id,
                order: musicInfo.order,
            });
        }
    })(listId, musicInfos);
};
/**
 * 覆盖整个列表
 * @param lists 列表
 * @param musicInfos 歌曲列表
 */
const overwriteListData = (lists, musicInfos) => {
    const db = getDB();
    const listClearStatement = createListClearStatement();
    const listInsertStatement = createListInsertStatement();
    const musicInfoClearStatement = createMusicInfoClearStatement();
    const musicInfoInsertStatement = createMusicInfoInsertStatement();
    const musicInfoOrderClearStatement = createMusicInfoOrderClearStatement();
    const musicInfoOrderInsertStatement = createMusicInfoOrderInsertStatement();
    db.transaction((lists, musicInfos) => {
        listClearStatement.run();
        for (const list of lists) {
            listInsertStatement.run({
                id: list.id,
                name: list.name,
                source: list.source,
                sourceListId: list.sourceListId,
                locationUpdateTime: list.locationUpdateTime,
                position: list.position,
            });
        }
        musicInfoClearStatement.run();
        musicInfoOrderClearStatement.run();
        for (const musicInfo of musicInfos) {
            musicInfoInsertStatement.run(musicInfo);
            musicInfoOrderInsertStatement.run({
                listId: musicInfo.listId,
                musicInfoId: musicInfo.id,
                order: musicInfo.order,
            });
        }
    })(lists, musicInfos);
};

;// ./src/main/worker/dbService/modules/list/index.ts



let userLists;
let musicLists = new Map();
const toDBMusicInfo = (musicInfos, listId, offset = 0) => {
    return musicInfos.map((info, index) => {
        return {
            ...info,
            listId,
            meta: JSON.stringify(info.meta),
            order: offset + index,
        };
    });
};
/**
 * 获取所有用户列表
 * @returns
 */
const getAllUserList = () => {
    userLists ??= queryAllUserList();
    return userLists.map((list) => {
        const { position, ...newList } = list;
        return newList;
    });
};
/**
 * 批量创建列表
 * @param position 列表位置
 * @param lists 列表信息
 */
const createUserLists = (position, lists) => {
    userLists ??= queryAllUserList();
    if (position < 0 || position >= userLists.length) {
        const newLists = lists.map((list, index) => {
            return {
                ...list,
                position: position + index,
            };
        });
        insertUserLists(newLists);
        userLists = [...userLists, ...newLists];
    }
    else {
        const newUserLists = [...userLists];
        // @ts-expect-error
        newUserLists.splice(position, 0, ...lists);
        newUserLists.forEach((list, index) => {
            list.position = index;
        });
        insertUserLists(newUserLists, true);
        userLists = newUserLists;
    }
};
/**
 * 覆盖列表
 * @param lists 列表信息
 */
// const setUserLists = (lists: LX.List.UserListInfo[]) => {
//   const newUserLists: LX.DBService.UserListInfo[] = lists.map((list, index) => {
//     return {
//       ...list,
//       position: index,
//     }
//   })
//   insertUserLists(newUserLists, true)
//   userLists = newUserLists
// }
/**
 * 批量删除列表
 * @param ids 列表ids
 */
const removeUserLists = (ids) => {
    deleteUserLists(ids);
    userLists &&= queryAllUserList();
};
/**
 * 批量更新列表信息
 * @param lists 列表信息
 */
const list_updateUserLists = (lists) => {
    const positionMap = new Map();
    for (const list of userLists) {
        positionMap.set(list.id, list.position);
    }
    const dbList = lists
        .map((list) => {
        const position = positionMap.get(list.id);
        if (position == null)
            return null;
        return {
            ...list,
            position,
        };
    })
        .filter(Boolean);
    updateUserLists(dbList);
    userLists &&= queryAllUserList();
};
/**
 * 批量更新列表位置
 * @param position 列表位置
 * @param ids 列表ids
 */
const updateUserListsPosition = (position, ids) => {
    userLists ??= queryAllUserList();
    const newUserLists = [...userLists];
    const updateLists = [];
    for (let i = newUserLists.length - 1; i >= 0; i--) {
        if (ids.includes(newUserLists[i].id)) {
            const list = newUserLists.splice(i, 1)[0];
            list.locationUpdateTime = Date.now();
            updateLists.push(list);
        }
    }
    position = Math.min(newUserLists.length, position);
    newUserLists.splice(position, 0, ...updateLists);
    newUserLists.forEach((list, index) => {
        list.position = index;
    });
    insertUserLists(newUserLists, true);
    userLists = newUserLists;
};
/**
 * 根据列表ID获取列表内歌曲
 * @param listId 列表ID
 * @returns 列表内歌曲
 */
const getListMusics = (listId) => {
    let targetList = musicLists.get(listId);
    if (targetList == null) {
        targetList = queryMusicInfoByListId(listId).map((info) => {
            return {
                id: info.id,
                name: info.name,
                singer: info.singer,
                source: info.source,
                interval: info.interval,
                meta: JSON.parse(info.meta),
            };
        });
        musicLists.set(listId, targetList);
    }
    return targetList;
};
/**
 * 覆盖列表内的歌曲
 * @param listId 列表id
 * @param musicInfos 歌曲列表
 */
const musicOverwrite = (listId, musicInfos) => {
    let targetList = getListMusics(listId);
    overwriteMusicInfo(listId, toDBMusicInfo(musicInfos, listId));
    if (targetList) {
        targetList.splice(0, targetList.length);
        arrPush(targetList, musicInfos);
    }
};
/**
 * 批量添加歌曲
 * @param listId 列表id
 * @param musicInfos 添加的歌曲信息
 * @param addMusicLocationType 添加在到列表的位置
 */
const musicsAdd = (listId, musicInfos, addMusicLocationType) => {
    let targetList = getListMusics(listId);
    const set = new Set();
    for (const item of targetList)
        set.add(item.id);
    musicInfos = musicInfos.filter((item) => {
        if (set.has(item.id))
            return false;
        set.add(item.id);
        return true;
    });
    switch (addMusicLocationType) {
        case 'top':
            insertMusicInfoListAndRefreshOrder(toDBMusicInfo(musicInfos, listId), listId, toDBMusicInfo(targetList, listId, musicInfos.length));
            arrUnshift(targetList, musicInfos);
            break;
        case 'bottom':
        default:
            insertMusicInfoList(toDBMusicInfo(musicInfos, listId, targetList.length));
            arrPush(targetList, musicInfos);
            break;
    }
};
/**
 * 批量删除歌曲
 * @param listId 列表Id
 * @param ids 要删除歌曲的id
 */
const musicsRemove = (listId, ids) => {
    let targetList = getListMusics(listId);
    if (!targetList.length)
        return;
    removeMusicInfos(listId, ids);
    const idsSet = new Set(ids);
    musicLists.set(listId, targetList.filter((mInfo) => !idsSet.has(mInfo.id)));
};
/**
 * 批量移动歌曲
 * @param fromId 源列表id
 * @param toId 目标列表id
 * @param musicInfos 添加的歌曲信息
 * @param addMusicLocationType 添加在到列表的位置
 */
const musicsMove = (fromId, toId, musicInfos, addMusicLocationType) => {
    let fromList = getListMusics(fromId);
    let toList = getListMusics(toId);
    const ids = musicInfos.map((musicInfo) => musicInfo.id);
    let listSet = new Set();
    for (const item of toList)
        listSet.add(item.id);
    musicInfos = musicInfos.filter((item) => {
        if (listSet.has(item.id))
            return false;
        listSet.add(item.id);
        return true;
    });
    switch (addMusicLocationType) {
        case 'top':
            moveMusicInfoAndRefreshOrder(fromId, ids, toId, toDBMusicInfo(musicInfos, toId), toDBMusicInfo(toList, toId, musicInfos.length));
            arrUnshift(toList, musicInfos);
            break;
        case 'bottom':
        default:
            moveMusicInfo(fromId, ids, toDBMusicInfo(musicInfos, toId, toList.length));
            arrPush(toList, musicInfos);
            break;
    }
    listSet = new Set(ids);
    musicLists.set(fromId, fromList.filter((mInfo) => !listSet.has(mInfo.id)));
};
/**
 * 批量更新歌曲信息
 * @param musicInfos 歌曲&列表信息
 */
const musicsUpdate = (musicInfos) => {
    updateMusicInfos(musicInfos.map(({ id, musicInfo }) => {
        return {
            ...musicInfo,
            listId: id,
            meta: JSON.stringify(musicInfo.meta),
            order: 0,
        };
    }));
    for (const { id, musicInfo } of musicInfos) {
        const targetList = musicLists.get(id);
        if (targetList == null)
            continue;
        const targetMusic = targetList.find((item) => item.id == musicInfo.id);
        if (!targetMusic)
            continue;
        targetMusic.name = musicInfo.name;
        targetMusic.singer = musicInfo.singer;
        targetMusic.source = musicInfo.source;
        targetMusic.interval = musicInfo.interval;
        targetMusic.meta = musicInfo.meta;
    }
};
/**
 * 清空列表内的歌曲
 * @param listId 列表Id
 */
const musicsClear = (ids) => {
    removeMusicInfoByListId(ids);
    for (const id of ids) {
        const targetList = musicLists.get(id);
        if (!targetList)
            continue;
        targetList.splice(0, targetList.length);
    }
};
/**
 * 批量更新歌曲位置
 * @param listId 列表id
 * @param position 新位置
 * @param ids 要更新位置的歌曲id
 */
const musicsPositionUpdate = (listId, position, ids) => {
    let targetList = getListMusics(listId);
    if (!targetList.length)
        return;
    let newTargetList = [...targetList];
    const infos = [];
    const map = new Map();
    for (const item of newTargetList)
        map.set(item.id, item);
    for (const id of ids) {
        infos.push(map.get(id));
        map.delete(id);
    }
    newTargetList = newTargetList.filter((mInfo) => map.has(mInfo.id));
    arrPushByPosition(newTargetList, infos, Math.min(position, newTargetList.length));
    updateMusicInfoOrder(listId, newTargetList.map((info, index) => {
        return {
            listId,
            musicInfoId: info.id,
            order: index,
        };
    }));
    musicLists.set(listId, newTargetList);
};
/**
 * 覆盖所有列表数据
 * @param myListData 完整列表数据
 */
const listDataOverwrite = (myListData) => {
    const dbLists = [];
    const listData = {
        ...myListData,
        tempList: myListData.tempList ?? getListMusics(LIST_IDS.TEMP),
    };
    const dbMusicInfos = [
        ...toDBMusicInfo(listData.defaultList, LIST_IDS.DEFAULT),
        ...toDBMusicInfo(listData.loveList, LIST_IDS.LOVE),
        ...toDBMusicInfo(listData.tempList, LIST_IDS.TEMP),
    ];
    listData.userList.forEach(({ list, ...listInfo }, index) => {
        dbLists.push({ ...listInfo, position: index });
        arrPush(dbMusicInfos, toDBMusicInfo(list, listInfo.id));
    });
    overwriteListData(dbLists, dbMusicInfos);
    if (userLists)
        userLists.splice(0, userLists.length, ...dbLists);
    else
        userLists = dbLists;
    musicLists.clear();
    musicLists.set(LIST_IDS.DEFAULT, listData.defaultList);
    musicLists.set(LIST_IDS.LOVE, listData.loveList);
    musicLists.set(LIST_IDS.TEMP, listData.tempList);
    for (const list of listData.userList)
        musicLists.set(list.id, list.list);
};
/**
 * 检查音乐是否存在列表中
 * @param listId 列表id
 * @param musicInfoId 音乐id
 * @returns
 */
const checkListExistMusic = (listId, musicInfoId) => {
    const musicInfo = queryMusicInfoByListIdAndMusicInfoId(listId, musicInfoId);
    return musicInfo != null;
};
/**
 * 获取所有存在该音乐的列表id
 * @param musicInfoId 音乐id
 * @returns
 */
const getMusicExistListIds = (musicInfoId) => {
    const musicInfos = queryMusicInfoByMusicInfoId(musicInfoId);
    return musicInfos.map((m) => m.listId);
};

;// ./src/main/worker/dbService/modules/lyric/statements.ts

const RAW_LYRIC = 'raw';
const EDITED_LYRIC = 'edited';
/**
 * 创建歌词查询语句
 * @returns 查询语句
 */
const createLyricQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "type", "text", "source"
    FROM "main"."lyric"
    WHERE "id"=?
    `);
};
/**
 * 创建原始歌词查询语句
 * @returns 查询语句
 */
const createRawLyricQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "type", "text"
    FROM "main"."lyric"
    WHERE "id"=? AND "source"='${RAW_LYRIC}'
    `);
};
/**
 * 创建原始歌词插入语句
 * @returns 插入语句
 */
const createRawLyricInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."lyric" ("id", "type", "text", "source")
    VALUES (@id, @type, @text, '${RAW_LYRIC}')`);
};
/**
 * 创建原始歌词清空语句
 * @returns 清空语句
 */
const createRawLyricClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."lyric"
    WHERE "source"='${RAW_LYRIC}'
  `);
};
/**
 * 创建原始歌词删除语句
 * @returns 删除语句
 */
const createRawLyricDeleteStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."lyric"
    WHERE "id"=? AND "source"='${RAW_LYRIC}'
  `);
};
/**
 * 创建原始歌词更新语句
 * @returns 更新语句
 */
const createRawLyricUpdateStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."lyric"
    SET "text"=@text
    WHERE "id"=@id AND "source"='${RAW_LYRIC}' AND "type"=@type`);
};
/**
 * 创建原始歌词数量统计语句
 * @returns 统计语句
 */
const createRawLyricCountStatement = () => {
    const db = getDB();
    return db.prepare(`SELECT COUNT(*) as count FROM "main"."lyric" WHERE "source"='${RAW_LYRIC}'`);
};
/**
 * 创建已编辑歌词查询语句
 * @returns 查询语句
 */
const createEditedLyricQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "type", "text"
    FROM "main"."lyric"
    WHERE "id"=? AND "source"='${EDITED_LYRIC}'
    `);
};
/**
 * 创建已编辑歌词插入语句
 * @returns 插入语句
 */
const createEditedLyricInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."lyric" ("id", "type", "text", "source")
    VALUES (@id, @type, @text, '${EDITED_LYRIC}')`);
};
/**
 * 创建已编辑歌词清空语句
 * @returns 清空语句
 */
const createEditedLyricClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."lyric"
    WHERE "source"='${EDITED_LYRIC}'
  `);
};
/**
 * 创建已编辑歌词删除语句
 * @returns 删除语句
 */
const createEditedLyricDeleteStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."lyric"
    WHERE "id"=? AND "source"='${EDITED_LYRIC}'
  `);
};
/**
 * 创建已编辑歌词更新语句
 * @returns 更新语句
 */
const createEditedLyricUpdateStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."lyric"
    SET "text"=@text
    WHERE "id"=@id AND "source"='${EDITED_LYRIC}' AND "type"=@type`);
};
/**
 * 创建已编辑歌词数量统计语句
 * @returns 统计语句
 */
const createEditedLyricCountStatement = () => {
    const db = getDB();
    return db.prepare(`SELECT COUNT(*) as count FROM "main"."lyric" WHERE "source"='${EDITED_LYRIC}'`);
};

;// ./src/main/worker/dbService/modules/lyric/dbHelper.ts


/**
 * 查询原始歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const queryLyric = (id) => {
    const lyricQueryStatement = createLyricQueryStatement();
    return lyricQueryStatement.all(id);
};
/**
 * 查询原始歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const queryRawLyric = (id) => {
    const rawLyricQueryStatement = createRawLyricQueryStatement();
    return rawLyricQueryStatement.all(id);
};
/**
 * 批量插入原始歌词
 * @param lyrics 列表
 */
const insertRawLyric = (lyrics) => {
    const db = getDB();
    const rawLyricInsertStatement = createRawLyricInsertStatement();
    db.transaction((lyrics) => {
        for (const lyric of lyrics)
            rawLyricInsertStatement.run(lyric);
    })(lyrics);
};
/**
 * 批量删除原始歌词
 * @param ids 列表
 */
const deleteRawLyric = (ids) => {
    const db = getDB();
    const rawLyricDeleteStatement = createRawLyricDeleteStatement();
    db.transaction((ids) => {
        for (const id of ids)
            rawLyricDeleteStatement.run(id);
    })(ids);
};
/**
 * 批量更新原始歌词
 * @param lyrics 列表
 */
const updateRawLyric = (lyrics) => {
    const db = getDB();
    const rawLyricUpdateStatement = createRawLyricUpdateStatement();
    db.transaction((lyrics) => {
        for (const lyric of lyrics)
            rawLyricUpdateStatement.run(lyric);
    })(lyrics);
};
/**
 * 清空原始歌词
 */
const clearRawLyric = () => {
    const rawLyricClearStatement = createRawLyricClearStatement();
    rawLyricClearStatement.run();
};
/**
 * 统计已编辑歌词数量
 */
const countRawLyric = () => {
    const countStatement = createRawLyricCountStatement();
    return countStatement.get().count;
};
/**
 * 查询已编辑歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const queryEditedLyric = (id) => {
    const rawLyricQueryStatement = createEditedLyricQueryStatement();
    return rawLyricQueryStatement.all(id);
};
/**
 * 批量插入已编辑歌词
 * @param lyrics 列表
 */
const insertEditedLyric = (lyrics) => {
    const db = getDB();
    const rawLyricInsertStatement = createEditedLyricInsertStatement();
    db.transaction((lyrics) => {
        for (const lyric of lyrics)
            rawLyricInsertStatement.run(lyric);
    })(lyrics);
};
/**
 * 批量删除已编辑歌词
 * @param ids 列表
 */
const deleteEditedLyric = (ids) => {
    const db = getDB();
    const rawLyricDeleteStatement = createEditedLyricDeleteStatement();
    db.transaction((ids) => {
        for (const id of ids)
            rawLyricDeleteStatement.run(id);
    })(ids);
};
/**
 * 批量更新已编辑歌词
 * @param lyrics 列表
 */
const updateEditedLyric = (lyrics) => {
    const db = getDB();
    const rawLyricUpdateStatement = createEditedLyricUpdateStatement();
    db.transaction((lyrics) => {
        for (const lyric of lyrics)
            rawLyricUpdateStatement.run(lyric);
    })(lyrics);
};
/**
 * 清空已编辑歌词
 */
const clearEditedLyric = () => {
    const rawLyricClearStatement = createEditedLyricClearStatement();
    rawLyricClearStatement.run();
};
/**
 * 统计已编辑歌词数量
 */
const countEditedLyric = () => {
    const countStatement = createEditedLyricCountStatement();
    return countStatement.get().count;
};

;// ./src/main/worker/dbService/modules/lyric/index.ts

const keys = ['lyric', 'tlyric', 'rlyric', 'lxlyric'];
const toDBLyric = (id, source, lyricInfo) => {
    return keys.map((k) => [k, lyricInfo[k]]).filter(([k, t]) => t != null).map(([k, t]) => {
        return {
            id,
            type: k,
            text: Buffer.from(t).toString('base64'),
            source,
        };
    });
};
/**
 * 获取歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const getPlayerLyric = (id) => {
    const lyrics = queryLyric(id);
    let lyricInfo = {
        lyric: '',
    };
    let rawLyricInfo = {
        lyric: '',
    };
    for (const lyric of lyrics) {
        switch (lyric.source) {
            case 'edited':
                if (lyric.type == 'lyric')
                    lyricInfo.lyric = Buffer.from(lyric.text, 'base64').toString();
                else if (lyric.text != null)
                    lyricInfo[lyric.type] = Buffer.from(lyric.text, 'base64').toString();
                break;
            default:
                if (lyric.type == 'lyric')
                    rawLyricInfo.lyric = Buffer.from(lyric.text, 'base64').toString();
                else if (lyric.text != null)
                    rawLyricInfo[lyric.type] = Buffer.from(lyric.text, 'base64').toString();
                break;
        }
    }
    return lyricInfo.lyric
        ? {
            ...lyricInfo,
            rawlrcInfo: rawLyricInfo,
        }
        : {
            ...rawLyricInfo,
            rawlrcInfo: rawLyricInfo,
        };
};
/**
 * 获取原始歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const getRawLyric = (id) => {
    const lyrics = queryRawLyric(id);
    let lyricInfo = {
        lyric: '',
    };
    for (const lyric of lyrics) {
        if (lyric.type == 'lyric')
            lyricInfo.lyric = Buffer.from(lyric.text, 'base64').toString();
        else if (lyric.text != null)
            lyricInfo[lyric.type] = Buffer.from(lyric.text, 'base64').toString();
    }
    return lyricInfo;
};
/**
 * 保存原始歌词信息
 * @param id 歌曲id
 * @param lyricInfo 歌词信息
 */
const rawLyricAdd = (id, lyricInfo) => {
    insertRawLyric(toDBLyric(id, 'raw', lyricInfo));
};
/**
 * 删除原始歌词信息
 * @param ids 歌曲id
 */
const rawLyricRemove = (ids) => {
    deleteRawLyric(ids);
};
/**
 * 更新原始歌词信息
 * @param id 歌曲id
 * @param lyricInfo 歌词信息
 */
const rawLyricUpdate = (id, lyricInfo) => {
    updateRawLyric(toDBLyric(id, 'raw', lyricInfo));
};
/**
 * 清空原始歌词信息
 */
const rawLyricClear = () => {
    clearRawLyric();
};
/**
 * 统计原始歌词数量
 */
const rawLyricCount = () => {
    return countRawLyric();
};
/**
 * 获取已编辑歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
const getEditedLyric = (id) => {
    const lyrics = queryEditedLyric(id);
    let lyricInfo = {
        lyric: '',
    };
    for (const lyric of lyrics) {
        if (lyric.type == 'lyric')
            lyricInfo.lyric = Buffer.from(lyric.text, 'base64').toString();
        else if (lyric.text != null)
            lyricInfo[lyric.type] = Buffer.from(lyric.text, 'base64').toString();
    }
    return lyricInfo;
};
/**
 * 保存已编辑歌词信息
 * @param id 歌曲id
 * @param lyricInfo 歌词信息
 */
const editedLyricAdd = (id, lyricInfo) => {
    insertEditedLyric(toDBLyric(id, 'edited', lyricInfo));
};
/**
 * 删除已编辑歌词信息
 * @param ids 歌曲id
 */
const editedLyricRemove = (ids) => {
    deleteEditedLyric(ids);
};
/**
 * 更新已编辑歌词信息
 * @param id 歌曲id
 * @param lyricInfo 歌词信息
 */
const editedLyricUpdate = (id, lyricInfo) => {
    updateEditedLyric(toDBLyric(id, 'edited', lyricInfo));
};
/**
 * 清空已编辑歌词信息
 */
const editedLyricClear = () => {
    clearEditedLyric();
};
/**
 * 新增或更新已编辑歌词信息
 * @param id 歌曲id
 * @param lyricInfo 歌词信息
 */
const editedLyricUpdateAddAndUpdate = (id, lyricInfo) => {
    const lyrics = queryEditedLyric(id);
    if (lyrics.length)
        updateEditedLyric(toDBLyric(id, 'edited', lyricInfo));
    else
        insertEditedLyric(toDBLyric(id, 'edited', lyricInfo));
};
/**
 * 统计已编辑歌词数量
 */
const editedLyricCount = () => {
    return countEditedLyric();
};

;// ./src/main/worker/dbService/modules/music_url/statements.ts
/* unused harmony import specifier */ var statements_getDB;

/**
 * 创建歌曲url查询语句
 * @returns 查询语句
 */
const createQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "url"
    FROM "main"."music_url"
    WHERE "id"=?
    `);
};
/**
 * 创建歌曲url插入语句
 * @returns 插入语句
 */
const createInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."music_url" ("id", "url")
    VALUES (@id, @url)`);
};
/**
 * 创建歌曲url清空语句
 * @returns 清空语句
 */
const createClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."music_url"
  `);
};
/**
 * 创建歌曲url删除语句
 * @returns 删除语句
 */
const createDeleteStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."music_url"
    WHERE "id"=?
  `);
};
/**
 * 创建歌曲url更新语句
 * @returns 更新语句
 */
const createUpdateStatement = () => {
    const db = statements_getDB();
    return db.prepare(`
    UPDATE "main"."music_url"
    SET "url"=@url
    WHERE "id"=@id`);
};
/**
 * 创建数量统计语句
 * @returns 统计语句
 */
const createCountStatement = () => {
    const db = getDB();
    return db.prepare('SELECT COUNT(*) as count FROM "main"."music_url"');
};

;// ./src/main/worker/dbService/modules/music_url/dbHelper.ts


/**
 * 查询歌曲url
 * @param id 歌曲id
 * @returns url
 */
const queryMusicUrl = (id) => {
    const queryStatement = createQueryStatement();
    return queryStatement.get(id)?.url ?? null;
};
/**
 * 批量插入歌曲url
 * @param urlInfo 列表
 */
const insertMusicUrl = (urlInfo) => {
    const db = getDB();
    const insertStatement = createInsertStatement();
    const deleteStatement = createDeleteStatement();
    db.transaction((urlInfo) => {
        for (const info of urlInfo) {
            deleteStatement.run(info.id);
            insertStatement.run(info);
        }
    })(urlInfo);
};
/**
 * 批量删除歌曲url
 * @param ids 列表
 */
const deleteMusicUrl = (ids) => {
    const db = getDB();
    const deleteStatement = createDeleteStatement();
    db.transaction((ids) => {
        for (const id of ids)
            deleteStatement.run(id);
    })(ids);
};
/**
 * 批量更新歌曲url
 * @param urlInfo 列表
 */
// export const updateMusicUrl = (urlInfo: LX.DBService.MusicUrlInfo[]) => {
//   const db = getDB()
//   const updateStatement = createUpdateStatement()
//   db.transaction((urlInfo: LX.DBService.MusicUrlInfo[]) => {
//     for (const info of urlInfo) updateStatement.run(info)
//   })(urlInfo)
// }
/**
 * 清空歌曲url
 */
const clearMusicUrl = () => {
    const clearStatement = createClearStatement();
    clearStatement.run();
};
/**
 * 统计歌曲信息数量
 */
const countMusicUrl = () => {
    const countStatement = createCountStatement();
    return countStatement.get().count;
};

;// ./src/main/worker/dbService/modules/music_url/index.ts

/**
 * 获取歌曲url
 * @param id 歌曲id
 * @returns 歌曲url
 */
const getMusicUrl = (id) => {
    const url = queryMusicUrl(id);
    return url;
};
/**
 * 保存歌曲url
 * @param urlInfos url信息
 */
const musicUrlSave = (urlInfos) => {
    insertMusicUrl(urlInfos);
};
/**
 * 删除歌曲url
 * @param ids 歌曲id
 */
const musicUrlRemove = (ids) => {
    deleteMusicUrl(ids);
};
/**
 * 清空歌曲url
 */
const musicUrlClear = () => {
    clearMusicUrl();
};
/**
 * 统计歌曲url数量
 */
const musicUrlCount = () => {
    return countMusicUrl();
};

;// ./src/main/worker/dbService/modules/music_other_source/statements.ts

/**
 * 创建歌曲信息查询语句
 * @returns 查询语句
 */
const statements_createMusicInfoQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "id", "name", "singer", "source", "meta"
    FROM "main"."music_info_other_source"
    WHERE source_id=?
    ORDER BY "order" ASC
  `);
};
/**
 * 创建歌曲信息插入语句
 * @returns 插入语句
 */
const statements_createMusicInfoInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."music_info_other_source" ("id", "name", "singer", "source", "meta", "source_id", "order")
    VALUES (@id, @name, @singer, @source, @meta, @source_id, @order)
  `);
};
/**
 * 创建歌曲信息清空语句
 * @returns 清空语句
 */
const statements_createMusicInfoClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."music_info_other_source"
  `);
};
/**
 * 创建歌曲信息删除语句
 * @returns 删除语句
 */
const statements_createMusicInfoDeleteStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."music_info_other_source"
    WHERE "source_id"=?
  `);
};
/**
 * 创建数量统计语句
 * @returns 统计语句
 */
const statements_createCountStatement = () => {
    const db = getDB();
    return db.prepare('SELECT COUNT(*) as count FROM "main"."music_info_other_source"');
};

;// ./src/main/worker/dbService/modules/music_other_source/dbHelper.ts


/**
 * 查询歌曲信息
 * @param id 歌曲id
 * @returns 歌曲信息
 */
const queryMusicInfo = (id) => {
    const musicInfoQueryStatement = statements_createMusicInfoQueryStatement();
    return musicInfoQueryStatement.all(id);
};
/**
 * 批量插入歌曲信息
 * @param musicInfos 列表
 */
const insertMusicInfo = (musicInfos) => {
    const db = getDB();
    const musicInfoInsertStatement = statements_createMusicInfoInsertStatement();
    db.transaction((musicInfos) => {
        for (const info of musicInfos)
            musicInfoInsertStatement.run(info);
    })(musicInfos);
};
/**
 * 批量删除歌曲信息
 * @param ids 列表
 */
const deleteMusicInfo = (ids) => {
    const db = getDB();
    const musicInfoDeleteStatement = statements_createMusicInfoDeleteStatement();
    db.transaction((ids) => {
        for (const id of ids)
            musicInfoDeleteStatement.run(id);
    })(ids);
};
/**
 * 清空歌曲信息
 */
const clearMusicInfo = () => {
    const musicInfoClearStatement = statements_createMusicInfoClearStatement();
    musicInfoClearStatement.run();
};
/**
 * 统计歌曲信息数量
 */
const countMusicInfo = () => {
    const countStatement = statements_createCountStatement();
    return countStatement.get().count;
};

;// ./src/main/worker/dbService/modules/music_other_source/index.ts

const music_other_source_toDBMusicInfo = (id, musicInfos) => {
    return musicInfos.map((info, index) => {
        return {
            ...info,
            meta: JSON.stringify(info.meta),
            source_id: id,
            order: index,
        };
    });
};
/**
 * 获取歌曲信息
 * @param id 歌曲id
 * @returns 歌词信息
 */
const getMusicInfoOtherSource = (id) => {
    const list = queryMusicInfo(id)
        .sort((a, b) => a.order - b.order)
        .map((info) => {
        return {
            id: info.id,
            name: info.name,
            singer: info.singer,
            source: info.source,
            interval: info.interval,
            meta: JSON.parse(info.meta),
        };
    });
    return list;
};
/**
 * 保存歌曲信息信息
 * @param id 歌曲id
 * @param musicInfos 歌词信息
 */
const musicInfoOtherSourceAdd = (id, musicInfos) => {
    insertMusicInfo(music_other_source_toDBMusicInfo(id, musicInfos));
};
/**
 * 删除歌曲信息信息
 * @param ids 歌曲id
 */
const musicInfoOtherSourceRemove = (ids) => {
    deleteMusicInfo(ids);
};
/**
 * 清空歌曲信息信息
 */
const musicInfoOtherSourceClear = () => {
    clearMusicInfo();
};
/**
 * 统计歌曲信息信息数量
 */
const musicInfoOtherSourceCount = () => {
    return countMusicInfo();
};

;// ./src/main/worker/dbService/modules/download/statements.ts

/**
 * 创建下载列表查询语句
 * @returns 查询语句
 */
const statements_createQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "id", "isComplate", "status", "statusText", "progress_downloaded", "progress_total", "url", "quality", "ext", "fileName", "filePath", "musicInfo", "position"
    FROM download_list
    ORDER BY "position" ASC
  `);
};
/**
 * 创建下载记录插入语句
 * @returns 插入语句
 */
const statements_createInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."download_list" ("id", "isComplate", "status", "statusText", "progress_downloaded", "progress_total", "url", "quality", "ext", "fileName", "filePath", "musicInfo", "position")
    VALUES (@id, @isComplate, @status, @statusText, @progress_downloaded, @progress_total, @url, @quality, @ext, @fileName, @filePath, @musicInfo, @position)`);
};
/**
 * 创建下载记录清空语句
 * @returns 清空语句
 */
const statements_createClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."download_list"
  `);
};
/**
 * 创建下载记录删除语句
 * @returns 删除语句
 */
const statements_createDeleteStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."download_list"
    WHERE "id"=?
  `);
};
/**
 * 创建下载记录更新语句
 * @returns 更新语句
 */
const statements_createUpdateStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."download_list"
    SET "isComplate"=@isComplate, "status"=@status, "statusText"=@statusText, "progress_downloaded"=@progress_downloaded, "progress_total"=@progress_total, "url"=@url, "filePath"=@filePath
    WHERE "id"=@id`);
};
/**
 * 创建下载记录顺序更新语句
 * @returns 更新语句
 */
const createUpdatePositionStatement = () => {
    const db = getDB();
    return db.prepare(`
    UPDATE "main"."download_list"
    SET "position"=@position
    WHERE "id"=@id`);
};

;// ./src/main/worker/dbService/modules/download/dbHelper.ts


/**
 * 查询下载歌曲列表
 */
const queryDownloadList = () => {
    const queryStatement = statements_createQueryStatement();
    return queryStatement.all();
};
/**
 * 批量插入下载歌曲并刷新顺序
 * @param mInfos 列表
 */
const insertDownloadList = (mInfos, listPositions) => {
    const db = getDB();
    const insertStatement = statements_createInsertStatement();
    const updatePositionStatement = createUpdatePositionStatement();
    db.transaction((mInfos) => {
        for (const info of mInfos)
            insertStatement.run(info);
        for (const info of listPositions)
            updatePositionStatement.run(info);
    })(mInfos);
};
/**
 * 批量删除下载歌曲
 * @param ids 列表
 */
const deleteDownloadList = (ids) => {
    const db = getDB();
    const deleteStatement = statements_createDeleteStatement();
    db.transaction((ids) => {
        for (const id of ids)
            deleteStatement.run(id);
    })(ids);
};
/**
 * 批量更新下载歌曲
 * @param urlInfo 列表
 */
const updateDownloadList = (urlInfo) => {
    const db = getDB();
    const updateStatement = statements_createUpdateStatement();
    db.transaction((urlInfo) => {
        for (const info of urlInfo)
            updateStatement.run(info);
    })(urlInfo);
};
/**
 * 清空下载歌曲列表
 */
const clearDownloadList = () => {
    const clearStatement = statements_createClearStatement();
    clearStatement.run();
};

;// ./src/main/worker/dbService/modules/download/index.ts


let list;
const toDBDownloadInfo = (musicInfos, offset = 0) => {
    return musicInfos.map((info, index) => {
        return {
            id: info.id,
            isComplate: info.isComplate ? 1 : 0,
            status: info.status,
            statusText: info.statusText,
            progress_downloaded: info.downloaded,
            progress_total: info.total,
            url: info.metadata.url,
            quality: info.metadata.quality,
            ext: info.metadata.ext,
            fileName: info.metadata.fileName,
            filePath: info.metadata.filePath,
            musicInfo: JSON.stringify(info.metadata.musicInfo),
            position: offset + index,
        };
    });
};
const initDownloadList = () => {
    list = queryDownloadList().map((item) => {
        const musicInfo = JSON.parse(item.musicInfo);
        return {
            id: item.id,
            isComplate: item.isComplate == 1,
            status: item.status,
            statusText: item.statusText,
            downloaded: item.progress_downloaded,
            total: item.progress_total,
            progress: item.progress_total
                ? parseInt((item.progress_downloaded / item.progress_total).toFixed(2)) * 100
                : 0,
            speed: '',
            writeQueue: 0,
            metadata: {
                musicInfo,
                url: item.url,
                quality: item.quality,
                ext: item.ext,
                fileName: item.fileName,
                filePath: item.filePath,
            },
        };
    });
};
/**
 * 获取下载列表
 * @returns 下载列表
 */
const getDownloadList = () => {
    if (!list)
        initDownloadList();
    return list;
};
/**
 * 添加下载歌曲信息
 * @param downloadInfos url信息
 */
const downloadInfoSave = (downloadInfos, addMusicLocationType) => {
    if (!list)
        initDownloadList();
    if (addMusicLocationType == 'top') {
        let newList = [...list];
        arrUnshift(newList, downloadInfos);
        insertDownloadList(toDBDownloadInfo(downloadInfos), newList.slice(downloadInfos.length - 1).map((info, index) => {
            return { id: info.id, position: index };
        }));
        list = newList;
    }
    else {
        insertDownloadList(toDBDownloadInfo(downloadInfos, list.length), []);
        arrPush(list, downloadInfos);
    }
};
/**
 * 批量更新列表信息
 * @param lists 列表信息
 */
const downloadInfoUpdate = (lists) => {
    updateDownloadList(toDBDownloadInfo(lists));
    if (list) {
        for (const item of lists) {
            const index = list.findIndex((info) => info.id === item.id);
            if (index < 0)
                continue;
            list.splice(index, 1, item);
        }
    }
};
/**
 * 删除下载列表
 * @param ids 歌曲id
 */
const downloadInfoRemove = (ids) => {
    deleteDownloadList(ids);
    if (list) {
        const idSet = new Set(ids);
        list = list.filter((task) => !idSet.has(task.id));
    }
};
/**
 * 清空下载列表
 */
const downloadInfoClear = () => {
    clearDownloadList();
};

;// ./src/main/worker/dbService/modules/dislike_list/statements.ts

/**
 * 创建不喜欢列表查询语句
 * @returns 查询语句
 */
const dislike_list_statements_createQueryStatement = () => {
    const db = getDB();
    return db.prepare(`
    SELECT "content"
    FROM dislike_list
    WHERE "type"='music'
  `);
};
/**
 * 创建不喜欢记录插入语句
 * @returns 插入语句
 */
const dislike_list_statements_createInsertStatement = () => {
    const db = getDB();
    return db.prepare(`
    INSERT INTO "main"."dislike_list" ("type", "content")
    VALUES ('music', @content)`);
};
/**
 * 创建不喜欢记录清空语句
 * @returns 清空语句
 */
const dislike_list_statements_createClearStatement = () => {
    const db = getDB();
    return db.prepare(`
    DELETE FROM "main"."dislike_list"
  `);
};
// /**
//  * 创建不喜欢记录删除语句
//  * @returns 删除语句
//  */
// export const createDeleteStatement = () => {
//   const db = getDB()
//   return db.prepare<[bigint]>(`
//     DELETE FROM "main"."dislike_list"
//     WHERE "id"=?
//   `)
// }
// /**
//  * 创建不喜欢记录更新语句
//  * @returns 更新语句
//  */
// export const createUpdateStatement = () => {
//   const db = getDB()
//   return db.prepare<[LX.DBService.DislikeInfo]>(`
//     UPDATE "main"."dislike_list"
//     SET "name"=@name, "singer"=@singer
//     WHERE "id"=@id
//   `)
// }

;// ./src/main/worker/dbService/modules/dislike_list/dbHelper.ts
// import type Database from 'better-sqlite3'


/**
 * 查询不喜欢歌曲列表
 */
const queryDislikeList = () => {
    const queryStatement = dislike_list_statements_createQueryStatement();
    return queryStatement.all();
};
/**
 * 批量插入不喜欢歌曲并刷新顺序
 * @param infos 列表
 */
const insertDislikeList = async (infos) => {
    const db = getDB();
    const insertStatement = dislike_list_statements_createInsertStatement();
    db.transaction((infos) => {
        for (const info of infos)
            insertStatement.run(info);
    })(infos);
};
/**
 * 覆盖并批量插入不喜欢歌曲并刷新顺序
 * @param infos 列表
 */
const overwirteDislikeList = async (infos) => {
    const db = getDB();
    const clearStatement = dislike_list_statements_createClearStatement();
    const insertStatement = dislike_list_statements_createInsertStatement();
    db.transaction((infos) => {
        clearStatement.run();
        for (const info of infos)
            insertStatement.run(info);
    })(infos);
};
// /**
//  * 批量删除不喜欢歌曲
//  * @param ids 列表
//  */
// export const deleteDislikeList = (ids: string[]) => {
//   const db = getDB()
//   const deleteStatement = createDeleteStatement()
//   db.transaction((ids: string[]) => {
//     for (const id of ids) deleteStatement.run(BigInt(id))
//   })(ids)
// }
// /**
//  * 批量更新不喜欢歌曲
//  * @param urlInfo 列表
//  */
// export const updateDislikeList = async(infos: LX.DBService.DislikeInfo[]) => {
//   const db = getDB()
//   const updateStatement = createUpdateStatement()
//   db.transaction((infos: LX.DBService.DislikeInfo[]) => {
//     for (const info of infos) updateStatement.run(info)
//   })(infos)
// }
// /**
//  * 清空不喜欢歌曲列表
//  */
// export const clearDislikeList = () => {
//   const clearStatement = createClearStatement()
//   clearStatement.run()
// }

;// ./src/main/worker/dbService/modules/dislike_list/index.ts


// let dislikeInfo: LX.Dislike.DislikeInfo
const toDBDislikeInfo = (musicInfos) => {
    const list = [];
    for (const item of musicInfos) {
        if (!item.trim())
            continue;
        list.push({
            content: item,
        });
    }
    return list;
};
const initDislikeList = () => {
    const dislikeInfo = {
        // musicIds: new Set<string>(),
        names: new Set(),
        singerNames: new Set(),
        musicNames: new Set(),
        rules: '',
    };
    const list = [];
    for (const item of queryDislikeList()) {
        if (!item)
            continue;
        let [name, singer] = item.content.split(SPLIT_CHAR.DISLIKE_NAME);
        if (name) {
            name = name
                .replaceAll(SPLIT_CHAR.DISLIKE_NAME, SPLIT_CHAR.DISLIKE_NAME_ALIAS)
                .toLocaleLowerCase()
                .trim();
            if (singer) {
                singer = singer
                    .replaceAll(SPLIT_CHAR.DISLIKE_NAME, SPLIT_CHAR.DISLIKE_NAME_ALIAS)
                    .toLocaleLowerCase()
                    .trim();
                const rule = `${name}${SPLIT_CHAR.DISLIKE_NAME}${singer}`;
                dislikeInfo.names.add(rule);
                list.push(rule);
            }
            else {
                dislikeInfo.musicNames.add(name);
                list.push(name);
            }
        }
        else if (singer) {
            singer = singer
                .replaceAll(SPLIT_CHAR.DISLIKE_NAME, SPLIT_CHAR.DISLIKE_NAME_ALIAS)
                .toLocaleLowerCase()
                .trim();
            dislikeInfo.singerNames.add(singer);
            list.push(`${SPLIT_CHAR.DISLIKE_NAME}${singer}`);
        }
    }
    dislikeInfo.rules = Array.from(new Set(list)).join('\n');
    return dislikeInfo;
};
/**
 * 获取不喜欢列表信息
 * @returns 不喜欢列表信息
 */
const getDislikeListInfo = () => {
    // if (!dislikeInfo) initDislikeList()
    return initDislikeList();
};
/**
 * 添加信息
 * @param lists 列表信息
 */
const dislikeInfoAdd = async (lists) => {
    await insertDislikeList(lists.map((info) => ({ content: `${info.name}${SPLIT_CHAR.DISLIKE_NAME}${info.singer}` })));
};
/**
 * 覆盖列表信息
 * @param rules 规则信息
 */
const dislikeInfoOverwrite = async (rules) => {
    await overwirteDislikeList(toDBDislikeInfo(rules.split('\n')));
};
// /**
//  * 删除不喜欢列表
//  * @param ids 歌曲id
//  */
// export const dislikeInfoRemove = (ids: string[]) => {
//   deleteDislikeList(ids)
// }
// /**
//  * 清空不喜欢列表
//  */
// export const dislikeInfoClear = () => {
//   clearDislikeList()
// }

;// ./src/main/worker/dbService/modules/index.ts







;// ./src/main/worker/dbService/index.ts



const common = {
    init: init,
};
exposeWorker(Object.assign(common, list_namespaceObject, lyric_namespaceObject, music_url_namespaceObject, music_other_source_namespaceObject, download_namespaceObject, dislike_list_namespaceObject));

module.exports = __webpack_exports__;
/******/ })()
;