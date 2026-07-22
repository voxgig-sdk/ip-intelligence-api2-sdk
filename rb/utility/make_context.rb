# IpIntelligenceApi2 SDK utility: make_context
require_relative '../core/context'
module IpIntelligenceApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    IpIntelligenceApi2Context.new(ctxmap, basectx)
  }
end
