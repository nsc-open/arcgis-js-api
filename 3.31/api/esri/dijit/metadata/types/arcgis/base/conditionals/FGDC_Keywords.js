// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/FGDC_Keywords","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,g,f,e,h,k,l,m,n){d=d(m,{key:"FGDC_Keywords",postCreate:function(){this.inherited(arguments);var b=this;this.own(e.subscribe("gxe/interaction-occurred",function(a){try{if(b.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode){var c=
a.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/tpCat"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/searchKeys/keyword"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/themeKeys/keyword"===c&&b.emitInteractionOccurred()}}catch(p){console.error(p)}}));this.own(e.subscribe("gxe/optional-content-toggled",function(a){try{b.parentXNode&&a&&a.src&&a.src.target&&"themeKeys"===a.src.target&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(e.subscribe("gxe/after-xnode-destroyed",
function(a){try{b.parentXNode&&a&&a.xnode&&"themeKeys"===a.xnode.target&&b.emitInteractionOccurred()}catch(c){console.error(c)}}))},ensureFocus:function(){n.ensureVisibility(this.parentXNode);f.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return f.some(b.getChildren(),function(a){if(a.isKeywordsSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:l.conditionals[this.key]}),c=!1,d=this.parentXNode.domNode;this.isXNodeOff(this.parentXNode)||
(c=!1);c||this.forActiveXNodes("/metadata/dataIdInfo/tpCat,/metadata/dataIdInfo/searchKeys/keyword,/metadata/dataIdInfo/themeKeys/keyword",d,function(a){if(!this.isXNodeInputEmpty(a))return c=!0},this);a.isValid=c;this.track(a,b);return a}});h("extend-esri")&&g.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Keywords",d,k);return d});