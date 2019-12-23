// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/_ZoomSupport","dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-construct ./utils/ReportQueryUtil ../reportContainerGrid/utils/ZoomUtil ../../toolbar/ZoomUtil esri/dijit/geoenrichment/utils/animation/AnimationUtil".split(" "),function(g,h,k,d,l,b,e,m){var f={zoomLabel:null,_showTimeoutH:null,_dfd:null,_createLabel:function(){this.zoomLabel=d.create("div",null,document.body);var a=this.zoomLabel.style;
a.position="absolute";a.zIndex="10000";a.right="5px";a.bottom="5px";a.backgroundColor="gray";a.color="white";a.padding="5px"},showLabel:function(a,c){var b=this;this._reset();this._createLabel();this._showScale(a);this._dfd=new h;this._dfd.promise.then(function(c){"cancel"!==c&&(b._showScale(a),b._showTimeoutH=setTimeout(function(){m.animateFadeOut({domNode:b.zoomLabel})},1E3))});k(c,this._dfd.resolve)},_showScale:function(a){this.zoomLabel&&(this.zoomLabel.innerHTML=Math.round(e.getClosestZoomAndUpdateOptions(100*
a.getZoomInfo().scale,e.getOptions()))+"%")},_reset:function(){this._dfd&&this._dfd.resolve("cancel");this._dfd=null;clearTimeout(this._showTimeoutH);this.zoomLabel&&d.destroy(this.zoomLabel);this.zoomLabel=null}};return g(null,{getZoomInfo:function(){return b.getZoomInfo(this)},setZoomInfo:function(a,c){b.setZoomInfo(this,a,c)},zoomIn:function(a){var c=b.zoomIn(this,a);a&&a.showLabel&&f.showLabel(this,c)},zoomOut:function(a){var c=b.zoomOut(this,a);a&&a.showLabel&&f.showLabel(this,c)},zoomToFitPageWidth:function(a){a&&
a.showAnimation||!this.isReportContainerStackAll?b.zoomToFitPageWidth(this,a):this.setBestZoom(a)},zoomToFitPageHeight:function(a){b.zoomToFitPageHeight(this,a)},setZoomPercent:function(a,c){b.setZoomPercent(this,a,c)},setBestZoom:function(a){this.isReportContainerStackAll?6<this.getInnerContainers({noHidden:!0}).length?this.resetZoom(a):b.zoomToFitPageWidth(this,a):b.setBestZoom(this,a)},resetZoom:function(a){b.reset(this,a)},syncFillerContainer:function(){this._syncFillerContainer()},_syncFillerContainer:function(){if(this.domNode&&
this.fillerContainer){var a=this.getZoomInfo().scale;this.fillerContainer.style.marginTop="";this.fillerContainer.style.marginRight="";this.fillerContainer.style.marginBottom="";this.fillerContainer.style.marginLeft="";this.fillerContainer.style.width=this.scalableContainer.clientWidth*a+"px";this.fillerContainer.style.height=this.scalableContainer.clientHeight*a+"px";this.renderOptions&&this.renderOptions.center&&(this.fillerContainer.style.marginTop=Math.max(this.renderOptions.minTop,(this.domNode.clientHeight-
this.fillerContainer.clientHeight)/2)+"px");this.renderOptions&&(this.fillerContainer.style.marginRight=this.renderOptions.minRight+"px",this.fillerContainer.style.marginBottom=this.renderOptions.minBottom+"px",this.fillerContainer.style.marginLeft=this.renderOptions.minLeft+"px");this.onViewSyncronized()}},getPanelZoomScale:function(a){return l.getPanelInfoByNode(this,a).panelScale*this.getZoomInfo().scale},onViewSyncronized:function(){},emitZoomChangedEvent:function(){this.getSections().forEach(function(a){this._notifySectionAboutScale(a)},
this);this.onZoomChanged()},_notifySectionAboutScale:function(a){var c=this._sectionToInfographicPage(a),b=c.getSections().indexOf(a),c=c.getPanelScaleAt(b)*this.getZoomInfo().scale;a.notifyPanelScaleChanged(c)},onZoomChanged:function(){}})});