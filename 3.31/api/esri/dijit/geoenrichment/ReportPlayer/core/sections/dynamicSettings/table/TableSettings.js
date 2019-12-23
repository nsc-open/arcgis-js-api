// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/sectionDynamicSettings/TableSettings.html":'\x3cdiv class\x3d"esriGEReportPlayer_sectionDynamicTableSettings"\x3e\r\n    \x3cdiv class\x3d"esriGESpaceBeforeBig"\x3e\r\n        \x3cdiv class\x3d"esriGERow15"\x3e\r\n            \x3cdiv class\x3d"dijitInline sectionDynamicTableSettings_label"\x3e${nls.viewAs}\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceBeforeBig" data-dojo-attach-point\x3d"viewTypesSelectDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"chartViewDiv"\x3e\r\n            \x3cdiv class\x3d"esriGERow15" data-dojo-attach-point\x3d"sourceBlock"\x3e\r\n                \x3cdiv class\x3d"dijitInline sectionDynamicTableSettings_label" data-dojo-attach-point\x3d"sourceLabel"\x3e\x3c/div\x3e\r\n                \x3cdiv class\x3d"dijitInline esriGESpaceBeforeBig" data-dojo-attach-point\x3d"sourceSelectDiv"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriGERow15" data-dojo-attach-point\x3d"altOrientationBlock"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"altOrientationLabel"\x3e\x3c/label\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/table/TableSettings","dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/TriStateItem esri/dijit/geoenrichment/OnDemandSelect ../../../charts/utils/ChartTypes esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/MouseUtil dojo/text!../../../templates/sectionDynamicSettings/TableSettings.html dojo/i18n!esri/nls/jsapi".split(" "),function(l,m,n,p,g,e,f,q,r,b){b=b.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder.TableSettings;
return l([m,n],{templateString:r,nls:b,viewTypesSelect:null,sourceSelect:null,altOrientationCheckbox:null,postCreate:function(){var a=this;this.viewTypesSelect=(new g({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",onChange:function(b){a._updateView();a._updateSourceSelect();a._emitEvent()}})).placeAt(this.viewTypesSelectDiv);this.own(this.viewTypesSelect);this.sourceSelect=(new g({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",onChange:function(b){a._emitEvent()}})).placeAt(this.sourceSelectDiv);
this.own(this.sourceSelect)},_chartViewOptions:null,setChartViewOptions:function(a){var d=this;this._chartViewOptions=a;var c=[{value:"table",label:b.table}],h=a.chartTypes.filter(function(a){return!e.isSingleSeries(a)}),k=a.chartTypes.filter(function(a){return e.isSingleSeries(a)});h.length&&(c.push({isSeparator:!0}),h.forEach(function(a){c.push({value:a,label:b["chartType_"+a]})}));k.length&&(c.push({isSeparator:!0}),k.forEach(function(a){c.push({value:a,label:b["chartType_"+a]})}));this.viewTypesSelect.set("options",
c);this.viewTypesSelect.set("value",a.chartType||"table");this.altOrientationCheckbox||(this.altOrientationLabel.innerHTML="\x26nbsp;"+(a.takeSeriesFromRows?b.seriesInColumns:b.seriesInRows),this.altOrientationCheckbox=new p(this.altOrientationLabel),this.altOrientationCheckbox.onClick=function(){d._updateSourceSelect();d._emitEvent()});f[a.supportsAltOrientation?"show":"hide"](this.altOrientationBlock)},_emitEvent:function(){var a=this.viewTypesSelect.get("value");if("table"===a)this.onChartToTable();
else this.onTableToChart({chartType:a,altOrientation:this.altOrientationCheckbox.get("checked"),sourceId:this.sourceSelect.get("value")})},onTableToChart:function(a){},onChartToTable:function(){},setVisualState:function(a){a=a&&a.chartViewInfo||{};this.viewTypesSelect.set("value",a.chartType||"table");this.altOrientationCheckbox.set("checked",a.altOrientation);this._updateSourceSelect();this.sourceSelect.set("value",a.sourceId||null);this._updateView()},_updateSourceSelect:function(){var a=this._chartViewOptions||
{},d=e.isSingleSeries(this.viewTypesSelect.get("value"));if(d){var c=a.takeSeriesFromRows;this.altOrientationCheckbox.get("checked")&&(c=!c);this.sourceLabel.innerHTML=c?b.row:b.column;this.sourceSelect.set("options",(c?a.rowInfos:a.columnInfos).map(function(a,b){return{label:a.label,value:b}}));this.sourceSelect.set("value",this.sourceSelect.get("options")[0].value)}else this.sourceSelect.set("options",[]);f[d&&1<this.sourceSelect.get("options").length?"show":"hide"](this.sourceBlock)},_updateView:function(){f["table"===
this.viewTypesSelect.get("value")?"hide":"show"](this.chartViewDiv)},isMouseOver:function(a){return q.isMouseOver(this.domNode)||this.viewTypesSelect&&this.viewTypesSelect.isMouseOver()||this.sourceSelect&&this.sourceSelect.isMouseOver()}})});