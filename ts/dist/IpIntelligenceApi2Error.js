"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpIntelligenceApi2Error = void 0;
class IpIntelligenceApi2Error extends Error {
    isIpIntelligenceApi2Error = true;
    sdk = 'IpIntelligenceApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IpIntelligenceApi2Error = IpIntelligenceApi2Error;
//# sourceMappingURL=IpIntelligenceApi2Error.js.map