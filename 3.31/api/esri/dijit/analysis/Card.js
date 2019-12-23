// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/Card.html":'\x3cdiv class\x3d"esriAnalysis card"\x3e\r\n    \x3cdiv class\x3d"card-collapsible"\x3e\r\n        \x3cinput id\x3d"${id}_collapsible" class\x3d"card-toggle" type\x3d"checkbox" data-dojo-attach-point\x3d"_cardCheckNode"\x3e\r\n        \x3clabel for\x3d"${id}_collapsible" class\x3d"card-lbl-toggle" tabindex\x3d"0"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_headerNode"\x3e\x3c/div\x3e\r\n        \x3c/label\x3e\r\n        \x3cdiv class\x3d"card-content"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_contentNode" class\x3d"card-content-inner"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/Card","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./utils dojo/i18n!./nls/BuildMultiVariablesList dojo/text!./templates/Card.html".split(" "),
function(b,u,d,c,e,f,v,g,w,x,y,h,z,A,B,k,l,m,n,p,C,D,E,F,G,H,I,J,K,L,M,q,N,O,r,t){b=d([k,l,m,n,p],{declaredClass:"esri.dijit.analysis.Card",templateString:t,widgetsInTemplate:!0,open:!0,i18n:null,constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);e.forEach(this._pbConnects,f.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);this.i18n=c.mixin({},r)},postCreate:function(){this.inherited(arguments);
this.header&&this._addContent(this.header,this._headerNode);this.content&&this._addContent(this.content,this._contentNode);this._cardCheckNode.checked=this.open},startup:function(){},_addContent:function(a,b){"string"===typeof a?h.set(b,"innerHTML",a):"object"===typeof a&&a instanceof HTMLElement&&b.appendChild(a)},_setHeaderAttr:function(a){this._set("header",a)},_setContentAttr:function(a){this._set("content",a)},_setOpenAttr:function(a){this._set("open",a)}});g("extend-esri")&&c.setObject("dijit.analysis.Card",
b,q);return b});