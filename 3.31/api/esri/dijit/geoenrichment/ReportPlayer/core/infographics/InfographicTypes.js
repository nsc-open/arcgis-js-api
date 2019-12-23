// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes",["dojo/_base/lang"],function(g){var b={STATIC:"static",ATTACHMENTS:"attachments",AREA_DETAILS:"areaDetails",INTERESTING_FACTS:"interestingFacts",LOCATOR_TABLE:"locatorTable",COMPARISON_TABLE:"comparisonTable"},d={AGE_PYRAMID:"AgePyramid",ONE_VAR:"OneVar",RELATED_VARS:"RelatedVariables",TAPESTRY:"Tapestry",PRIZM5:"Prizm5"},e={},c;for(c in d)e[d[c]]=!0;g.mixin(b,d);var f={};for(c in b)f[b[c]]=!0;b.isDynamic=function(a){return e[a]};
b.isSupported=function(a){return f[a]};b.isTableLike=function(a){return a===b.AREA_DETAILS||a===b.LOCATOR_TABLE||a===b.COMPARISON_TABLE};b.fixTapestryNameToWidget=function(a){return"TapestryNEW"===a?"Tapestry":a};b.fixTapestryNameToData=function(a){return"Tapestry"===a?"TapestryNEW":a};b.supportsMultiFeature=function(a){return a===b.COMPARISON_TABLE||a===b.LOCATOR_TABLE||a===b.ATTACHMENTS||a===b.AREA_DETAILS};b.supportsComparison=function(a){return a===b.ONE_VAR||a===b.AGE_PYRAMID||a===b.RELATED_VARS||
a===b.COMPARISON_TABLE};b.isDynamicWithFiltering=function(a){return a===b.ONE_VAR||a===b.AGE_PYRAMID||a===b.RELATED_VARS};return b});