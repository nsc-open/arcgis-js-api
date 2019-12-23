// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/jsonBuilder/SectionJsonBuilder",["dojo/_base/lang","./_StatsCollector","./_VariablesInColumnsBuilder","./_VariablesInRowsBuilder","../../../supportClasses/tableJson/TableJsonResizeUtil"],function(g,d,h,k,e){return{buildSectionJsonAndGroups:function(a){var b=a.infographicJson,c=g.clone(b.dataSectionJson.stack[0]),f=d.getStats(b.showThisAreas,a.calculators,a.selectedLevelsCache,a.analysisAreas,a.filterRanges);if(b=b.variablesInColumns?
h.buildForVariablesInColumns(c,f,a):k.buildForVariablesInRows(c,f,a))b.ranges=d.applyFieldsToRanges(b.fields,b.ranges),c=b.sectionJson.stack[0],e.resizeTableJsonToFitWidth(c,a.width,{columnWidths:a.columnWidths}),e.resizeTableJsonToFitHeight(c,a.height);return b},getAttributesForGridData:function(a){return a&&a.__attributes},getAttributesForColumn:function(a){return a&&a.__attributes},getThisAreaIndex:function(a){return a&&a.__thisAreaIndex}}});