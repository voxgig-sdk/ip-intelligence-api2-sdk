// Typed models for the IpIntelligenceApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetIpInfo {
  as?: string
  city?: string
  country?: string
  country_code?: string
  ip?: string
  isp?: string
  latitude?: number
  longitude?: number
  org?: string
  region?: string
  timezone?: string
}

export interface GetIpInfoLoadMatch {
  id: string
}

