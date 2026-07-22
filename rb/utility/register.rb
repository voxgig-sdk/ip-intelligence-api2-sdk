# IpIntelligenceApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpIntelligenceApi2Utility.registrar = ->(u) {
  u.clean = IpIntelligenceApi2Utilities::Clean
  u.done = IpIntelligenceApi2Utilities::Done
  u.make_error = IpIntelligenceApi2Utilities::MakeError
  u.feature_add = IpIntelligenceApi2Utilities::FeatureAdd
  u.feature_hook = IpIntelligenceApi2Utilities::FeatureHook
  u.feature_init = IpIntelligenceApi2Utilities::FeatureInit
  u.fetcher = IpIntelligenceApi2Utilities::Fetcher
  u.make_fetch_def = IpIntelligenceApi2Utilities::MakeFetchDef
  u.make_context = IpIntelligenceApi2Utilities::MakeContext
  u.make_options = IpIntelligenceApi2Utilities::MakeOptions
  u.make_request = IpIntelligenceApi2Utilities::MakeRequest
  u.make_response = IpIntelligenceApi2Utilities::MakeResponse
  u.make_result = IpIntelligenceApi2Utilities::MakeResult
  u.make_point = IpIntelligenceApi2Utilities::MakePoint
  u.make_spec = IpIntelligenceApi2Utilities::MakeSpec
  u.make_url = IpIntelligenceApi2Utilities::MakeUrl
  u.param = IpIntelligenceApi2Utilities::Param
  u.prepare_auth = IpIntelligenceApi2Utilities::PrepareAuth
  u.prepare_body = IpIntelligenceApi2Utilities::PrepareBody
  u.prepare_headers = IpIntelligenceApi2Utilities::PrepareHeaders
  u.prepare_method = IpIntelligenceApi2Utilities::PrepareMethod
  u.prepare_params = IpIntelligenceApi2Utilities::PrepareParams
  u.prepare_path = IpIntelligenceApi2Utilities::PreparePath
  u.prepare_query = IpIntelligenceApi2Utilities::PrepareQuery
  u.result_basic = IpIntelligenceApi2Utilities::ResultBasic
  u.result_body = IpIntelligenceApi2Utilities::ResultBody
  u.result_headers = IpIntelligenceApi2Utilities::ResultHeaders
  u.transform_request = IpIntelligenceApi2Utilities::TransformRequest
  u.transform_response = IpIntelligenceApi2Utilities::TransformResponse
}
