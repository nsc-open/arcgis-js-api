// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/sectionDynamicSettings/ComparisonFilter.html":'\x3cdiv class\x3d"esriGEReportPlayer_sectionDynamicComparisonFilter"\x3e\r\n    \x3cdiv class\x3d"esriGERow15"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filtersBlock"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/comparison/ComparisonFilter","dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin ../RefineFilters esri/dijit/geoenrichment/utils/MouseUtil dojo/text!../../../templates/sectionDynamicSettings/ComparisonFilter.html dojo/i18n!esri/nls/jsapi".split(" "),function(b,e,f,d,g,h,c){c=c.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;b=b([e,f],{templateString:h,nls:c,refineFilters:null,postCreate:function(){var a=
this;this.inherited(arguments);this.refineFilters=(new d({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(b){a.onComparisonFilterChanged(b)}})).placeAt(this.filtersBlock);this.own(this.refineFilters)},setFilter:function(a){this.refineFilters.setFilterRanges(a.filterRanges)},setNumAreas:function(a,b){this.refineFilters.setTitle(c.refineYourAreas,a,b)},setVisualState:function(a){this.refineFilters.setVisualState(a)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},isMouseOver:function(a){return g.isMouseOver(this.domNode)||
this.refineFilters&&this.refineFilters.isMouseOver()},onComparisonFilterChanged:function(a){}});b.hasFiltersOn=function(a){return d.hasFiltersOn(a)};return b});