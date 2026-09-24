

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"as":{"a":true,"h":"As","n":"as","r":false,"sh":"Autonomous System information","t":"`$STRING`","key$":"as","index$":0},"city":{"a":true,"h":"City","n":"city","r":false,"sh":"City name","t":"`$STRING`","key$":"city","index$":1},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country name","t":"`$STRING`","key$":"country","index$":2},"country_code":{"a":true,"h":"Country Code","n":"country_code","r":false,"sh":"ISO 3166-1 alpha-2 country code","t":"`$STRING`","key$":"country_code","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"The queried IP address","t":"`$STRING`","key$":"ip","index$":5},"isp":{"a":true,"h":"Isp","n":"isp","r":false,"sh":"Internet Service Provider","t":"`$STRING`","key$":"isp","index$":6},"latitude":{"a":true,"fo":"double","h":"Latitude","n":"latitude","r":false,"sh":"Geographical latitude","t":"`$NUMBER`","key$":"latitude","index$":7},"longitude":{"a":true,"fo":"double","h":"Longitude","n":"longitude","r":false,"sh":"Geographical longitude","t":"`$NUMBER`","key$":"longitude","index$":8},"org":{"a":true,"h":"Org","n":"org","r":false,"sh":"Organization name","t":"`$STRING`","key$":"org","index$":9},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"Region or state name","t":"`$STRING`","key$":"region","index$":10},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":false,"sh":"Timezone identifier","t":"`$STRING`","key$":"timezone","index$":11}},"id":{"field":"id","name":"id"},"name":"get_ip_info","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"1.1.1.1","k":"param","n":"id","or":"ip","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{ip}","q":{"exist":["id"]},"r":{"param":{"ip":"id"}},"s":[{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_ip_info","name__orig":"get_ip_info","Name":"GetIpInfo","name_":"get_ip_info","name-":"get-ip-info","NAME":"GET_IP_INFO","index$":0}, {"active":true,"entity":"get_ip_info","key$":"BasicGetIpInfoFlow","kind":"basic","name":"BasicGetIpInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_ip_info_ref01","srcdatavar":"get_ip_info_ref01_data","suffix":"_dt0"},"m":{"id":"get_ip_info01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_ip_info_ref01"}}],"index$":0}]}, 'GetIpInfo', {"GET /{ip}":{"protocol":"http","operationId":"getIpInfo","responses":{"200":{"description":"Successful response with IP information","content":{"application/json":{"schema":{"type":"object","properties":{"ip":{"description":"The queried IP address","example":"1.1.1.1","key$":"ip","type":"string"},"country":{"description":"Country name","example":"Australia","key$":"country","type":"string"},"country_code":{"description":"ISO 3166-1 alpha-2 country code","example":"AU","key$":"country_code","type":"string"},"city":{"description":"City name","example":"Sydney","key$":"city","type":"string"},"region":{"description":"Region or state name","example":"New South Wales","key$":"region","type":"string"},"latitude":{"description":"Geographical latitude","example":-33.8688,"format":"double","key$":"latitude","type":"number"},"longitude":{"description":"Geographical longitude","example":151.2093,"format":"double","key$":"longitude","type":"number"},"timezone":{"description":"Timezone identifier","example":"Australia/Sydney","key$":"timezone","type":"string"},"isp":{"description":"Internet Service Provider","example":"Cloudflare, Inc.","key$":"isp","type":"string"},"org":{"description":"Organization name","example":"APNIC and Cloudflare DNS Resolver project","key$":"org","type":"string"},"as":{"description":"Autonomous System information","example":"AS13335 Cloudflare, Inc.","key$":"as","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - Invalid IP address format","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Invalid IP address format"}}}}}},"404":{"description":"IP address not found or no data available","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"IP address not found"}}}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Rate limit exceeded"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Internal server error"}}}}}}},"parameters":[{"name":"ip","in":"path","required":true,"description":"The IP address to query (IPv4 or IPv6)","schema":{"type":"string","example":"1.1.1.1"},"index$":0}],"securitySource":"unspecified"}})
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
  
