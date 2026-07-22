# IpIntelligenceApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpIntelligenceApi2Features
  def self.make_feature(name)
    case name
    when "base"
      IpIntelligenceApi2BaseFeature.new
    when "test"
      IpIntelligenceApi2TestFeature.new
    else
      IpIntelligenceApi2BaseFeature.new
    end
  end
end
