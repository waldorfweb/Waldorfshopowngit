<?php

namespace Waldorfshop2\Widgets\Footer;

use Ceres\Widgets\Helper\BaseWidget;

class FooterListWidget extends BaseWidget
{
    protected $template = "Waldorfshop2::Widgets.Footer.FooterListWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $listEntries = [];

        if ( array_key_exists("entries", $widgetSettings) )
        {
            $listEntries = $widgetSettings["entries"]["mobile"];
        }
        else
        {
            foreach( $widgetSettings["texts"]["mobile"] as $text )
            {
                $listEntries[] = [
                    "text" => $text,
                    "url"  => ""
                ];
            }
        }

        return [
            "listEntries"   => $listEntries,
        ];
    }
}
