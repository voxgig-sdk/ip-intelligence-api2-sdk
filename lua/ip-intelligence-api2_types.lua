-- Typed models for the IpIntelligenceApi2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetIpInfo
---@field as? string
---@field city? string
---@field country? string
---@field country_code? string
---@field ip? string
---@field isp? string
---@field latitude? number
---@field longitude? number
---@field org? string
---@field region? string
---@field timezone? string

---@class GetIpInfoLoadMatch
---@field id string

local M = {}

return M
