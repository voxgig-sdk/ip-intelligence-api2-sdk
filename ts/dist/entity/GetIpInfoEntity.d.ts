import { IpIntelligenceApi2EntityBase } from '../IpIntelligenceApi2EntityBase';
import type { IpIntelligenceApi2SDK } from '../IpIntelligenceApi2SDK';
import type { Control } from '../types';
import type { GetIpInfo, GetIpInfoLoadMatch } from '../IpIntelligenceApi2Types';
declare class GetIpInfoEntity extends IpIntelligenceApi2EntityBase<GetIpInfo> {
    constructor(client: IpIntelligenceApi2SDK, entopts: any);
    make(this: GetIpInfoEntity): GetIpInfoEntity;
    load(this: any, reqmatch?: GetIpInfoLoadMatch, ctrl?: Control): Promise<GetIpInfoEntity>;
}
export { GetIpInfoEntity };
