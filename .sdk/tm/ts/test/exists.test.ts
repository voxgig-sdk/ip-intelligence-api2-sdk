
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpIntelligenceApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IpIntelligenceApi2SDK.test()
    equal(testsdk instanceof IpIntelligenceApi2SDK, true,
      'IpIntelligenceApi2SDK.test() must return a client synchronously')
  })

})
