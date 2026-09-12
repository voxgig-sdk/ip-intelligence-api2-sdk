import { GetIpInfoEntity } from './entity/GetIpInfoEntity';
export type * from './IpIntelligenceApi2Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { IpIntelligenceApi2EntityBase } from './IpIntelligenceApi2EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class IpIntelligenceApi2SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetIpInfo(entopts?: Record<string, any>): GetIpInfoEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): IpIntelligenceApi2SDK;
    tester(testopts?: any, sdkopts?: any): IpIntelligenceApi2SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof IpIntelligenceApi2SDK;
export { stdutil, config, BaseFeature, IpIntelligenceApi2EntityBase, IpIntelligenceApi2SDK, SDK, };
