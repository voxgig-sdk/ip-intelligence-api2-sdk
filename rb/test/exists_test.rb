# IpIntelligenceApi2 SDK exists test

require "minitest/autorun"
require_relative "../IpIntelligenceApi2_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpIntelligenceApi2SDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
