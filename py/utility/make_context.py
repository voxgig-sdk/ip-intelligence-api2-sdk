# IpIntelligenceApi2 SDK utility: make_context

from core.context import IpIntelligenceApi2Context


def make_context_util(ctxmap, basectx):
    return IpIntelligenceApi2Context(ctxmap, basectx)
