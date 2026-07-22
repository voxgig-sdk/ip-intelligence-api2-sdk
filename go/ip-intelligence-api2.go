package voxgigipintelligenceapi2sdk

import (
	"github.com/voxgig-sdk/ip-intelligence-api2-sdk/go/core"
	"github.com/voxgig-sdk/ip-intelligence-api2-sdk/go/entity"
	"github.com/voxgig-sdk/ip-intelligence-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-intelligence-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type IpIntelligenceApi2SDK = core.IpIntelligenceApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpIntelligenceApi2Entity = core.IpIntelligenceApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpIntelligenceApi2Error = core.IpIntelligenceApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetIpInfoEntityFunc = func(client *core.IpIntelligenceApi2SDK, entopts map[string]any) core.IpIntelligenceApi2Entity {
		return entity.NewGetIpInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpIntelligenceApi2SDK = core.NewIpIntelligenceApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIpIntelligenceApi2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IpIntelligenceApi2SDK  { return NewIpIntelligenceApi2SDK(nil) }
func Test() *IpIntelligenceApi2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
