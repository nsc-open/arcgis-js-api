// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/resultrenderers/FeatureSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e${nls.drawnOnMap}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"clear-node" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"popup-menu-button" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/resultrenderers/FeatureSetRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/InfoTemplate dojo/text!./FeatureSetRenderer.html ../BaseResultRenderer ./defaultSymbol ../utils ../../AnalysisRegistry".split(" "),function(l,m,k,d,e,n,A,p,q,r,t,g,u,v,
w,x,h,y,f){return l([x,p],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",templateString:w,postCreate:function(){this.inherited(arguments);this.value.features&&0<this.value.features.length?(this._displayText(),this._drawResultFeature(this.param,this.value)):(d.set(this.clearNode,"display","none"),d.set(this.exportNode,"display","none"),this.labelContent.innerHTML=this.nls.emptyResult)},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer);this.inherited(arguments)},
_displayText:function(){d.set(this.clearNode,"display","");e.set(this.clearNode,"title",this.nls.clear);this.own(n(this.clearNode,"click",m.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer));d.set(this.exportNode,"display","none");d.set(this.clearNode,"display","none");this.labelContent.innerHTML=this.nls.cleared})));d.set(this.exportNode,"display","");e.set(this.exportNode,"title",this.nls.exportOutput)},
_drawResultFeature:function(a,b){var c,d=y.useDynamicSchema(a,this.config);if(!a.popup||d)a.popup={enablePopup:!0,title:"",fields:[]};a.popup.enablePopup&&(c=new v(a.popup.title||"${Non-Exist-Field}",this._generatePopupContent(b)));if(this.config.shareResults&&!d){if(!a.defaultValue||!a.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");a.defaultValue.name=a.name;this.resultLayer=new r({layerDefinition:a.defaultValue,
featureSet:null},{id:this.widgetUID+a.name,infoTemplate:c})}else this.resultLayer=new q({id:this.widgetUID+a.name,infoTemplate:c});k.forEach(b.features,function(a){this.resultLayer.add(a)},this);this.resultLayer.title=a.label||a.name;c=a.renderer;d||!c?b.geometryType===f.GeometryTypes.Point||b.geometryType===f.GeometryTypes.MultiPoint?c=new g(h.pointSymbol):b.geometryType===f.GeometryTypes.Line?c=new g(h.lineSymbol):b.geometryType===f.GeometryTypes.Polygon&&(c=new g(h.polygonSymbol)):c=u.fromJson(c);
this.resultLayer.setRenderer(c);this._addResultLayer(a.name);try{if(b.features&&0<b.features.length&&b.features[0].geometry){var e=t.graphicsExtent(b.features);e&&(this.resultLayer.fullExtent=e.expand(1.4),this.map.setExtent(this.resultLayer.fullExtent))}}catch(z){console.error(z)}},_addResultLayer:function(a){this.map.addLayer(this.resultLayer)},_generatePopupContent:function(a){var b="";k.forEach(!this.useDynamicSchema&&this.param.popup.fields&&0<this.param.popup.fields.length?this.param.popup.fields:
a.fields,function(a){b+='\x3ctr valign\x3d"top"\x3e\x3ctd class\x3d"attr-name"\x3e'+a.alias+'\x3c/td\x3e\x3ctd class\x3d"attr-value"\x3e${'+a.name+"}\x3c/td\x3e\x3c/tr\x3e"});return'\x3cdiv class\x3d"geoprocessing-popup"\x3e\x3ctable class\x3d"geoprocessing-popup-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctbody\x3e'+b+"\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e"}})});