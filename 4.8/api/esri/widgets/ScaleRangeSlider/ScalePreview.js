// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ScaleRangeSlider/templates/ScalePreview.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.header}"\x3e${labels.preview}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"dap_scalePreviewThumbnail" class\x3d"${css.thumbnail}"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define(["dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/dom-style","dojo/i18n!./nls/ScaleRangeSlider","dojo/text!./templates/ScalePreview.html"],function(c,d,b,e,f){return d.createSubclass([c],{declaredClass:"esri.dijit.ScaleRangeSlider.ScalePreview",baseClass:"esri-scale-preview",templateString:f,labels:e,css:{header:"esri-scale-preview__header",thumbnail:"esri-scale-preview__thumbnail"},source:null,_setSourceAttr:function(a){this.source!==a&&(this._set("source",a),b.set(this.dap_scalePreviewThumbnail,
"backgroundImage",a))},backgroundPosition:null,_setBackgroundPositionAttr:function(a){this.backgroundPosition!==a&&(this._set("backgroundPosition",a),b.set(this.dap_scalePreviewThumbnail,"backgroundPosition",a))}})});