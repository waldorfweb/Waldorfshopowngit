<?php

namespace Waldorfshop2\Widgets\Common;

use Ceres\Widgets\Helper\BaseWidget;

class ImageListWidget extends BaseWidget
{
    protected $template = "Waldorfshop2::Widgets.Common.ImageListWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $listEntries = [];

        if ( array_key_exists("entries", $widgetSettings) )
        {
            $listEntries = $widgetSettings["entries"]["mobile"];
        }

        return [
            "listEntries"   => $listEntries,
        ];
    }
}
