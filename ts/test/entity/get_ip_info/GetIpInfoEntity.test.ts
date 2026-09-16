

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpIntelligenceApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetIpInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_INTELLIGENCE_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_INTELLIGENCE_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpIntelligenceApi2SDK.test()
    const ent = testsdk.GetIpInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_INTELLIGENCE_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_ip_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"as","req":false,"short":"Autonomous System information","type":"`$STRING`","index$":0},{"active":true,"name":"city","req":false,"short":"City name","type":"`$STRING`","index$":1},{"active":true,"name":"country","req":false,"short":"Country name","type":"`$STRING`","index$":2},{"active":true,"name":"country_code","req":false,"short":"ISO 3166-1 alpha-2 country code","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"ip","req":false,"short":"The queried IP address","type":"`$STRING`","index$":5},{"active":true,"name":"isp","req":false,"short":"Internet Service Provider","type":"`$STRING`","index$":6},{"active":true,"format":"double","name":"latitude","req":false,"short":"Geographical latitude","type":"`$NUMBER`","index$":7},{"active":true,"format":"double","name":"longitude","req":false,"short":"Geographical longitude","type":"`$NUMBER`","index$":8},{"active":true,"name":"org","req":false,"short":"Organization name","type":"`$STRING`","index$":9},{"active":true,"name":"region","req":false,"short":"Region or state name","type":"`$STRING`","index$":10},{"active":true,"name":"timezone","req":false,"short":"Timezone identifier","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"get_ip_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"1.1.1.1","kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{ip}","json":"{\"operationId\":\"getIpInfo\",\"parameters\":[{\"description\":\"The IP address to query (IPv4 or IPv6)\",\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"example\":\"1.1.1.1\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"as\":{\"description\":\"Autonomous System information\",\"example\":\"AS13335 Cloudflare, Inc.\",\"type\":\"string\"},\"city\":{\"description\":\"City name\",\"example\":\"Sydney\",\"type\":\"string\"},\"country\":{\"description\":\"Country name\",\"example\":\"Australia\",\"type\":\"string\"},\"country_code\":{\"description\":\"ISO 3166-1 alpha-2 country code\",\"example\":\"AU\",\"type\":\"string\"},\"ip\":{\"description\":\"The queried IP address\",\"example\":\"1.1.1.1\",\"type\":\"string\"},\"isp\":{\"description\":\"Internet Service Provider\",\"example\":\"Cloudflare, Inc.\",\"type\":\"string\"},\"latitude\":{\"description\":\"Geographical latitude\",\"example\":-33.8688,\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Geographical longitude\",\"example\":151.2093,\"format\":\"double\",\"type\":\"number\"},\"org\":{\"description\":\"Organization name\",\"example\":\"APNIC and Cloudflare DNS Resolver project\",\"type\":\"string\"},\"region\":{\"description\":\"Region or state name\",\"example\":\"New South Wales\",\"type\":\"string\"},\"timezone\":{\"description\":\"Timezone identifier\",\"example\":\"Australia/Sydney\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with IP information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid IP address format\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid IP address format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"IP address not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"IP address not found or no data available\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Rate limit exceeded\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_ip_info","name__orig":"get_ip_info","Name":"GetIpInfo","name_":"get_ip_info","name-":"get-ip-info","NAME":"GET_IP_INFO","index$":0}, {"active":true,"entity":"get_ip_info","key$":"BasicGetIpInfoFlow","kind":"basic","name":"BasicGetIpInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_ip_info_ref01","srcdatavar":"get_ip_info_ref01_data","suffix":"_dt0"},"match":{"id":"get_ip_info01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_ip_info_ref01"}}],"index$":0}]}, 'GetIpInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_ip_info_ref01_data = Object.values(setup.data.existing.get_ip_info)[0] as any

    // LOAD
    const get_ip_info_ref01_ent = client.GetIpInfo()
    const get_ip_info_ref01_match_dt0: any = {}
    get_ip_info_ref01_match_dt0.id = get_ip_info_ref01_data.id
    const get_ip_info_ref01_data_dt0 = (await get_ip_info_ref01_ent.load(get_ip_info_ref01_match_dt0)).data()
    assert(get_ip_info_ref01_data_dt0.id === get_ip_info_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_ip_info/GetIpInfoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpIntelligenceApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_ip_info01','get_ip_info02','get_ip_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID': idmap,
    'IP_INTELLIGENCE_API2_TEST_LIVE': 'FALSE',
    'IP_INTELLIGENCE_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID']

  const live = 'TRUE' === env.IP_INTELLIGENCE_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_INTELLIGENCE_API2_TEST_GET_IP_INFO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpIntelligenceApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IP_INTELLIGENCE_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
