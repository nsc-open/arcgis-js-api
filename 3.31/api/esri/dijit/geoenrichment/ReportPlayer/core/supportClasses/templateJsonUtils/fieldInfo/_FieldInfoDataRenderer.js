// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/_FieldInfoDataRenderer","esri/dijit/geoenrichment/ReportPlayer/config ../../conditionalStyling/ConditionalStyleUtil ../../../../dataProvider/supportClasses/data/AreaDataUtil ../../../../dataProvider/supportClasses/attachments/AttributesUtil esri/dijit/geoenrichment/utils/FieldUtil esri/dijit/geoenrichment/utils/ObjectUtil dojo/i18n!esri/nls/jsapi".split(" "),function(n,p,q,r,t,u,h){h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;
var g={getValueFromFieldData:function(b,c){function f(){console.log("Error: can't calculate value for \x3d\x3e "+b.name);a=NaN;e=n.tables.showUnavailableData?h.unavailableDataShort:"";k=!0}c=c||{};var a,e,l,k=!1,m;if(c.getPreviewValueFunction){var d=c.getPreviewValueFunction({currentFeatureIndex:c.currentFeatureIndex}),d=d.fields&&d.fields[b.name]||d;a=d.number;"string"===typeof d.formattedValue&&(e=d.formattedValue)}else a=g._getFieldDataValue(b,c.fieldData,c.currentFeatureIndex,c.isMultiFeature);
d=(!b.type||t.isNumericField(b))&&(b.hasVariable||b.script);a&&"object"===typeof a?(c=a,a=c.value,e=r.formatAttributeValue(c,{skipFormattedValue:!0,unavailableDataValue:void 0,format:b}),void 0===e&&f()):!c.getPreviewValueFunction&&(void 0===a||null===a||"number"===typeof a&&isNaN(a)||"NaN"===a||"undefined"===a||"null"===a||d&&"number"!==typeof a)?f():void 0===e&&(d?(e=g._formatValue(a,b),l=function(a){return g._formatValue(a,b)}):e=String(a));b.triggerJson&&(m={style:p.getConditionalStyle(a,b.triggerJson),
value:a,formattedValue:e});return{value:a,formattedValue:e,formatFunction:l,isUnavailableData:k,conditionalStyle:m}},_formatValue:function(b,c){return u.formatNumber(b,{places:c.decimals||0,noSeparator:!c.useThousandsSeparator,preserveTrailingZeroes:!0})},getFieldDataValue:function(b,c,f,a){return(b=g._getFieldDataValue(b,c,f,a))&&"object"===typeof b?b.value:b},_getFieldDataValue:function(b,c,f,a){return b&&q.getAreaDataValue({fieldName:b.templateName||b.name,fieldData:c,featureIndex:f,isMultiFeature:a,
comparisonIndex:b.comparisonIndex})}};return g});