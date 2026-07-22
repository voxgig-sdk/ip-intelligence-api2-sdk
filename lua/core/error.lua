-- IpIntelligenceApi2 SDK error

local IpIntelligenceApi2Error = {}
IpIntelligenceApi2Error.__index = IpIntelligenceApi2Error


function IpIntelligenceApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, IpIntelligenceApi2Error)
  self.is_sdk_error = true
  self.sdk = "IpIntelligenceApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpIntelligenceApi2Error:error()
  return self.msg
end


function IpIntelligenceApi2Error:__tostring()
  return self.msg
end


return IpIntelligenceApi2Error
