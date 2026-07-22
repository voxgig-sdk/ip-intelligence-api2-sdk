<?php
declare(strict_types=1);

// IpIntelligenceApi2 SDK utility: result_headers

class IpIntelligenceApi2ResultHeaders
{
    public static function call(IpIntelligenceApi2Context $ctx): ?IpIntelligenceApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
