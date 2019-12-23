// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_OneVar","dojo/_base/declare dojo/dom-class esri/dijit/geoenrichment/infographicPanels/OneVar esri/dijit/geoenrichment/utils/DynamicStyleUtil esri/dijit/geoenrichment/utils/MouseUtil dojo/i18n!esri/nls/jsapi".split(" "),function(g,e,h,d,k,b){var f=b.geoenrichment.dijit.ReportPlayer.ReportPlayer;b=b.geoenrichment.dijit.ReportPlayer.OneVar;return g(h,{infographicStyleProvider:null,parentInfographic:null,isMultiFeature:!1,_themeAddedFlag:!1,
updateUI:function(){this.inherited(arguments);if(!this._themeAddedFlag){var a=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(a){var c=this.parent.id;d.addStyle(["#"+c+" .OneVarMultiComparison_Expanded_Value_Primary { color:"+a.male.backgroundColor+"; } #"+c+" .OneVarMultiComparison_Expanded_CurrentBar { background-color:"+a.male.backgroundColor+"; }"],c);this._themeAddedFlag=!0}}},_getLessThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):b.lessThan},
_getMoreThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):b.moreThan},_getSamePattern:function(){return this._isAverageShown()?this.inherited(arguments):b.same},_isAverageShown:function(){var a=this.parentInfographic._ge.variables;return a&&"KeyGlobalFacts.AVGHHSZ"===a[0]},_isSiteRowFeature:function(a){return a&&a.attributes.isThisArea},_canCreateValueBlock:function(){return!this.isMultiFeature},_highlightedRow:null,setTableRowHighlighted:function(a){return this._highlightRowByText(a&&
a.StdGeographyName)},setThisAreaTableRowHighlighted:function(){return this._highlightRowByText(f.thisArea)},_highlightRowByText:function(a){this._highlightedRow&&(e.remove(this._highlightedRow,"OneVarMultiComparison_Row_highlighted"),this._highlightedRow=null);if(a&&this.table){for(var c,b=0,l=this.table.rows.length;b<l;b++){var d=this.table.rows[b];if(d.cells[0].innerHTML===a){c=d;break}}c&&(this._highlightedRow=c,e.add(this._highlightedRow,"OneVarMultiComparison_Row_highlighted"));return c}},getOverRow:function(){for(var a,
c=0,b=this.table.rows.length;c<b;c++){var d=this.table.rows[c];if(k.isMouseOver(d)){a=d;break}}return a},isThisAreaRow:function(a){return a&&a.cells[0].innerHTML===f.thisArea},destroy:function(){d.removeStyle(this.parent.id);this.inherited(arguments)}})});