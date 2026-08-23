
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'IpIntelligenceApi2',
        slug: "ip-intelligence-api2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.ipquery.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_ip_info: {
      },

    }
  }


  entity = {
    "get_ip_info": {
      "fields": [
        {
          "name": "as",
          "short": "Autonomous System information",
          "type": "`$STRING`"
        },
        {
          "name": "city",
          "short": "City name",
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "short": "Country name",
          "type": "`$STRING`"
        },
        {
          "name": "country_code",
          "short": "ISO 3166-1 alpha-2 country code",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "short": "The queried IP address",
          "type": "`$STRING`"
        },
        {
          "name": "isp",
          "short": "Internet Service Provider",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "short": "Geographical latitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "short": "Geographical longitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "org",
          "short": "Organization name",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "short": "Region or state name",
          "type": "`$STRING`"
        },
        {
          "name": "timezone",
          "short": "Timezone identifier",
          "type": "`$STRING`"
        }
      ],
      "name": "get_ip_info",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "1.1.1.1",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{ip}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

