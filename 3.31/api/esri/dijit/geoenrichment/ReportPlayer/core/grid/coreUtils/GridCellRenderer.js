// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridCellRenderer","dojo/_base/declare dojo/_base/lang dojo/aspect esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/WaitingUtil ./GridDataUtil ./GridStyleUtil ./GridCellContentScaler ./GridCellContentSynchronizer ../../supportClasses/conditionalStyling/ConditionalStyleUtil ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/SpecificViewModes ./GridQueryUtil ./tooltip/GridCellTooltipBuilder esri/dijit/geoenrichment/ReportPlayer/config ../../../_devConfig".split(" "),
function(v,z,A,B,r,g,C,w,D,x,t,E,F,p,u,y,G,H,I){function m(a){return a[a.parentGrid.hasRealBorders?"getContentWidth":"getWidth"]()}function n(a){return a[a.parentGrid.hasRealBorders?"getContentHeight":"getHeight"]()}var J={color:"#FF0000"},K={color:"#AAAAAA",fontStyle:"italic",fontSize:13,horizontalAlign:"center",verticalAlign:"middle"},h=v(null,{_parentState:null,constructor:function(a,b,c){var e=this;w.fitContentInsideCell(a);this._setParentState(a);c.forEach(function(c){var d=c[1];b.own(A.after(a,
c[0],function(){e._checkParentChanged(d,a)&&(w.fitContentInsideCell(a),D.syncParentFieldInfoWithElementState(a,b))}))})},_setParentState:function(a){var b=a.getFullStyle();this._parentState={width:m(a),height:n(a),horizontalAlign:b.horizontalAlign,verticalAlign:b.verticalAlign}},_checkParentChanged:function(a,b){var c;switch(a){case "width":a=m(b);this._parentState.width!==a&&(this._parentState.width=a,c=!0);break;case "height":a=n(b);this._parentState.height!==a&&(this._parentState.height=a,c=!0);
break;case "horizontalAlign":case "verticalAlign":if(a=b.getFullStyle(),this._parentState.horizontalAlign!==a.horizontalAlign||this._parentState.verticalAlign!==a.verticalAlign)this._parentState.horizontalAlign=a.horizontalAlign,this._parentState.verticalAlign=a.verticalAlign,c=!0}return c}});return v(null,{renderCellContent:function(a){var b=a.parentGrid,c=g.getFieldInfo(a);if(I.emulateErrors.reportContainerRenderError)throw Error("Error test: something crashed when building the UI layout!");try{if(c){if(c.isReportSection)return this._placeReportSectionInCell(b,
a);if(c.isInfographic)return this._placeInfographicInCell(b,a);if(c.isChart)return this._placeChartInCell(b,a);if(c.isMap)return this._placeMapInCell(b,a);if(c.isImage)return this._renderCellTooltip(a),this._placeImageInCell(b,a);if(c.isShape)return this._placeShapeInCell(b,a);c.isMissing&&a.setStyle(J);c.isUnsupportedContent&&a.setStyle(K)}this._applyRenderedContent(a,this._getRenderedContent(a));a.setContent(null);this._renderCellTooltip(a)}catch(e){if(console.log(e),!H.tables.leaveEmptyCellsUponError)throw e;
}},_renderCellTooltip:function(a){a.viewModel.dynamicReportInfo&&G.setDynamicTooltipToCell(a,a.viewModel.dynamicReportInfo.templateVariableProvider)},updateViewMode:function(a){var b=g.getFieldInfo(a);b&&(b.hasVariable||b.script||b.alias||b.isRichText)&&this._applyRenderedContent(a,this._getRenderedContent(a))},getRenderedContent:function(a){return this._getRenderedContent(a)},_getRenderedContent:function(a,b){var c=g.getFieldInfo(a);if(c)return a=this._prepareRenderContextForFieldCell(a),z.mixin(a,
b),c.isImage&&c.triggerJson&&c.triggerJson.fieldInfo&&(c=c.triggerJson.fieldInfo),t.renderFieldInfoInTableCell(c,a);b=a.gridData[a.column.field];return{formattedValue:null===b||void 0===b||"number"===typeof b&&isNaN(b)?"":b,value:b,formatFunction:null,isUnavailableData:!1,conditionalStyle:null}},_prepareRenderContextForFieldCell:function(a){var b=a.parentGrid,c=b.getViewMode()===p.EDIT,e=this._getCellBenchmarkInfoBuilder(a);return{previewValues:this._isPreviewValues(a),previewConditionalStyle:!c,
getPreviewValueFunction:b.getPreviewValueFunction,fieldData:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:b.getFeatureIndexForCell(a),rowIndex:a.gridData&&a.gridData.index,columnIndex:a.column&&a.column.index,numRows:b.store.data.length,isGraphicReport:b.viewModel.isGraphicStyle,isMultiFeature:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.isMultiFeature,presetFilter:!c&&b.presetFilter,isBenchmarked:!!e,getBenchmarkInfo:e&&e.getBenchmarkInfo}},
_isPreviewValues:function(a){var b=a.parentGrid;a=g.getFieldInfo(a);var c=b.getSpecificViewMode(),b=b.getViewMode()===p.PREVIEW_VALUES;a&&a.name&&0===a.name.indexOf("SiteNote")&&(b=!0);c&&a&&(c[u.RICH_TEXT]===p.PREVIEW_VALUES&&a.isRichText?b=!0:c[u.VARIABLE]===p.PREVIEW_VALUES&&(a.hasVariable||a.script)?b=!0:c[u.INFOGRAPHIC]===p.PREVIEW_VALUES&&a.isInfographic&&(b=!0));return b},_applyRenderedContent:function(a,b){b&&(this._setCellFormattedValue(a,b),b.isUnavailableData||("number"!==typeof b.value||
isNaN(b.value)||(g.setNumericCellValue(a,b.value),a.setNumberValue(b.value,b.formatFunction,a.parentGrid.enableNumberAnimation)),b.conditionalStyle?(a.setStyle(b.conditionalStyle.style),"string"===typeof b.conditionalStyle.formattedValue&&this._setCellFormattedValue(a,b.conditionalStyle),a.__hasConditionalStyle=!0):!1===b.conditionalStyle||a.__hasConditionalStyle?(delete a.__hasConditionalStyle,a.setStyle(C.combineCellStyle(a.parentGrid,a.gridData,a.column))):b.rangeValue&&"string"===typeof b.rangeValue.formattedValue&&
this._setCellFormattedValue(a,b.rangeValue)),a.parentGrid&&a.parentGrid.viewModel.dynamicReportInfo&&a.setUrl(g.getFieldCellUrl(a)))},_setCellFormattedValue:function(a,b){if("number"===typeof b.value&&!isNaN(b.value)){var c=this._getCellBenchmarkInfoBuilder(a);c&&a.setBenchmarkInfo(c.getBenchmarkInfo(b.value))}g.setFieldCellContent(a,b.formattedValue)},_getCellBenchmarkInfoBuilder:function(a){var b=this,c=a.parentGrid;return c.viewModel.isBenchmarkedArea&&c.viewModel.isBenchmarkedArea(c.getFeatureIndexForCell(a))&&
{isBenchmarked:!0,getBenchmarkInfo:function(e,d){var f=a;d&&(f={gridData:{fieldInfos:{}},column:a.column,parentGrid:c},f.gridData.fieldInfos[f.column.field]=d);d=b._getRenderedContent(f,{currentFeatureIndex:c.viewModel.getBenchmarkController().getAreaIndex()});e-=d.value;return{isGreater:0<=e,value:Math.abs(e),formattedValue:d.formatFunction?d.formatFunction(Math.abs(e)):B.formatNumber(Math.abs(e)),noTextLimit:c.viewModel.getBenchmarkController().hasNoTextLimit()}}}},_placeReportSectionInCell:function(a,
b){function c(){if(b.domNode)return e._createReportSectionFromParams(a,b,d)}var e=this,d={"class":"adjustableGrid_inCellSection"};d.json=g.getFieldInfo(b).sectionJson;d.viewModel=a.viewModel;d.theme=a.theme;d.viewPortContainer=a.viewPortContainer;d.parentWidget=b;d.currentFeatureIndex=a.getFeatureIndexForCell(b);d.initialWidth=m(b);d.initialHeight=n(b);d.noContentOffset=y.cellHasFloatingTableParent(b);d.initialViewMode=a.getViewMode();d.onContentLoadingStart=a.onContentLoadingStart.bind(a);d.onContentLoadingEnd=
a.onContentLoadingEnd.bind(a);d.parentGridCell=b;d.elementUsageType=(a.isReportContainerPageGrid||a.parentGrid&&a.parentGrid.isReportContainerPageGrid)&&F.PAGE_PANEL_SECTION;var f=a.viewModel.layoutBuilder.getClass("section");return f.isAsync?r.showProgressPromise(b.domNode,f.loadModules()).then(c):c()},_createReportSectionFromParams:function(a,b,c){a=c.json&&c.json.stack&&c.json.type!==E.EMPTY?a.viewModel.layoutBuilder.createElement("section",c,b.getContentContainerNode()):a.viewModel.layoutBuilder.createElement("emptySection",
c,b.getContentContainerNode());b.setContent(a);new h(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeInfographicInCell:function(a,b){function c(){if(b.domNode)return e._createInfographicFromParams(a,b,d,f)}var e=this,d=g.getFieldInfo(b).infographicJson,f={viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),getPreviewValueFunction:a.getPreviewValueFunction,width:m(b),height:n(b),adjustElementsWhenResized:y.cellHasFloatingTableParent(b),
onContentLoadingStart:a.onContentLoadingStart.bind(a),onContentLoadingEnd:a.onContentLoadingEnd.bind(a)},l=a.viewModel.layoutBuilder.getClass("infographic");return l.isAsync?r.showProgressPromise(b.domNode,l.loadModules()).then(c):c()},_createInfographicFromParams:function(a,b,c,e){c=a.viewModel.layoutBuilder.createElement("infographic",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:e});c.setViewMode&&c.setViewMode(a.getViewMode());new h(b,c,[["onWidthChanged",
"width"],["onHeightChanged","height"]]);return c},_placeChartInCell:function(a,b){function c(){if(b.domNode)return e._createChartPageFromParams(a,b,f,d)}var e=this,d={viewModel:a.viewModel,theme:a.theme,currentFeatureIndex:a.getFeatureIndexForCell(b),parentWidget:b,onContentLoadingStart:a.onContentLoadingStart.bind(a),onContentLoadingEnd:a.onContentLoadingEnd.bind(a)},f=g.getFieldInfo(b).chartJson;f.visualProperties.width=b.getWidth();f.visualProperties.height=b.getHeight();var l=a.viewModel.layoutBuilder.getClass("chart");
return l.isAsync?r.showProgressPromise(b.domNode,l.loadModules()).then(c):c()},_createChartPageFromParams:function(a,b,c,e){a=a.viewModel.layoutBuilder.createElement("chart",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:e});new h(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeMapInCell:function(a,b){function c(){if(b.domNode)return f=e._createMapFromParams(a,b,d,l)}var e=this,d=g.getFieldInfo(b).mapJson;m(b);n(b);var f,
l={viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),onContentLoadingStart:a.onContentLoadingStart.bind(a),onContentLoadingEnd:a.onContentLoadingEnd.bind(a)},q=a.viewModel.layoutBuilder.getClass("map");return q.isAsync?r.showProgressPromise(b.domNode,q.loadModules()).then(c):c()},_createMapFromParams:function(a,b,c,e){a=a.viewModel.layoutBuilder.createElement("map",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:e});
new h(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeImageInCell:function(a,b){function c(){if(b.domNode)return h=e._createImageFromParams(a,b,f,p)}var e=this,d=g.getFieldInfo(b),f=d.imageJson,l=m(b),q=n(b);if(d.triggerJson)if(a.viewModel.dynamicReportInfo){var k=t.getValueFromFieldData(d.triggerJson.fieldInfo,{fieldData:a.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:a.getFeatureIndexForCell(b)});x.processImageJsonForTrigger(f,
k.value,d.triggerJson);k.isUnavailableData||"number"!==typeof k.value||isNaN(k.value)||(g.setNumericCellValue(b,k.value),b.setNumberValue(k.value,k.formatFunction,!1))}else(k=t.getConditionalStylePreview(d,b.gridData.index))&&"number"===typeof k.value&&!isNaN(k.value)&&(x.processImageJsonForTrigger(f,k.value,d.triggerJson),g.setNumericCellValue(b,k.value));f.style.width&&f.style.height&&!f.fitParent&&Math.round(f.style.width)!==Math.round(l)&&Math.round(f.style.height)!==Math.round(q)?f.fitParent=
!1:(f.fitParent=!0,f.style.width=l,f.style.height=q);var h,p={viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),alignParams:b.getFullStyle(),imageTriggerJson:d.triggerJson,onInitialized:function(){if(b.domNode){var a=m(b),c=n(b);h&&h.resize({w:a,h:c},b.getFullStyle())}},onContentLoadingStart:a.onContentLoadingStart.bind(a),onContentLoadingEnd:a.onContentLoadingEnd.bind(a)},d=a.viewModel.layoutBuilder.getClass("image");return d.isAsync?d.loadModules().then(c):
c()},_createImageFromParams:function(a,b,c,e){a=a.viewModel.layoutBuilder.createElement("image",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:e});new h(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeShapeInCell:function(a,b){function c(){if(b.domNode)return h=e._createShapeFromParams(a,b,d,k)}var e=this,d=g.getFieldInfo(b).shapeJson,f=m(b),l=n(b);d.style.width=f;d.style.height=l;var h,k=
{viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),alignParams:b.getFullStyle(),getPreviewValueFunction:a.getPreviewValueFunction,applyThemeStyle:a.applyThemeStyle,onInitialized:function(){if(b.domNode){var a=m(b),c=n(b);h&&h.resize({w:a,h:c},b.getFullStyle())}},onContentLoadingStart:a.onContentLoadingStart.bind(a),onContentLoadingEnd:a.onContentLoadingEnd.bind(a)},f=a.viewModel.layoutBuilder.getClass("shape");return f.isAsync?f.loadModules().then(c):
c()},_createShapeFromParams:function(a,b,c,e){a=a.viewModel.layoutBuilder.createElement("shape",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:e});new h(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a}})});