"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'IpIntelligenceApi2',
        slug: "ip-intelligence-api2",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.ipquery.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            get_ip_info: {},
        }
    };
    entity = {
        "get_ip_info": {
            "fields": [
                {
                    "name": "as",
                    "title": "As",
                    "type": "`$STRING`",
                    "short": "Autonomous System information"
                },
                {
                    "name": "city",
                    "title": "City",
                    "type": "`$STRING`",
                    "short": "City name"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "short": "Country name"
                },
                {
                    "name": "country_code",
                    "title": "Country Code",
                    "type": "`$STRING`",
                    "short": "ISO 3166-1 alpha-2 country code"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "ip",
                    "title": "Ip",
                    "type": "`$STRING`",
                    "short": "The queried IP address"
                },
                {
                    "name": "isp",
                    "title": "Isp",
                    "type": "`$STRING`",
                    "short": "Internet Service Provider"
                },
                {
                    "name": "latitude",
                    "title": "Latitude",
                    "type": "`$NUMBER`",
                    "short": "Geographical latitude",
                    "format": "double"
                },
                {
                    "name": "longitude",
                    "title": "Longitude",
                    "type": "`$NUMBER`",
                    "short": "Geographical longitude",
                    "format": "double"
                },
                {
                    "name": "org",
                    "title": "Org",
                    "type": "`$STRING`",
                    "short": "Organization name"
                },
                {
                    "name": "region",
                    "title": "Region",
                    "type": "`$STRING`",
                    "short": "Region or state name"
                },
                {
                    "name": "timezone",
                    "title": "Timezone",
                    "type": "`$STRING`",
                    "short": "Timezone identifier"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "get_ip_info",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{ip}",
                            "segments": [
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "ip": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "ip",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "1.1.1.1"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map