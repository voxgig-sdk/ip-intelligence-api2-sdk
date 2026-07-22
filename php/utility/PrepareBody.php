<?php
declare(strict_types=1);

// IpIntelligenceApi2 SDK utility: prepare_body

class IpIntelligenceApi2PrepareBody
{
    public static function call(IpIntelligenceApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
