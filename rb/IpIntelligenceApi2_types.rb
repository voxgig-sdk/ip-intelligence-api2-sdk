# frozen_string_literal: true

# Typed models for the IpIntelligenceApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetIpInfo entity data model.
#
# @!attribute [rw] as
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] isp
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
GetIpInfo = Struct.new(
  :as,
  :city,
  :country,
  :country_code,
  :ip,
  :isp,
  :latitude,
  :longitude,
  :org,
  :region,
  :timezone,
  keyword_init: true
)

# Request payload for GetIpInfo#load.
#
# @!attribute [rw] id
#   @return [String]
GetIpInfoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

