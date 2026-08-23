# IpIntelligenceApi2 SDK configuration

module IpIntelligenceApi2Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "IpIntelligenceApi2",
        "slug" => "ip-intelligence-api2",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.ipquery.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_ip_info" => {},
        },
      },
      "entity" => {
        "get_ip_info" => {
          "fields" => [
            {
              "name" => "as",
              "short" => "Autonomous System information",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "short" => "City name",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "short" => "Country name",
              "type" => "`$STRING`",
            },
            {
              "name" => "country_code",
              "short" => "ISO 3166-1 alpha-2 country code",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "short" => "The queried IP address",
              "type" => "`$STRING`",
            },
            {
              "name" => "isp",
              "short" => "Internet Service Provider",
              "type" => "`$STRING`",
            },
            {
              "name" => "latitude",
              "short" => "Geographical latitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "short" => "Geographical longitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "org",
              "short" => "Organization name",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "short" => "Region or state name",
              "type" => "`$STRING`",
            },
            {
              "name" => "timezone",
              "short" => "Timezone identifier",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_ip_info",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "1.1.1.1",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{ip}",
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpIntelligenceApi2Features.make_feature(name)
  end
end
