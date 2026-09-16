# IpIntelligenceApi2 SDK feature factory

from ipintelligenceapi2_sdk.feature.base_feature import IpIntelligenceApi2BaseFeature
from ipintelligenceapi2_sdk.feature.ratelimit_feature import IpIntelligenceApi2RatelimitFeature
from ipintelligenceapi2_sdk.feature.retry_feature import IpIntelligenceApi2RetryFeature
from ipintelligenceapi2_sdk.feature.test_feature import IpIntelligenceApi2TestFeature
from ipintelligenceapi2_sdk.feature.timeout_feature import IpIntelligenceApi2TimeoutFeature


_FEATURES = {
    "base": lambda: IpIntelligenceApi2BaseFeature(),
    "ratelimit": lambda: IpIntelligenceApi2RatelimitFeature(),
    "retry": lambda: IpIntelligenceApi2RetryFeature(),
    "test": lambda: IpIntelligenceApi2TestFeature(),
    "timeout": lambda: IpIntelligenceApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
