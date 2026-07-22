
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpIntelligenceApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpIntelligenceApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
