package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetIpInfoEntityFunc func(client *IpIntelligenceApi2SDK, entopts map[string]any) IpIntelligenceApi2Entity

