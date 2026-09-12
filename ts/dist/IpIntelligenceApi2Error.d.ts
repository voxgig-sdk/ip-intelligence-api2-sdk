import { Context } from './Context';
declare class IpIntelligenceApi2Error extends Error {
    isIpIntelligenceApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { IpIntelligenceApi2Error };
