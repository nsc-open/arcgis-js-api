// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/sorting/GridSortUtil","dojo/_base/lang dojo/dom-class dojo/dom-construct ./GridRowStyler ../GridDataUtil ../GridQueryUtil ../gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil esri/dijit/geoenrichment/utils/DnDUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!esri/nls/jsapi".split(" "),function(q,h,r,m,t,n,u,p,l,k){k=k.geoenrichment.dijit.ReportPlayer.Grid;var f={ORDER_ASC:"asc",ORDER_DES:"desc",isGridSortable:function(a){return!a.allowSorting||
a.isEmptyTable()||3>a.store.data.length||!a.viewModel.dynamicReportInfo||!f._collectHeaderRowInfoFromData(a)?!1:!0},getSorting:function(a){return a._sortInfo&&{field:a._sortInfo.field,order:a._sortInfo.order}},applySortingToStoreData:function(a){f.isGridSortable(a)&&f._applySortingToStoreData(a)},setSorting:function(a,b,c){if(f.isGridSortable(a)&&b)if(a._sortInfo={field:b.field,order:b.order},c&&c.doNotRefresh)f._makeSortable(a);else return a.refresh()},buildSortControls:function(a){f.isGridSortable(a)&&
f._makeSortable(a)},getSortRowIndexMapping:function(a){if(!a._sortInfo||!a._sortInfo.order)return null;var b={},c={};a._getOriginalData().forEach(function(a,b){c[a.id]=b});a.store.data.forEach(function(a,e){b[e]=c[a.id]});return b},getSortableDataInfo:function(a){function b(b){var e=[],c=f._collectHeaderRowInfoFromData(a,b);if(!c)return null;b=b?a._getOriginalData().slice():q.clone(a.store.data);for(var g=0;g<c.headerRowIndex+1;g++)e.push(b.shift());return{topData:e,sortableData:b}}var c=b();c&&(c.styleInfo=
m.getStyleInfo(b(!0).sortableData,a.columns));return c},_applySortingToStoreData:function(a){if(a._sortInfo&&a._sortInfo.order){a._saveOriginalData();var b=f.getSortableDataInfo(a),c=a._sortInfo.field,g=a.columns.filter(function(a){return a.field===c})[0];g&&b.sortableData.sort(function(b,c){function e(b){b=t.getRenderedValue(a,b,g);return"number"===typeof b.numericValue?b.numericValue:b.formattedValue}b=e(b);var d=e(c);c=a._sortInfo.order===f.ORDER_DES;"number"===typeof b||"number"===typeof d?(b=
Number(b),d=Number(d),b=b>d?1:b<d?-1:0):(b=String(b),d=String(d),b=b.localeCompare(d));return c?-b:b});b.styleInfo&&m.setAlternatingColors(b.sortableData,a.columns,b.styleInfo);a.store.data=b.topData.concat(b.sortableData)}},_collectHeaderRowInfoFromData:function(a,b){function c(b){b=g[b];for(var c=0,d=0;d<a.columns.length;d++){var e=u.getColumnSpannedFields(a,b,a.columns[d].field),d=d+(e&&e.length?e.length-1:0);c++}return c}var g=b?a._getOriginalData():a.store.data;b=g.length-2;for(var e,d=0;d<b;d++)if(c(d)===
a.columns.length){e=d;break}if(0<=e)for(d=e+1;d<g.length;d++){if(c(d)!==a.columns.length)return null}else return null;return{headerRowIndex:e}},_makeSortable:function(a){var b=f._collectHeaderRowInfoWithCells(a);b&&(b.cells.forEach(function(b){if(!b._sortArrow){var c=r.create("div",{"class":"sortArrow sortArrowHoverIndicator"},b.domNode),e=b.getFullStyle();c.style[e&&"left"===e.horizontalAlign?"right":"left"]="5px";b._sortArrow=c;h.add(b.domNode,"esriGEClickable");p.addNoDragClickHandler(b.contentBlock,
function(c){a&&a.canSortCellFunc&&!a.canSortCellFunc(b)||f._checkCanSortOnHeaderClick(c)&&f._toggleSortForCell(b)});p.addNoDragClickHandler(c,function(a){f._toggleSortForCell(b)})}}),f._updateArrows(a,b))},_collectHeaderRowInfoWithCells:function(a){for(var b=a.store.data.length-2,c,g,e=0;e<b;e++){var d=n.queryCells(a,{rowIndex:e});if(d&&d.length===a.columns.length){c=d;g=e;break}}if(c)for(e=g+1;e<a.store.data.length;e++){if(d=n.queryCells(a,{rowIndex:e}),!d||d.length!==a.columns.length)return null}else return null;
return{cells:c,headerRowIndex:g}},_toggleSortForCell:function(a){var b=a.parentGrid,c=b._sortInfo&&b._sortInfo.field===a.column.field?b._sortInfo.order:null;b._sortInfo={field:a.column.field,order:null};c?c===f.ORDER_DES?b._sortInfo.order=f.ORDER_ASC:c===f.ORDER_ASC&&(b._sortInfo.order=null):b._sortInfo.order=f.ORDER_DES;b.refresh();b.onSortingChanged(f.getSorting(b))},_checkCanSortOnHeaderClick:function(a){if(a&&a.path){if(a.path.some(function(a){return"A"===a.nodeName}))return!1}else if(a&&a.srcElement&&
a.srcElement.parentNode&&"A"===a.srcElement.parentNode.nodeName)return!1;return!0},_updateArrows:function(a,b){b.cells.forEach(function(b){var c=b._sortArrow;c&&(h.remove(c,"sortArrowHoverIndicator sortArrowUp sortArrowDown"),l.setTooltipToNode(c,null),a._sortInfo&&a._sortInfo.field===b.column.field?a._sortInfo.order===f.ORDER_ASC?h.add(c,"sortArrowUp"):a._sortInfo.order===f.ORDER_DES?h.add(c,"sortArrowDown"):(l.setTooltipToNode(c,k.sortTable),h.add(c,"sortArrowHoverIndicator")):(l.setTooltipToNode(c,
k.sortTable),h.add(c,"sortArrowHoverIndicator")),setTimeout(function(){c.style.top=(b.getHeight()-c.clientHeight)/2+"px"},100))})}};return f});