// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/Empty.html":'\x3cdiv class\x3d"esriGEReportPlayer_empty"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"backgroundIcon" class\x3d"empty_backgroundIcon esriGEAbsoluteStretched"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"emptyBorderContainer" class\x3d"emptyBorderContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/Empty","dojo/_base/declare dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes dojo/text!../templates/Empty.html".split(" "),function(c,d,e,f,b,g){return c([e,f],{templateString:g,isSection:!0,viewModel:null,json:null,initialWidth:null,initialHeight:null,isSmallSize:!1,_width:0,_height:0,postCreate:function(){this.inherited(arguments);this.json&&(this.isSmallSize=this.json.isSmallSize);
this.isSmallSize&&d.add(this.domNode,"emptySmallSize");this.initialWidth&&this.setWidth(this.initialWidth);this.initialHeight&&this.setHeight(this.initialHeight)},getSectionType:function(){return b.EMPTY},getSectionName:function(){return""},isEmpty:function(){return!0},isDataSection:function(){return!1},isPageHeader:function(){return!1},isPageFooter:function(){return!1},hasTablesThatFitHeight:function(){return!1},hasNonEmptyTables:function(){return!1},getWidth:function(){return this._width},setWidth:function(a){this._width=
a=Math.max(0,a);this.domNode.style.width=a+"px"},getHeight:function(){return this._height},getResizedHeight:function(){return this.getHeight()},setHeight:function(a){this._height=a=Math.max(0,a);this.domNode.style.height=a+"px"},setViewMode:function(a){},toJson:function(){return{type:b.EMPTY,isSmallSize:this.isSmallSize}}})});