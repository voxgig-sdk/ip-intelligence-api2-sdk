<?php
declare(strict_types=1);

// IpIntelligenceApi2 SDK utility: result_body

class IpIntelligenceApi2ResultBody
{
    public static function call(IpIntelligenceApi2Context $ctx): ?IpIntelligenceApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
