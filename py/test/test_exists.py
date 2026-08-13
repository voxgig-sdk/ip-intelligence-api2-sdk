# IpIntelligenceApi2 SDK exists test

import pytest
from ipintelligenceapi2_sdk import IpIntelligenceApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpIntelligenceApi2SDK.test(None, None)
        assert testsdk is not None
