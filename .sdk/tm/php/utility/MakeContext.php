<?php
declare(strict_types=1);

// IpIntelligenceApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpIntelligenceApi2MakeContext
{
    public static function call(array $ctxmap, ?IpIntelligenceApi2Context $basectx): IpIntelligenceApi2Context
    {
        return new IpIntelligenceApi2Context($ctxmap, $basectx);
    }
}
