-- IpIntelligenceApi2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "IpIntelligenceApi2",
      slug = "ip-intelligence-api2",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.ipquery.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_ip_info"] = {},
      },
    },
    entity = {
      ["get_ip_info"] = {
        ["fields"] = {
          {
            ["name"] = "as",
            ["short"] = "Autonomous System information",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "city",
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country_code",
            ["short"] = "ISO 3166-1 alpha-2 country code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["short"] = "The queried IP address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isp",
            ["short"] = "Internet Service Provider",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "double",
            ["name"] = "latitude",
            ["short"] = "Geographical latitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "double",
            ["name"] = "longitude",
            ["short"] = "Geographical longitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "org",
            ["short"] = "Organization name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["short"] = "Region or state name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone identifier",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "get_ip_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "1.1.1.1",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "ip",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{ip}",
                ["rename"] = {
                  ["param"] = {
                    ["ip"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
