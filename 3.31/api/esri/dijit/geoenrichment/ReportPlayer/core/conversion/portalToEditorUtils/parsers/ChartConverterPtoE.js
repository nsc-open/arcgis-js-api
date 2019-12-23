// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ChartConverterPtoE","dojo/_base/lang esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/JsonXmlConverter ../../ConversionUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendSymbols esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartDataLabelsTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartBarThickness esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineStyles esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineMarkers esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/GaugeLabelPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleLabelPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleDirections esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleFlowStyles ./_FieldInfoBuilder dojo/i18n!esri/nls/jsapi".split(" "),
function(w,D,O,n,k,I,y,J,K,P,Q,E,R,u,F,S,T,U,V,A,v){function c(b,c){b=Number(b);return isNaN(b)?void 0:c?c(b):b}function B(b,h){return c(b,1.7<=h.revisionVersion?k.ptToPx:null)}function l(b){return k.ptToPxObj(k.parseStyleString(b))}function W(b,l,g){return n.queryJson(b,"series",!0)[0].tags.map(function(d){if(!d.tags)return null;d.attributes=d.attributes||{};var g={_originalAttrs:d.attributes,label:d.attributes.Text||"",color:h(d.attributes.color),points:d.tags.map(function(c,e){c.attributes=c.attributes||
{};var a=(b.attributes.type===y.GAUGE||b.attributes.type===y.WAFFLE)&&e===d.tags.length-1;if((e=(e=(e=c.tags&&c.tags[0])&&e.attributes&&e.attributes.f)&&A.getCalculatorOrScriptFieldInfo(e,l))||a){a&&(e=null);e&&e.isMissing&&(a=c.attributes.Text,!a&&l.variableProvider.isPlayerOnly&&(a=(a=l.variableProvider.toCalculator(e.templateName))&&a.variable.alias),e.alias=a?a+" ("+v.missingVariable+")":v.missingVariable);var a=(a=c.attributes.CaptionField)&&A.getCalculatorOrScriptFieldInfo(a,l),f=n.queryJson(c,
"pointIcon")[0],f=f&&l.parsers.getParser("field").parseField(f.tags[0],f,null,l);return I.createChartPoint(e,c.attributes.Text||"",h(c.attributes.color),f,a)}}).filter(function(b){return!!b})};if(y.isLineLike(b.attributes.type)){g.lineStyle=u.isSupported(d.attributes.lineStyle)?d.attributes.lineStyle:void 0;g.lineMarker=F.isSupported(d.attributes.lineMarker)?d.attributes.lineMarker:void 0;g.lineMarkerColor=h(d.attributes.lineMarkerColor);g.lineMarkerSize=c(d.attributes.lineMarkerSize,k.ptToPx);g.lineMarkerFillColor=
h(d.attributes.lineMarkerFillColor);g.fillColor=h(d.attributes.fillColor);var t=n.queryJson(d,"multiFeatureLineStyles")[0];t&&(g.multiFeatureLineStyles=[],t.tags.forEach(function(b){var d={};b.attributes&&(d.color=h(b.attributes.color),d.lineStyle=u.isSupported(b.attributes.lineStyle)?b.attributes.lineStyle:void 0,d.lineMarker=F.isSupported(b.attributes.lineMarker)?b.attributes.lineMarker:void 0,d.lineMarkerColor=h(b.attributes.lineMarkerColor),d.lineMarkerSize=c(b.attributes.lineMarkerSize,k.ptToPx),
d.lineMarkerFillColor=h(b.attributes.lineMarkerFillColor),d.lineThickness=c(b.attributes.lineThickness,k.ptToPx),d.fillColor=h(b.attributes.fillColor));g.multiFeatureLineStyles.push(d)}))}return g}).filter(function(b){return b&&b.points&&!!b.points.length})}function L(b,k,g){var d={gridLines:b.gridlines,gridLinesCentered:b.gridlinesCentered,gridLinesOpacity:c(b.gridlinesOpacity),gridLinesColor:h(b.gridlinesColor),gridLinesThickness:B(b.gridlinesThickness,g),gridLinesStyle:u.isSupported(b.gridlinesStyle)?
b.gridlinesStyle:void 0,gridStripes:b.gridStripes,gridStripesColor:h(b.gridStripesColor),gridStripesColorAlt:h(b.gridStripesColorAlt)};k&&w.mixin(d,{hideBaseLine:void 0!==b.baseLine?!b.baseLine:b.hideBaseLine,baseLineColor:h(b.baseLineColor),baseLineOpacity:c(b.baseLineOpacity),baseLineThickness:B(b.baseLineThickness,g),baseLineStyle:u.isSupported(b.baseLineStyle)?b.baseLineStyle:void 0,baseLineValue:c(b.baseLineValue)});return d}function X(b){var n=Q.toSupportedValue(b.dataLabels),g=b.dataLabelsShowLabelUnder,
d;d=b.CustomPercentFormat||b.CustomValueFormat;"string"!==typeof d?d=0:(d=d.replace("%",""),d="0"===d?0:d.replace("0.","").length);return{dataLabels:n,dataLabelsShowLabelUnder:g,dataLabelsDecimals:d,dataLabelsStyle:l(b.dataLabelsStyle),dataLabelsLabelStyle:b.dataLabelsLabelStyle?l(b.dataLabelsLabelStyle):l(b.dataLabelsStyle),dataLabelsAltColor:h(b.dataLabelsAltColor),dataLabelsEnableAltColor:b.dataLabelsEnableAltColor,dataLabelsInside:b.dataLabelsInside,dataLabelsStackedInColumns:b.dataLabelsStackedInColumns,
dataLabelsHorizontalAlign:b.dataLabelsHorizontalAlign,dataLabelsVerticalAlign:b.dataLabelsVerticalAlign,dataLabelsShowValuePercentSymbol:b.dataLabelsShowValuePercentSymbol,dataLabelsShowValueCurrencySymbol:b.dataLabelsShowValueCurrencySymbol,dataLabelsAngle:c(b.dataLabelsAngle),dataLabelsMaxWidth:c(b.dataLabelsMaxWidth,k.ptToPx)}}function Y(b){return(b=n.queryJson(b,"BackImage")[0])&&b.tags&&b.tags[0].text?O.base64DataToDataURL(b.tags[0].text):null}function h(b){b&&"string"===typeof b&&(b=6===b.length&&
-1===b.indexOf("#")?"#"+b:D.toCSSColor(b));return b}v=v.geoenrichment.dijit.ReportPlayer.ReportPlayer;return{portalToEditor:function(b,v,g){if(!y.isSupported(b.attributes.type))throw Error("Chart type is not supported.");var d=n.queryJson(b,"comparisonInfo")[0],x;if(d){var d=d.attributes,t=d.name,z=g.templateJson.metadata.comparisonCalculatorsHash[t];z&&(x={calculatorName:t,chartType:d.chartType,color:h(d.color),lineThickness:B(d.lineThickness,g),lineStyle:u.isSupported(d.lineStyle)?d.lineStyle:void 0,
lineMarker:F.isSupported(d.lineMarker)?d.lineMarker:void 0,lineMarkerColor:h(d.lineMarkerColor),lineMarkerSize:c(d.lineMarkerSize,k.ptToPx),lineMarkerFillColor:h(d.lineMarkerFillColor),levels:z.levels,defaultLevel:d.defaultLevel})}var e=W(b,g,x);if(!e.length)return null;var a=b.attributes,f=n.queryJson(b,"chartTitle")[0],G=n.queryJson(b,"legend")[0],q=n.queryJson(b,"xAxis")[0],r=n.queryJson(b,"yAxis")[0],d=n.queryJson(b,"chartIcon"),t=n.queryJson(b,"floatingIcon"),z=n.queryJson(b,"floatingText"),
H=n.queryJson(b,"trigger"),A=n.queryJson(b,"filter")[0];f.attributes=f.attributes||{};var p=q&&q.attributes,m=r&&r.attributes,M=p,N=m;g.isGraphicReport&&1.3>g.revisionVersion&&(M=m,N=p);var q=q&&q.tags&&q.tags[0].attributes&&q.tags[0].attributes,r=r&&r.tags&&r.tags[0].attributes&&r.tags[0].attributes,D=Y(b),f={isChart:!0,type:a._type||a.type,isMultiFeatureChart:!!a.isMultiFeatureChart,seriesItems:e,visualProperties:w.mixin({barBorders:a.barBorders,view3D:!!a.view3D,origin:c(a.origin),width:k.ptToPx(a.width),
height:k.ptToPx(a.height),marginTop:c(a.marginTop,k.ptToPx),marginRight:c(a.marginRight,k.ptToPx),marginBottom:c(a.marginBottom,k.ptToPx),marginLeft:c(a.marginLeft,k.ptToPx),backgroundColor:h(a.backColor),backgroundColorOpacity:c(a.backgroundColorOpacity),plotAreaOutlineColor:h(a.plotAreaOutlineColor),plotAreaOutlineOpacity:c(a.plotAreaOutlineOpacity),plotAreaOutlineThickness:c(a.plotAreaOutlineThickness,k.ptToPx),plotAreaOutlineStyle:u.isSupported(a.plotAreaOutlineStyle)?a.plotAreaOutlineStyle:void 0,
panelBackgroundColor:h(a.panelBackgroundColor),backgroundImageData:D,title:{text:f.attributes.text,align:f.attributes.align&&f.attributes.align.toLowerCase(),style:l(f.attributes.style),verticalShift:c(f.attributes.verticalShift,k.ptToPx)},xAxis:p&&w.mixin({show:"None"!==p.placement,hideLine:void 0!==p.line?!p.line:p.hideLine,showTicks:p.ticks,ticksInside:p.ticksInside||void 0,hideLabels:p.hideLabels||void 0,placement:"OtherSide"===p.placement?"OtherSide":void 0,title:q&&q.text,titleStyle:q&&l(q.style),
style:l(p.style),labelsAngle:c(p.labelsAngle),lineColor:h(p.lineColor)},L(M,!1,g)),yAxis:m&&w.mixin({show:"None"!==m.placement,hideLine:void 0!==m.line?!m.line:m.hideLine,showTicks:m.ticks,ticksInside:m.ticksInside,hideLabels:m.hideLabels||void 0,placement:"OtherSide"===m.placement?"OtherSide":void 0,title:r&&r.text,titleStyle:r&&l(r.style),style:l(m.style),labelsAngle:c(m.labelsAngle),lineColor:h(m.lineColor),showPercentSymbol:m.showPercentSymbol,showCurrencySymbol:m.showCurrencySymbol,showSymbolForAllLabels:m.showSymbolForAllLabels,
showValuesAsWeightsInSeries:m.showValuesAsWeightsInSeries,nonZeroInclusive:m.nonZeroInclusive},L(N,!0,g)),isStacked:a.isStacked,showValuesAsWeightInStack:a.showValuesAsWeightInStack,columnBarGap:c(a.columnBarGap,k.ptToPx),columnBarOpacity:c(a.columnBarOpacity),renderColumnBarsInOppositeDirections:a.renderColumnBarsInOppositeDirections,showColumnBarBackground:a.showColumnBarBackground,columnBarBackgroundColor:h(a.columnBarBackgroundColor),columnBarBackgroundOpacity:c(a.columnBarBackgroundOpacity),
fillOpacity:c(a.fillOpacity),outlineOpacity:c(void 0!==a.columnBarLineOpacity?a.columnBarLineOpacity:a.outlineOpacity),outlineColor:h(void 0!==a.columnBarLineColor?a.columnBarLineColor:a.outlineColor),outlineThickness:c(void 0!==a.columnBarLineThickness?a.columnBarLineThickness:a.outlineThickness,k.ptToPx),outlineStyle:void 0!==a.columnBarLineStyle?u.isSupported(a.columnBarLineStyle)?a.columnBarLineStyle:void 0:u.isSupported(a.outlineStyle)?a.outlineStyle:void 0,lineOpacity:c(void 0!==a.lineOpacity?
a.lineOpacity:a.lineAreaOpacity),fillLineMarkers:void 0!==a.fillLineMarkers?a.fillLineMarkers:a.fillLineArea,lineMarkersFillOpacity:c(void 0!==a.lineMarkersFillOpacity?a.lineMarkersFillOpacity:a.lineAreaOpacity),fillLineArea:a.fillLineArea,lineAreaOpacity:c(a.lineAreaOpacity),donutHolePercent:c(a.donutHolePercent),donutGap:c(a.donutGap),donutArcPercent:c(a.donutArcPercent),gaugeHolePercent:c(a.gaugeHolePercent),gaugeRangeMin:c(a.gaugeRangeMin),gaugeRangeMax:c(a.gaugeRangeMax),gaugeGap:c(a.gaugeGap),
gaugeStartAngle:c(a.gaugeStartAngle),gaugeArcPercent:c(a.gaugeArcPercent),gaugeLabelStyle:l(a.gaugeLabelStyle),gaugeLabelPlacement:a.gaugeLabelPlacement?S.toSupportedValue(a.gaugeLabelPlacement):void 0,gaugeShowArrow:a.gaugeShowArrow||void 0,gaugeArrowLineColor:h(a.gaugeArrowLineColor),gaugeArrowFillColor:h(a.gaugeArrowFillColor),gaugeConditionalStylingOthers:void 0!==a.gaugeConditionalStylingIgnoreOthers?a.gaugeConditionalStylingIgnoreOthers:a.gaugeConditionalStylingOthers||void 0,gaugeConditionalStylingLabel:a.gaugeConditionalStylingLabel||
void 0,gaugeShowFromToLabels:a.gaugeShowFromToLabels||void 0,gaugeFromLabelStyle:l(a.gaugeFromLabelStyle),gaugeToLabelStyle:l(a.gaugeToLabelStyle),waffleDirection:a.waffleDirection?U.toSupportedValue(a.waffleDirection):void 0,waffleFlowStyle:V.isSupported(a.waffleFlowStyle)?a.waffleFlowStyle:void 0,waffleShowWholePictures:a.waffleShowWholePictures||void 0,waffleStretchIconsToFill:a.waffleStretchIconsToFill||void 0,waffleRangeMin:c(a.waffleRangeMin),waffleRangeMax:c(a.waffleRangeMax),waffleLabelPlacement:a.waffleLabelPlacement?
T.toSupportedValue(a.waffleLabelPlacement):void 0,waffleLabelOffset:c(a.waffleLabelOffset,k.ptToPx),waffleHideValue:a.waffleHideValue||void 0,waffleHideLabel:a.waffleHideLabel||void 0,waffleShowLabelAbove:a.waffleShowLabelAbove||void 0,waffleValueStyle:l(a.waffleValueStyle),waffleLabelStyle:l(a.waffleLabelStyle),waffleColumnSpace:c(a.waffleColumnSpace,k.ptToPx),waffleRowSpace:c(a.waffleRowSpace,k.ptToPx),waffleConditionalStylingOthers:void 0!==a.waffleConditionalStylingIgnoreOthers?a.waffleConditionalStylingIgnoreOthers:
a.waffleConditionalStylingOthers||void 0,waffleConditionalStylingValue:a.waffleConditionalStylingValue||void 0,waffleConditionalStylingLabel:a.waffleConditionalStylingLabel||void 0,waffleNumIcons:c(a.waffleNumIcons),waffleNumRows:c(a.waffleNumRows),waffleNumColumns:c(a.waffleNumColumns),ringBackgroundColor:h(a.ringBackgroundColor),ringBackgroundOpacity:c(a.ringBackgroundOpacity),columnBarShowWholePictures:void 0!==a.showWholePictures?a.showWholePictures:a.columnBarShowWholePictures,showAxisIcons:a.showAxisIcons,
showChartIcons:a.showChartIcons,sorting:R.isSupported(a.sorting)?a.sorting:void 0},X(a))},C=c(e[0]._originalAttrs.thickness);y.isColumnBarLike(a.type)?f.visualProperties.columnThickness=1<C?E.LARGE:1>C?E.SMALL:E.MEDIUM:y.isLineLike(a.type)&&(f.visualProperties.lineThickness=B(C,g),e.forEach(function(a){a._originalAttrs.thickness!==C&&(a.lineThickness=c(a._originalAttrs.thickness,k.ptToPx))}));e.forEach(function(a){delete a._originalAttrs});G&&(e=G&&G.attributes||{},f.visualProperties.legend={type:J.toSupportedValue(e.type)},
f.visualProperties.legend.type===J.MIN_MAX?w.mixin(f.visualProperties.legend,{minMax:{placement:K.toSupportedValue(e.placement),placementOffset:c(e.placementOffset),titleStyle:l(e.titleStyle),minVariableLabelStyle:l(e.minVariableLabelStyle),maxVariableLabelStyle:l(e.maxVariableLabelStyle)}}):w.mixin(f.visualProperties.legend,{series:{placement:K.toSupportedValue(e.placement),placementOffset:c(e.placementOffset),hasBorder:e.hasBorder,labelParts:e.labelParts,style:l(e.style),symbol:P.isSupported(e.symbol)?
e.symbol:void 0,hideOthers:e.hideOthers||void 0,showComparison:e.showComparison||void 0}}));1.2>g.revisionVersion&&(void 0!==f.visualProperties.donutGap&&(f.visualProperties.donutGap/=2*Math.PI),void 0!==f.visualProperties.gaugeGap&&(f.visualProperties.gaugeGap/=2*Math.PI));d&&d.length&&(f.visualProperties.chartIcons=d.map(function(a){return a.tags&&a.tags[0]?g.parsers.getParser("field").parseField(a.tags[0],a,null,g):null}));t&&t.length&&(f.visualProperties.floatingIcons=t.map(function(a){return g.parsers.getParser("section").parseTable(a.tags[0],
g)}));z&&z.length&&(f.visualProperties.floatingTexts=z.map(function(a){return g.parsers.getParser("section").parseTable(a.tags[0],g)}));H&&H.length&&(f.visualProperties.conditionalStyling=g.parsers.getParser("field").parseFieldTrigger(H[0]));A&&(f.visualProperties.filter=g.parsers.getParser("filter").getFilter(A));f.comparisonInfo=x;x={};v.attributes&&v.attributes.style&&w.mixin(x,k.parseStyleString(v.attributes.style));k.ptToPxObj(x);I.provideDefaultValueForMissing(f,{font:x});g.postProcessChartJson(b,
f);return f}}});