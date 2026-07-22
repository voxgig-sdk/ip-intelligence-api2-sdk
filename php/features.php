<?php
declare(strict_types=1);

// IpIntelligenceApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpIntelligenceApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpIntelligenceApi2BaseFeature();
            case "test":
                return new IpIntelligenceApi2TestFeature();
            default:
                return new IpIntelligenceApi2BaseFeature();
        }
    }
}
