// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/columns/_ColumnModifierLoose","dojo/_base/lang dojox/uuid/generateRandomUuid ../GridLayoutCalculatorQueryUtil ../GridElementBoxCalculator ./ColumnDataUtil ../../GridQueryUtil".split(" "),function(m,n,p,q,h,r){var k={collectColumnBoxes:function(a,b){for(var c=[],e=0;e<a.store.data.length;){var f=a.store.data[e],d=this._createEmptyBox(),f=p.getRowSpannedData(a,f,b.field)||[f];d.elements=this._getSpannedDataElements(a,
b,f);this._measureBox(d);var g=c[c.length-1];g&&(g.nextSibling=d,d.prevSibling=g);c.push(d);e+=f.length}return c},_createEmptyBox:function(){return{id:n(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getSpannedDataElements:function(a,b,c){var e=[];c.forEach(function(c){c={data:c,dataIndex:c.index,field:b.field,box:q.calcDataBox(a,c,b.field)};e.push(c)});return e},_measureBox:function(a){var b=0;a.elements.forEach(function(a){b+=a.box.h});a.box=
{x:a.elements[0].box.x,y:a.elements[0].box.y,w:a.elements[0].box.w,h:b}},mergeBoxesForRightColumn:function(a){var b=this._createEmptyBox();a.forEach(function(a){a.elements.forEach(function(a){b.elements.push({data:a.data,field:null,box:m.clone(a.box)})})});this._measureBox(b);b.box.w=1E6;return[b]},getBoxAtDataIndex:function(a,b){return a.filter(function(a){return a.elements[0].dataIndex===b})[0]}},t={buildInfluenceTree:function(a,b,c){function e(c,d){(d?b:a).forEach(function(a){var b;if(b=!a.overlappingBoxesCache[c.id]){b=
c.box;var d=a.box;b=!(b.y+.5>=d.y+d.h||b.y+b.h<=d.y+.5)}b&&(c.overlappingBoxes.push(a),c.overlappingBoxesCache[a.id]=!0)});c.overlappingBoxes.forEach(function(a){e(a,!d)})}c=k.getBoxAtDataIndex(a,c.index);e(c,!0);return c}},u={applyForce:function(a,b,c){function e(b,c){var d=b.elements[0];d.field&&h.setFieldWidth(a,d.data,d.field,h.getFieldWidth(a,d.data,d.field)+(c?-1:1)*f,!0);b.overlappingBoxes.forEach(function(a){e(a,!c)})}var f=this._checkDelta(a,b,c);e(b,!1)},_checkDelta:function(a,b,c){function e(a,
b){0!==d&&(b?0>d||(d=Math.min(d,a.box.w-f),a.prevSibling&&(d=Math.min(d,a.prevSibling.box.x+a.prevSibling.box.w-f-a.box.x)),a.nextSibling&&(d=Math.min(d,a.nextSibling.box.x+a.nextSibling.box.w-f-a.box.x))):0<d||(d=Math.max(d,-(a.box.w-f)),a.prevSibling&&(d=Math.max(d,-(a.box.x+a.box.w-(a.prevSibling.box.x+f)))),a.nextSibling&&(d=Math.max(d,-(a.box.x+a.box.w-(a.nextSibling.box.x+f))))),a.overlappingBoxes.forEach(function(a){e(a,!b)}))}var f=a.layoutDefaults.columnMinWidth;c=Math.max(c,f);var d=c-b.box.w;
if(0<d&&b.elements[0].field===a.columns[a.columns.length-1].field){var g=0;a.columns.forEach(function(c){g+=h.getFieldWidth(a,b.elements[0].data,c.field)});d=Math.min(d,h.getAllowedWidth(a)-g)}e(b,!1);return d}},l={_getInluencedStartBox:function(a,b,c){var e=a.columns[c.index+1];c=k.collectColumnBoxes(a,c);a=e?k.collectColumnBoxes(a,e):k.mergeBoxesForRightColumn(c);return t.buildInfluenceTree(c,a,b)},getAffectedCells:function(a,b,c){function e(b){if(b.elements[0].data){var c=r.querySingleCell(a,{rowIndex:b.elements[0].data.index,
columnField:b.elements[0].field,considerSpans:!0});c&&f.push(c)}b.overlappingBoxes.forEach(e)}var f=[];b=this._getInluencedStartBox(a,b,c);e(b);return f},adjustColumnCell:function(a,b,c,e){b=this._getInluencedStartBox(a,b,c);u.applyForce(a,b,e)}};return{adjustColumnWidth:function(a,b,c,e){l.adjustColumnCell(a,b,c,e)},getAffectedCells:function(a,b,c){return l.getAffectedCells(a,b,c)}}});