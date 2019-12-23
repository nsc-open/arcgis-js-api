// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/utils/MobileGesturesUtil",["esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/mobile/GesturesUtil"],function(f,g){var d={enableMobileGestures:function(a){var c;g.enableGesturesOnNode(a.domNode,{enableFlyingScroll:!0,canZoom:function(a){return!1},onZoomIn:function(){a.zoomIn({showAnimation:!0,showLabel:!0})},onZoomOut:function(){a.zoomOut({showAnimation:!0,showLabel:!0})},canScroll:function(b){c=d._getOverPanelWithScroll(a,
b);return!d._isOverActiveMap(a,b)},onScrollChanged:function(b,d){if(c)c.changeScroll(b,d);else{var e=a.getScrollableContainer();e&&(e.scrollLeft+=b,e.scrollTop+=d)}}});g.preventDoubleTapZoom(a.domNode)},_isOverActiveMap:function(a,c){var b=(a=(a=d._getOverSection(a,c))&&a.getMapImages()[0])&&a.getCurrentMap();return b&&b.isMapNavigation&&f.isMouseOver(a.domNode,{event:c})},_getOverPanelWithScroll:function(a,c){return(a=(a=d._getOverSection(a,c))&&a.getInfographic())&&a.getInnerInfographic()&&a.getInnerInfographic().hasScroll&&
a.getInnerInfographic().hasScroll()?a.getInnerInfographic():null},_getOverSection:function(a,c){var b;a.getSections().some(function(a){if(f.isMouseOver(a.domNode,{event:c}))return b=a,!0});return b&&!b.isEmpty()?b:null}};return d});