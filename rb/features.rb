# IpIntelligenceApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpIntelligenceApi2Features
  def self.make_feature(name)
    case name
    when "base"
      IpIntelligenceApi2BaseFeature.new
    when "ratelimit"
      IpIntelligenceApi2RatelimitFeature.new
    when "retry"
      IpIntelligenceApi2RetryFeature.new
    when "test"
      IpIntelligenceApi2TestFeature.new
    when "timeout"
      IpIntelligenceApi2TimeoutFeature.new
    else
      IpIntelligenceApi2BaseFeature.new
    end
  end
end
