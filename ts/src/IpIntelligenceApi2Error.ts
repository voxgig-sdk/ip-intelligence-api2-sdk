
import { Context } from './Context'


class IpIntelligenceApi2Error extends Error {

  isIpIntelligenceApi2Error = true

  sdk = 'IpIntelligenceApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpIntelligenceApi2Error
}

