// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tooltips/_PieDonutRingChartTooltipBuilder",["dojo/dom-construct","dojo/string","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(f,g,c,b){b=b.geoenrichment.dijit.ReportPlayer.ChartTooltip;return{buildPieDonutRingChartTooltip:function(a,e){c.addTitle(e,a.label,a);var d=f.create("div",{"class":"chartTooltip_row esriGERowHigh"},e);c.addRowOffset(d);a.isUnavailableData?c.addLabel(b.unavailableData,d):a.isBenchmarked?c.addBenchmarkValue(a,d):
(c.addLabel(g.substitute(b.pieChartTooltip_label,{value:a.valueLabel,total:a.sumValueLabel}),d),a=c.buildStatLabels(a,e,b.weight,b.minValue,b.maxValue,b.avgValue),c.formatTable(a))}}});