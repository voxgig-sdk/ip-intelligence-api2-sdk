package core

type IpIntelligenceApi2Error struct {
	IsIpIntelligenceApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpIntelligenceApi2Error(code string, msg string, ctx *Context) *IpIntelligenceApi2Error {
	return &IpIntelligenceApi2Error{
		IsIpIntelligenceApi2Error: true,
		Sdk:              "IpIntelligenceApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpIntelligenceApi2Error) Error() string {
	return e.Msg
}
