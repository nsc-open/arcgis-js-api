// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleLabelPlacements",[],function(){var a={NONE:"None",TOP:"Top",RIGHT:"Right",BOTTOM:"Bottom",LEFT:"Left",INSIDE:"Inside",isSupported:function(b){for(var c in a)if(a[c]===b)return!0;return!1},toSupportedValue:function(b){return a.isSupported(b)?b:a.NONE}};return a});