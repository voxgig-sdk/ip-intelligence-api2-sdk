"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetIpInfoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_INTELLIGENCE_API2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_INTELLIGENCE_API2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpIntelligenceApi2SDK.test();
        const ent = testsdk.GetIpInfo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_INTELLIGENCE_API2_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_ip_info.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "as": { "a": true, "h": "As", "n": "as", "r": false, "sh": "Autonomous System information", "t": "`$STRING`", "key$": "as", "index$": 0 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "City name", "t": "`$STRING`", "key$": "city", "index$": 1 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Country name", "t": "`$STRING`", "key$": "country", "index$": 2 }, "country_code": { "a": true, "h": "Country Code", "n": "country_code", "r": false, "sh": "ISO 3166-1 alpha-2 country code", "t": "`$STRING`", "key$": "country_code", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "ip": { "a": true, "h": "Ip", "n": "ip", "r": false, "sh": "The queried IP address", "t": "`$STRING`", "key$": "ip", "index$": 5 }, "isp": { "a": true, "h": "Isp", "n": "isp", "r": false, "sh": "Internet Service Provider", "t": "`$STRING`", "key$": "isp", "index$": 6 }, "latitude": { "a": true, "fo": "double", "h": "Latitude", "n": "latitude", "r": false, "sh": "Geographical latitude", "t": "`$NUMBER`", "key$": "latitude", "index$": 7 }, "longitude": { "a": true, "fo": "double", "h": "Longitude", "n": "longitude", "r": false, "sh": "Geographical longitude", "t": "`$NUMBER`", "key$": "longitude", "index$": 8 }, "org": { "a": true, "h": "Org", "n": "org", "r": false, "sh": "Organization name", "t": "`$STRING`", "key$": "org", "index$": 9 }, "region": { "a": true, "h": "Region", "n": "region", "r": false, "sh": "Region or state name", "t": "`$STRING`", "key$": "region", "index$": 10 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "r": false, "sh": "Timezone identifier", "t": "`$STRING`", "key$": "timezone", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "get_ip_info", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /{ip}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "1.1.1.1", "k": "param", "n": "id", "or": "ip", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{ip}", "q": { "exist": ["id"] }, "r": { "param": { "ip": "id" } }, "s": [{ "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_ip_info", "name__orig": "get_ip_info", "Name": "GetIpInfo", "name_": "get_ip_info", "name-": "get-ip-info", "NAME": "GET_IP_INFO", "index$": 0 }, { "active": true, "entity": "get_ip_info", "key$": "BasicGetIpInfoFlow", "kind": "basic", "name": "BasicGetIpInfoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "get_ip_info_ref01", "srcdatavar": "get_ip_info_ref01_data", "suffix": "_dt0" }, "m": { "id": "get_ip_info01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_ip_info_ref01" } }], "index$": 0 }] }, 'GetIpInfo', { "GET /{ip}": { "protocol": "http", "operationId": "getIpInfo", "responses": { "200": { "description": "Successful response with IP information", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "description": "The queried IP address", "example": "1.1.1.1", "key$": "ip", "type": "string" }, "country": { "description": "Country name", "example": "Australia", "key$": "country", "type": "string" }, "country_code": { "description": "ISO 3166-1 alpha-2 country code", "example": "AU", "key$": "country_code", "type": "string" }, "city": { "description": "City name", "example": "Sydney", "key$": "city", "type": "string" }, "region": { "description": "Region or state name", "example": "New South Wales", "key$": "region", "type": "string" }, "latitude": { "description": "Geographical latitude", "example": -33.8688, "format": "double", "key$": "latitude", "type": "number" }, "longitude": { "description": "Geographical longitude", "example": 151.2093, "format": "double", "key$": "longitude", "type": "number" }, "timezone": { "description": "Timezone identifier", "example": "Australia/Sydney", "key$": "timezone", "type": "string" }, "isp": { "description": "Internet Service Provider", "example": "Cloudflare, Inc.", "key$": "isp", "type": "string" }, "org": { "description": "Organization name", "example": "APNIC and Cloudflare DNS Resolver project", "key$": "org", "type": "string" }, "as": { "description": "Autonomous System information", "example": "AS13335 Cloudflare, Inc.", "key$": "as", "type": "string" } }, "index$": 0 } } } }, "400": { "description": "Bad request - Invalid IP address format", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Invalid IP address format" } } } } } }, "404": { "description": "IP address not found or no data available", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "IP address not found" } } } } } }, "429": { "description": "Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Rate limit exceeded" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Internal server error" } } } } } } }, "parameters": [{ "name": "ip", "in": "path", "required": true, "description": "The IP address to query (IPv4 or IPv6)", "schema": { "type": "string", "example": "1.1.1.1" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_ip_info_ref01_data = Object.values(setup.data.existing.get_ip_info)[0];
        // LOAD
        const get_ip_info_ref01_ent = client.GetIpInfo();
        const get_ip_info_ref01_match_dt0 = {};
        get_ip_info_ref01_match_dt0.id = get_ip_info_ref01_data.id;
        const get_ip_info_ref01_data_dt0 = (await get_ip_info_ref01_ent.load(get_ip_info_ref01_match_dt0)).data();
        (0, node_assert_1.default)(get_ip_info_ref01_data_dt0.id === get_ip_info_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_ip_info/GetIpInfoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpIntelligenceApi2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_ip_info01', 'get_ip_info02', 'get_ip_info03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID': idmap,
        'IP_INTELLIGENCE_API2_TEST_LIVE': 'FALSE',
        'IP_INTELLIGENCE_API2_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID'];
    const live = 'TRUE' === env.IP_INTELLIGENCE_API2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IpIntelligenceApi2SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.IP_INTELLIGENCE_API2_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetIpInfoEntity.test.js.map