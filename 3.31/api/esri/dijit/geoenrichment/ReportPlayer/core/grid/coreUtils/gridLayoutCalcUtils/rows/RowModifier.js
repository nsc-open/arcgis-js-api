// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/rows/RowModifier",["../GridLayoutCalculatorQueryUtil","./RowDataUtil","./_RowModifierLoose","./_RowModifierNormal"],function(l,f,h,m){var g={},n={checkHeightLimit:function(a,b,d,c){if(a.getMaxHeight()){var e=0;a.store.data.forEach(function(c){c!==b&&(e+=f.getDataHeight(a,c,d))});c=Math.min(a.getMaxHeight()-e,c)}return c}},k={findDataToMove:function(a,b,d,c){var e=l.getMovableData(a,b,d);e&&(a=f.calcDataHeight(a,
b,d,e.index),c-=a);return{data:e||b,height:c}}},p={finalResizeGridCells:function(a){a.getFieldCells().forEach(function(b){b.setHeight(f.calcDataHeight(a,b.gridData,b.column.field))})}};g.adjustRowHeight=function(a,b,d,c){c=n.checkHeightLimit(a,b,d,c);b=k.findDataToMove(a,b,d,c);(a.looseResize?h:m).adjustRowHeight(a,b.data,d,b.height);p.finalResizeGridCells(a)};g.getAffectedCells=function(a,b,d){return a.looseResize?h.getAffectedCells(a,k.findDataToMove(a,b,d).data,d):null};return g});