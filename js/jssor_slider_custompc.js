jQuery(document).ready(function ($) {

        var jssor_custom_pc_SlideoTransitions = [
          [{b:0,d:600,y:-290,e:{y:27}}],
          [{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:125.00,t:-125.00}},{b:11000,d:500,c:{x:-125.00,t:125.00}}],
          [{b:0,d:600,x:535,e:{x:27}}],
          [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
          [{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:800,c:{x:-250.0,t:250.0},e:{c:{x:7,t:7}}}],
          [{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
          [{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}]
        ];

        var jssor_custom_pc_options = {
          $AutoPlay: 1,
          $Idle: 2000,
          $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_custom_pc_SlideoTransitions
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_custom_pc_slider = new $JssorSlider$("jssor_custom_pc", jssor_custom_pc_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 1136;

        function ScaleSlider() {
            var containerElement = jssor_custom_pc_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_custom_pc_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    });
